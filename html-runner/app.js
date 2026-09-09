// html-runner/app.js
// Main Application Controller for HTML Runner & Complete Tutorial Platform

import { HTML_CATEGORIES, HTML_TAGS } from './data/html-tags.js';
import { CSS_TOPICS } from './data/css-reference.js';
import { TEMPLATES } from './data/templates.js';

class HtmlRunnerApp {
  constructor() {
    this.state = {
      code: localStorage.getItem('biggan_html_runner_code') || TEMPLATES[0].code,
      theme: localStorage.getItem('biggan_html_runner_theme') || 'dark',
      viewport: 'desktop',
      sidebarTab: 'html',
      selectedCategory: 'all',
      searchQuery: '',
      consoleLogs: [],
      isConsoleOpen: false,
      selectedItemDetail: null
    };

    this.debounceTimer = null;
    this.initDOMElements();
    this.bindEvents();
    this.applyTheme(this.state.theme);
    this.populateTemplateSelect();
    this.renderCategoryChips();
    this.renderSidebarItems();
    this.updateEditorCode(this.state.code);
    this.renderPreview();
  }

  initDOMElements() {
    this.dom = {
      themeToggleBtn: document.getElementById('themeToggleBtn'),
      sidebarToggleBtn: document.getElementById('sidebarToggleBtn'),
      sidebar: document.getElementById('sidebar'),
      sidebarTabs: document.querySelectorAll('.sidebar-tab-btn'),
      searchInput: document.getElementById('searchInput'),
      searchClearBtn: document.getElementById('searchClearBtn'),
      categoryChipsContainer: document.getElementById('categoryChipsContainer'),
      sidebarItemsList: document.getElementById('sidebarItemsList'),
      templateSelect: document.getElementById('templateSelect'),
      
      // Editor elements
      editorTextarea: document.getElementById('editorTextarea'),
      editorLineNumbers: document.getElementById('editorLineNumbers'),
      runBtn: document.getElementById('runBtn'),
      formatBtn: document.getElementById('formatBtn'),
      copyBtn: document.getElementById('copyBtn'),
      downloadBtn: document.getElementById('downloadBtn'),
      resetBtn: document.getElementById('resetBtn'),
      clearBtn: document.getElementById('clearBtn'),
      
      // Viewport & Preview
      viewportBtns: document.querySelectorAll('.viewport-btn'),
      iframeWrapper: document.getElementById('iframeWrapper'),
      previewIframe: document.getElementById('previewIframe'),
      
      // Console
      consoleDrawer: document.getElementById('consoleDrawer'),
      consoleToggleHeader: document.getElementById('consoleToggleHeader'),
      consoleLogsContainer: document.getElementById('consoleLogsContainer'),
      consoleCounter: document.getElementById('consoleCounter'),
      consoleClearBtn: document.getElementById('consoleClearBtn'),
      
      // Modal
      detailModal: document.getElementById('detailModal'),
      modalTitle: document.getElementById('modalTitle'),
      modalCategory: document.getElementById('modalCategory'),
      modalBody: document.getElementById('modalBody'),
      modalCloseBtn: document.getElementById('modalCloseBtn'),
      modalLoadBtn: document.getElementById('modalLoadBtn'),
      
      // Toasts
      toastContainer: document.getElementById('toastContainer')
    };
  }

