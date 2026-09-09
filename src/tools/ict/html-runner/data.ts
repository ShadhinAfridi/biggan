// ============================================================
// data.ts — Comprehensive bilingual data for HtmlRunner
// HTML Tags, CSS Properties, HSC ICT Glossary
// ============================================================

// ── Types ─────────────────────────────────────────────────────

export interface TagCategory {
  id: string;
  labelBn: string;
  labelEn: string;
  icon: string;
}

export interface HtmlTag {
  tag: string;
  type: 'container' | 'empty';
  category: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  example: string;
  attrs?: string[];
  isHscChapter4?: boolean;
}

export interface CssCategory {
  id: string;
  labelBn: string;
  labelEn: string;
  icon: string;
}

export interface CssProp {
  prop: string;
  category: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  example: string;
  values?: string[];
}

export interface GlossaryEntry {
  id: string;
  termEn: string;
  termBn: string;
  category: string;
  defEn: string;
  defBn: string;
}

// ── HTML Tag Categories ────────────────────────────────────────

export const HTML_TAG_CATEGORIES: TagCategory[] = [
  { id: 'hsc',       labelBn: 'HSC অধ্যায় ৪',       labelEn: 'HSC Ch.4',   icon: '📚' },
  { id: 'structure', labelBn: 'কাঠামো',                labelEn: 'Structure',  icon: '🏗️' },
  { id: 'text',      labelBn: 'টেক্সট',                labelEn: 'Text',       icon: '✏️' },
  { id: 'table',     labelBn: 'টেবিল',                 labelEn: 'Table',      icon: '🗃️' },
  { id: 'form',      labelBn: 'ফর্ম',                  labelEn: 'Form',       icon: '📝' },
  { id: 'list',      labelBn: 'তালিকা',                labelEn: 'List',       icon: '📋' },
  { id: 'media',     labelBn: 'মিডিয়া/লিঙ্ক',        labelEn: 'Media/Link', icon: '🖼️' },
  { id: 'meta',      labelBn: 'মেটা/হেড',              labelEn: 'Meta/Head',  icon: '🔖' },
];

// ── HTML Tags ─────────────────────────────────────────────────

