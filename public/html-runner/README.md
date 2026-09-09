# HTML Runner & Comprehensive HTML/CSS Tutorial

An independent, zero-dependency, lightning-fast HTML and CSS live code sandbox and interactive educational reference platform.

---

## 🌟 Key Features

1. **Split-Screen Sandbox & Live Runner**:
   - **Real-Time Code Execution**: Immediate debounced live preview with manual Run button (`Ctrl+Enter`).
   - **Line Numbers & Indentation**: Full tab-key support (2-space indent/unindent) and synchronized gutter scroll.
   - **Code Beautifier / Formatter**: Automatically formats and indents HTML and CSS.
   - **Virtual Console Drawer**: In-preview JavaScript message interceptor that logs `console.log`, `warn`, `info`, and runtime errors without needing DevTools open.
   - **Device Viewport Simulation**: Easily switch between **Desktop (100%)**, **Tablet (768px)**, and **Mobile (375px)** frames.
   - **Project Export & Clipboard**: Download your project as a `.html` file with `Ctrl+S`, or copy directly to clipboard.
   - **Dark & Light Mode**: Clean, high-contrast themes persisted in `localStorage`.

2. **Exhaustive HTML Tag & Element Tutorial (110+ Elements)**:
   - Covers all HTML5 categories:
     - **Document & Metadata**: `<!DOCTYPE>`, `<html>`, `<head>`, `<title>`, `<base>`, `<link>`, `<meta>`, `<style>`, `<script>`, `<noscript>`, `<template>`, `<slot>`.
     - **Sections & Layout**: `<body>`, `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<h1>`–`<h6>`, `<hgroup>`, `<address>`.
     - **Content Grouping**: `<p>`, `<hr>`, `<pre>`, `<blockquote>`, `<ol>`, `<ul>`, `<li>`, `<dl>`, `<dt>`, `<dd>`, `<figure>`, `<figcaption>`, `<div>`.
     - **Text-Level Semantics**: `<a>`, `<em>`, `<strong>`, `<small>`, `<s>`, `<cite>`, `<q>`, `<dfn>`, `<abbr>`, `<ruby>`, `<rt>`, `<rp>`, `<data>`, `<time>`, `<code>`, `<var>`, `<samp>`, `<kbd>`, `<sub>`, `<sup>`, `<i>`, `<b>`, `<u>`, `<mark>`, `<bdi>`, `<bdo>`, `<span>`, `<br>`, `<wbr>`.
     - **Multimedia & Embedded**: `<img>`, `<picture>`, `<source>`, `<iframe>`, `<video>`, `<audio>`, `<track>`, `<embed>`, `<object>`.
     - **Vector Graphics & Math**: `<svg>`, `<canvas>`, `<math>` (MathML).
     - **Tabular Data**: `<table>`, `<caption>`, `<colgroup>`, `<col>`, `<tbody>`, `<thead>`, `<tfoot>`, `<tr>`, `<td>`, `<th>` (with `colspan` and `rowspan`).
     - **Forms & Interactive Controls**: `<form>`, `<label>`, `<input>` (all 22 types), `<button>`, `<select>`, `<optgroup>`, `<option>`, `<textarea>`, `<datalist>`, `<output>`, `<progress>`, `<meter>`, `<fieldset>`, `<legend>`.
     - **Interactive & Modals**: `<details>`, `<summary>`, `<dialog>` with `showModal()`.
     - **Obsolete / Deprecated**: Explanations and modern replacements for `<marquee>`, `<center>`, `<font>`, `<frameset>`, etc.
   - Every tag includes syntax rules, accessibility (`a11y`) guidelines, key attributes, and a one-click **"🚀 Load into Runner"** button!

3. **Complete CSS Reference & Playgrounds**:
   - Selectors & Specificity (`*`, class, ID, child `>`, sibling `+`/`~`, attribute `[attr]`).
   - Pseudo-Classes & Elements (`:hover`, `:active`, `:focus-visible`, `:nth-child`, `:has()`, `::before`, `::after`).
   - The CSS Box Model (`content`, `padding`, `border`, `margin`, `box-sizing: border-box`).
   - Display & Flow (`block`, `inline`, `inline-block`, `none`).
   - CSS Flexbox complete guide (axes, `justify-content`, `align-items`, `gap`, `flex: 1`).
   - CSS Grid layout (`repeat()`, `minmax()`, `auto-fit`, fractional units `fr`, `grid-template-areas`).
   - Positioning & Stacking (`static`, `relative`, `absolute`, `fixed`, `sticky`, `z-index`).
   - Transitions, 2D/3D Transforms & Keyframe Animations.
   - Modern Responsive CSS: Fluid typography with `clamp()`, media queries, and CSS custom properties / variables (`--primary`, `var()`).

4. **Curated Templates & Exam Challenges**:
   - Semantic HTML5 Boilerplate
   - HSC ICT Board Special: Complex Table (Rowspan & Colspan)
   - Accessible Form with HTML5 Validation
   - Glassmorphism UI Card with `backdrop-filter`
   - Native HTML5 Modal Window
   - Debug Challenge: Fix Broken Colspan & Syntax Errors

---

## 🚀 How to Run

### Method 1: Zero-Installation (Direct Browser Open)
Because this application is 100% self-contained and zero-dependency, you can simply open `index.html` in any web browser:
- On Windows: Double-click `index.html` or right-click -> "Open with" -> Google Chrome / Microsoft Edge / Firefox.

### Method 2: Local HTTP Server
Run any lightweight static file server inside the `html-runner/` folder:

```bash
# Using Node.js npx serve:
npx serve html-runner

# Or using Python:
python -m http.server 8080 --directory html-runner
```

Then visit: [http://localhost:8080](http://localhost:8080) in your browser.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl + Enter` (or `Cmd + Enter`) | Execute / Run current code immediately |
| `Ctrl + S` (or `Cmd + S`) | Download code as `html_sandbox_project.html` |
| `Tab` | Indent code by 2 spaces |
| `Shift + Tab` | Unindent code |
| `Escape` | Close tag detail drawer / modal |

---

## 📁 Directory Structure

```
html-runner/
├── index.html               # Main application shell
├── styles.css               # Polished styling, themes, and layouts
├── app.js                   # Main application controller & iframe sandbox bus
├── data/
│   ├── html-tags.js         # Encyclopedia of 110+ HTML tags & attributes
│   ├── css-reference.js     # Comprehensive CSS guide & runnable snippets
│   └── templates.js         # Starter templates and board challenges
├── package.json             # Lightweight package descriptor
└── README.md                # Documentation & User Guide
```