  bindEvents() {
    // Theme toggle
    this.dom.themeToggleBtn.addEventListener('click', () => {
      const nextTheme = this.state.theme === 'dark' ? 'light' : 'dark';
      this.applyTheme(nextTheme);
      this.showToast(`Switched to ${nextTheme} theme`);
    });

    // Sidebar toggle (mobile/collapsible)
    this.dom.sidebarToggleBtn?.addEventListener('click', () => {
      this.dom.sidebar.classList.toggle('collapsed');
    });

    // Sidebar tab buttons
    this.dom.sidebarTabs.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.dom.sidebarTabs.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.state.sidebarTab = btn.dataset.tab;
        this.renderCategoryChips();
        this.renderSidebarItems();
      });
    });

    // Search input
    this.dom.searchInput.addEventListener('input', (e) => {
      this.state.searchQuery = e.target.value.trim().toLowerCase();
      this.dom.searchClearBtn.style.display = this.state.searchQuery ? 'block' : 'none';
      this.renderSidebarItems();
    });

    this.dom.searchClearBtn.addEventListener('click', () => {
      this.dom.searchInput.value = '';
      this.state.searchQuery = '';
      this.dom.searchClearBtn.style.display = 'none';
      this.renderSidebarItems();
      this.dom.searchInput.focus();
    });

    // Template selector
    this.dom.templateSelect.addEventListener('change', (e) => {
      const tpl = TEMPLATES.find((t) => t.id === e.target.value);
      if (tpl) {
        this.updateEditorCode(tpl.code);
        this.renderPreview();
        this.showToast(`Loaded template: ${tpl.title}`);
      }
    });

    // Editor textarea events
    this.dom.editorTextarea.addEventListener('input', () => {
      this.state.code = this.dom.editorTextarea.value;
      localStorage.setItem('biggan_html_runner_code', this.state.code);
      this.updateLineNumbers();
      this.debouncedRenderPreview();
    });

    this.dom.editorTextarea.addEventListener('scroll', () => {
      this.dom.editorLineNumbers.scrollTop = this.dom.editorTextarea.scrollTop;
    });

    this.dom.editorTextarea.addEventListener('keydown', (e) => this.handleEditorKeydown(e));

    // Toolbar actions
    this.dom.runBtn.addEventListener('click', () => {
      this.renderPreview();
      this.showToast('Code executed!');
    });

    this.dom.formatBtn.addEventListener('click', () => {
      this.formatCode();
      this.showToast('Formatted HTML code');
    });

    this.dom.copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(this.state.code).then(() => {
        this.showToast('Code copied to clipboard! 📋');
      });
    });

    this.dom.downloadBtn.addEventListener('click', () => this.downloadCode());

    this.dom.resetBtn.addEventListener('click', () => {
      const tpl = TEMPLATES.find((t) => t.id === this.dom.templateSelect.value) || TEMPLATES[0];
      this.updateEditorCode(tpl.code);
      this.renderPreview();
      this.showToast('Reset code to template defaults');
    });

    this.dom.clearBtn.addEventListener('click', () => {
      this.updateEditorCode('<!DOCTYPE html>\n<html>\n<head>\n  <title>Blank Page</title>\n</head>\n<body>\n  \n</body>\n</html>');
      this.renderPreview();
      this.showToast('Cleared editor');
    });

    // Viewport switcher
    this.dom.viewportBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.dom.viewportBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.setViewport(btn.dataset.viewport);
      });
    });

    // Console drawer toggle
    this.dom.consoleToggleHeader.addEventListener('click', () => {
      this.toggleConsole();
    });

    this.dom.consoleClearBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.clearConsole();
    });

    // Modal controls
    this.dom.modalCloseBtn.addEventListener('click', () => this.closeModal());
    this.dom.detailModal.addEventListener('click', (e) => {
      if (e.target === this.dom.detailModal) this.closeModal();
    });

    this.dom.modalLoadBtn.addEventListener('click', () => {
      if (this.state.selectedItemDetail?.exampleCode) {
        this.updateEditorCode(this.state.selectedItemDetail.exampleCode);
        this.renderPreview();
        this.closeModal();
        this.showToast(`Loaded example: ${this.state.selectedItemDetail.tag || this.state.selectedItemDetail.title}`);
      }
    });

    // Message bridge listener for iframe sandbox logs
    window.addEventListener('message', (event) => {
      if (event.data && event.data.source === 'html-runner-sandbox') {
        this.addConsoleLog(event.data);
      }
    });

    // Global keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        this.renderPreview();
        this.showToast('Executed code via shortcut (Ctrl+Enter)');
      } else if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        this.downloadCode();
      } else if (e.key === 'Escape' && this.dom.detailModal.classList.contains('open')) {
        this.closeModal();
      }
    });
  }

  applyTheme(theme) {
    this.state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('biggan_html_runner_theme', theme);
    this.dom.themeToggleBtn.innerHTML = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  }

  setViewport(mode) {
    this.state.viewport = mode;
    this.dom.iframeWrapper.className = `iframe-frame-wrapper ${mode}`;
    this.showToast(`Viewport set to ${mode.toUpperCase()}`);
  }

  updateEditorCode(newCode) {
    this.state.code = newCode;
    this.dom.editorTextarea.value = newCode;
    localStorage.setItem('biggan_html_runner_code', newCode);
    this.updateLineNumbers();
  }

  updateLineNumbers() {
    const lineCount = this.dom.editorTextarea.value.split('\n').length;
    let numbers = '';
    for (let i = 1; i <= lineCount; i++) {
      numbers += `${i}\n`;
    }
    this.dom.editorLineNumbers.textContent = numbers;
  }

  handleEditorKeydown(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = this.dom.editorTextarea.selectionStart;
      const end = this.dom.editorTextarea.selectionEnd;
      const value = this.dom.editorTextarea.value;

      if (!e.shiftKey) {
        // Insert 2 spaces
        this.dom.editorTextarea.value = value.substring(0, start) + '  ' + value.substring(end);
        this.dom.editorTextarea.selectionStart = this.dom.editorTextarea.selectionEnd = start + 2;
      } else {
        // Shift+Tab: Remove leading 2 spaces if available
        const lineStart = value.lastIndexOf('\n', start - 1) + 1;
        if (value.substring(lineStart, lineStart + 2) === '  ') {
          this.dom.editorTextarea.value = value.substring(0, lineStart) + value.substring(lineStart + 2);
          this.dom.editorTextarea.selectionStart = this.dom.editorTextarea.selectionEnd = Math.max(lineStart, start - 2);
        }
      }
      this.updateLineNumbers();
    }
  }

  formatCode() {
    // Simple indentation beautifier for HTML
    let formatted = '';
    let indent = 0;
    const lines = this.state.code.split('\n');

    lines.forEach((rawLine) => {
      let line = rawLine.trim();
      if (!line) return;

      // Decrement indent if closing tag
      if (line.match(/^<\/(article|section|nav|aside|header|footer|main|div|ul|ol|table|thead|tbody|tfoot|tr|form|details|dialog|figure|hgroup)/i)) {
        indent = Math.max(0, indent - 1);
      }

      formatted += '  '.repeat(indent) + line + '\n';

      // Increment indent if opening tag without closing in same line
      if (line.match(/^<(article|section|nav|aside|header|footer|main|div|ul|ol|table|thead|tbody|tfoot|tr|form|details|dialog|figure|hgroup)/i) && 
          !line.match(/<\/(article|section|nav|aside|header|footer|main|div|ul|ol|table|thead|tbody|tfoot|tr|form|details|dialog|figure|hgroup)>/i) &&
          !line.endsWith('/>')) {
        indent++;
      }
    });

    if (formatted) {
      this.updateEditorCode(formatted.trimEnd());
      this.renderPreview();
    }
  }

  downloadCode() {
    const blob = new Blob([this.state.code], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'html_sandbox_project.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast('Downloaded html_sandbox_project.html');
  }

  debouncedRenderPreview() {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.renderPreview();
    }, 400);
  }

  renderPreview() {
    // Build sandbox console bridge
    const consoleBridge = `
      <script>
        (function() {
          function sendLog(type, args) {
            try {
              const text = Array.from(args).map(function(item) {
                if (typeof item === 'object') {
                  try { return JSON.stringify(item); } catch(e) { return String(item); }
                }
                return String(item);
              }).join(' ');
              window.parent.postMessage({
                source: 'html-runner-sandbox',
                type: type,
                text: text,
                time: new Date().toLocaleTimeString()
              }, '*');
            } catch(err) {}
          }

          var origLog = console.log;
          var origWarn = console.warn;
          var origError = console.error;
          var origInfo = console.info;

          console.log = function() { sendLog('log', arguments); origLog.apply(console, arguments); };
          console.warn = function() { sendLog('warn', arguments); origWarn.apply(console, arguments); };
          console.error = function() { sendLog('error', arguments); origError.apply(console, arguments); };
          console.info = function() { sendLog('info', arguments); origInfo.apply(console, arguments); };

          window.onerror = function(message, source, lineno, colno, error) {
            sendLog('error', ['[Runtime Error] ' + message + ' (Line ' + lineno + ')']);
            return false;
          };
        })();
      </script>
    `;

    let finalHTML = this.state.code;
    if (finalHTML.includes('<head>')) {
      finalHTML = finalHTML.replace('<head>', '<head>' + consoleBridge);
    } else {
      finalHTML = consoleBridge + finalHTML;
    }

    this.dom.previewIframe.srcdoc = finalHTML;
  }

  populateTemplateSelect() {
    this.dom.templateSelect.innerHTML = TEMPLATES.map((tpl) => `
      <option value="${tpl.id}">${tpl.title}</option>
    `).join('');
  }

  renderCategoryChips() {
    if (this.state.sidebarTab === 'html') {
      this.dom.categoryChipsContainer.style.display = 'flex';
      this.dom.categoryChipsContainer.innerHTML = HTML_CATEGORIES.map((cat) => `
        <button class="chip ${this.state.selectedCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
          ${cat.nameEn}
        </button>
      `).join('');

      this.dom.categoryChipsContainer.querySelectorAll('.chip').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.dom.categoryChipsContainer.querySelectorAll('.chip').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          this.state.selectedCategory = btn.dataset.category;
          this.renderSidebarItems();
        });
      });
    } else {
      this.dom.categoryChipsContainer.style.display = 'none';
    }
  }

  renderSidebarItems() {
    const list = this.dom.sidebarItemsList;
    list.innerHTML = '';

    if (this.state.sidebarTab === 'html') {
      let filtered = HTML_TAGS;

      if (this.state.selectedCategory !== 'all') {
        filtered = filtered.filter((t) => t.category === this.state.selectedCategory);
      }

      if (this.state.searchQuery) {
        filtered = filtered.filter((t) => 
          t.tag.toLowerCase().includes(this.state.searchQuery) ||
          t.name.toLowerCase().includes(this.state.searchQuery) ||
          t.description.toLowerCase().includes(this.state.searchQuery)
        );
      }

      if (filtered.length === 0) {
        list.innerHTML = `<div style="padding: 16px; text-align: center; color: var(--text-faint); font-size: 0.8125rem;">No tags matching "${this.state.searchQuery}"</div>`;
        return;
      }

      filtered.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
          <div class="item-card-header">
            <span class="item-tag-title">${this.escapeHTML(item.tag)}</span>
            <span class="item-category-badge">${item.category}</span>
          </div>
          <div style="font-weight: 600; font-size: 0.75rem; color: var(--text-main);">${item.name}</div>
          <p class="item-desc">${item.description}</p>
        `;
        card.addEventListener('click', () => this.openDetailModal(item, 'html'));
        list.appendChild(card);
      });

    } else if (this.state.sidebarTab === 'css') {
      let filtered = CSS_TOPICS;
      if (this.state.searchQuery) {
        filtered = filtered.filter((t) =>
          t.title.toLowerCase().includes(this.state.searchQuery) ||
          t.description.toLowerCase().includes(this.state.searchQuery)
        );
      }

      filtered.forEach((topic) => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
          <div class="item-card-header">
            <span class="item-tag-title">${topic.title}</span>
            <span class="item-category-badge">${topic.category}</span>
          </div>
          <p class="item-desc">${topic.description}</p>
        `;
        card.addEventListener('click', () => this.openDetailModal(topic, 'css'));
        list.appendChild(card);
      });

    } else if (this.state.sidebarTab === 'templates') {
      TEMPLATES.forEach((tpl) => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
          <div class="item-card-header">
            <span class="item-tag-title">${tpl.title}</span>
            <span class="item-category-badge">${tpl.category}</span>
          </div>
          <p class="item-desc">${tpl.description}</p>
        `;
        card.addEventListener('click', () => {
          this.updateEditorCode(tpl.code);
          this.renderPreview();
          this.showToast(`Loaded: ${tpl.title}`);
        });
        list.appendChild(card);
      });
    }
  }

  openDetailModal(item, type) {
    this.state.selectedItemDetail = item;
    this.dom.modalTitle.textContent = item.tag || item.title;
    this.dom.modalCategory.textContent = item.name ? `${item.name} • ${item.category}` : item.category;

    let html = `<p style="line-height: 1.6; color: var(--text-muted); font-size: 0.9rem;">${item.description}</p>`;

    if (type === 'html') {
      if (item.a11yNotes) {
        html += `
          <div style="background: rgba(2, 132, 199, 0.1); border-left: 3px solid var(--color-accent); padding: 10px 14px; border-radius: 4px;">
            <strong style="color: var(--color-accent); font-size: 0.8rem;">Accessibility (a11y) & Semantic Guidance:</strong>
            <p style="margin: 4px 0 0; font-size: 0.8125rem; color: var(--text-main);">${item.a11yNotes}</p>
          </div>
        `;
      }

      if (item.attributes && item.attributes.length > 0) {
        html += `
          <div>
            <h4 style="margin-bottom: 6px; font-size: 0.85rem; color: var(--text-main);">Key Attributes:</h4>
            <table class="table-attrs">
              <thead><tr><th>Attribute</th><th>Description</th></tr></thead>
              <tbody>
                ${item.attributes.map((a) => `<tr><td style="font-family: var(--font-mono); color: var(--color-accent);">${a.name}</td><td>${a.desc}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        `;
      }
    } else if (type === 'css' && item.concepts) {
      html += `
        <div>
          <h4 style="margin-bottom: 6px; font-size: 0.85rem; color: var(--text-main);">Core Properties & Syntax:</h4>
          <table class="table-attrs">
            <thead><tr><th>Concept</th><th>Syntax</th><th>Usage</th></tr></thead>
            <tbody>
              ${item.concepts.map((c) => `
                <tr>
                  <td style="font-weight: 600;">${c.name}</td>
                  <td style="font-family: var(--font-mono); color: var(--color-accent);">${c.syntax}</td>
                  <td>${c.detail}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    if (item.exampleCode) {
      html += `
        <div>
          <h4 style="margin-bottom: 6px; font-size: 0.85rem; color: var(--text-main);">Interactive Runnable Snippet:</h4>
          <pre style="background: var(--editor-bg); padding: 12px; border-radius: 6px; border: 1px solid var(--border-subtle); overflow-x: auto; font-family: var(--font-mono); font-size: 0.8rem; color: var(--editor-text); max-height: 200px;"><code>${this.escapeHTML(item.exampleCode)}</code></pre>
        </div>
      `;
    }

    this.dom.modalBody.innerHTML = html;
    this.dom.detailModal.classList.add('open');
  }

  closeModal() {
    this.dom.detailModal.classList.remove('open');
  }

  // Virtual Console Methods
  addConsoleLog(logData) {
    this.state.consoleLogs.push(logData);
    const entry = document.createElement('div');
    entry.className = `log-entry ${logData.type}`;
    entry.innerHTML = `
      <span class="log-badge ${logData.type}">${logData.type}</span>
      <span class="log-time">${logData.time}</span>
      <span class="log-text">${this.escapeHTML(logData.text)}</span>
    `;
    this.dom.consoleLogsContainer.appendChild(entry);
    this.dom.consoleLogsContainer.scrollTop = this.dom.consoleLogsContainer.scrollHeight;

    const errorCount = this.state.consoleLogs.filter((l) => l.type === 'error').length;
    if (errorCount > 0) {
      this.dom.consoleCounter.textContent = `${errorCount} error${errorCount > 1 ? 's' : ''}`;
      this.dom.consoleCounter.className = 'console-counter has-errors';
      if (!this.state.isConsoleOpen) {
        this.toggleConsole(true);
      }
    } else {
      this.dom.consoleCounter.textContent = `${this.state.consoleLogs.length} logs`;
      this.dom.consoleCounter.className = 'console-counter';
    }
  }

  toggleConsole(forceOpen = false) {
    if (forceOpen) {
      this.state.isConsoleOpen = true;
      this.dom.consoleDrawer.classList.remove('collapsed');
    } else {
      this.state.isConsoleOpen = !this.state.isConsoleOpen;
      this.dom.consoleDrawer.classList.toggle('collapsed', !this.state.isConsoleOpen);
    }
  }

  clearConsole() {
    this.state.consoleLogs = [];
    this.dom.consoleLogsContainer.innerHTML = '';
    this.dom.consoleCounter.textContent = '0 logs';
    this.dom.consoleCounter.className = 'console-counter';
  }

  // Toast Notification
  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>●</span> <span>${this.escapeHTML(message)}</span>`;
    this.dom.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 200);
    }, 2400);
  }

  escapeHTML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

// Instantiate on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  window.app = new HtmlRunnerApp();
});
