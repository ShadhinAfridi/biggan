// html-runner/data/html-tags.js
// Comprehensive Encyclopedia of ALL HTML5 Elements, Attributes, Usages, and Best Practices

export const HTML_CATEGORIES = [
  { id: 'all', nameEn: 'All Elements', nameBn: 'সকল ট্যাগ' },
  { id: 'hsc', nameEn: 'HSC Chapter 4 (NCTB)', nameBn: 'এইচএসসি ৪র্থ অধ্যায়' },
  { id: 'metadata', nameEn: 'Document & Metadata', nameBn: 'ডকুমেন্ট ও মেটাডাটা' },
  { id: 'sections', nameEn: 'Sections & Layout', nameBn: 'সেকশন ও লেআউট' },
  { id: 'grouping', nameEn: 'Content Grouping', nameBn: 'কন্টেন্ট গ্রুপিং' },
  { id: 'text', nameEn: 'Text-Level Semantics', nameBn: 'টেক্সট ফরম্যাটিং' },
  { id: 'media', nameEn: 'Multimedia & Embedded', nameBn: 'মাল্টিমিডিয়া ও মিডিয়া' },
  { id: 'graphics', nameEn: 'SVG & Graphics', nameBn: 'গ্রাফিক্স ও ক্যানভাস' },
  { id: 'tables', nameEn: 'Tables (Tabular Data)', nameBn: 'টেবিল ও গ্রিড' },
  { id: 'forms', nameEn: 'Forms & User Inputs', nameBn: 'ফর্ম ও ইনপুট' },
  { id: 'interactive', nameEn: 'Interactive & Modals', nameBn: 'ইন্টারেক্টিভ ও ডায়ালগ' },
  { id: 'deprecated', nameEn: 'Deprecated & Obsolete', nameBn: 'বাতিলকৃত ট্যাগ' }
];

