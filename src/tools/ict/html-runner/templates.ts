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
  {
    id: 'hsc-comprehensive-cq',
    titleBn: 'বোর্ড CQ স্পেশাল: টেবিল, ইমেজ ও হাইপারলিংক সমন্বিত পূর্ণাঙ্গ পেজ',
    titleEn: 'HSC Board CQ Special: Table, Image & Hyperlinks Complete Page',
    category: 'multimedia',
    descriptionBn: 'এইচএসসি পরীক্ষায় গ ও ঘ নম্বরের জন্য আসা পূর্ণাঙ্গ উদ্দীপক: হেডার, ইমেজ, টেবিল ও লিংক।',
    descriptionEn: 'Complete board examination stimulus with table grid, inline images, anchor links and styling.',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>HSC Board Model CQ Question</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; padding: 24px; background: #f8fafc; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
    h1 { color: #0284c7; font-size: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; }
    th, td { border: 1.5px solid #475569; padding: 8px 12px; text-align: center; }
    th { background: #0284c7; color: #ffffff; font-weight: 600; }
    .badge { background: #dcfce7; color: #15803d; padding: 2px 8px; border-radius: 9999px; font-weight: bold; font-size: 12px; }
    .btn-link { display: inline-block; background: #0284c7; color: #ffffff; text-decoration: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; margin-top: 10px; }
    .btn-link:hover { background: #0369a1; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🏛️ ঢাকা শিক্ষা বোর্ড — বার্ষিক ফলাফল ২০২৬</h1>
    <p>উদ্দীপক অনুসারে নিচের সারণিতে ছাত্র-ছাত্রীদের গ্রেড শিট প্রদর্শন করা হলো:</p>
    
    <table>
      <tr>
        <th rowspan="2">রোল (Roll)</th>
        <th rowspan="2">শিক্ষার্থীর নাম</th>
        <th colspan="2">বিষয়ভিত্তিক নম্বর</th>
        <th rowspan="2">ফলাফল</th>
      </tr>
      <tr>
        <th>আইসিটি (ICT)</th>
        <th>পদার্থ (Physics)</th>
      </tr>
      <tr>
        <td>১০১</td>
        <td>রাকিবুল হাসান</td>
        <td>৯৪</td>
        <td>৮৮</td>
        <td><span class="badge">A+</span></td>
      </tr>
      <tr>
        <td>১০২</td>
        <td>ফাতেমা আক্তার</td>
        <td>৯১</td>
        <td>৯৫</td>
        <td><span class="badge">A+</span></td>
      </tr>
      <tr>
        <td colspan="4">মোট পরীক্ষার্থী মূল্যায়ন সম্পন্ন</td>
        <td>২ জন</td>
      </tr>
    </table>

    <div style="margin-top: 16px; padding: 12px; background: #f0f9ff; border-left: 4px solid #0284c7; border-radius: 4px;">
      <strong>পরামর্শ:</strong> <a href="https://biggan.me" target="_blank" style="color: #0284c7; font-weight: bold;">Biggan.me</a> সাইট থেকে আরো বিগত বছরের CQ সমাধান অনুশীলন করো।
    </div>
  </div>
</body>
</html>`,
  },
  {
    id: 'css-modern-card',
    titleBn: 'আধুনিক CSS Flexbox ও বক্স-মডেল ডিজাইন',
    titleEn: 'Modern CSS Flexbox & Box-Model Design',
    category: 'multimedia',
    descriptionBn: 'Flexbox, বর্ডার-রেডিয়াস, বক্স-শ্যাডো এবং হোভার ট্রানজিশন দিয়ে আধুনিক কার্ড ডিজাইন।',
    descriptionEn: 'Modern responsive card layout demonstrating CSS flexbox, transitions, and shadows.',
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f172a; color: #f8fafc; padding: 40px 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
    .card { background: #1e293b; border: 1px solid #334155; border-radius: 16px; padding: 24px; max-width: 380px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.4); transition: transform 0.2s ease, border-color 0.2s ease; }
    .card:hover { transform: translateY(-4px); border-color: #38bdf8; }
    .badge { display: inline-block; background: rgba(56,189,248,0.15); color: #38bdf8; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; margin-bottom: 12px; border: 1px solid rgba(56,189,248,0.3); }
    h2 { font-size: 20px; color: #ffffff; margin-bottom: 8px; }
    p { font-size: 14px; color: #94a3b8; line-height: 1.5; margin-bottom: 20px; }
    .features { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
    .feature-item { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #cbd5e1; }
    .feature-item span.icon { color: #34d399; font-weight: bold; }
    button { width: 100%; padding: 12px; background: linear-gradient(135deg, #0284c7, #06b6d4); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; transition: opacity 0.2s; }
    button:hover { opacity: 0.9; }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">HSC ICT 2026</span>
    <h2>Web Design Foundations</h2>
    <p>Master HTML5 semantic elements, responsive CSS box modeling, and modern layout algorithms.</p>
    <div class="features">
      <div class="feature-item"><span class="icon">✓</span> Semantic Elements (header, nav, main)</div>
      <div class="feature-item"><span class="icon">✓</span> Complex Tables with Rowspan & Colspan</div>
      <div class="feature-item"><span class="icon">✓</span> Responsive Flexbox & Grid Layouts</div>
    </div>
    <button onclick="alert('Welcome to Biggan ICT!')">Explore Full Curriculum</button>
  </div>
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
