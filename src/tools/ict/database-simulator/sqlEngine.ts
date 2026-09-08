export interface ColumnDef {
  name: string;
  type: string;
  isPrimary?: boolean;
  isForeign?: boolean;
  references?: string;
}

export interface TableDef {
  name: string;
  columns: ColumnDef[];
  data: Record<string, any>[];
}

export interface QueryResult {
  success: boolean;
  columns: string[];
  rows: Record<string, any>[];
  rowCount: number;
  message?: string;
  executionTimeMs: number;
}

export const INITIAL_DATABASE: Record<string, TableDef> = {
  Student: {
    name: 'Student',
    columns: [
      { name: 'Roll', type: 'INT', isPrimary: true },
      { name: 'Name', type: 'VARCHAR(50)' },
      { name: 'Group', type: 'VARCHAR(20)' },
      { name: 'GPA', type: 'DECIMAL(3,2)' },
      { name: 'City', type: 'VARCHAR(30)' },
    ],
    data: [
      { Roll: 101, Name: 'Rahim Ahmed', Group: 'Science', GPA: 5.0, City: 'Dhaka' },
      { Roll: 102, Name: 'Sumaiya Kabir', Group: 'Science', GPA: 4.89, City: 'Chittagong' },
      { Roll: 103, Name: 'Tanvir Hasan', Group: 'Commerce', GPA: 4.5, City: 'Sylhet' },
      { Roll: 104, Name: 'Nusrat Jahan', Group: 'Humanities', GPA: 5.0, City: 'Rajshahi' },
      { Roll: 105, Name: 'Sakib Al Hasan', Group: 'Science', GPA: 4.25, City: 'Khulna' },
    ],
  },
  Result: {
    name: 'Result',
    columns: [
      { name: 'Roll', type: 'INT', isForeign: true, references: 'Student(Roll)' },
      { name: 'Subject', type: 'VARCHAR(30)' },
      { name: 'Marks', type: 'INT' },
      { name: 'Grade', type: 'VARCHAR(5)' },
    ],
    data: [
      { Roll: 101, Subject: 'ICT', Marks: 92, Grade: 'A+' },
      { Roll: 101, Subject: 'Physics', Marks: 88, Grade: 'A+' },
      { Roll: 102, Subject: 'ICT', Marks: 78, Grade: 'A' },
      { Roll: 103, Subject: 'Accounting', Marks: 85, Grade: 'A+' },
      { Roll: 104, Subject: 'History', Marks: 90, Grade: 'A+' },
      { Roll: 105, Subject: 'ICT', Marks: 65, Grade: 'A-' },
    ],
  },
  Teacher: {
    name: 'Teacher',
    columns: [
      { name: 'TeacherID', type: 'VARCHAR(10)', isPrimary: true },
      { name: 'Name', type: 'VARCHAR(50)' },
      { name: 'Department', type: 'VARCHAR(30)' },
      { name: 'Salary', type: 'INT' },
    ],
    data: [
      { TeacherID: 'T-101', Name: 'Dr. Kamal Hossain', Department: 'Science', Salary: 55000 },
      { TeacherID: 'T-102', Name: 'Fatema Begum', Department: 'ICT', Salary: 48000 },
      { TeacherID: 'T-103', Name: 'Anisur Rahman', Department: 'Commerce', Salary: 52000 },
    ],
  },
};