export const HTML_TAGS = [
  // 1. DOCUMENT & ROOT METADATA
  {
    tag: '<!DOCTYPE html>',
    name: 'Document Type Declaration',
    category: 'metadata',
    syntax: 'void',
    description: 'Informs the browser that this document is written in HTML5. Must appear as the very first line before the opening <html> tag to trigger standards rendering mode instead of quirks mode.',
    attributes: [],
    a11yNotes: 'Essential for ensuring consistent cross-browser CSS styling and modern accessibility APIs.',
    exampleCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML5 Standard Page</title>
</head>
<body>
  <h1>Standard Mode Activated</h1>
  <p>Rendered according to W3C / WHATWG HTML5 standards.</p>
</body>
</html>`
  },
  {
    tag: '<html>',
    name: 'Root Element',
    category: 'metadata',
    syntax: 'pair',
    description: 'The top-level container for an HTML document. All other elements must be descendants of this element.',
    attributes: [
      { name: 'lang', desc: 'Specifies the natural language of the document (e.g. "en", "bn", "es"). Critical for screen readers and search engines.' },
      { name: 'dir', desc: 'Sets text direction: "ltr" (left-to-right) or "rtl" (right-to-left).' }
    ],
    a11yNotes: 'Always provide a valid lang attribute on <html> so screen readers pronounce text with the correct accents and phonetics.',
    exampleCode: `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <title>Root Element Example</title>
</head>
<body>
  <p>This entire document belongs to the root &lt;html&gt; element.</p>
</body>
</html>`
  },
  {
    tag: '<head>',
    name: 'Document Metadata Container',
    category: 'metadata',
    syntax: 'pair',
    description: 'Contains machine-readable information (metadata) about the document, including its title, scripts, styles, and meta tags. Not directly rendered to the page view.',
    attributes: [],
    a11yNotes: 'Must contain an informative <title> tag for screen readers to announce page switches.',
    exampleCode: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title Inside Head</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
  </style>
</head>`
  },
  {
    tag: '<title>',
    name: 'Document Title',
    category: 'metadata',
    syntax: 'pair',
    description: 'Defines the title of the document shown in browser tabs, search engine results pages (SERPs), and bookmarks.',
    attributes: [],
    a11yNotes: 'The title is the very first piece of information read aloud by screen readers upon opening a page.',
    exampleCode: `<title>Dashboard | Biggan Educational Tools</title>`
  },
  {
    tag: '<base>',
    name: 'Base URL',
    category: 'metadata',
    syntax: 'void',
    description: 'Specifies the base URL and target for all relative URLs in a document. Only one <base> element is permitted per document.',
    attributes: [
      { name: 'href', desc: 'The base URL for resolving relative links.' },
      { name: 'target', desc: 'Default target for hyperlinks (_blank, _self, etc.).' }
    ],
    a11yNotes: 'Ensure target="_blank" is used carefully so users are not disoriented by unexpected new windows.',
    exampleCode: `<base href="https://example.com/assets/" target="_blank">
<!-- Any relative URL like <img src="logo.png"> will resolve to https://example.com/assets/logo.png -->`
  },
  {
    tag: '<link>',
    name: 'External Resource Link',
    category: 'metadata',
    syntax: 'void',
    description: 'Specifies relationships between the current document and an external resource (e.g. stylesheets, favicons, preconnect hints).',
    attributes: [
      { name: 'rel', desc: 'Relationship type (stylesheet, icon, preconnect, canonical).' },
      { name: 'href', desc: 'URL of the linked resource.' },
      { name: 'type', desc: 'MIME type (e.g. "text/css").' },
      { name: 'media', desc: 'Media query for conditional loading (e.g. "print").' }
    ],
    a11yNotes: 'Ensure high contrast stylesheets are properly referenced if alternate styles are offered.',
    exampleCode: `<link rel="stylesheet" href="styles.css">
<link rel="icon" type="image/svg+xml" href="favicon.svg">`
  },
  {
    tag: '<meta>',
    name: 'Document Metadata',
    category: 'metadata',
    syntax: 'void',
    description: 'Represents various types of metadata that cannot be expressed with title, base, link, style, or script.',
    attributes: [
      { name: 'charset', desc: 'Character encoding (standard is "UTF-8").' },
      { name: 'name', desc: 'Name of the metadata property (viewport, description, keywords, author).' },
      { name: 'content', desc: 'Value associated with the name or http-equiv.' },
      { name: 'http-equiv', desc: 'Simulates HTTP response headers (e.g. "refresh", "content-security-policy").' }
    ],
    a11yNotes: 'Never use user-scalable=no in the viewport meta tag; disabling zoom violates WCAG 1.4.4.',
    exampleCode: `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="A complete guide to HTML and CSS tags.">`
  },
  {
    tag: '<style>',
    name: 'Internal Stylesheet',
    category: 'metadata',
    syntax: 'pair',
    description: 'Contains internal CSS rules applied to the document.',
    attributes: [
      { name: 'media', desc: 'Media query targeting specific devices (all, screen, print).' }
    ],
    a11yNotes: 'Ensure color contrast meets WCAG AA (at least 4.5:1 for standard text).',
    exampleCode: `<style>
  body {
    background-color: #0f172a;
    color: #f8fafc;
    font-family: system-ui, sans-serif;
    padding: 2rem;
  }
  .highlight { color: #38bdf8; font-weight: 600; }
</style>
<p class="highlight">Styled with internal CSS!</p>`
  },
  {
    tag: '<script>',
    name: 'Executable Script',
    category: 'metadata',
    syntax: 'pair',
    description: 'Embeds or references executable client-side JavaScript code.',
    attributes: [
      { name: 'src', desc: 'URL of external script file.' },
      { name: 'type', desc: 'Script type (default is "text/javascript", or "module" for ES6 modules).' },
      { name: 'async', desc: 'Executes script asynchronously as soon as it downloads.' },
      { name: 'defer', desc: 'Executes script in order after the HTML document has finished parsing.' }
    ],
    a11yNotes: 'Do not trigger unexpected focus shifts or keyboard traps inside scripts.',
    exampleCode: `<button id="btn" style="padding: 8px 16px; border-radius: 6px; background: #0284c7; color: #fff; border: 0; cursor: pointer;">
  Click Me
</button>
<p id="msg"></p>
<script>
  document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('msg').textContent = 'Button was clicked at ' + new Date().toLocaleTimeString();
  });
</script>`
  },
  {
    tag: '<noscript>',
    name: 'Fallback for Disabled Scripts',
    category: 'metadata',
    syntax: 'pair',
    description: 'Defines alternative HTML content to display if JavaScript is disabled or unsupported in the browser.',
    attributes: [],
    a11yNotes: 'Provides fallback functionality and notifications for users with disabled scripts or assistive tech.',
    exampleCode: `<noscript>
  <div style="padding: 12px; background: #fee2e2; color: #b91c1c; border-radius: 6px;">
    ⚠️ JavaScript is disabled in your browser. Some interactive features may not function.
  </div>
</noscript>`
  },
  {
    tag: '<template>',
    name: 'Content Template',
    category: 'metadata',
    syntax: 'pair',
    description: 'Holds client-side content that is NOT rendered when the page loads, but can be instantiated and inserted into the DOM dynamically using JavaScript.',
    attributes: [],
    a11yNotes: 'Ensure elements cloned from templates are announced by screen readers when appended to live regions.',
    exampleCode: `<template id="card-template">
  <div style="border: 1px solid #38bdf8; padding: 12px; border-radius: 8px; margin: 8px 0;">
    <h4 style="margin: 0; color: #0284c7;">Template Card</h4>
    <p style="margin: 4px 0;">Cloned and stamped into DOM!</p>
  </div>
</template>
<button onclick="stampTemplate()" style="padding: 6px 12px; cursor: pointer;">Stamp Template</button>
<div id="container"></div>
<script>
  function stampTemplate() {
    const tpl = document.getElementById('card-template');
    const clone = tpl.content.cloneNode(true);
    document.getElementById('container').appendChild(clone);
  }
</script>`
  },
  {
    tag: '<slot>',
    name: 'Web Component Slot',
    category: 'metadata',
    syntax: 'pair',
    description: 'A placeholder inside a web component that you can fill with your own markup, creating separate DOM trees and presenting them together.',
    attributes: [
      { name: 'name', desc: 'Slot name for named slots within Shadow DOM.' }
    ],
    a11yNotes: 'Maintains accessibility tree inheritance within custom elements and shadow roots.',
    exampleCode: `<!-- Used inside Web Components Shadow DOM -->
<div class="card">
  <slot name="title">Default Title</slot>
  <slot>Default body text goes here.</slot>
</div>`
  },

  // 2. SECTIONS & LAYOUT ELEMENTS
  {
    tag: '<body>',
    name: 'Document Body',
    category: 'sections',
    syntax: 'pair',
    description: 'Represents the entire renderable content of an HTML document. All visual elements, text, and media must reside inside <body>.',
    attributes: [],
    a11yNotes: 'Ensure a logical layout hierarchy starts immediately within the body.',
    exampleCode: `<body>
  <header><h1>Site Header</h1></header>
  <main><p>Core content lives here.</p></main>
  <footer><small>&copy; 2026</small></footer>
</body>`
  },
  {
    tag: '<header>',
    name: 'Header Container',
    category: 'sections',
    syntax: 'pair',
    description: 'Represents introductory content or a set of navigational links. Can be used for the page header or inside an <article> or <section>.',
    attributes: [],
    a11yNotes: 'Has an implicit ARIA role of "banner" when placed at the top level of <body>.',
    exampleCode: `<header style="background: #1e293b; color: white; padding: 16px; border-radius: 8px;">
  <h2 style="margin: 0;">Portal Title</h2>
  <p style="margin: 4px 0; color: #94a3b8;">Learning HTML & CSS Semantics</p>
</header>`
  },
  {
    tag: '<nav>',
    name: 'Navigation Bar',
    category: 'sections',
    syntax: 'pair',
    description: 'Identifies a section of navigation links intended to direct users through the current page or across external destinations.',
    attributes: [],
    a11yNotes: 'Screen readers provide landmark navigation to jump straight to <nav>. Use aria-label if there are multiple <nav> elements.',
    exampleCode: `<nav aria-label="Main Navigation" style="display: flex; gap: 16px; padding: 12px; background: #0f172a; border-radius: 8px;">
  <a href="#home" style="color: #38bdf8; text-decoration: none;">Home</a>
  <a href="#tutorials" style="color: #cbd5e1; text-decoration: none;">Tutorials</a>
  <a href="#editor" style="color: #cbd5e1; text-decoration: none;">Runner</a>
</nav>`
  },
  {
    tag: '<main>',
    name: 'Main Content Landmark',
    category: 'sections',
    syntax: 'pair',
    description: 'Contains the central, unique content of the document body. Only ONE visible <main> element should exist per document.',
    attributes: [],
    a11yNotes: 'Essential landmark for keyboard and screen-reader users to skip repeated headers and navigation (Skip to Content).',
    exampleCode: `<main id="main-content" style="padding: 20px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
  <h2>Article of the Day</h2>
  <p>The primary topic unique to this specific page URL.</p>
</main>`
  },
  {
    tag: '<article>',
    name: 'Self-Contained Article',
    category: 'sections',
    syntax: 'pair',
    description: 'Represents a standalone composition in a document, page, application, or site, intended to be independently distributable or reusable (e.g. blog post, forum reply, product card).',
    attributes: [],
    a11yNotes: 'Should usually contain a heading (<h1>–<h6>) to identify the article title.',
    exampleCode: `<article style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 12px 0;">
  <header>
    <h3 style="margin-top: 0; color: #0f172a;">Understanding HTML5 Semantics</h3>
    <small style="color: #64748b;">Published: March 2026 by DevTeam</small>
  </header>
  <p>Semantic tags improve accessibility, SEO indexing, and maintainability.</p>
</article>`
  },
  {
    tag: '<section>',
    name: 'Thematic Section',
    category: 'sections',
    syntax: 'pair',
    description: 'Represents a generic standalone section of a document, which doesn\'t have a more specific semantic element to represent it. Typically includes a heading.',
    attributes: [],
    a11yNotes: 'Do not use <section> purely as a styling container; use <div> for layout hooks instead.',
    exampleCode: `<section style="padding: 16px; margin-bottom: 12px; background: #f1f5f9; border-radius: 8px;">
  <h3 style="margin-top: 0;">Feature Highlights</h3>
  <p>Overview of new features implemented in modern web standards.</p>
</section>`
  },
  {
    tag: '<aside>',
    name: 'Sidebar or Tangential Content',
    category: 'sections',
    syntax: 'pair',
    description: 'Represents a portion of a document whose content is only indirectly related to the document\'s main content (e.g. sidebars, callout boxes, related links).',
    attributes: [],
    a11yNotes: 'Announced as a landmark "complementary" by assistive technologies.',
    exampleCode: `<aside style="background: #e0f2fe; border-left: 4px solid #0284c7; padding: 12px 16px; border-radius: 4px; margin: 12px 0;">
  <strong style="color: #0369a1;">Pro Tip:</strong>
  <p style="margin: 4px 0; color: #0c4a6e;">Always pair &lt;aside&gt; with related side notes or glossary hints.</p>
</aside>`
  },
  {
    tag: '<footer>',
    name: 'Footer Container',
    category: 'sections',
    syntax: 'pair',
    description: 'Represents a footer for its nearest sectioning content or sectioning root element. Typically contains authorship, copyright, and contact details.',
    attributes: [],
    a11yNotes: 'Announced as the "contentinfo" landmark when used as the page footer.',
    exampleCode: `<footer style="text-align: center; padding: 16px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 0.875rem;">
  <p>&copy; 2026 Educational Web Sandbox. All rights reserved.</p>
  <p><a href="#terms" style="color: #0284c7;">Terms of Service</a> | <a href="#privacy" style="color: #0284c7;">Privacy Policy</a></p>
</footer>`
  },
  {
    tag: '<h1> to <h6>',
    name: 'Section Headings',
    category: 'sections',
    syntax: 'pair',
    description: 'Represents six levels of section headings. <h1> is the highest section level and <h6> is the lowest. Headings structure the document outline.',
    attributes: [],
    a11yNotes: 'Never skip heading levels (e.g. going from <h1> directly to <h3>). Screen reader users navigate pages primarily via headings.',
    exampleCode: `<h1>Heading 1 (Main Title)</h1>
<h2>Heading 2 (Primary Topic)</h2>
<h3>Heading 3 (Subtopic)</h3>
<h4>Heading 4 (Detailed Point)</h4>
<h5>Heading 5 (Minor Section)</h5>
<h6>Heading 6 (Deepest Level)</h6>`
  },
  {
    tag: '<hgroup>',
    name: 'Heading Group',
    category: 'sections',
    syntax: 'pair',
    description: 'Groups a heading (<h1>–<h6>) with secondary content like subheadings, taglines, or alternative titles.',
    attributes: [],
    a11yNotes: 'Ensures subheadings do not clutter or pollute the document outline with superfluous levels.',
    exampleCode: `<hgroup style="border-bottom: 2px solid #38bdf8; padding-bottom: 8px;">
  <h1 style="margin: 0; color: #0369a1;">Quantum Computing</h1>
  <p style="margin: 4px 0; color: #64748b;">Principles, Algorithms, and Future Perspectives</p>
</hgroup>`
  },
  {
    tag: '<address>',
    name: 'Contact Information',
    category: 'sections',
    syntax: 'pair',
    description: 'Indicates that the enclosed HTML provides contact information for a person, people, or organization.',
    attributes: [],
    a11yNotes: 'Must not be used for generic postal addresses unless it represents the contact information for the document author/owner.',
    exampleCode: `<address style="font-style: normal; line-height: 1.6; border-left: 3px solid #64748b; padding-left: 12px;">
  Written by <a href="mailto:support@biggan.me" style="color: #0284c7;">Afridi</a>.<br>
  Dhaka, Bangladesh.<br>
  Website: <a href="https://biggan.me" style="color: #0284c7;">biggan.me</a>
</address>`
  },

  // 3. GROUPING CONTENT
  {
    tag: '<p>',
    name: 'Paragraph Element',
    category: 'grouping',
    syntax: 'pair',
    description: 'Represents a paragraph of text. Browsers automatically add vertical margin before and after paragraphs.',
    attributes: [],
    a11yNotes: 'Never wrap block elements like <div> or <table> inside a <p> tag (invalid HTML5).',
    exampleCode: `<p>This is the first paragraph. Web standards define clean, readable typography.</p>
<p>This is a second paragraph separated by browser default margin.</p>`
  },
  {
    tag: '<hr>',
    name: 'Thematic Break / Horizontal Rule',
    category: 'grouping',
    syntax: 'void',
    description: 'Represents a thematic break between paragraph-level elements (e.g. a change of scene in a story, or a shift of topic within a section).',
    attributes: [],
    a11yNotes: 'Screen readers announce <hr> as a "separator".',
    exampleCode: `<p>Topic A concluded here.</p>
<hr style="border: none; border-top: 2px dashed #94a3b8; margin: 20px 0;">
<p>Topic B begins with a new context.</p>`
  },
  {
    tag: '<pre>',
    name: 'Preformatted Text',
    category: 'grouping',
    syntax: 'pair',
    description: 'Represents preformatted text which is to be presented exactly as written in the HTML file, preserving spaces, tabs, and line breaks.',
    attributes: [],
    a11yNotes: 'Often paired with <code> for accessible syntax blocks.',
    exampleCode: `<pre style="background: #1e293b; color: #38bdf8; padding: 12px; border-radius: 6px; font-family: monospace;">
function calculateGPA(marks) {
  if (marks >= 80) return 5.00;
  if (marks >= 70) return 4.00;
  return 0.00;
}
</pre>`
  },
  {
    tag: '<blockquote>',
    name: 'Block Quotation',
    category: 'grouping',
    syntax: 'pair',
    description: 'Indicates that the enclosed text is an extended quotation from another source.',
    attributes: [
      { name: 'cite', desc: 'A URL that designates a source document or message for the quote.' }
    ],
    a11yNotes: 'Use <cite> inside the blockquote or in an adjacent paragraph to attribute the author.',
    exampleCode: `<blockquote cite="https://en.wikipedia.org/wiki/Tim_Berners-Lee" style="border-left: 4px solid #0284c7; margin: 16px 0; padding: 8px 16px; background: #f8fafc; font-style: italic;">
  "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect."
  <footer style="margin-top: 8px; font-style: normal; font-size: 0.85rem; color: #64748b;">— Sir Tim Berners-Lee</footer>
</blockquote>`
  },
  {
    tag: '<ol>',
    name: 'Ordered List',
    category: 'grouping',
    syntax: 'pair',
    description: 'Represents an ordered list of items, typically rendered as a numbered or alphabetical list.',
    attributes: [
      { name: 'type', desc: 'Numbering type: "1" (decimal), "a" (lowercase latin), "A" (uppercase latin), "i" (lowercase roman), "I" (uppercase roman).' },
      { name: 'start', desc: 'An integer to start counting from.' },
      { name: 'reversed', desc: 'Boolean attribute to number items in descending order.' }
    ],
    a11yNotes: 'Screen readers announce total item count and item position (e.g. "Item 1 of 3").',
    exampleCode: `<ol type="I" start="1" style="padding-left: 20px; line-height: 1.8;">
  <li>Foundational HTML Elements</li>
  <li>CSS Flexbox and Grid Layouts</li>
  <li>Client-Side Scripting Integration</li>
</ol>`
  },
  {
    tag: '<ul>',
    name: 'Unordered List',
    category: 'grouping',
    syntax: 'pair',
    description: 'Represents an unordered list of items, typically rendered as a bulleted list.',
    attributes: [],
    a11yNotes: 'Use for navigation links, feature sets, and unordered collections so assistive tech can enumerate them.',
    exampleCode: `<ul style="list-style-type: square; padding-left: 20px; line-height: 1.8;">
  <li>Fast compilation</li>
  <li>Zero dependencies</li>
  <li>Fully responsive design</li>
</ul>`
  },
  {
    tag: '<li>',
    name: 'List Item',
    category: 'grouping',
    syntax: 'pair',
    description: 'Represents an item in a list. Must be contained within an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>).',
    attributes: [
      { name: 'value', desc: 'An integer defining the current ordinal value when inside an <ol>.' }
    ],
    a11yNotes: 'Should always have an <ol>, <ul>, or <menu> as its parent.',
    exampleCode: `<ul>
  <li>Standard item</li>
  <li style="color: #0284c7; font-weight: bold;">Highlighted list item</li>
</ul>`
  },
  {
    tag: '<dl>, <dt>, <dd>',
    name: 'Description List',
    category: 'grouping',
    syntax: 'pair',
    description: '<dl> represents a description list, <dt> specifies a term/name, and <dd> specifies the definition/value.',
    attributes: [],
    a11yNotes: 'Perfect for glossaries, metadata key-value pairs, or question-and-answer pairs.',
    exampleCode: `<dl style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; background: #fff;">
  <dt style="font-weight: bold; color: #0284c7;">HTML</dt>
  <dd style="margin: 0 0 12px 16px; color: #475569;">HyperText Markup Language — the structure of the web.</dd>
  <dt style="font-weight: bold; color: #0284c7;">CSS</dt>
  <dd style="margin: 0 0 0 16px; color: #475569;">Cascading Style Sheets — presentation, styling, and animations.</dd>
</dl>`
  },
  {
    tag: '<figure> & <figcaption>',
    name: 'Figure with Caption',
    category: 'grouping',
    syntax: 'pair',
    description: '<figure> represents self-contained content, frequently with a caption (<figcaption>), referred to as a single unit (photos, illustrations, diagrams, code listings).',
    attributes: [],
    a11yNotes: '<figcaption> is programmatically linked as the accessible description for assistive technologies.',
    exampleCode: `<figure style="margin: 0; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; text-align: center; background: #f8fafc;">
  <div style="height: 120px; background: linear-gradient(135deg, #0284c7, #38bdf8); border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
    Figure Visual Demo
  </div>
  <figcaption style="margin-top: 8px; font-size: 0.85rem; color: #64748b;">Figure 1.1: Gradient abstraction container.</figcaption>
</figure>`
  },
  {
    tag: '<div>',
    name: 'Generic Division Container',
    category: 'grouping',
    syntax: 'pair',
    description: 'Generic container with no inherent semantic meaning. Used solely as a grouping element for CSS styling or DOM manipulation.',
    attributes: [
      { name: 'class', desc: 'CSS class name(s).' },
      { name: 'id', desc: 'Unique document identifier.' }
    ],
    a11yNotes: 'Only use <div> when no semantic element (<header>, <nav>, <article>, <section>, <aside>, <main>) is applicable.',
    exampleCode: `<div style="display: flex; gap: 12px;">
  <div style="flex: 1; padding: 16px; background: #e0f2fe; border-radius: 8px;">Card 1</div>
  <div style="flex: 1; padding: 16px; background: #fef08a; border-radius: 8px;">Card 2</div>
</div>`
  },

  // 4. TEXT-LEVEL SEMANTICS
  {
    tag: '<a>',
    name: 'Hyperlink (Anchor)',
    category: 'text',
    syntax: 'pair',
    description: 'Creates a hyperlink to web pages, files, email addresses, locations within the same page, or any other URL.',
    attributes: [
      { name: 'href', desc: 'The target destination URL.' },
      { name: 'target', desc: '_blank, _self, _parent, _top.' },
      { name: 'rel', desc: 'Relationship: "noopener noreferrer" recommended when using target="_blank".' },
      { name: 'download', desc: 'Prompts the browser to download the linked URL as a local file.' }
    ],
    a11yNotes: 'Provide meaningful link text; avoid vague words like "click here" or "read more".',
    exampleCode: `<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
  Visit MDN Web Docs (opens in new tab)
</a>`
  },
  {
    tag: '<em> & <strong>',
    name: 'Emphasis & Strong Importance',
    category: 'text',
    syntax: 'pair',
    description: '<em> marks stress emphasis that changes the meaning of a sentence (rendered italic). <strong> indicates strong importance, seriousness, or urgency (rendered bold).',
    attributes: [],
    a11yNotes: 'Screen readers alter pitch and stress when encountering <em> and <strong>.',
    exampleCode: `<p>You <em>must</em> submit your project by <strong>Friday midnight</strong>!</p>`
  },
  {
    tag: '<small>',
    name: 'Side Comments / Small Print',
    category: 'text',
    syntax: 'pair',
    description: 'Represents side-comments and small print, including copyright and legal text, independent of its styled presentation.',
    attributes: [],
    a11yNotes: 'Renders smaller text by default, but carries semantic meaning for disclaimers.',
    exampleCode: `<p>Annual subscription: $99 <small style="color: #64748b;">(tax not included, auto-renews)</small></p>`
  },
  {
    tag: '<s>',
    name: 'Strikethrough / Inaccurate Text',
    category: 'text',
    syntax: 'pair',
    description: 'Represents things that are no longer relevant or no longer accurate (e.g. discounted pricing or crossed-out tasks).',
    attributes: [],
    a11yNotes: 'For document edits and additions/deletions, use <del> and <ins> instead of <s>.',
    exampleCode: `<p>Regular Price: <s>$150</s> <strong>Sale: $99</strong></p>`
  },
  {
    tag: '<cite> & <q>',
    name: 'Citation & Inline Quotation',
    category: 'text',
    syntax: 'pair',
    description: '<cite> marks the title of a creative work (book, film, song, painting). <q> indicates an inline short quotation.',
    attributes: [
      { name: 'cite (on <q>)', desc: 'URL citing the source.' }
    ],
    a11yNotes: 'Browsers automatically enclose <q> elements within proper language-specific quote marks.',
    exampleCode: `<p>According to <cite>HTML & CSS: Design and Build Websites</cite>, <q>structure precedes presentation</q>.</p>`
  },
  {
    tag: '<dfn>',
    name: 'Definition Term',
    category: 'text',
    syntax: 'pair',
    description: 'Indicates the term being defined within the context of a definition phrase or sentence.',
    attributes: [],
    a11yNotes: 'Assists screen readers in indexing and defining vocabulary terms.',
    exampleCode: `<p>A <dfn style="font-weight: bold; color: #0284c7;">Responsive Web Design</dfn> is an approach to web development that makes web pages render well on a variety of devices.</p>`
  },
  {
    tag: '<abbr>',
    name: 'Abbreviation / Acronym',
    category: 'text',
    syntax: 'pair',
    description: 'Represents an abbreviation or acronym. An optional title attribute can provide an expansion or description.',
    attributes: [
      { name: 'title', desc: 'The full spelled-out description of the abbreviation.' }
    ],
    a11yNotes: 'Assistive tech can read the title attribute aloud to explain the acronym.',
    exampleCode: `<p>We are mastering <abbr title="HyperText Markup Language" style="text-decoration: underline dotted; cursor: help;">HTML</abbr> and <abbr title="Cascading Style Sheets" style="text-decoration: underline dotted; cursor: help;">CSS</abbr>.</p>`
  },
  {
    tag: '<ruby>, <rt>, <rp>',
    name: 'Ruby Annotations (East Asian Phonetics)',
    category: 'text',
    syntax: 'pair',
    description: '<ruby> represents small annotations rendered above or adjacent to base text, typically used for pronunciation guides in East Asian typography (Furigana / Pinyin).',
    attributes: [],
    a11yNotes: '<rp> provides parenthesis fallbacks for browsers that lack ruby rendering.',
    exampleCode: `<ruby style="font-size: 1.5rem;">
  漢 <rp>(</rp><rt>かん</rt><rp>)</rp>
  字 <rp>(</rp><rt>じ</rt><rp>)</rp>
</ruby>`
  },
  {
    tag: '<data> & <time>',
    name: 'Machine-Readable Data & Time',
    category: 'text',
    syntax: 'pair',
    description: '<data> links human content with machine-readable translations. <time> represents a specific period in time or a date.',
    attributes: [
      { name: 'value (on <data>)', desc: 'Machine-readable value.' },
      { name: 'datetime (on <time>)', desc: 'Standard ISO 8601 date-time string (e.g. "2026-03-15T09:00").' }
    ],
    a11yNotes: 'Allows calendar software and search engines to parse exact dates and schedules.',
    exampleCode: `<p>Conference kicks off on <time datetime="2026-09-15T09:00" style="color: #0284c7; font-weight: bold;">September 15, 2026</time>.</p>
<p>Part number: <data value="SKU-89421">Elite Laptop Stand</data></p>`
  },
  {
    tag: '<code>, <var>, <samp>, <kbd>',
    name: 'Computer Code & User Input',
    category: 'text',
    syntax: 'pair',
    description: '<code> indicates computer code snippet. <var> represents a mathematical variable. <samp> denotes sample computer output. <kbd> denotes user keyboard input.',
    attributes: [],
    a11yNotes: 'Provides semantic distinction between code, variables, screen output, and keyboard keys.',
    exampleCode: `<p>Press <kbd style="background: #e2e8f0; border: 1px solid #94a3b8; border-radius: 4px; padding: 2px 6px;">Ctrl</kbd> + <kbd style="background: #e2e8f0; border: 1px solid #94a3b8; border-radius: 4px; padding: 2px 6px;">Enter</kbd> to run the code.</p>
<p>Formula: <var>E</var> = <var>m</var><var>c</var><sup>2</sup></p>
<p>Terminal output: <samp style="color: #10b981;">Execution completed: 0 errors</samp></p>`
  },
  {
    tag: '<sub> & <sup>',
    name: 'Subscript & Superscript',
    category: 'text',
    syntax: 'pair',
    description: '<sub> specifies subscript text (aligned slightly below baseline, e.g. chemical formulas). <sup> specifies superscript text (aligned above baseline, e.g. mathematical exponents).',
    attributes: [],
    a11yNotes: 'Use CSS font-variant-numeric or aria-labels for complex mathematical reading if needed.',
    exampleCode: `<p>Water chemical formula: H<sub>2</sub>O</p>
<p>Pythagorean theorem: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>`
  },
  {
    tag: '<i>, <b>, <u>',
    name: 'Stylistic Offset / Alternate Voice',
    category: 'text',
    syntax: 'pair',
    description: '<i> represents text in an alternate voice or mood (e.g. taxonomic designations, technical terms). <b> draws attention without conveying extra importance. <u> represents an unarticulated annotation (e.g. proper names in Chinese, misspelled words).',
    attributes: [],
    a11yNotes: 'Use <em> and <strong> for actual emphasis and semantic importance. Prefer CSS for pure visual decoration.',
    exampleCode: `<p>Species: <i>Homo sapiens</i> (Latin name).</p>
<p>The first <b>keyword</b> in the sentence is bolded for visual scanning.</p>
<p>Check for <u style="text-decoration-color: #ef4444; text-decoration-style: wavy;">mispeled</u> words.</p>`
  },
  {
    tag: '<mark>',
    name: 'Highlighted / Marked Text',
    category: 'text',
    syntax: 'pair',
    description: 'Represents text that is marked or highlighted for reference or notation purposes, typically due to relevance in another context (e.g. search term matches).',
    attributes: [],
    a11yNotes: 'Screen readers may not announce highlight colors automatically. Add text cues when color convey critical meaning.',
    exampleCode: `<p>Search results for "runner": The HTML <mark style="background: #fef08a; padding: 2px 4px; border-radius: 3px;">runner</mark> executes code instantly.</p>`
  },
  {
    tag: '<bdi> & <bdo>',
    name: 'Bidirectional Isolation & Override',
    category: 'text',
    syntax: 'pair',
    description: '<bdi> isolates a span of text that might be formatted in a different direction from other text outside it. <bdo> overrides the current directionality of text.',
    attributes: [
      { name: 'dir (on <bdo>)', desc: '"ltr" or "rtl" (required on <bdo>).' }
    ],
    a11yNotes: 'Crucial for multi-lingual websites rendering user names in Arabic, Hebrew, Urdu, or Bengali.',
    exampleCode: `<p>User <bdi>محمد</bdi>: 15 points</p>
<p>Reversed text: <bdo dir="rtl">This sentence reads in reverse.</bdo></p>`
  },
  {
    tag: '<span>',
    name: 'Generic Inline Container',
    category: 'text',
    syntax: 'pair',
    description: 'A generic inline container for phrasing content, which does not inherently represent anything. Used to group elements for styling purposes.',
    attributes: [],
    a11yNotes: 'Carries no semantic meaning. Use semantic elements (<strong>, <mark>, <time>) when possible.',
    exampleCode: `<p>Status: <span style="background: #dcfce7; color: #15803d; padding: 2px 8px; border-radius: 9999px; font-weight: bold; font-size: 0.8rem;">ACTIVE</span></p>`
  },
  {
    tag: '<br> & <wbr>',
    name: 'Line Break & Word Break Opportunity',
    category: 'text',
    syntax: 'void',
    description: '<br> produces a line break in text (carriage-return). <wbr> specifies a position in text where the browser may optionally break a line if necessary.',
    attributes: [],
    a11yNotes: 'Never use <br> to create vertical spacing between paragraphs; use CSS margins.',
    exampleCode: `<p>Address:<br>House #42, Road #7<br>Dhanmondi, Dhaka</p>
<p>Super<wbr>cali<wbr>fragi<wbr>listic<wbr>expiali<wbr>docious</p>`
  },

  // 5. MULTIMEDIA & EMBEDDED CONTENT
  {
    tag: '<img>',
    name: 'Image Embed',
    category: 'media',
    syntax: 'void',
    description: 'Embeds an image into the document.',
    attributes: [
      { name: 'src', desc: 'The image URL source (required).' },
      { name: 'alt', desc: 'Alternative text describing the image for screen readers and search engines (required).' },
      { name: 'width', desc: 'Intrinsic width in pixels (prevents layout shifts).' },
      { name: 'height', desc: 'Intrinsic height in pixels.' },
      { name: 'loading', desc: '"lazy" (defers offscreen loading) or "eager".' }
    ],
    a11yNotes: 'Always include the alt attribute. Decorative images should use alt="" to be safely ignored by screen readers.',
    exampleCode: `<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80" 
     alt="Coding laptop on wooden desk with coffee" 
     width="400" 
     height="250" 
     loading="lazy" 
     style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">`
  },
  {
    tag: '<picture> & <source>',
    name: 'Responsive Picture Element',
    category: 'media',
    syntax: 'pair',
    description: '<picture> wraps zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios (art direction & modern formats like WebP/AVIF).',
    attributes: [
      { name: 'srcset (on <source>)', desc: 'URLs of candidate images.' },
      { name: 'media (on <source>)', desc: 'Media condition query (e.g. "(min-width: 800px)").' },
      { name: 'type (on <source>)', desc: 'MIME type of resource (e.g. "image/webp").' }
    ],
    a11yNotes: 'The nested <img> must contain the canonical alt text.',
    exampleCode: `<picture>
  <source media="(min-width: 600px)" srcset="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800">
  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400" alt="Developer programming setup" style="width: 100%; border-radius: 8px;">
</picture>`
  },
  {
    tag: '<iframe>',
    name: 'Inline Frame (IFrame)',
    category: 'media',
    syntax: 'pair',
    description: 'Represents a nested browsing context, effectively embedding another HTML page into the current one.',
    attributes: [
      { name: 'src', desc: 'The URL of the embedded page.' },
      { name: 'title', desc: 'Accessible label describing the iframe content (required for a11y).' },
      { name: 'sandbox', desc: 'Applies security restrictions (allow-scripts, allow-same-origin, etc.).' },
      { name: 'loading', desc: '"lazy" or "eager".' }
    ],
    a11yNotes: 'Always supply an informative title attribute on <iframe> for screen readers.',
    exampleCode: `<iframe src="https://example.com" 
        title="Example External Website" 
        width="100%" 
        height="250" 
        sandbox="allow-scripts" 
        style="border: 1px solid #cbd5e1; border-radius: 8px;">
</iframe>`
  },
  {
    tag: '<video>',
    name: 'Video Player',
    category: 'media',
    syntax: 'pair',
    description: 'Embeds a media player which supports video playback in the document.',
    attributes: [
      { name: 'src', desc: 'URL of video file (or use nested <source>).' },
      { name: 'controls', desc: 'Displays default browser playback controls (play/pause/volume).' },
      { name: 'autoplay', desc: 'Automatically plays video (usually requires muted).' },
      { name: 'muted', desc: 'Mutes audio by default.' },
      { name: 'loop', desc: 'Replays automatically when ended.' },
      { name: 'poster', desc: 'Image thumbnail displayed before playback.' }
    ],
    a11yNotes: 'Always provide captions (<track kind="captions">) for deaf or hard-of-hearing users.',
    exampleCode: `<video controls width="100%" style="border-radius: 8px; max-width: 500px;">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>`
  },
  {
    tag: '<audio>',
    name: 'Audio Player',
    category: 'media',
    syntax: 'pair',
    description: 'Used to embed sound content in documents, such as music, podcasts, or sound effects.',
    attributes: [
      { name: 'controls', desc: 'Shows play/pause/volume controls.' },
      { name: 'src', desc: 'Audio source URL.' },
      { name: 'autoplay', desc: 'Plays audio upon loading (caution: disorienting to users).' },
      { name: 'loop', desc: 'Loops audio continuously.' }
    ],
    a11yNotes: 'Provide transcripts or descriptions for audible content.',
    exampleCode: `<audio controls style="width: 100%;">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`
  },
  {
    tag: '<track>',
    name: 'Timed Text Track (Captions & Subtitles)',
    category: 'media',
    syntax: 'void',
    description: 'Child element of <audio> and <video> that specifies timed text tracks (such as subtitles, captions, or descriptions) using WebVTT format (.vtt).',
    attributes: [
      { name: 'kind', desc: 'subtitles, captions, descriptions, chapters, metadata.' },
      { name: 'src', desc: 'URL of the .vtt track file.' },
      { name: 'srclang', desc: 'Language code (e.g. "en", "bn").' },
      { name: 'label', desc: 'User-visible title of the text track.' },
      { name: 'default', desc: 'Enables this track by default.' }
    ],
    a11yNotes: 'Crucial for WCAG Level A compliance.',
    exampleCode: `<video controls width="100%">
  <source src="sample.mp4" type="video/mp4">
  <track kind="captions" src="captions-en.vtt" srclang="en" label="English Captions" default>
</video>`
  },
  {
    tag: '<embed> & <object>',
    name: 'External Plugin / Object Embed',
    category: 'media',
    syntax: 'pair',
    description: '<embed> embeds external content (like PDF or third-party widgets). <object> represents external resources with fallback content.',
    attributes: [
      { name: 'data (on <object>)', desc: 'The address of the resource.' },
      { name: 'type', desc: 'MIME type (e.g. "application/pdf").' }
    ],
    a11yNotes: 'Provide inner fallback text inside <object> for unsupported clients.',
    exampleCode: `<object data="document.pdf" type="application/pdf" width="100%" height="200">
  <p>Alternative text: Your browser does not support PDFs. <a href="document.pdf">Download PDF</a></p>
</object>`
  },

  // 6. SVG & GRAPHICS
  {
    tag: '<svg>',
    name: 'Scalable Vector Graphics',
    category: 'graphics',
    syntax: 'pair',
    description: 'Container for XML-based 2D vector graphics that scale infinitely without pixelation or resolution degradation.',
    attributes: [
      { name: 'viewBox', desc: 'Defines the coordinate system min-x, min-y, width, height.' },
      { name: 'width', desc: 'Display width.' },
      { name: 'height', desc: 'Display height.' }
    ],
    a11yNotes: 'Add <title> inside <svg> and role="img" for accessible standalone graphics.',
    exampleCode: `<svg viewBox="0 0 200 100" width="200" height="100" role="img" aria-label="Blue and green shapes">
  <circle cx="50" cy="50" r="40" fill="#0284c7" />
  <rect x="110" y="10" width="80" height="80" rx="10" fill="#10b981" />
</svg>`
  },
  {
    tag: '<canvas>',
    name: '2D & 3D Scriptable Canvas',
    category: 'graphics',
    syntax: 'pair',
    description: 'A container used to draw graphics on the fly via client-side scripting (usually 2D canvas API or WebGL/WebGPU).',
    attributes: [
      { name: 'width', desc: 'Canvas width in pixels (default 300).' },
      { name: 'height', desc: 'Canvas height in pixels (default 150).' }
    ],
    a11yNotes: 'Content inside the <canvas> tags serves as fallback for non-supporting browsers.',
    exampleCode: `<canvas id="demoCanvas" width="300" height="120" style="border: 1px solid #cbd5e1; border-radius: 6px;"></canvas>
<script>
  const canvas = document.getElementById('demoCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#0284c7';
  ctx.fillRect(20, 20, 100, 80);
  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.arc(200, 60, 40, 0, Math.PI * 2);
  ctx.fill();
</script>`
  },
  {
    tag: '<math>',
    name: 'MathML Container',
    category: 'graphics',
    syntax: 'pair',
    description: 'The top-level element for Mathematical Markup Language (MathML) expressions, supported natively in modern HTML5 browsers.',
    attributes: [],
    a11yNotes: 'Allows screen readers to accurately verbalize complex fractions, square roots, and matrices.',
    exampleCode: `<math display="block">
  <mrow>
    <mi>x</mi>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mo>−</mo>
        <mi>b</mi>
        <mo>±</mo>
        <msqrt>
          <msup><mi>b</mi><mn>2</mn></msup>
          <mo>−</mo>
          <mn>4</mn><mi>a</mi><mi>c</mi>
        </msqrt>
      </mrow>
      <mrow>
        <mn>2</mn><mi>a</mi>
      </mrow>
    </mfrac>
  </mrow>
</math>`
  },

  // 7. TABULAR DATA (TABLES)
  {
    tag: '<table>',
    name: 'Data Table Container (HSC Board Core)',
    category: 'tables',
    isHscChapter4: true,
    syntax: 'pair',
    description: 'Represents tabular data in a 2D grid of rows and columns. Heavily tested in HSC ICT Chapter 4.',
    attributes: [
      { name: 'border', desc: 'Sets border thickness in pixels (e.g., border="1" or "2"). Frequently asked in board exams.' },
      { name: 'cellpadding', desc: 'Sets space between the cell border and cell content in pixels (e.g., cellpadding="10").' },
      { name: 'cellspacing', desc: 'Sets distance between adjacent table cells in pixels (e.g., cellspacing="0").' },
      { name: 'width / height', desc: 'Sets table dimensions in pixels or percentages (e.g., width="100%" or "400").' },
      { name: 'bgcolor', desc: 'Sets background color of the table using color names or hex codes (e.g., bgcolor="#f8fafc").' },
      { name: 'align', desc: 'Sets horizontal alignment of table on the page: "left", "center", "right".' }
    ],
    a11yNotes: 'Tables should ONLY be used for structured data, NEVER for webpage layouts. Use <caption> for screen reader context.',
    exampleCode: `<table border="2" cellpadding="8" cellspacing="2" align="center" bgcolor="#f8fafc" style="border-collapse: collapse; width: 100%; max-width: 480px;">
  <caption>HSC ICT Exam Student Roster</caption>
  <tr bgcolor="#0284c7">
    <th style="color: white;">Roll</th>
    <th style="color: white;">Student Name</th>
    <th style="color: white;">GPA</th>
  </tr>
  <tr align="center">
    <td>101</td>
    <td>Nusrat Jahan</td>
    <td>5.00</td>
  </tr>
</table>`
  },
  {
    tag: '<caption>',
    name: 'Table Caption / Title',
    category: 'tables',
    isHscChapter4: true,
    syntax: 'pair',
    description: 'Specifies the caption (title) of a table. Placed directly after the opening <table> tag. Taught in HSC ICT Chapter 4.',
    attributes: [
      { name: 'align', desc: 'Legacy attribute to place caption at "top" or "bottom".' }
    ],
    a11yNotes: 'Crucial for assistive tech; provides immediate context before iterating through cells.',
    exampleCode: `<table>
  <caption style="font-weight: bold; margin-bottom: 8px; color: #0284c7;">HSC ICT Exam Result Summary</caption>
  <!-- tr / td rows -->
</table>`
  },
  {
    tag: '<tr>, <th>, <td>',
    name: 'Table Rows, Headers, and Data Cells',
    category: 'tables',
    isHscChapter4: true,
    syntax: 'pair',
    description: '<tr> defines a table row. <th> defines a bold, centered header cell. <td> defines a standard data cell. Rowspan and Colspan are the most tested concepts in HSC ICT exams.',
    attributes: [
      { name: 'colspan="n"', desc: 'Merges n columns horizontally across the row. Most common HSC board exam question.' },
      { name: 'rowspan="n"', desc: 'Merges n rows vertically down consecutive rows.' },
      { name: 'align', desc: 'Sets horizontal alignment of text inside cell: "left", "center", "right".' },
      { name: 'valign', desc: 'Sets vertical alignment of text inside cell: "top", "middle", "bottom".' },
      { name: 'bgcolor', desc: 'Sets background color for the individual row or cell.' },
      { name: 'scope (on <th>)', desc: '"col", "row", "colgroup", "rowgroup" to define header association for screen readers.' }
    ],
    a11yNotes: 'Always specify scope="col" or scope="row" on <th> elements.',
    exampleCode: `<table border="2" cellpadding="8" style="border-collapse: collapse; width: 100%; text-align: center;">
  <tr bgcolor="#0284c7" style="color: white;">
    <th rowspan="2">Roll</th>
    <th colspan="2">Marks</th>
  </tr>
  <tr bgcolor="#38bdf8" style="color: black;">
    <th>Theory</th>
    <th>Practical</th>
  </tr>
  <tr>
    <td>101</td>
    <td>48</td>
    <td>25</td>
  </tr>
</table>`
  },
  {
    tag: '<thead>, <tbody>, <tfoot>',
    name: 'Table Header, Body, and Footer Blocks',
    category: 'tables',
    syntax: 'pair',
    description: 'Groups header rows (<thead>), body rows (<tbody>), and summary/footer rows (<tfoot>) within a table.',
    attributes: [],
    a11yNotes: 'Allows browsers to repeat headers and footers across page splits when printing large tables.',
    exampleCode: `<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background: #e0f2fe;"><th>Item</th><th>Cost</th></tr>
  </thead>
  <tbody>
    <tr><td>Domain Name</td><td>$12.00</td></tr>
    <tr><td>Cloud Hosting</td><td>$38.00</td></tr>
  </tbody>
  <tfoot>
    <tr style="font-weight: bold; background: #f1f5f9;"><td>Total</td><td>$50.00</td></tr>
  </tfoot>
</table>`
  },
  {
    tag: '<colgroup> & <col>',
    name: 'Column Group Styling',
    category: 'tables',
    syntax: 'pair',
    description: '<colgroup> defines a group of columns within a table. <col> specifies styling properties for entire columns without repeating classes across every td.',
    attributes: [
      { name: 'span', desc: 'Number of columns spanned.' }
    ],
    a11yNotes: 'Simplifies styling while keeping HTML markup clean.',
    exampleCode: `<table style="width: 100%; border-collapse: collapse;">
  <colgroup>
    <col style="background-color: #f8fafc; width: 30%;">
    <col style="background-color: #f0fdf4; width: 70%;">
  </colgroup>
  <tr><th>Feature</th><th>Availability</th></tr>
  <tr><td>SSL Certificate</td><td>Included free</td></tr>
</table>`
  },

  // 8. FORMS & INPUTS
  {
    tag: '<form>',
    name: 'Interactive User Form',
    category: 'forms',
    syntax: 'pair',
    description: 'Represents a document section containing interactive controls for submitting information to a web server.',
    attributes: [
      { name: 'action', desc: 'The URL that processes the form submission.' },
      { name: 'method', desc: 'The HTTP method: "GET" or "POST".' },
      { name: 'enctype', desc: 'Encoding type: "application/x-www-form-urlencoded" or "multipart/form-data" (for files).' },
      { name: 'novalidate', desc: 'Disables default browser constraint validation.' },
      { name: 'autocomplete', desc: '"on" or "off".' }
    ],
    a11yNotes: 'Ensure forms submit on Enter key and errors are announced clearly.',
    exampleCode: `<form action="/submit" method="POST" style="display: flex; flex-direction: column; gap: 12px; max-width: 320px;">
  <label for="uname">User Name:</label>
  <input type="text" id="uname" name="username" required style="padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px;">
  <button type="submit" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 4px; cursor: pointer;">
    Sign Up
  </button>
</form>`
  },
  {
    tag: '<label>',
    name: 'Form Control Label',
    category: 'forms',
    syntax: 'pair',
    description: 'Represents a caption for an item in a user interface. Clicking the label focuses or activates the associated input.',
    attributes: [
      { name: 'for', desc: 'The ID of the form control this label is bound to.' }
    ],
    a11yNotes: 'Mandatory for accessibility. Always associate a <label> with its <input> using matching for="id".',
    exampleCode: `<label for="emailInput" style="font-weight: 500;">Email Address:</label>
<input type="email" id="emailInput" placeholder="name@example.com" style="padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 4px;">`
  },
  {
    tag: '<input>',
    name: 'Input Field (All Types)',
    category: 'forms',
    syntax: 'void',
    description: 'Used to create interactive controls for web-based forms to accept data from the user. Extremely versatile depending on the "type" attribute.',
    attributes: [
      { name: 'type', desc: 'text, password, email, number, date, time, range, color, checkbox, radio, file, hidden, submit, reset, tel, url, search.' },
      { name: 'placeholder', desc: 'Brief hint describing expected value.' },
      { name: 'required', desc: 'Requires field to be filled before submission.' },
      { name: 'value', desc: 'Current value of the input.' },
      { name: 'min / max', desc: 'Numeric or date boundaries.' },
      { name: 'pattern', desc: 'Regular expression for validation.' },
      { name: 'disabled / readonly', desc: 'Disables user modification.' }
    ],
    a11yNotes: 'Never use placeholder as a substitute for a visible <label>; placeholders vanish upon typing.',
    exampleCode: `<div style="display: flex; flex-direction: column; gap: 8px; max-width: 300px;">
  <input type="text" placeholder="Text input">
  <input type="password" placeholder="Password">
  <input type="email" placeholder="email@test.com">
  <input type="number" min="1" max="100" value="25">
  <input type="date">
  <input type="range" min="0" max="100" value="70">
  <div style="display: flex; align-items: center; gap: 8px;">
    <input type="color" value="#0284c7"> <span>Pick accent color</span>
  </div>
  <label><input type="checkbox" checked> Subscribe to newsletter</label>
</div>`
  },
  {
    tag: '<button>',
    name: 'Clickable Button',
    category: 'forms',
    syntax: 'pair',
    description: 'An interactive element activated by a user with a mouse, keyboard, finger, voice command, or assistive tech.',
    attributes: [
      { name: 'type', desc: '"submit" (default inside form), "button" (generic script action), "reset".' },
      { name: 'disabled', desc: 'Disables user clicks.' }
    ],
    a11yNotes: 'Buttons are natively keyboard-focusable and triggered with Enter and Spacebar. Do not use <div> or <span> as buttons.',
    exampleCode: `<button type="button" onclick="alert('Action triggered!')" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">
  Interactive Action Button
</button>`
  },
  {
    tag: '<select>, <optgroup>, <option>',
    name: 'Dropdown Selection Menu',
    category: 'forms',
    syntax: 'pair',
    description: '<select> provides a menu of options. <optgroup> groups related options under a category header. <option> specifies selectable choices.',
    attributes: [
      { name: 'multiple', desc: 'Allows selecting multiple values.' },
      { name: 'size', desc: 'Number of visible options.' },
      { name: 'value (on <option>)', desc: 'Value submitted with form.' },
      { name: 'selected (on <option>)', desc: 'Sets pre-selected option.' }
    ],
    a11yNotes: 'Ensure keyboard arrow keys work smoothly for navigating options.',
    exampleCode: `<label for="boardSelect">Select Examination Board:</label>
<select id="boardSelect" style="padding: 8px; border-radius: 4px; border: 1px solid #cbd5e1; margin-top: 4px;">
  <optgroup label="General Education Boards">
    <option value="dhaka">Dhaka Board</option>
    <option value="chittagong" selected>Chittagong Board</option>
    <option value="rajshahi">Rajshahi Board</option>
  </optgroup>
  <optgroup label="Specialized">
    <option value="madrasah">Madrasah Board</option>
    <option value="technical">Technical Board</option>
  </optgroup>
</select>`
  },
  {
    tag: '<textarea>',
    name: 'Multi-Line Text Input',
    category: 'forms',
    syntax: 'pair',
    description: 'Represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizable amount of free-form text.',
    attributes: [
      { name: 'rows', desc: 'Number of visible text lines.' },
      { name: 'cols', desc: 'Average character width.' },
      { name: 'maxlength', desc: 'Maximum allowable characters.' }
    ],
    a11yNotes: 'Content between opening and closing tag is the default initial text.',
    exampleCode: `<label for="bio">Student Biography:</label><br>
<textarea id="bio" rows="4" cols="40" placeholder="Tell us about your academic interests..." style="width: 100%; max-width: 400px; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px;"></textarea>`
  },
  {
    tag: '<datalist>',
    name: 'Input Autocomplete Options',
    category: 'forms',
    syntax: 'pair',
    description: 'Contains a set of <option> elements that represent permissible or recommended options available to choose from within other controls.',
    attributes: [
      { name: 'id', desc: 'Referenced by an <input list="..."> attribute.' }
    ],
    a11yNotes: 'Combines the flexibility of a free-form text input with the convenience of a dropdown.',
    exampleCode: `<label for="browserChoice">Favorite Web Engine:</label>
<input list="browsers" id="browserChoice" placeholder="Start typing...">
<datalist id="browsers">
  <option value="Chromium (Blink)">
  <option value="Mozilla Firefox (Gecko)">
  <option value="Apple Safari (WebKit)">
</datalist>`
  },
  {
    tag: '<fieldset> & <legend>',
    name: 'Form Field Group & Caption',
    category: 'forms',
    syntax: 'pair',
    description: '<fieldset> groups several controls as well as labels (<label>) within a web form. <legend> represents a caption for the group.',
    attributes: [
      { name: 'disabled (on <fieldset>)', desc: 'Disables all child inputs simultaneously.' }
    ],
    a11yNotes: 'Crucial for radio button groups; screen readers announce the <legend> for each option.',
    exampleCode: `<fieldset style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 12px 16px;">
  <legend style="padding: 0 6px; font-weight: bold; color: #0284c7;">Academic Stream</legend>
  <label style="display: block; margin: 4px 0;"><input type="radio" name="stream" value="science" checked> Science</label>
  <label style="display: block; margin: 4px 0;"><input type="radio" name="stream" value="humanities"> Humanities</label>
  <label style="display: block; margin: 4px 0;"><input type="radio" name="stream" value="business"> Business Studies</label>
</fieldset>`
  },
  {
    tag: '<output>',
    name: 'Calculation Output Element',
    category: 'forms',
    syntax: 'pair',
    description: 'A container element into which a site or app can inject the results of a calculation or the outcome of a user action.',
    attributes: [
      { name: 'for', desc: 'IDs of the inputs that influenced the calculation.' }
    ],
    a11yNotes: 'Implicitly a live region; updates can be announced to assistive devices.',
    exampleCode: `<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">
  <input type="range" id="a" value="50"> +
  <input type="number" id="b" value="25" style="width: 60px;"> =
  <output name="result" for="a b" style="font-weight: bold; color: #0284c7; margin-left: 8px;">75</output>
</form>`
  },
  {
    tag: '<progress> & <meter>',
    name: 'Progress Bar & Gauge Meter',
    category: 'forms',
    syntax: 'pair',
    description: '<progress> displays an indicator showing the completion progress of a task. <meter> represents a scalar measurement within a known range, or a fractional value.',
    attributes: [
      { name: 'value', desc: 'Current numeric value.' },
      { name: 'max', desc: 'Maximum numeric value.' },
      { name: 'optimum (on <meter>)', desc: 'Ideal value in the scale.' }
    ],
    a11yNotes: 'Always provide accessible labels via aria-label or visible <label>.',
    exampleCode: `<div style="display: flex; flex-direction: column; gap: 8px;">
  <label>File Upload Progress: 
    <progress value="75" max="100" style="width: 100%;"></progress>
  </label>
  <label>Disk Space Usage: 
    <meter min="0" max="100" low="30" high="80" optimum="15" value="65" style="width: 100%;"></meter>
  </label>
</div>`
  },

  // 9. INTERACTIVE & MODALS
  {
    tag: '<details> & <summary>',
    name: 'Collapsible Disclosure Widget',
    category: 'interactive',
    syntax: 'pair',
    description: '<details> creates a disclosure widget in which information is visible only when the widget is toggled open. <summary> specifies the visible heading for the widget.',
    attributes: [
      { name: 'open', desc: 'Boolean attribute indicating that the details are currently visible.' }
    ],
    a11yNotes: 'Natively accessible accordion without needing custom JavaScript or ARIA attributes.',
    exampleCode: `<details style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; background: #fff;">
  <summary style="font-weight: bold; cursor: pointer; color: #0284c7;">
    What is the difference between HTML and CSS?
  </summary>
  <p style="margin: 8px 0 0; color: #475569;">
    HTML defines the structure and meaning of web content, whereas CSS defines presentation, styling, layout grids, and animations.
  </p>
</details>`
  },
  {
    tag: '<dialog>',
    name: 'Native Dialog / Modal Window',
    category: 'interactive',
    syntax: 'pair',
    description: 'Represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow. Can be modal or non-modal.',
    attributes: [
      { name: 'open', desc: 'Indicates that the dialog is active and available for interaction.' }
    ],
    a11yNotes: 'Using dialog.showModal() automatically traps focus inside the modal and enables the Escape key to close it.',
    exampleCode: `<button onclick="document.getElementById('myModal').showModal()" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer;">
  Open Native Modal
</button>

<dialog id="myModal" style="border: none; border-radius: 12px; padding: 24px; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.3); max-width: 400px;">
  <h3 style="margin-top: 0; color: #0f172a;">Native HTML5 Dialog</h3>
  <p style="color: #475569;">This modal is rendered with zero external libraries. Pressing Escape automatically dismisses it!</p>
  <form method="dialog" style="text-align: right;">
    <button style="padding: 6px 14px; background: #ef4444; color: white; border: none; border-radius: 6px; cursor: pointer;">
      Close Window
    </button>
  </form>
</dialog>`
  },

  // 10. DEPRECATED / OBSOLETE TAGS & MODERN ALTERNATIVES
  {
    tag: '<marquee>',
    name: 'Marquee Scrolling Animation (HSC Chapter 4)',
    category: 'deprecated',
    isHscChapter4: true,
    syntax: 'pair',
    description: 'Taught in NCTB HSC ICT Chapter 4 for creating dynamic scrolling text or image banners. In modern HTML5, CSS @keyframes animation is preferred.',
    attributes: [
      { name: 'direction', desc: 'Sets scroll direction: "left" (default), "right", "up", "down".' },
      { name: 'behavior', desc: '"scroll" (continuous loop), "slide" (scrolls once and stops), "alternate" (bounces back and forth between edges).' },
      { name: 'scrollamount', desc: 'Speed of scrolling in pixels per movement step (e.g. "5", "10").' },
      { name: 'bgcolor', desc: 'Background color of the marquee strip (e.g. "#e0f2fe", "yellow").' },
      { name: 'width / height', desc: 'Dimensions of the marquee container.' }
    ],
    a11yNotes: 'Can cause disorientation for reading-impaired users. Modern responsive sites use CSS keyframes with prefers-reduced-motion.',
    exampleCode: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Marquee Animation Demo</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <!-- HSC ICT Board Exam Format: -->
  <marquee direction="left" behavior="alternate" bgcolor="#e0f2fe" scrollamount="6" style="padding: 10px; font-weight: bold; color: #0284c7; border: 1px solid #38bdf8; border-radius: 6px;">
    📢 Welcome to HSC ICT Chapter 4: Introduction to Web Design and HTML!
  </marquee>
</body>
</html>`
  },
  {
    tag: '<font>',
    name: 'Font Styling (HSC Chapter 4 Special)',
    category: 'deprecated',
    isHscChapter4: true,
    syntax: 'pair',
    description: 'A key text-formatting tag covered in HSC ICT Chapter 4. Modifies typeface (face), text color, and relative font size (1 to 7). In modern web standards, CSS font-family, color, and font-size are used.',
    attributes: [
      { name: 'color', desc: 'Sets font color using names (e.g. "red", "blue") or hex codes (e.g. "#0284c7").' },
      { name: 'size', desc: 'Sets relative font size from 1 (smallest) to 7 (largest); standard default size is 3.' },
      { name: 'face', desc: 'Sets typeface or font family name (e.g. "Arial", "Times New Roman", "Kalpurush").' }
    ],
    a11yNotes: 'Hardcoding visual presentation directly in HTML prevents responsive device scaling and theming. Use CSS in production.',
    exampleCode: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Font Tag Demo</title>
</head>
<body style="padding: 20px;">
  <!-- 1. HSC Board Exam Style: -->
  <font face="Arial" color="blue" size="5">
    HSC ICT Chapter 4: Font Element
  </font>
  <br><br>
  <!-- 2. Modern HTML5/CSS Equivalent: -->
  <span style="font-family: Arial, sans-serif; color: #0284c7; font-size: 1.5rem; font-weight: bold;">
    Modern CSS Equivalent (font-family, color, font-size)
  </span>
</body>
</html>`
  },
  {
    tag: '<strike>',
    name: 'Strikethrough Text (HSC Chapter 4)',
    category: 'text',
    isHscChapter4: true,
    syntax: 'pair',
    description: 'Renders text with a line drawn through it. Covered in HSC ICT Chapter 4. In modern HTML5, <s> or <del> is preferred.',
    attributes: [],
    a11yNotes: 'Use <del> if communicating editorial deletion with datetime attributes.',
    exampleCode: `<p>Special Offer: Regular Admission Fee <strike>5000 Tk</strike> <strong>Discounted: 3500 Tk</strong></p>`
  },
  {
    tag: '<big>',
    name: 'Large Text (HSC Chapter 4)',
    category: 'text',
    isHscChapter4: true,
    syntax: 'pair',
    description: 'Enlarges text relative to surrounding text. Covered in HSC ICT Chapter 4. In modern HTML5, CSS font-size is preferred.',
    attributes: [],
    a11yNotes: 'Use CSS font-size for predictable, accessible typography scaling.',
    exampleCode: `<p>Standard text containing a <big>Big Word</big> in between.</p>`
  },
  {
    tag: '<frameset> & <frame>',
    name: 'Multi-Window Frameset (HSC Chapter 4)',
    category: 'deprecated',
    isHscChapter4: true,
    syntax: 'pair',
    description: 'Covered in HSC ICT Chapter 4. Divides a browser window into independent horizontal rows or vertical columns of documents.',
    attributes: [
      { name: 'rows', desc: 'Height distribution of horizontal frame windows (e.g. "30%,70%").' },
      { name: 'cols', desc: 'Width distribution of vertical frame windows (e.g. "200,*").' },
      { name: 'border', desc: 'Thickness of frame borders in pixels.' },
      { name: 'src (on <frame>)', desc: 'URL of the document to load into the frame.' }
    ],
    a11yNotes: 'Obsolete in modern HTML5. Breaks bookmarks and screen readers. Use CSS Grid or <iframe> instead.',
    exampleCode: `<!-- Legacy HSC Concept Simulation using Modern CSS Grid: -->
<div style="display: grid; grid-template-rows: 60px 1fr; height: 200px; border: 2px solid #0284c7; border-radius: 8px; overflow: hidden; font-family: sans-serif;">
  <div style="background: #0284c7; color: white; padding: 12px; font-weight: bold;">Header Frame (Row 1: 60px)</div>
  <div style="display: grid; grid-template-columns: 140px 1fr;">
    <div style="background: #1e293b; color: #94a3b8; padding: 12px;">Menu Frame (Col 1)</div>
    <div style="background: #f8fafc; padding: 12px; color: #334155;">Main Content Frame (Col 2)</div>
  </div>
</div>`
  }
];
