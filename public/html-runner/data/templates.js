// html-runner/data/templates.js
// Curated Starter Templates, Interactive Layouts, and Real-World Challenges

export const TEMPLATES = [
  {
    id: 'starter-html5',
    title: 'HTML5 Semantic Starter',
    category: 'starter',
    description: 'Clean HTML5 template with modern meta tags, responsive viewport, semantic landmarks, and clean typography.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Semantic HTML5 Starter</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      line-height: 1.6;
      color: #334155;
      background: #f8fafc;
      padding: 24px;
    }
    header {
      background: #0284c7;
      color: white;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 24px;
    }
    nav a {
      color: white;
      margin-right: 16px;
      text-decoration: none;
      font-weight: 500;
    }
    main {
      background: white;
      padding: 24px;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
    }
  </style>
</head>
<body>
  <header>
    <h1>Web Dev Starter</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#features">Features</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <h2>Welcome to HTML Runner</h2>
    <p>Edit this code in the editor on the left and see the real-time preview on the right!</p>
  </main>
</body>
</html>`
  },

  {
    id: 'hsc-board-table',
    title: 'Board Exam Special: Complex Table (Rowspan & Colspan)',
    category: 'exam',
    description: 'The #1 most frequently tested HSC ICT exam question featuring nested headers and merged rows/columns.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HSC Board Result Sheet</title>
  <style>
    body { font-family: sans-serif; padding: 24px; background: #f8fafc; }
    h2 { color: #0284c7; margin-bottom: 12px; }
    table {
      width: 100%;
      max-width: 550px;
      border-collapse: collapse;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    }
    th, td {
      border: 2px solid #334155;
      padding: 10px 14px;
      text-align: center;
    }
    th {
      background-color: #0284c7;
      color: white;
      font-weight: 600;
    }
    .subhead {
      background-color: #38bdf8;
      color: #0f172a;
    }
    .highlight {
      background-color: #e0f2fe;
      font-weight: bold;
      color: #0369a1;
    }
  </style>
</head>
<body>
  <h2>HSC Board Student Grade Evaluation</h2>
  <table>
    <tr>
      <th rowspan="2">Roll No</th>
      <th rowspan="2">Student Name</th>
      <th colspan="2">Marks Breakdown</th>
      <th rowspan="2">GPA</th>
    </tr>
    <tr>
      <th class="subhead">Theory</th>
      <th class="subhead">Practical</th>
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
      <td colspan="4" style="text-align: right; font-weight: bold;">Total Candidates Evaluated:</td>
      <td>2</td>
    </tr>
  </table>
</body>
</html>`
  },

  {
    id: 'interactive-form',
    title: 'Modern Accessible Form with Validation',
    category: 'forms',
    description: 'Clean registration form with fieldsets, input types (email, password, range, radio), and HTML5 constraint validation.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Registration</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; padding: 24px; background: #0f172a; color: #f8fafc; }
    .form-card {
      max-width: 450px;
      background: #1e293b;
      padding: 24px;
      border-radius: 12px;
      border: 1px solid #334155;
      margin: 0 auto;
    }
    .field { margin-bottom: 16px; }
    label { display: block; margin-bottom: 6px; font-weight: 500; font-size: 0.9rem; }
    input[type="text"], input[type="email"], input[type="password"], select {
      width: 100%;
      padding: 10px 12px;
      border-radius: 6px;
      border: 1px solid #475569;
      background: #0f172a;
      color: white;
      outline: none;
    }
    input:focus, select:focus { border-color: #38bdf8; ring: 2px solid #38bdf8; }
    .btn-submit {
      width: 100%;
      padding: 12px;
      background: #0284c7;
      color: white;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-submit:hover { background: #0369a1; }
  </style>
</head>
<body>
  <div class="form-card">
    <h2 style="color: #38bdf8; margin-top: 0;">Student Portal Signup</h2>
    <form onsubmit="event.preventDefault(); alert('Form submitted successfully!');">
      <div class="field">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" required placeholder="e.g. Ayesha Siddiqa">
      </div>
      <div class="field">
        <label for="userEmail">Email Address</label>
        <input type="email" id="userEmail" required placeholder="name@institution.edu">
      </div>
      <div class="field">
        <label for="studyTrack">Academic Stream</label>
        <select id="studyTrack">
          <option>Science</option>
          <option>Humanities</option>
          <option>Business Studies</option>
        </select>
      </div>
      <button type="submit" class="btn-submit">Complete Registration</button>
    </form>
  </div>
</body>
</html>`
  },

  {
    id: 'glassmorphism-card',
    title: 'CSS Glassmorphism Card & Backdrop Filter',
    category: 'css',
    description: 'Modern glassmorphic frosted glass design with CSS backdrop-filter, gradients, and subtle shadows.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Glassmorphism Demo</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0ea5e9, #6366f1, #a855f7);
      font-family: system-ui, sans-serif;
      padding: 20px;
    }
    .glass-card {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 16px;
      padding: 32px;
      max-width: 380px;
      color: white;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
    }
    .glass-card h3 { margin-top: 0; font-size: 1.5rem; }
    .glass-card p { opacity: 0.9; line-height: 1.6; }
    .glass-btn {
      display: inline-block;
      margin-top: 12px;
      padding: 10px 20px;
      background: white;
      color: #6366f1;
      text-decoration: none;
      font-weight: bold;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="glass-card">
    <h3>Glassmorphism 2.0</h3>
    <p>Created using CSS <code>backdrop-filter: blur()</code> and semi-transparent alpha backgrounds.</p>
    <a href="#" class="glass-btn">Explore More</a>
  </div>
</body>
</html>`
  },

  {
    id: 'native-dialog-modal',
    title: 'Native HTML5 <dialog> with Escape Key & Backdrop',
    category: 'interactive',
    description: 'Accessible modal dialog built with zero external libraries using modern <dialog> and ::backdrop.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Native Dialog Example</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 40px; text-align: center; }
    dialog {
      border: none;
      border-radius: 12px;
      padding: 28px;
      max-width: 420px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    dialog::backdrop {
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(4px);
    }
    .open-btn {
      padding: 12px 24px;
      background: #0284c7;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h2>Native HTML5 Modal Sandbox</h2>
  <button class="open-btn" onclick="document.getElementById('demoModal').showModal()">
    Click to Open Modal
  </button>

  <dialog id="demoModal">
    <h3 style="margin-top: 0; color: #0284c7;">Native Modal Dialog</h3>
    <p style="color: #475569;">
      Notice that clicking background or pressing the <kbd>Escape</kbd> key automatically handles focus and dismissing!
    </p>
    <form method="dialog">
      <button style="padding: 8px 16px; background: #ef4444; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Close Modal
      </button>
    </form>
  </dialog>
</body>
</html>`
  },

  {
    id: 'debug-broken-table',
    title: 'Debug Challenge: Fix Broken Colspan & Unclosed Tags',
    category: 'challenge',
    description: 'Find and fix the incorrect colspan values and mismatched tags in this common board exam error scenario.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Debug Challenge</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    table { border-collapse: collapse; width: 420px; }
    th, td { border: 2px solid #ef4444; padding: 8px; text-align: center; }
  </style>
</head>
<body>
  <!-- CHALLENGE: 
       1. The header has 3 columns, but the bottom summary incorrectly specifies colspan="2".
       2. Fix the colspan to align properly!
  -->
  <h3>Buggy Table (Fix Colspan)</h3>
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
      <!-- BUG: Fix colspan="2" below to span all 3 columns! -->
      <td colspan="2">Result Status: All Passed</td>
    </tr>
  </table>
</body>
</html>`
  }
];