export const HTML_TAGS: HtmlTag[] = [
  // ── Structure ──────────────────────────────────────────────
  {
    tag: '<!DOCTYPE html>',
    type: 'empty',
    category: 'structure',
    titleBn: 'ডকটাইপ ঘোষণা',
    titleEn: 'Document Type Declaration',
    descBn: 'ব্রাউজারকে জানায় যে এটি একটি HTML5 ডকুমেন্ট। এটি সবসময় HTML ফাইলের একদম প্রথমে লিখতে হয়।',
    descEn: 'Tells the browser this is an HTML5 document. Must always be the very first line of an HTML file.',
    example: '<!DOCTYPE html>',
  },
  {
    tag: '<html>',
    type: 'container',
    category: 'structure',
    titleBn: 'HTML রুট এলিমেন্ট',
    titleEn: 'HTML Root Element',
    descBn: 'পুরো HTML ডকুমেন্টের মূল কন্টেইনার। সমস্ত কন্টেন্ট এই ট্যাগের মধ্যে থাকে।',
    descEn: 'The root container for the entire HTML document. All content lives inside this tag.',
    example: '<html lang="bn">\n  <!-- সব কন্টেন্ট এখানে -->\n</html>',
    attrs: ['lang'],
  },
  {
    tag: '<head>',
    type: 'container',
    category: 'structure',
    titleBn: 'ডকুমেন্ট হেড',
    titleEn: 'Document Head',
    descBn: 'পেজের মেটাডেটা, টাইটেল, CSS লিঙ্ক ইত্যাদি এখানে রাখা হয়। এই অংশ ব্রাউজারে দৃশ্যমান হয় না।',
    descEn: 'Contains metadata, title, CSS links, etc. This section is not visible in the browser.',
    example: '<head>\n  <title>আমার পেজ</title>\n  <meta charset="UTF-8">\n</head>',
  },
  {
    tag: '<body>',
    type: 'container',
    category: 'structure',
    titleBn: 'ডকুমেন্ট বডি',
    titleEn: 'Document Body',
    descBn: 'পেজের সমস্ত দৃশ্যমান কন্টেন্ট এখানে রাখা হয়। ব্যবহারকারী যা দেখেন তার সব কিছু body-র মধ্যে।',
    descEn: 'Contains all visible page content. Everything the user sees is placed inside the body.',
    example: '<body>\n  <h1>স্বাগতম!</h1>\n  <p>এটি আমার প্রথম ওয়েবপেজ।</p>\n</body>',
  },
  // ── Text ───────────────────────────────────────────────────
  {
    tag: '<h1> – <h6>',
    type: 'container',
    category: 'text',
    titleBn: 'শিরোনাম ট্যাগ',
    titleEn: 'Heading Tags',
    descBn: 'h1 সবচেয়ে বড় এবং h6 সবচেয়ে ছোট শিরোনাম। h1 সাধারণত পেজের মূল শিরোনামের জন্য ব্যবহৃত হয়।',
    descEn: 'h1 is the largest and h6 is the smallest heading. h1 is typically the main page title.',
    example: '<h1>প্রধান শিরোনাম</h1>\n<h2>উপ-শিরোনাম</h2>\n<h3>বিভাগ শিরোনাম</h3>',
  },
  {
    tag: '<p>',
    type: 'container',
    category: 'text',
    titleBn: 'প্যারাগ্রাফ',
    titleEn: 'Paragraph',
    descBn: 'একটি টেক্সটের অনুচ্ছেদ তৈরি করে। ব্রাউজার স্বয়ংক্রিয়ভাবে উপরে ও নিচে একটু ফাঁকা জায়গা যোগ করে।',
    descEn: 'Creates a paragraph of text. The browser automatically adds some space above and below.',
    example: '<p>এটি একটি অনুচ্ছেদ। বাংলাদেশ একটি সুন্দর দেশ।</p>',
  },
  {
    tag: '<br>',
    type: 'empty',
    category: 'text',
    titleBn: 'লাইন ব্রেক',
    titleEn: 'Line Break',
    descBn: 'একটি লাইন ভেঙে পরবর্তী লাইনে যায়। এটি একটি এম্পটি ট্যাগ, তাই বন্ধ করার দরকার নেই।',
    descEn: 'Inserts a single line break. It is a void/empty tag and does not need a closing tag.',
    example: '<p>প্রথম লাইন।<br>দ্বিতীয় লাইন।</p>',
  },
  {
    tag: '<hr>',
    type: 'empty',
    category: 'text',
    titleBn: 'অনুভূমিক রেখা',
    titleEn: 'Horizontal Rule',
    descBn: 'পেজে একটি অনুভূমিক বিভাজন রেখা আঁকে। দুটি বিভাগের মধ্যে বিভাজন দেখাতে ব্যবহৃত হয়।',
    descEn: 'Draws a horizontal dividing line across the page. Used to separate sections.',
    example: '<p>প্রথম বিভাগ।</p>\n<hr>\n<p>দ্বিতীয় বিভাগ।</p>',
  },
  {
    tag: '<b>',
    type: 'container',
    category: 'text',
    titleBn: 'বোল্ড টেক্সট',
    titleEn: 'Bold Text',
    descBn: 'টেক্সটকে মোটা (বোল্ড) করে দেখায়। শুধু চেহারা পরিবর্তনের জন্য ব্যবহৃত হয়।',
    descEn: 'Makes text appear bold. Used purely for visual styling without semantic meaning.',
    example: '<p>এটি <b>বোল্ড</b> টেক্সট।</p>',
  },
  {
    tag: '<i>',
    type: 'container',
    category: 'text',
    titleBn: 'ইটালিক টেক্সট',
    titleEn: 'Italic Text',
    descBn: 'টেক্সটকে হেলানো (ইটালিক) করে দেখায়। বই বা বিদেশি শব্দ লেখার সময় ব্যবহৃত হয়।',
    descEn: 'Makes text appear italic/slanted. Used for book titles or foreign words.',
    example: '<p>এটি <i>ইটালিক</i> টেক্সট।</p>',
  },
  // ── Table ──────────────────────────────────────────────────
  {
    tag: '<table>',
    type: 'container',
    category: 'table',
    titleBn: 'টেবিল কন্টেইনার',
    titleEn: 'Table Container',
    descBn: 'HTML টেবিলের মূল কন্টেইনার। সব tr, th, td এর মধ্যে থাকে। border-collapse দিয়ে সীমানা একত্রিত করা যায়।',
    descEn: 'The main container for an HTML table. All tr, th, td are placed inside this.',
    example: '<table border="1">\n  <tr><th>নাম</th><th>রোল</th></tr>\n  <tr><td>রাহিম</td><td>101</td></tr>\n</table>',
    attrs: ['border', 'cellpadding', 'cellspacing', 'width'],
    isHscChapter4: true,
  },
  {
    tag: '<tr>',
    type: 'container',
    category: 'table',
    titleBn: 'টেবিল রো (সারি)',
    titleEn: 'Table Row',
    descBn: 'টেবিলের একটি সারি (রো) তৈরি করে। প্রতিটি সারির মধ্যে th বা td ঘর থাকে।',
    descEn: 'Creates a single row in the table. Contains th or td cells.',
    example: '<tr>\n  <td>সেল ১</td>\n  <td>সেল ২</td>\n</tr>',
    isHscChapter4: true,
  },
  {
    tag: '<th>',
    type: 'container',
    category: 'table',
    titleBn: 'টেবিল হেডার সেল',
    titleEn: 'Table Header Cell',
    descBn: 'টেবিলের শিরোনাম সেল তৈরি করে। স্বয়ংক্রিয়ভাবে বোল্ড এবং কেন্দ্রে সাজানো হয়।',
    descEn: 'Creates a header cell in the table. Automatically bold and centered.',
    example: '<tr>\n  <th rowspan="2">নাম</th>\n  <th colspan="2">নম্বর</th>\n</tr>',
    attrs: ['rowspan', 'colspan'],
    isHscChapter4: true,
  },
  {
    tag: '<td>',
    type: 'container',
    category: 'table',
    titleBn: 'টেবিল ডেটা সেল',
    titleEn: 'Table Data Cell',
    descBn: 'টেবিলের সাধারণ ডেটা সেল তৈরি করে। rowspan ও colspan অ্যাট্রিবিউট দিয়ে ঘর মার্জ করা যায়।',
    descEn: 'Creates a standard data cell. rowspan and colspan attributes merge cells.',
    example: '<td rowspan="2">মার্জড সেল</td>\n<td colspan="3">৩টি কলাম জুড়ে</td>',
    attrs: ['rowspan', 'colspan', 'align', 'valign'],
    isHscChapter4: true,
  },
  // ── Form ───────────────────────────────────────────────────
  {
    tag: '<form>',
    type: 'container',
    category: 'form',
    titleBn: 'ফর্ম কন্টেইনার',
    titleEn: 'Form Container',
    descBn: 'ব্যবহারকারীর ইনপুট গ্রহণের জন্য ফর্ম তৈরি করে। action ও method অ্যাট্রিবিউট দিয়ে ডেটা পাঠানোর গন্তব্য নির্ধারণ করা হয়।',
    descEn: 'Creates a form for collecting user input. action and method attributes define where data is sent.',
    example: '<form action="/submit" method="POST">\n  <input type="text" name="name">\n  <button type="submit">Submit</button>\n</form>',
    attrs: ['action', 'method', 'enctype'],
    isHscChapter4: true,
  },
  {
    tag: '<input>',
    type: 'empty',
    category: 'form',
    titleBn: 'ইনপুট ফিল্ড',
    titleEn: 'Input Field',
    descBn: 'ব্যবহারকারীর থেকে ডেটা নেওয়ার জন্য ইনপুট ফিল্ড। type="text", type="radio", type="checkbox", type="submit" ইত্যাদি।',
    descEn: 'Input field for user data. type="text", type="radio", type="checkbox", type="submit" etc.',
    example: '<input type="text" placeholder="নাম লিখুন">\n<input type="radio" name="grp" value="science"> বিজ্ঞান\n<input type="submit" value="জমা দিন">',
    attrs: ['type', 'name', 'value', 'placeholder', 'required', 'checked'],
    isHscChapter4: true,
  },
  {
    tag: '<select>',
    type: 'container',
    category: 'form',
    titleBn: 'ড্রপডাউন সিলেক্ট',
    titleEn: 'Dropdown Select',
    descBn: 'ড্রপডাউন তালিকা তৈরি করে যেখান থেকে ব্যবহারকারী একটি অপশন বেছে নিতে পারে।',
    descEn: 'Creates a dropdown list where users can choose one option.',
    example: '<select name="board">\n  <option value="dhaka">ঢাকা বোর্ড</option>\n  <option value="ctg">চট্টগ্রাম বোর্ড</option>\n</select>',
    attrs: ['name', 'multiple', 'size'],
    isHscChapter4: true,
  },
  // ── List ───────────────────────────────────────────────────
  {
    tag: '<ul>',
    type: 'container',
    category: 'list',
    titleBn: 'আনঅর্ডারড তালিকা',
    titleEn: 'Unordered List',
    descBn: 'বুলেট পয়েন্ট সহ তালিকা তৈরি করে। প্রতিটি আইটেম li ট্যাগ দিয়ে তৈরি হয়।',
    descEn: 'Creates a bulleted list. Each item is created with the li tag.',
    example: '<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>',
    isHscChapter4: true,
  },
  {
    tag: '<ol>',
    type: 'container',
    category: 'list',
    titleBn: 'অর্ডারড তালিকা',
    titleEn: 'Ordered List',
    descBn: 'ক্রমানুসারে সংখ্যা বা অক্ষর দিয়ে তালিকা তৈরি করে। type অ্যাট্রিবিউট দিয়ে 1, A, a, I, i নির্ধারণ করা যায়।',
    descEn: 'Creates a numbered list. The type attribute sets numbering style: 1, A, a, I, i.',
    example: '<ol type="I">\n  <li>প্রথম বিষয়</li>\n  <li>দ্বিতীয় বিষয়</li>\n</ol>',
    attrs: ['type', 'start'],
    isHscChapter4: true,
  },
  {
    tag: '<li>',
    type: 'container',
    category: 'list',
    titleBn: 'তালিকা আইটেম',
    titleEn: 'List Item',
    descBn: 'ul বা ol তালিকার প্রতিটি আইটেম এই ট্যাগ দিয়ে তৈরি হয়। ভেতরে আরেকটি তালিকা রেখে নেস্টেড তালিকা তৈরি করা যায়।',
    descEn: 'Each item in a ul or ol list. Can contain another list to create nested lists.',
    example: '<ul>\n  <li>বিজ্ঞান\n    <ul><li>পদার্থ</li><li>রসায়ন</li></ul>\n  </li>\n</ul>',
    isHscChapter4: true,
  },
  // ── Media / Link ───────────────────────────────────────────
  {
    tag: '<a>',
    type: 'container',
    category: 'media',
    titleBn: 'হাইপারলিঙ্ক',
    titleEn: 'Hyperlink / Anchor',
    descBn: 'অন্য পেজ, সেকশন বা ইমেইলের সাথে লিঙ্ক তৈরি করে। href অ্যাট্রিবিউটে গন্তব্যের URL দিতে হয়।',
    descEn: 'Creates a link to another page, section, or email. href attribute holds the destination URL.',
    example: '<a href="https://www.google.com" target="_blank">গুগলে যান</a>',
    attrs: ['href', 'target', 'rel'],
    isHscChapter4: true,
  },
  {
    tag: '<img>',
    type: 'empty',
    category: 'media',
    titleBn: 'ছবি ট্যাগ',
    titleEn: 'Image Tag',
    descBn: 'পেজে একটি ছবি দেখায়। src অ্যাট্রিবিউটে ছবির ঠিকানা এবং alt অ্যাট্রিবিউটে বিকল্প টেক্সট দিতে হয়।',
    descEn: 'Embeds an image. src attribute is the image URL, alt is the alternative text.',
    example: '<img src="photo.jpg" alt="আমার ছবি" width="300" height="200">',
    attrs: ['src', 'alt', 'width', 'height'],
    isHscChapter4: true,
  },
  // ── Meta / Head ────────────────────────────────────────────
  {
    tag: '<title>',
    type: 'container',
    category: 'meta',
    titleBn: 'পেজ টাইটেল',
    titleEn: 'Page Title',
    descBn: 'ব্রাউজার ট্যাবে যে শিরোনাম দেখা যায় তা এখানে লেখা হয়। সার্চ ইঞ্জিনের জন্যও গুরুত্বপূর্ণ।',
    descEn: 'Sets the text shown in the browser tab. Also important for search engines.',
    example: '<head>\n  <title>আমার প্রথম ওয়েবপেজ — HSC ICT</title>\n</head>',
  },
  {
    tag: '<meta>',
    type: 'empty',
    category: 'meta',
    titleBn: 'মেটা ট্যাগ',
    titleEn: 'Meta Tag',
    descBn: 'পেজের মেটাডেটা নির্ধারণ করে যেমন charset, viewport, author ইত্যাদি। head এর ভেতরে ব্যবহৃত হয়।',
    descEn: 'Defines page metadata like charset, viewport, author. Used inside head.',
    example: '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta name="author" content="তোমার নাম">',
    attrs: ['charset', 'name', 'content', 'http-equiv'],
  },
  {
    tag: '<style>',
    type: 'container',
    category: 'meta',
    titleBn: 'স্টাইল ব্লক',
    titleEn: 'Style Block',
    descBn: 'head এর মধ্যে CSS কোড লেখার জায়গা। ইন্টার্নাল CSS ব্যবহারের জন্য এই ট্যাগ ব্যবহার করা হয়।',
    descEn: 'Contains internal CSS code written inside the head element.',
    example: '<style>\n  body { font-family: sans-serif; background: #f0f4f8; }\n  h1 { color: #0284c7; }\n</style>',
  },
];

