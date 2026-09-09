// html-runner/data/css-reference.js
// Comprehensive CSS Concepts, Properties, Syntax, and Interactive Playgrounds

export const CSS_TOPICS = [
  {
    id: 'selectors-specificity',
    title: 'CSS Selectors & Specificity Hierarchy',
    category: 'selectors',
    description: 'CSS selectors define which HTML elements are targeted by CSS rules. Specificity determines which styles win when conflicting declarations apply.',
    concepts: [
      { name: 'Universal Selector (*)', syntax: '* { box-sizing: border-box; }', detail: 'Targets every single element in the DOM tree.' },
      { name: 'Type / Element Selector', syntax: 'p { color: #334155; }', detail: 'Matches elements by their tag name.' },
      { name: 'Class Selector (.)', syntax: '.btn-primary { background: #0284c7; }', detail: 'Matches elements containing the specified class name. Weight: 0-1-0.' },
      { name: 'ID Selector (#)', syntax: '#site-header { position: sticky; }', detail: 'Matches an element by its unique id attribute. Weight: 1-0-0.' },
      { name: 'Descendant Combinator ( )', syntax: 'article p { font-size: 1rem; }', detail: 'Selects all <p> anywhere inside <article>.' },
      { name: 'Direct Child Combinator (>)', syntax: 'ul > li { list-style: circle; }', detail: 'Matches only immediate direct children.' },
      { name: 'Adjacent Sibling (+)', syntax: 'h2 + p { margin-top: 0; }', detail: 'Matches the paragraph placed immediately after the h2.' },
      { name: 'General Sibling (~)', syntax: 'h2 ~ p { color: #475569; }', detail: 'Matches all sibling paragraphs following the h2.' },
      { name: 'Attribute Selector ([attr])', syntax: 'input[type="text"] { border-color: #38bdf8; }', detail: 'Selects elements based on attribute presence or exact/partial value matches.' }
    ],
    exampleCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Universal Box Sizing */
    * { box-sizing: border-box; font-family: system-ui, sans-serif; }
    
    /* Type Selector */
    h2 { color: #0284c7; margin-bottom: 8px; }
    
    /* Adjacent Sibling: Intro lead paragraph */
    h2 + p { font-size: 1.1rem; color: #0369a1; font-weight: 500; }
    
    /* Class Selector */
    .card { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 12px 0; }
    
    /* Direct Child: Only direct list items get bullet color */
    .feature-list > li { color: #1e293b; padding: 4px 0; }
    
    /* Attribute Selector */
    input[type="text"] { border: 2px solid #0284c7; padding: 6px 12px; border-radius: 4px; outline: none; }
    input[required] { background-color: #f0fdf4; }
  </style>
</head>
<body>
  <h2>CSS Selectors in Action</h2>
  <p>This intro paragraph is targeted via h2 + p adjacent sibling selector!</p>

  <div class="card">
    <ul class="feature-list">
      <li>Direct child list item #1</li>
      <li>Direct child list item #2</li>
    </ul>
    <input type="text" placeholder="Required input..." required>
  </div>
</body>
</html>`
  },

  {
    id: 'pseudo-classes-elements',
    title: 'Pseudo-Classes (:hover, :has) & Pseudo-Elements (::before)',
    category: 'selectors',
    description: 'Pseudo-classes select elements based on state or DOM position (e.g. :hover, :nth-child, :has). Pseudo-elements style virtual parts of elements (::before, ::after, ::selection).',
    concepts: [
      { name: ':hover & :active', syntax: 'button:hover { background: #0369a1; }', detail: 'Triggered when cursor moves over or clicks down on element.' },
      { name: ':focus-visible', syntax: ':focus-visible { outline: 2px solid #38bdf8; }', detail: 'Applies keyboard focus rings without distracting mouse users.' },
      { name: ':nth-child(2n+1)', syntax: 'tr:nth-child(odd) { background: #f8fafc; }', detail: 'Target alternating rows or formulaic indices.' },
      { name: ':has() Parent Selector', syntax: 'card:has(img) { grid-column: span 2; }', detail: 'Targets parent elements based on what children they contain (Modern CSS powerhouse!).' },
      { name: '::before & ::after', syntax: '.badge::before { content: "● "; }', detail: 'Inserts cosmetic content before or after an element\'s markup.' },
      { name: '::selection', syntax: '::selection { background: #38bdf8; color: #000; }', detail: 'Styles text highlighted by user cursor.' }
    ],
    exampleCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; background: #0f172a; color: #f8fafc; }
    
    /* Custom Selection Styling */
    ::selection { background: #38bdf8; color: #0f172a; }
    
    /* Interactive Button with :hover and :active */
    .btn {
      position: relative;
      background: #0284c7;
      color: white;
      padding: 10px 24px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s ease;
    }
    .btn:hover { background: #0369a1; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(2, 132, 199, 0.4); }
    .btn:active { transform: translateY(0); }
    .btn:focus-visible { outline: 3px solid #38bdf8; outline-offset: 2px; }
    
    /* ::before Badge Icon */
    .status-badge::before {
      content: "✓ ";
      color: #10b981;
      font-weight: bold;
    }
    
    /* Striped list with :nth-child */
    li:nth-child(even) { background: #1e293b; }
    li { padding: 8px 12px; border-radius: 4px; margin: 4px 0; }
    
    /* Modern :has() Selector */
    .box:has(input:checked) {
      border: 2px solid #10b981;
      background: #064e3b;
    }
    .box { border: 2px dashed #475569; padding: 12px; border-radius: 8px; margin-top: 12px; }
  </style>
</head>
<body>
  <h2>Pseudo-Classes & Elements</h2>
  <button class="btn">Hover & Click Me</button>
  <p class="status-badge" style="margin-top: 16px;">Everything operational</p>
  
  <ul>
    <li>Item 1 (Odd)</li>
    <li>Item 2 (Even :nth-child)</li>
    <li>Item 3 (Odd)</li>
  </ul>
  
  <div class="box">
    <label><input type="checkbox"> Check me to trigger parent <code>:has()</code> styling!</label>
  </div>
</body>
</html>`
  },

  {
    id: 'box-model',
    title: 'CSS Box Model & Box Sizing',
    category: 'box-model',
    description: 'Every HTML element is rendered as a rectangular box consisting of: Content, Padding, Border, and Margin. Understanding box-sizing: border-box is vital for layouts.',
    concepts: [
      { name: 'Content Area', syntax: 'width: 200px; height: 100px;', detail: 'The actual area where text, images, or child elements reside.' },
      { name: 'Padding', syntax: 'padding: 16px 20px;', detail: 'Transparent space between content and the inner edge of the border.' },
      { name: 'Border', syntax: 'border: 2px solid #0284c7;', detail: 'Line surrounding the padding and content.' },
      { name: 'Margin', syntax: 'margin: 24px auto;', detail: 'External clear space outside the border separating elements. Collapses vertically.' },
      { name: 'box-sizing: border-box', syntax: '*, *::before, *::after { box-sizing: border-box; }', detail: 'Ensures padding and border are included in the specified width/height instead of expanding it!' }
    ],
    exampleCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; font-family: sans-serif; }
    body { padding: 20px; background: #f8fafc; }
    
    .box-container {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    
    .box-demo {
      width: 240px;
      height: 160px;
      background-color: #e0f2fe; /* Content */
      padding: 20px;              /* Padding */
      border: 8px solid #0284c7;  /* Border */
      margin: 15px;               /* Margin */
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  </style>
</head>
<body>
  <h2>The CSS Box Model Visualizer</h2>
  <div class="box-container">
    <div class="box-demo">
      <strong style="color: #0369a1;">Content Box</strong>
      <small style="color: #64748b;">Surrounded by 20px padding & 8px border</small>
    </div>
  </div>
</body>
</html>`
  },

  {
    id: 'display-flow',
    title: 'Display Modes: Block, Inline, Inline-Block, and None',
    category: 'box-model',
    description: 'The display property sets whether an element is treated as a block or inline box and the layout used for its children.',
    concepts: [
      { name: 'display: block', syntax: 'div, p, h1 { display: block; }', detail: 'Starts on a new line and stretches across full available width. Accepts width/height/margins.' },
      { name: 'display: inline', syntax: 'span, a, em { display: inline; }', detail: 'Flows within text. Width/height have NO effect; top/bottom margins do not displace surrounding text.' },
      { name: 'display: inline-block', syntax: 'display: inline-block;', detail: 'Flows inline like text, but respects width, height, padding, and vertical margins.' },
      { name: 'display: none', syntax: 'display: none;', detail: 'Completely removes element from rendering flow and accessibility tree.' },
      { name: 'visibility: hidden', syntax: 'visibility: hidden;', detail: 'Hides element visually, but preserves its physical layout space.' }
    ],
    exampleCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    
    .block-el {
      display: block;
      background: #e0f2fe;
      border: 1px solid #0284c7;
      padding: 10px;
      margin: 8px 0;
    }
    
    .inline-el {
      display: inline;
      background: #fef08a;
      padding: 4px 8px;
      border: 1px solid #ca8a04;
    }
    
    .inline-block-el {
      display: inline-block;
      width: 140px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #dcfce7;
      border: 1px solid #16a34a;
      margin: 4px;
      border-radius: 6px;
    }
  </style>
</head>
<body>
  <h2>Display Flow Comparison</h2>
  
  <div class="block-el">Block Element (Stretches 100% width)</div>
  
  <p>
    Surrounding text with an <span class="inline-el">inline element</span> sitting within sentences.
  </p>
  
  <div>
    <div class="inline-block-el">Inline-Block 1</div>
    <div class="inline-block-el">Inline-Block 2</div>
    <div class="inline-block-el">Inline-Block 3</div>
  </div>
</body>
</html>`
  },

  {
    id: 'flexbox-layout',
    title: 'CSS Flexbox (One-Dimensional Layouts)',
    category: 'flexbox',
    description: 'Flexible Box Layout (Flexbox) provides a predictable way to align, distribute space among, and order items in a container, even when their size is unknown or dynamic.',
    concepts: [
      { name: 'display: flex', syntax: '.container { display: flex; }', detail: 'Defines a flex container, turning all direct children into flex items.' },
      { name: 'flex-direction', syntax: 'flex-direction: row | column | row-reverse;', detail: 'Sets the main axis orientation.' },
      { name: 'justify-content', syntax: 'justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly;', detail: 'Aligns items along the MAIN axis.' },
      { name: 'align-items', syntax: 'align-items: stretch | center | flex-start | flex-end | baseline;', detail: 'Aligns items along the CROSS axis.' },
      { name: 'gap', syntax: 'gap: 16px;', detail: 'Sets space between flex items without needing margin hacks.' },
      { name: 'flex-wrap', syntax: 'flex-wrap: wrap | nowrap;', detail: 'Controls whether items wrap onto multiple lines.' },
      { name: 'flex-grow & flex-shrink', syntax: 'flex: 1;', detail: 'Shorthand for flex-grow, flex-shrink, and flex-basis.' }
    ],
    exampleCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; font-family: sans-serif; }
    body { padding: 20px; background: #0f172a; color: #f8fafc; }
    
    /* Flex Container Navbar */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #1e293b;
      padding: 12px 20px;
      border-radius: 8px;
    }
    
    .nav-links {
      display: flex;
      gap: 16px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    /* Responsive Flex Cards */
    .card-row {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-top: 20px;
    }
    
    .card {
      flex: 1 1 200px; /* grow shrink basis */
      background: #1e293b;
      border: 1px solid #334155;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    }
    .card:hover { border-color: #38bdf8; }
  </style>
</head>
<body>
  <nav class="navbar">
    <strong style="color: #38bdf8; font-size: 1.2rem;">BrandLogo</strong>
    <ul class="nav-links">
      <li><a href="#" style="color: #94a3b8; text-decoration: none;">Home</a></li>
      <li><a href="#" style="color: #94a3b8; text-decoration: none;">Features</a></li>
      <li><a href="#" style="color: #38bdf8; text-decoration: none;">Contact</a></li>
    </ul>
  </nav>

  <div class="card-row">
    <div class="card">Card 1 (flex: 1)</div>
    <div class="card">Card 2 (flex: 1)</div>
    <div class="card">Card 3 (flex: 1)</div>
  </div>
</body>
</html>`
  },

  {
    id: 'css-grid-layout',
    title: 'CSS Grid (Two-Dimensional Layouts)',
    category: 'grid',
    description: 'CSS Grid Layout is the most powerful layout system available in CSS. It divides a page into major regions and defines the relationship in terms of columns AND rows.',
    concepts: [
      { name: 'display: grid', syntax: '.grid { display: grid; }', detail: 'Initializes a grid formatting context.' },
      { name: 'grid-template-columns', syntax: 'grid-template-columns: repeat(3, 1fr);', detail: 'Defines track widths using fractional fr units or pixels.' },
      { name: 'auto-fit & minmax()', syntax: 'grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));', detail: 'Creates completely responsive layouts without media queries!' },
      { name: 'gap', syntax: 'gap: 16px 24px;', detail: 'Row and column gutters.' },
      { name: 'grid-column & grid-row', syntax: 'grid-column: 1 / -1;', detail: 'Spans an item across columns (from first to last line).' },
      { name: 'grid-template-areas', syntax: 'grid-template-areas: "header header" "sidebar main" "footer footer";', detail: 'Named ASCII-style layout template.' }
    ],
    exampleCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; font-family: sans-serif; }
    body { padding: 20px; background: #f8fafc; }
    
    /* Modern Auto-Responsive Grid */
    .grid-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
    }
    
    .grid-item {
      background: white;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      font-weight: bold;
      color: #0284c7;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    
    /* Feature Hero spanning multiple columns */
    .featured {
      grid-column: span 2;
      background: #0284c7;
      color: white;
    }
  </style>
</head>
<body>
  <h2>CSS Grid Auto-Fit Layout</h2>
  <div class="grid-gallery">
    <div class="grid-item featured">Featured Product (Spans 2 cols)</div>
    <div class="grid-item">Item A</div>
    <div class="grid-item">Item B</div>
    <div class="grid-item">Item C</div>
    <div class="grid-item">Item D</div>
  </div>
</body>
</html>`
  },

  {
    id: 'positioning-zindex',
    title: 'CSS Positioning & Stacking Context (Z-Index)',
    category: 'positioning',
    description: 'The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).',
    concepts: [
      { name: 'position: static', syntax: 'position: static;', detail: 'Default value. Elements render in normal document flow.' },
      { name: 'position: relative', syntax: 'position: relative; top: 10px;', detail: 'Positioned relative to its normal position without disturbing surroundings.' },
      { name: 'position: absolute', syntax: 'position: absolute; right: 0;', detail: 'Positioned relative to its closest positioned ancestor (ancestor with non-static position).' },
      { name: 'position: fixed', syntax: 'position: fixed; top: 0;', detail: 'Positioned relative to the viewport window; stays fixed on scroll.' },
      { name: 'position: sticky', syntax: 'position: sticky; top: 0;', detail: 'Toggles between relative and fixed depending on scroll position.' },
      { name: 'z-index', syntax: 'z-index: 10;', detail: 'Specifies stack order of overlapping positioned elements.' }
    ],
    exampleCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 20px; height: 1200px; }
    
    /* Sticky Navigation Header */
    .sticky-bar {
      position: sticky;
      top: 0;
      background: #0284c7;
      color: white;
      padding: 14px 20px;
      border-radius: 6px;
      z-index: 100;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    }
    
    /* Relative Card with Absolute Badge */
    .card {
      position: relative;
      margin-top: 30px;
      padding: 24px;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      max-width: 320px;
    }
    
    .badge {
      position: absolute;
      top: -10px;
      right: -10px;
      background: #ef4444;
      color: white;
      font-size: 0.75rem;
      font-weight: bold;
      padding: 4px 10px;
      border-radius: 9999px;
    }
  </style>
</head>
<body>
  <div class="sticky-bar">Sticky Navbar: Scroll down to observe stickiness</div>
  
  <div class="card">
    <span class="badge">NEW</span>
    <h3 style="margin-top:0;">Interactive Card</h3>
    <p>The badge is positioned absolute relative to this parent card.</p>
  </div>
</body>
</html>`
  },

  {
    id: 'transitions-animations',
    title: 'CSS Transitions, Transforms & @keyframes',
    category: 'animations',
    description: 'Transitions enable smooth state changes. Transforms alter coordinate space (rotate, scale, translate). Keyframes animate complex multi-step sequences.',
    concepts: [
      { name: 'transition shorthand', syntax: 'transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);', detail: 'Controls property, duration, timing function, and delay.' },
      { name: 'transform 2D/3D', syntax: 'transform: translate(10px, 20px) rotate(45deg) scale(1.1);', detail: 'GPU-accelerated transformations.' },
      { name: '@keyframes', syntax: '@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }', detail: 'Defines animation stages and interpolation points.' },
      { name: 'animation property', syntax: 'animation: pulse 2s infinite ease-in-out;', detail: 'Applies keyframe animation to an element.' }
    ],
    exampleCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 250px; background: #0f172a; color: white; }
    
    /* Pulsing Glowing Orb */
    .glow-orb {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(135deg, #0284c7, #38bdf8);
      box-shadow: 0 0 20px #38bdf8;
      animation: floatPulse 3s ease-in-out infinite alternate;
    }
    
    @keyframes floatPulse {
      0% {
        transform: translateY(0) scale(1);
        box-shadow: 0 0 15px #38bdf8;
      }
      100% {
        transform: translateY(-20px) scale(1.15);
        box-shadow: 0 0 35px #0284c7;
      }
    }
  </style>
</head>
<body>
  <div class="glow-orb"></div>
  <p style="margin-top: 24px; color: #94a3b8;">Pure CSS GPU-Accelerated Animation</p>
</body>
</html>`
  },

  {
    id: 'modern-responsive-css',
    title: 'Modern Responsive Design: Variables, Clamp(), & Media Queries',
    category: 'modern',
    description: 'Modern CSS simplifies responsive web design with CSS Custom Properties (Variables), clamp() fluid typography, and media/container queries.',
    concepts: [
      { name: 'CSS Variables', syntax: ':root { --primary: #0284c7; } color: var(--primary);', detail: 'Reusable custom properties supporting runtime dynamic changes and dark mode.' },
      { name: 'clamp() Fluid Sizing', syntax: 'font-size: clamp(1rem, 2.5vw, 2.5rem);', detail: 'Scales smoothly between minimum, preferred, and maximum values.' },
      { name: '@media queries', syntax: '@media (min-width: 768px) { ... }', detail: 'Applies styles conditionally based on viewport width or capabilities.' },
      { name: 'color-scheme', syntax: 'color-scheme: dark light;', detail: 'Informs browser how to render default controls and scrollbars.' }
    ],
    exampleCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --brand-accent: #0284c7;
      --bg-surface: #ffffff;
      --text-main: #0f172a;
    }
    
    @media (prefers-color-scheme: dark) {
      :root {
        --brand-accent: #38bdf8;
        --bg-surface: #1e293b;
        --text-main: #f8fafc;
      }
    }
    
    body {
      background-color: var(--bg-surface);
      color: var(--text-main);
      font-family: system-ui, sans-serif;
      padding: 24px;
      transition: background 0.3s ease;
    }
    
    /* Fluid Heading: scales automatically with viewport */
    h1 {
      font-size: clamp(1.5rem, 5vw, 3rem);
      color: var(--brand-accent);
      margin-top: 0;
    }
  </style>
</head>
<body>
  <h1>Fluid Heading with CSS clamp()</h1>
  <p>Resize your browser or change viewport mode to watch the text scale smoothly!</p>
</body>
</html>`
  }
];
