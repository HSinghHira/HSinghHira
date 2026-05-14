// src/scripts/code-expander.ts

export function initCodeExpander() {
  document.querySelectorAll("pre").forEach((pre) => {
    // Skip if already processed
    if (pre.hasAttribute("data-code-expander-initialized")) {
      return;
    }
    
    const lines = pre.innerText.split("\n");
    
    // Only add expander if more than 10 lines
    if (lines.length > 10) {
      pre.classList.add("code-collapsible");
      pre.setAttribute("data-code-expander-initialized", "true");
      
      const btn = document.createElement("button");
      btn.className = "code-toggle-btn";
      btn.textContent = "Show more code";
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Toggle code visibility");

      btn.addEventListener("click", function () {
        const isExpanded = pre.classList.toggle("expanded");
        btn.textContent = isExpanded ? "Show less" : "Show more code";
        btn.setAttribute("aria-expanded", isExpanded.toString());
      });

      // Insert button after the pre tag
      pre.parentNode?.insertBefore(btn, pre.nextSibling);
    }
  });
}

// Auto-initialize if script is loaded
if (typeof window !== 'undefined') {
  document.addEventListener("DOMContentLoaded", initCodeExpander);
}