export const SQL_PRESETS = [
  {
    id: 'select-all-students',
    titleBn: 'সকল শিক্ষার্থীর তালিকা প্রদর্শন (SELECT * FROM Student)',
    titleEn: 'View All Students (SELECT * FROM Student)',
    query: 'SELECT * FROM Student;',
  },
  {
    id: 'gpa-filter',
    titleBn: 'জিপিএ ৫.০০ প্রাপ্ত শিক্ষার্থী ফিল্টার (WHERE GPA = 5.00)',
    titleEn: 'Filter GPA 5.00 Students (WHERE GPA = 5.00)',
    query: 'SELECT Roll, Name, Group, GPA FROM Student WHERE GPA >= 5.00;',
  },
  {
    id: 'group-science-dhaka',
    titleBn: 'বিজ্ঞান বিভাগের শিক্ষার্থীদের জেলাভিত্তিক সাজানো (WHERE & ORDER BY)',
    titleEn: 'Science Students Sorted by City (ORDER BY City)',
    query: "SELECT Name, GPA, City FROM Student WHERE Group = 'Science' ORDER BY GPA DESC;",
  },
  {
    id: 'join-student-result',
    titleBn: 'বোর্ড পরীক্ষা স্পেশাল: দুটি টেবিলের মধ্যে রিলেশন (INNER JOIN)',
    titleEn: 'HSC Board Join: Student & Result Relational JOIN',
    query: 'SELECT Student.Roll, Student.Name, Result.Subject, Result.Marks, Result.Grade FROM Student INNER JOIN Result ON Student.Roll = Result.Roll;',
  },
  {
    id: 'aggregate-count',
    titleBn: 'বিভাগভিত্তিক শিক্ষার্থী সংখ্যা গণনা (COUNT & GROUP BY)',
    titleEn: 'Count Students per Group (GROUP BY Group)',
    query: 'SELECT Group, COUNT(*) AS TotalStudents FROM Student GROUP BY Group;',
  },
];