// ── CSS Categories ─────────────────────────────────────────────

export const CSS_CATEGORIES: CssCategory[] = [
  { id: 'layout',     labelBn: 'লেআউট',                  labelEn: 'Layout',      icon: '📐' },
  { id: 'box',        labelBn: 'বক্স মডেল',              labelEn: 'Box Model',   icon: '📦' },
  { id: 'typography', labelBn: 'টাইপোগ্রাফি',            labelEn: 'Typography',  icon: '🔤' },
  { id: 'color',      labelBn: 'রঙ ও ব্যাকগ্রাউন্ড',    labelEn: 'Color & BG',  icon: '🎨' },
  { id: 'animation',  labelBn: 'এনিমেশন',                labelEn: 'Animation',   icon: '✨' },
];

// ── CSS Properties ─────────────────────────────────────────────

export const CSS_PROPS: CssProp[] = [
  {
    prop: 'display',
    category: 'layout',
    titleBn: 'ডিসপ্লে',
    titleEn: 'Display',
    descBn: 'একটি এলিমেন্ট কীভাবে প্রদর্শিত হবে তা নিয়ন্ত্রণ করে। block, inline, flex, grid, none ইত্যাদি মান ব্যবহার করা যায়।',
    descEn: 'Controls how an element is displayed. Values: block, inline, flex, grid, none, etc.',
    example: '.container { display: flex; }\n.hidden { display: none; }\n.inline-item { display: inline-block; }',
    values: ['block', 'inline', 'inline-block', 'flex', 'grid', 'none'],
  },
  {
    prop: 'position',
    category: 'layout',
    titleBn: 'পজিশন',
    titleEn: 'Position',
    descBn: 'এলিমেন্টের অবস্থান নির্ধারণের পদ্ধতি। static, relative, absolute, fixed, sticky মান ব্যবহার করা যায়।',
    descEn: 'Determines positioning method. Values: static, relative, absolute, fixed, sticky.',
    example: '.parent { position: relative; }\n.child { position: absolute; top: 10px; left: 20px; }',
    values: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
  },
  {
    prop: 'width / height',
    category: 'layout',
    titleBn: 'প্রস্থ / উচ্চতা',
    titleEn: 'Width / Height',
    descBn: 'এলিমেন্টের প্রস্থ ও উচ্চতা নির্ধারণ করে। px, %, em, rem, vw, vh ইউনিটে দেওয়া যায়।',
    descEn: 'Sets the width and height of an element. Can use px, %, em, rem, vw, vh units.',
    example: '.box { width: 300px; height: 200px; }\n.full { width: 100%; max-width: 1200px; }',
    values: ['px', '%', 'em', 'rem', 'vw', 'vh', 'auto'],
  },
  {
    prop: 'flex',
    category: 'layout',
    titleBn: 'ফ্লেক্সবক্স',
    titleEn: 'Flexbox',
    descBn: 'flex-direction, justify-content, align-items দিয়ে ফ্লেক্সবক্স লেআউট তৈরি করা হয়। রেসপন্সিভ ডিজাইনের জন্য সবচেয়ে বেশি ব্যবহৃত।',
    descEn: 'flex-direction, justify-content, align-items create flexible layouts. Most used for responsive design.',
    example: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}',
    values: ['flex-direction', 'justify-content', 'align-items', 'gap', 'flex-wrap'],
  },
  {
    prop: 'margin',
    category: 'box',
    titleBn: 'মার্জিন',
    titleEn: 'Margin',
    descBn: 'এলিমেন্টের বাইরের ফাঁকা জায়গা। margin: top right bottom left; ক্রমে চারদিক নির্ধারণ করা যায়। margin: auto দিয়ে কেন্দ্রে আনা যায়।',
    descEn: 'Space outside the element. margin: top right bottom left. margin: auto centers the element.',
    example: '.card { margin: 20px; }\n.centered { margin: 0 auto; }\n.top-space { margin-top: 40px; }',
    values: ['auto', 'px', '%', 'em'],
  },
  {
    prop: 'padding',
    category: 'box',
    titleBn: 'প্যাডিং',
    titleEn: 'Padding',
    descBn: 'এলিমেন্টের ভেতরের ফাঁকা জায়গা। কন্টেন্ট ও বর্ডারের মধ্যবর্তী দূরত্ব নির্ধারণ করে।',
    descEn: 'Space inside the element between content and border.',
    example: '.btn { padding: 10px 20px; }\n.section { padding: 40px 0; }',
    values: ['px', 'em', 'rem', '%'],
  },
  {
    prop: 'border',
    category: 'box',
    titleBn: 'বর্ডার',
    titleEn: 'Border',
    descBn: 'এলিমেন্টের চারপাশে সীমানারেখা। border: width style color; ফরম্যাটে লেখা হয়। border-radius দিয়ে গোলাকার কোণ তৈরি করা যায়।',
    descEn: 'Adds a border around the element. border: width style color; border-radius for rounded corners.',
    example: '.box { border: 2px solid #0284c7; border-radius: 8px; }\n.dashed { border: 1px dashed #ccc; }',
    values: ['solid', 'dashed', 'dotted', 'none', 'border-radius'],
  },
  {
    prop: 'font-size',
    category: 'typography',
    titleBn: 'ফন্ট সাইজ',
    titleEn: 'Font Size',
    descBn: 'টেক্সটের আকার নির্ধারণ করে। px, em, rem, % বা vw ইউনিটে দেওয়া যায়। 16px ডিফল্ট ব্রাউজার সাইজ।',
    descEn: 'Sets text size. Use px, em, rem, %, or vw units. Default browser size is 16px.',
    example: 'h1 { font-size: 2rem; }\np { font-size: 16px; }\nsmall { font-size: 0.875em; }',
    values: ['px', 'em', 'rem', '%', 'vw'],
  },
  {
    prop: 'font-weight',
    category: 'typography',
    titleBn: 'ফন্ট ওজন',
    titleEn: 'Font Weight',
    descBn: 'টেক্সটের মোটা বা পাতলা হওয়ার মাত্রা। normal (400), bold (700), বা 100-900 সংখ্যায় নির্ধারণ করা যায়।',
    descEn: 'Controls text thickness. normal (400), bold (700), or numeric 100-900.',
    example: 'h1 { font-weight: 700; }\n.light { font-weight: 300; }\n.bold { font-weight: bold; }',
    values: ['normal', 'bold', '100', '300', '400', '500', '600', '700', '900'],
  },
  {
    prop: 'text-align',
    category: 'typography',
    titleBn: 'টেক্সট এলাইনমেন্ট',
    titleEn: 'Text Alignment',
    descBn: 'টেক্সটের সাজানোর পদ্ধতি। left, right, center, justify মান ব্যবহার করা যায়।',
    descEn: 'Aligns text horizontally. Values: left, right, center, justify.',
    example: 'h1 { text-align: center; }\np { text-align: justify; }\n.right { text-align: right; }',
    values: ['left', 'right', 'center', 'justify'],
  },
  {
    prop: 'color',
    category: 'color',
    titleBn: 'টেক্সটের রঙ',
    titleEn: 'Text Color',
    descBn: 'টেক্সটের রঙ নির্ধারণ করে। HEX (#0284c7), RGB (rgb(0,0,255)), বা named color ব্যবহার করা যায়।',
    descEn: 'Sets text color. Use HEX (#0284c7), RGB (rgb(0,0,255)), or color names.',
    example: 'h1 { color: #0284c7; }\np { color: rgb(51, 65, 85); }\n.red { color: red; }',
    values: ['HEX', 'rgb()', 'rgba()', 'hsl()', 'named colors'],
  },
  {
    prop: 'background-color',
    category: 'color',
    titleBn: 'ব্যাকগ্রাউন্ড রঙ',
    titleEn: 'Background Color',
    descBn: 'এলিমেন্টের পেছনের রঙ নির্ধারণ করে। transparent মান দিলে স্বচ্ছ হয়।',
    descEn: 'Sets the background color of an element. transparent makes it see-through.',
    example: 'body { background-color: #f8fafc; }\n.card { background-color: #fff; }\n.highlight { background-color: rgba(2,132,199,0.1); }',
    values: ['HEX', 'rgb()', 'rgba()', 'transparent'],
  },
  {
    prop: 'transition',
    category: 'animation',
    titleBn: 'ট্রানজিশন',
    titleEn: 'Transition',
    descBn: 'CSS প্রপার্টি পরিবর্তনের সময় মসৃণ অ্যানিমেশন তৈরি করে। duration, timing-function নির্ধারণ করা যায়।',
    descEn: 'Creates smooth animations when CSS properties change. Set duration and timing function.',
    example: '.btn {\n  transition: background-color 0.3s ease, transform 0.2s;\n}\n.btn:hover { background-color: #0369a1; transform: scale(1.05); }',
    values: ['all', 'property-name', 'duration', 'ease', 'linear', 'ease-in-out'],
  },
  {
    prop: '@keyframes',
    category: 'animation',
    titleBn: 'কীফ্রেম অ্যানিমেশন',
    titleEn: '@keyframes Animation',
    descBn: 'ধাপে ধাপে CSS অ্যানিমেশন তৈরি করে। animation প্রপার্টির সাথে ব্যবহার করতে হয়।',
    descEn: 'Defines step-by-step CSS animations. Must be used with the animation property.',
    example: '@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(-10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n.card { animation: fadeIn 0.5s ease; }',
    values: ['from', 'to', '0%', '50%', '100%'],
  },
  {
    prop: 'background',
    category: 'color',
    titleBn: 'গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড',
    titleEn: 'Gradient Background',
    descBn: 'linear-gradient বা radial-gradient দিয়ে ঢালু রঙের ব্যাকগ্রাউন্ড তৈরি করা যায়।',
    descEn: 'Create gradient backgrounds using linear-gradient or radial-gradient.',
    example: '.hero {\n  background: linear-gradient(135deg, #0284c7, #7c3aed);\n}\n.card {\n  background: radial-gradient(circle, #e0f2fe, #fff);\n}',
    values: ['linear-gradient()', 'radial-gradient()', 'url()'],
  },
];

