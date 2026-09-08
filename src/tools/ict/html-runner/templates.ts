export interface HtmlTemplate {
  id: string;
  titleBn: string;
  titleEn: string;
  category: 'table' | 'form' | 'list' | 'debug' | 'multimedia';
  descriptionBn: string;
  descriptionEn: string;
  code: string;
  isChallenge?: boolean;
}

export const HTML_TEMPLATES: HtmlTemplate[] = [
  {
    id: 'hsc-table-rowspan-colspan',
    titleBn: 'বোর্ড পরীক্ষা স্পেশাল: জটিল টেবিল (Rowspan ও Colspan)',
    titleEn: 'HSC Board Special: Complex Table (Rowspan & Colspan)',
    category: 'table',
    descriptionBn: 'এইচএসসি পরীক্ষায় সর্বাধিক আসা টেবিল যার মধ্যে একাধিক রো ও কলাম মার্জ করা থাকে।',
    descriptionEn: 'The #1 most frequently tested HSC ICT exam question featuring merged rows and columns.',
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
    h2 { color: #0284c7; }
    table { width: 100%; max-width: 500px; border-collapse: collapse; margin-top: 15px; }
    th, td { border: 2px solid #334155; padding: 10px; text-align: center; }
    th { background-color: #0284c7; color: white; }
    .highlight { background-color: #e0f2fe; font-weight: bold; }
  </style>
</head>
<body>
  <h2>HSC Board Student Grade Sheet</h2>
  <table>
    <tr>
      <th rowspan="2">Roll</th>
      <th rowspan="2">Name</th>
      <th colspan="2">Marks</th>
      <th rowspan="2">GPA</th>
    </tr>
    <tr>
      <th>Theory</th>
      <th>Practical</th>
    </tr>
    <tr>
      <td>101</td>
      <td>Rahim Ahmed</td>
      <td>68</td>
      <td>24</td>
      <td class="highlight">5.00</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Sumaiya Kabir</td>
      <td>72</td>
      <td>25</td>
      <td class="highlight">5.00</td>
    </tr>
    <tr>
      <td colspan="4">Total Students Evaluated</td>
      <td>2</td>
    </tr>
  </table>
</body>
</html>`,
  },
  {
    id: 'common-board-mistakes',
    titleBn: 'ভুল সংশোধন চ্যালেঞ্জ: ত্রুটিপূর্ণ Colspan ঠিক করুন',
    titleEn: 'Debug Challenge: Fix Broken Colspan & Unclosed Tags',
    category: 'debug',
    isChallenge: true,
    descriptionBn: 'এই কোডটিতে Colspan সংখ্যা ভুল এবং <table> ট্যাগ সঠিকভাবে বন্ধ হয়নি। কোডটি সংশোধন করে প্রিভিউ দেখুন!',
    descriptionEn: 'Find and fix the incorrect colspan value and missing tags in this typical board exam error scenario.',
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    table { border-collapse: collapse; width: 400px; }
    th, td { border: 2px solid #ef4444; padding: 8px; text-align: center; }
  </style>
</head>
<body>
  <!-- চ্যালেঞ্জ: নিচে 3টি কলামের বদলে ভুল colspan="2" দেওয়া আছে এবং একটি ট্যাগ খোলা! -->
  <h3>ভুল টেবিল (সংশোধন করুন)</h3>
  <table>
    <tr>
      <th>Roll</th>
      <th>Subject</th>
      <th>Grade</th>
    </tr>
    <tr>
      <td>101</td>
      <td>ICT</td>
      <td>A+</td>
    </tr>
    <tr>
      <!-- BUG: এখানে colspan="3" হওয়া উচিত যেন ৩টি কলাম জুড়ে থাকে! -->
      <td colspan="2">Result Published: Passed</td>
    </tr>
  <!-- BUG: নিচে </table> ট্যাগ শেষ করতে হবে -->
</body>
</html>`,
  },
  {
    id: 'hsc-registration-form',
    titleBn: 'অনলাইন রেজিস্ট্রেশন ফর্ম (<form> ও ইনপুট ট্যাগ)',
    titleEn: 'Online Student Registration Form',
    category: 'form',
    descriptionBn: 'টেক্সট ফিল্ড, রেডিও বাটন, ড্রপডাউন সিলেক্ট এবং সাবমিট বাটনের সমন্বয়ে ফর্ম।',
    descriptionEn: 'Student admission form featuring input types (text, radio, checkbox, select dropdown, and submit).',
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 20px; background: #f1f5f9; }
    .form-box { background: white; padding: 20px; border-radius: 8px; max-width: 420px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .group { margin-bottom: 15px; }
    label { display: block; font-weight: bold; margin-bottom: 5px; color: #334155; }
    input[type="text"], select { width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; }
    button { background: #0284c7; color: white; padding: 10px 18px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }
  </style>
</head>
<body>
  <div class="form-box">
    <h3 style="color:#0284c7; margin-top:0;">HSC ICT Club Registration</h3>
    <form action="#" method="POST">
      <div class="group">
        <label>Full Name:</label>
        <input type="text" placeholder="Enter student name" required>
      </div>
      <div class="group">
        <label>Group:</label>
        <input type="radio" name="grp" value="Science" id="sci" checked> <label for="sci" style="display:inline;">Science</label>
        <input type="radio" name="grp" value="Humanities" id="hum"> <label for="hum" style="display:inline;">Humanities</label>
        <input type="radio" name="grp" value="Commerce" id="com"> <label for="com" style="display:inline;">Business Studies</label>
      </div>
      <div class="group">
        <label>Board Examination Division:</label>
        <select>
          <option>Dhaka Board</option>
          <option>Chittagong Board</option>
          <option>Rajshahi Board</option>
          <option>Dinajpur Board</option>
        </select>
      </div>
      <button type="submit">Submit Application</button>
    </form>
  </div>
</body>
</html>`,
  },
  {
    id: 'hsc-nested-lists',
    titleBn: 'অর্ডারড ও আনঅর্ডারড নেস্টেড তালিকা (<ol>, <ul>, <li>)',
    titleEn: 'Nested Ordered & Unordered Lists',
    category: 'list',
    descriptionBn: 'রোমান সংখ্যা, অ্যালফাবেট এবং বুলেট পয়েন্টের মিশ্রণে নেস্টেড তালিকা।',
    descriptionEn: 'Hierarchical list styling with Roman numerals, letters, and bullet points.',
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
    h3 { color: #0284c7; }
  </style>
</head>
<body>
  <h3>HSC Science Subjects Hierarchy</h3>
  <ol type="I">
    <li>Compulsory Subjects
      <ul style="list-style-type: circle;">
        <li>Bangla (1st & 2nd Paper)</li>
        <li>English (1st & 2nd Paper)</li>
        <li>Information & Communication Technology (ICT)</li>
      </ul>
    </li>
    <li>Major Electives
      <ol type="a">
        <li>Physics
          <ul style="list-style-type: square;">
            <li>Vectors & Dynamics</li>
            <li>Thermodynamics & Electricity</li>
          </ul>
        </li>
        <li>Chemistry</li>
        <li>Higher Mathematics</li>
      </ol>
    </li>
  </ol>
</body>
</html>`,
  },
];

export const HTML_CHEATSHEET = [
  { tag: '<table>', descBn: 'টেবিল তৈরির মূল কন্টেইনার', descEn: 'Main table wrapper' },
  { tag: '<tr>', descBn: 'টেবিলের রো বা সারি (Table Row)', descEn: 'Table row container' },
  { tag: '<th>', descBn: 'টেবিলের হেডার সেল (স্বয়ংক্রিয় বোল্ড ও সেন্ট্রাল)', descEn: 'Header cell (bold & centered)' },
  { tag: '<td>', descBn: 'টেবিলের সাধারণ ডেটা সেল', descEn: 'Standard table data cell' },
  { tag: 'rowspan="n"', descBn: 'উল্লম্বভাবে n সংখ্যক রো একত্রিত করা', descEn: 'Merge n vertical rows' },
  { tag: 'colspan="n"', descBn: 'অনুভূমিকভাবে n সংখ্যক কলাম একত্রিত করা', descEn: 'Merge n horizontal columns' },
  { tag: '<form>', descBn: 'ইউজার ইনপুট গ্রহণের ফর্ম', descEn: 'User input form wrapper' },
  { tag: '<input type="...">', descBn: 'টেক্সট, রেডিও বা পাসওয়ার্ড ইনপুট', descEn: 'Input fields (text, radio, etc.)' },
  { tag: '<select>', descBn: 'ড্রপডাউন অপশন তালিকা', descEn: 'Dropdown selection menu' },
  { tag: '<ol type="...">', descBn: 'ক্রমিক তালিকা (1, A, a, I, i)', descEn: 'Ordered list with numbering type' },
  { tag: '<ul>', descBn: 'বুলেট বা চিহ্নযুক্ত তালিকা', descEn: 'Unordered bulleted list' },
  { tag: '<a href="...">', descBn: 'হাইপারলিঙ্ক বা ওয়েব পেজ সংযোগ', descEn: 'Hyperlink to another page/anchor' },
  { tag: '<img src="..." alt="...">', descBn: 'ছবি প্রদর্শনের এম্পটি ট্যাগ', descEn: 'Image embed tag (self-closing)' },
];