// In-Memory SQL Execution Engine
export function executeSql(
  queryStr: string,
  db: Record<string, TableDef> = INITIAL_DATABASE
): QueryResult {
  const startTime = performance.now();
  const raw = queryStr.trim().replace(/;$/, '');
  const clean = raw.replace(/\s+/g, ' ');

  try {
    // 1. SELECT query
    if (/^SELECT\b/i.test(clean)) {
      // Check for INNER JOIN
      const joinMatch = clean.match(
        /SELECT\s+(.+?)\s+FROM\s+([A-Za-z0-9_]+)\s+INNER\s+JOIN\s+([A-Za-z0-9_]+)\s+ON\s+([A-Za-z0-9_.]+)\s*=\s*([A-Za-z0-9_.]+)(?:\s+WHERE\s+(.+?))?(?:\s+ORDER\s+BY\s+(.+?))?$/i
      );

      if (joinMatch) {
        const [, selectColsStr, table1Name, table2Name, onLeft, onRight, whereClause, orderByClause] = joinMatch;
        const table1 = db[table1Name];
        const table2 = db[table2Name];

        if (!table1 || !table2) {
          throw new Error(`Table '${!table1 ? table1Name : table2Name}' not found in database.`);
        }

        const onLeftField = onLeft.includes('.') ? onLeft.split('.')[1] : onLeft;
        const onRightField = onRight.includes('.') ? onRight.split('.')[1] : onRight;

        // Perform Join
        let joinedRows: Record<string, any>[] = [];
        for (const r1 of table1.data) {
          for (const r2 of table2.data) {
            if (r1[onLeftField] === r2[onRightField] || r1[onRightField] === r2[onLeftField]) {
              const merged: Record<string, any> = {};
              Object.entries(r1).forEach(([k, v]) => {
                merged[k] = v;
                merged[`${table1Name}.${k}`] = v;
              });
              Object.entries(r2).forEach(([k, v]) => {
                merged[k] = v;
                merged[`${table2Name}.${k}`] = v;
              });
              joinedRows.push(merged);
            }
          }
        }

        // Apply where if exists
        if (whereClause) {
          joinedRows = applyWhereFilter(joinedRows, whereClause);
        }

        const selectedColNames = selectColsStr.split(',').map((c) => c.trim());
        const finalRows = joinedRows.map((row) => {
          const out: Record<string, any> = {};
          selectedColNames.forEach((col) => {
            const val = row[col] !== undefined ? row[col] : row[col.split('.').pop() || ''];
            out[col] = val !== undefined ? val : null;
          });
          return out;
        });

        const time = performance.now() - startTime;
        return {
          success: true,
          columns: selectedColNames,
          rows: finalRows,
          rowCount: finalRows.length,
          executionTimeMs: Math.round(time * 100) / 100,
        };
      }

      // Standard single table SELECT
      const singleMatch = clean.match(
        /SELECT\s+(.+?)\s+FROM\s+([A-Za-z0-9_]+)(?:\s+WHERE\s+(.+?))?(?:\s+GROUP\s+BY\s+([A-Za-z0-9_]+))?(?:\s+ORDER\s+BY\s+(.+?))?$/i
      );

      if (!singleMatch) {
        throw new Error('Unsupported SQL query syntax. Please check SELECT syntax.');
      }

      const [, selectColsStr, tableName, whereClause, groupByCol, orderByClause] = singleMatch;
      const table = db[tableName];
      if (!table) {
        throw new Error(`Table '${tableName}' does not exist.`);
      }

      let rows = [...table.data];

      // Filter WHERE
      if (whereClause) {
        rows = applyWhereFilter(rows, whereClause);
      }

      // GROUP BY
      if (groupByCol && selectColsStr.toUpperCase().includes('COUNT')) {
        const groups: Record<string, number> = {};
        rows.forEach((r) => {
          const gVal = String(r[groupByCol] || 'Other');
          groups[gVal] = (groups[gVal] || 0) + 1;
        });
        const groupedRows = Object.entries(groups).map(([gKey, count]) => ({
          [groupByCol]: gKey,
          TotalStudents: count,
        }));
        const time = performance.now() - startTime;
        return {
          success: true,
          columns: [groupByCol, 'TotalStudents'],
          rows: groupedRows,
          rowCount: groupedRows.length,
          executionTimeMs: Math.round(time * 100) / 100,
        };
      }

      // ORDER BY
      if (orderByClause) {
        const [col, dir] = orderByClause.trim().split(/\s+/);
        const isDesc = dir && dir.toUpperCase() === 'DESC';
        rows.sort((a, b) => {
          if (a[col] < b[col]) return isDesc ? 1 : -1;
          if (a[col] > b[col]) return isDesc ? -1 : 1;
          return 0;
        });
      }

      // Project columns
      const cols = selectColsStr.trim() === '*'
        ? table.columns.map((c) => c.name)
        : selectColsStr.split(',').map((c) => c.trim());

      const projected = rows.map((r) => {
        const out: Record<string, any> = {};
        cols.forEach((col) => {
          out[col] = r[col] !== undefined ? r[col] : null;
        });
        return out;
      });

      const time = performance.now() - startTime;
      return {
        success: true,
        columns: cols,
        rows: projected,
        rowCount: projected.length,
        executionTimeMs: Math.round(time * 100) / 100,
      };
    }

    throw new Error('Only SELECT queries are evaluated in read-only sandbox mode.');
  } catch (err: any) {
    const time = performance.now() - startTime;
    return {
      success: false,
      columns: [],
      rows: [],
      rowCount: 0,
      message: err.message || 'Unknown SQL error occurred.',
      executionTimeMs: Math.round(time * 100) / 100,
    };
  }
}

function applyWhereFilter(rows: Record<string, any>[], whereClause: string): Record<string, any>[] {
  const match = whereClause.match(/([A-Za-z0-9_.]+)\s*(=|>=|<=|>|<|!=)\s*('?[^']*'?)/i);
  if (!match) return rows;

  const [, rawField, op, rawVal] = match;
  const field = rawField.includes('.') ? rawField.split('.')[1] : rawField;
  const val = rawVal.replace(/^'|'$/g, '');

  return rows.filter((r) => {
    const itemVal = r[field];
    const numItem = Number(itemVal);
    const numVal = Number(val);

    if (!isNaN(numItem) && !isNaN(numVal)) {
      switch (op) {
        case '=':
          return numItem === numVal;
        case '>=':
          return numItem >= numVal;
        case '<=':
          return numItem <= numVal;
        case '>':
          return numItem > numVal;
        case '<':
          return numItem < numVal;
        case '!=':
          return numItem !== numVal;
      }
    } else {
      switch (op) {
        case '=':
          return String(itemVal).toLowerCase() === val.toLowerCase();
        case '!=':
          return String(itemVal).toLowerCase() !== val.toLowerCase();
      }
    }
    return true;
  });
}