// ── HSC ICT Glossary ───────────────────────────────────────────

export const HSC_GLOSSARY: GlossaryEntry[] = [
  {
    id: 'web-page',
    termEn: 'Web Page',
    termBn: 'ওয়েব পেজ',
    category: 'web',
    defEn: 'A single document on the internet written in HTML that can be viewed in a web browser.',
    defBn: 'ইন্টারনেটে HTML দিয়ে তৈরি একটি একক ডকুমেন্ট যা ওয়েব ব্রাউজারে দেখা যায়।',
  },
  {
    id: 'website',
    termEn: 'Website',
    termBn: 'ওয়েবসাইট',
    category: 'web',
    defEn: 'A collection of related web pages linked together under a common domain name.',
    defBn: 'একটি সাধারণ ডোমেইন নামের অধীনে একসাথে সংযুক্ত পরস্পর-সম্পর্কিত ওয়েব পেজের সমষ্টি।',
  },
  {
    id: 'html',
    termEn: 'HTML',
    termBn: 'এইচটিএমএল',
    category: 'markup',
    defEn: 'HyperText Markup Language — the standard language for creating the structure and content of web pages.',
    defBn: 'HyperText Markup Language — ওয়েব পেজের কাঠামো ও কন্টেন্ট তৈরির মানক ভাষা।',
  },
  {
    id: 'tag',
    termEn: 'Tag',
    termBn: 'ট্যাগ',
    category: 'markup',
    defEn: 'Keywords enclosed in angle brackets that define HTML elements. e.g., p, h1, table.',
    defBn: 'কোণ বন্ধনীর মধ্যে আবদ্ধ কীওয়ার্ড যা HTML এলিমেন্ট নির্ধারণ করে। যেমন: p, h1, table।',
  },
  {
    id: 'container-tag',
    termEn: 'Container Tag',
    termBn: 'কন্টেইনার ট্যাগ',
    category: 'markup',
    defEn: 'A tag that requires both an opening tag and a closing tag. e.g., p content /p.',
    defBn: 'এমন ট্যাগ যার একটি শুরু এবং একটি শেষ ট্যাগ প্রয়োজন। যেমন: p কন্টেন্ট /p।',
  },
  {
    id: 'empty-tag',
    termEn: 'Empty Tag',
    termBn: 'এম্পটি ট্যাগ / শূন্য ট্যাগ',
    category: 'markup',
    defEn: 'A tag that does not require a closing tag and has no content. e.g., br, hr, img, input.',
    defBn: 'এমন ট্যাগ যার বন্ধ করার ট্যাগ বা কন্টেন্ট প্রয়োজন হয় না। যেমন: br, hr, img, input।',
  },
  {
    id: 'attribute',
    termEn: 'Attribute',
    termBn: 'অ্যাট্রিবিউট',
    category: 'markup',
    defEn: 'Additional properties added to HTML tags to configure their behavior. e.g., href in a, src in img.',
    defBn: 'HTML ট্যাগে যোগ করা অতিরিক্ত বৈশিষ্ট্য যা তার আচরণ নির্ধারণ করে। যেমন: a-তে href, img-তে src।',
  },
  {
    id: 'css',
    termEn: 'CSS',
    termBn: 'সিএসএস',
    category: 'web',
    defEn: 'Cascading Style Sheets — a language used to describe the visual presentation (style) of HTML elements.',
    defBn: 'Cascading Style Sheets — HTML এলিমেন্টের দৃশ্যমান উপস্থাপনা (স্টাইল) বর্ণনার ভাষা।',
  },
  {
    id: 'url',
    termEn: 'URL',
    termBn: 'ইউআরএল',
    category: 'internet',
    defEn: 'Uniform Resource Locator — the complete web address used to access a specific resource on the internet.',
    defBn: 'Uniform Resource Locator — ইন্টারনেটে একটি নির্দিষ্ট রিসোর্স অ্যাক্সেস করার সম্পূর্ণ ওয়েব ঠিকানা।',
  },
  {
    id: 'http-https',
    termEn: 'HTTP / HTTPS',
    termBn: 'এইচটিটিপি / এইচটিটিপিএস',
    category: 'internet',
    defEn: 'HyperText Transfer Protocol (Secure) — the protocol for transferring data between web browsers and servers.',
    defBn: 'HyperText Transfer Protocol (Secure) — ওয়েব ব্রাউজার ও সার্ভারের মধ্যে ডেটা স্থানান্তরের প্রোটোকল।',
  },
  {
    id: 'domain-name',
    termEn: 'Domain Name',
    termBn: 'ডোমেইন নাম',
    category: 'internet',
    defEn: 'A human-readable address for a website, e.g., google.com. It maps to an IP address via DNS.',
    defBn: 'ওয়েবসাইটের মানব-পাঠযোগ্য ঠিকানা, যেমন google.com। DNS এর মাধ্যমে এটি IP ঠিকানায় রূপান্তরিত হয়।',
  },
  {
    id: 'web-server',
    termEn: 'Web Server',
    termBn: 'ওয়েব সার্ভার',
    category: 'internet',
    defEn: 'A computer that stores web files and sends them to users when requested via HTTP.',
    defBn: 'এমন একটি কম্পিউটার যা ওয়েব ফাইল সংরক্ষণ করে এবং HTTP এর মাধ্যমে ব্যবহারকারীর অনুরোধে পাঠায়।',
  },
  {
    id: 'web-browser',
    termEn: 'Web Browser',
    termBn: 'ওয়েব ব্রাউজার',
    category: 'internet',
    defEn: 'Software that interprets HTML, CSS, and JavaScript to display web pages. e.g., Chrome, Firefox.',
    defBn: 'সফটওয়্যার যা HTML, CSS ও JavaScript ব্যাখ্যা করে ওয়েব পেজ প্রদর্শন করে। যেমন: Chrome, Firefox।',
  },
  {
    id: 'hyperlink',
    termEn: 'Hyperlink',
    termBn: 'হাইপারলিঙ্ক',
    category: 'web',
    defEn: 'A clickable link in a web page that navigates to another page or resource, created using the a tag.',
    defBn: 'ওয়েব পেজে ক্লিকযোগ্য লিঙ্ক যা অন্য পেজে বা রিসোর্সে নিয়ে যায়, a ট্যাগ দিয়ে তৈরি।',
  },
  {
    id: 'rowspan',
    termEn: 'rowspan',
    termBn: 'রোস্প্যান',
    category: 'table',
    defEn: 'An HTML table attribute that merges a cell vertically across multiple rows. e.g., rowspan="2".',
    defBn: 'HTML টেবিলের অ্যাট্রিবিউট যা একটি সেলকে উল্লম্বভাবে একাধিক সারিতে বিস্তৃত করে। যেমন: rowspan="2"।',
  },
  {
    id: 'colspan',
    termEn: 'colspan',
    termBn: 'কলস্প্যান',
    category: 'table',
    defEn: 'An HTML table attribute that merges a cell horizontally across multiple columns. e.g., colspan="3".',
    defBn: 'HTML টেবিলের অ্যাট্রিবিউট যা একটি সেলকে অনুভূমিকভাবে একাধিক কলামে বিস্তৃত করে। যেমন: colspan="3"।',
  },
  {
    id: 'ip-address',
    termEn: 'IP Address',
    termBn: 'আইপি অ্যাড্রেস',
    category: 'internet',
    defEn: 'Internet Protocol Address — a unique numerical label assigned to each device connected to the internet.',
    defBn: 'Internet Protocol Address — ইন্টারনেটে সংযুক্ত প্রতিটি ডিভাইসের অনন্য সংখ্যাসূচক পরিচয়চিহ্ন।',
  },
  {
    id: 'www',
    termEn: 'WWW',
    termBn: 'ডব্লিউডব্লিউডব্লিউ',
    category: 'internet',
    defEn: 'World Wide Web — a system of interlinked hypertext documents accessed via the internet using web browsers.',
    defBn: 'World Wide Web — ইন্টারনেটের মাধ্যমে ওয়েব ব্রাউজার দিয়ে অ্যাক্সেসযোগ্য পরস্পর-সংযুক্ত হাইপারটেক্সট ডকুমেন্টের ব্যবস্থা।',
  },
  {
    id: 'static-web-page',
    termEn: 'Static Web Page',
    termBn: 'স্ট্যাটিক ওয়েব পেজ',
    category: 'web',
    defEn: 'A web page whose content is fixed and does not change unless the HTML file itself is edited.',
    defBn: 'এমন ওয়েব পেজ যার কন্টেন্ট নির্দিষ্ট এবং HTML ফাইল সম্পাদনা ছাড়া পরিবর্তন হয় না।',
  },
  {
    id: 'dynamic-web-page',
    termEn: 'Dynamic Web Page',
    termBn: 'ডায়নামিক ওয়েব পেজ',
    category: 'web',
    defEn: 'A web page that generates content dynamically based on user interaction, database queries, or server-side scripts.',
    defBn: 'এমন ওয়েব পেজ যা ব্যবহারকারীর ইন্টারঅ্যাকশন, ডেটাবেজ কুয়েরি বা সার্ভার-সাইড স্ক্রিপ্টের উপর ভিত্তি করে গতিশীলভাবে কন্টেন্ট তৈরি করে।',
  },
];
