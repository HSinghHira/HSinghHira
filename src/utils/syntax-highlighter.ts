// src/utils/syntax-highlighter.ts

// Global set to keep track of loaded Prism languages
const loadedLanguages = new Set<string>(['html', 'css', 'javascript', 'js', 'xml', 'svg']);
let prismPromise: Promise<any> | null = null;

/**
 * Dynamically loads PrismJS core from a browser-safe CDN (ESM).
 */
function getPrism(): Promise<any> {
  if (!prismPromise) {
    // @ts-ignore
    prismPromise = import('https://esm.sh/prismjs@1.29.0')
      .then((m) => {
        // Disable automatic highlighting on page load to let us control it
        if (m.default) {
          m.default.manual = true;
          return m.default;
        }
        return m;
      })
      .catch((err) => {
        console.error('[Highlighter] Failed to load PrismJS core:', err);
        prismPromise = null;
        throw err;
      });
  }
  return prismPromise;
}

/**
 * Standards-maps common language aliases to Prism-supported names.
 */
const langAliasMap: Record<string, string> = {
  js: 'javascript',
  ts: 'typescript',
  yml: 'yaml',
  py: 'python',
  md: 'markdown',
  sh: 'bash',
  shell: 'bash'
};

/**
 * Dynamically loads a language syntax component for Prism on demand.
 */
async function loadPrismLanguage(lang: string) {
  const standardLang = langAliasMap[lang.toLowerCase()] || lang.toLowerCase();
  
  if (loadedLanguages.has(standardLang)) return standardLang;

  try {
    // Import the specific Prism language component dynamically from the ESM CDN
    // @ts-ignore
    await import(`https://esm.sh/prismjs@1.29.0/components/prism-${standardLang}`);
    loadedLanguages.add(standardLang);
    return standardLang;
  } catch (err) {
    console.warn(`[Highlighter] Language component '${standardLang}' not found, falling back to plain text.`, err);
    return 'plaintext';
  }
}

/**
 * Performs dynamic syntax highlighting on a code block in the browser.
 */
export async function highlightCodeBlock(pre: HTMLPreElement, lang: string) {
  const codeEl = pre.querySelector('code');
  const target = codeEl || pre;
  const rawCode = target.textContent || '';

  try {
    const Prism = await getPrism();
    const standardLang = await loadPrismLanguage(lang);

    if (standardLang === 'plaintext' || !Prism.languages[standardLang]) {
      pre.setAttribute('data-highlighted', 'failed');
      return;
    }

    // Highlight the code block using Prism
    const grammar = Prism.languages[standardLang];
    const highlightedHtml = Prism.highlight(rawCode, grammar, standardLang);
    
    // Wrap highlighted code into line blocks so that line numbering works flawlessly
    const lines = highlightedHtml.split('\n');
    
    // If the last line is empty (common in code editors), omit it to prevent extra empty line numbers
    if (lines.length > 0 && lines[lines.length - 1].trim() === '') {
      lines.pop();
    }

    const wrappedHtml = lines
      .map((line: string) => `<span class="line">${line || ' '}</span>`)
      .join('\n');

    target.innerHTML = wrappedHtml;
    pre.setAttribute('data-highlighted', 'true');
  } catch (err) {
    console.error('[Highlighter] Dynamic highlighting failed:', err);
    pre.setAttribute('data-highlighted', 'failed');
  }
}

/**
 * Unified setup function that processes code blocks on the page.
 * Works perfectly with static (pre-rendered) and dynamic (hydrated) code blocks.
 */
export function setupCodeBlocks() {
  const codeBlocks = document.querySelectorAll('pre');

  codeBlocks.forEach(async (pre) => {
    // Avoid double-processing
    if (pre.dataset.highlightInit) return;
    pre.dataset.highlightInit = 'true';
    
    if (pre.querySelector('.copy-code-btn')) return;

    const code = pre.querySelector('code');
    const target = code || pre;

    // 1. Detect language from attributes or classes
    let lang = pre.getAttribute('data-language') || '';
    
    if (!lang && code) {
      const langClass = Array.from(code.classList).find(c => c.startsWith('language-'));
      if (langClass) {
        lang = langClass.replace('language-', '');
      }
    }
    
    if (!lang) {
      const preLangClass = Array.from(pre.classList).find(c => c.startsWith('language-'));
      if (preLangClass) {
        lang = preLangClass.replace('language-', '');
      }
    }

    if (lang) {
      pre.setAttribute('data-language', lang);
    }

    // 2. Add custom floating language label & wrapper
    let parentContainer: HTMLElement = pre;
    if (lang && lang !== 'text') {
      let wrapper = pre.parentElement;
      if (!wrapper || !wrapper.classList.contains('code-block-wrapper')) {
        wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';
        if (pre.parentNode) {
          pre.parentNode.insertBefore(wrapper, pre);
          wrapper.appendChild(pre);
        }
      }
      
      // Add label if not already present
      if (!wrapper.querySelector('.code-lang-label')) {
        const label = document.createElement('div');
        label.className = 'code-lang-label';
        label.innerHTML = lang;
        wrapper.appendChild(label);
      }
      
      parentContainer = wrapper;
    }

    // 3. Add copy button
    const btn = document.createElement('button');
    btn.className = 'copy-code-btn';
    btn.innerHTML = 'Copy';
    btn.type = 'button';
    
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Extract the plain text value (without line numbers or markup)
      let text = '';
      const lines = target.querySelectorAll('.line');
      if (lines.length > 0) {
        text = Array.from(lines)
          .map(l => l.textContent || '')
          .join('\n');
      } else {
        text = target.textContent || '';
      }
      
      try {
        await navigator.clipboard.writeText(text);
        btn.innerHTML = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy code!', err);
        btn.innerHTML = 'Error';
      }
    });

    parentContainer.style.position = 'relative';
    parentContainer.appendChild(btn);

    // 4. Setup dynamic syntax highlighting for plain-text blocks
    const isTokenized = pre.querySelectorAll('span[style]').length > 0 || pre.querySelectorAll('.token').length > 0;
    const shouldHighlight = lang && !isTokenized && pre.getAttribute('data-highlighted') !== 'true';

    if (shouldHighlight) {
      await highlightCodeBlock(pre, lang);
    }

    // 5. Wrap line elements dynamically if they aren't structured (e.g. pre-tokenized Shiki code)
    const wantsLineNumbers = pre.getAttribute('data-line-numbers') === 'true' || pre.classList.contains('line-numbers');
    if (wantsLineNumbers) {
      pre.setAttribute('data-line-numbers', 'true');
      
      let lines = target.querySelectorAll('.line');
      if (lines.length === 0) {
        // Safe wrapping: split text node lines to avoid breaking nested span tags
        const text = target.textContent || '';
        const linesArray = text.split('\n');
        
        // Remove trailing empty line
        if (linesArray.length > 0 && linesArray[linesArray.length - 1].trim() === '') {
          linesArray.pop();
        }

        target.innerHTML = linesArray
          .map((line: string) => `<span class="line">${line || ' '}</span>`)
          .join('\n');
      }
    }
  });
}
