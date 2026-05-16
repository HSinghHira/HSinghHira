/**
 * Code expander utility.
 * Provides expand/collapse functionality for long code blocks.
 */

const MAX_LINES = 20;
const LINE_HEIGHT_APPROX = 22; // px

export function initCodeExpander() {
  const codeBlocks = document.querySelectorAll<HTMLElement>('pre');

  codeBlocks.forEach((pre) => {
    // Skip if already processed
    if (pre.dataset.expanderInit) return;
    pre.dataset.expanderInit = 'true';

    const lineCount = (pre.innerText.match(/\n/g) || []).length + 1;
    if (lineCount <= MAX_LINES) return;

    const maxHeight = MAX_LINES * LINE_HEIGHT_APPROX;
    pre.style.maxHeight = `${maxHeight}px`;
    pre.style.overflow = 'hidden';

    // Create expand button
    const expandBtn = document.createElement('button');
    expandBtn.className = 'code-expand-btn';
    expandBtn.innerText = `Show all ${lineCount} lines`;
    expandBtn.type = 'button';

    expandBtn.addEventListener('click', () => {
      pre.style.maxHeight = '';
      pre.style.overflow = 'auto';
      expandBtn.remove();
    });

    // Insert after the pre element
    if (pre.parentNode) {
      pre.parentNode.insertBefore(expandBtn, pre.nextSibling);
    }
  });
}
