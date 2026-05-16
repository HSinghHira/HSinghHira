---
title: Typography & Design System
slug: typography
author: Harman Singh Hira
description: >-
  A comprehensive guide to the design system's typography, components, and
  interactive elements used across this site.
pubDatetime: 2026-05-16T00:00:00.000Z
tags:
  - Design
  - Typography
  - UI
draft: true
---

Welcome to the definitive reference for our typography and design system. This page documents every visual token, component, and interactive pattern used to build this site, ensuring a consistent and premium experience across all devices.

<div class="prose">

<hr class="divider" />

<!-- 01 TYPEFACES -->
<div class="typ-section">
  <div class="label">01 — Typefaces</div>
  <span class="code-comment">// the foundation of our visual identity</span>

  <div class="typeface-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin: 2rem 0;">
    <div class="typeface-card" style="padding: 1.5rem; background: var(--bg-3); border-radius: 12px; border: 1px solid var(--border);">
      <div style="font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800; line-height: 1; margin-bottom: 1rem;">Aa</div>
      <div class="body-medium">Syne</div>
      <div class="body-sm">ExtraBold · Bold · SemiBold · Regular</div>
      <div class="code-comment" style="margin-top: 1rem;">Display headings & Hero titles</div>
    </div>
    <div class="typeface-card" style="padding: 1.5rem; background: var(--bg-3); border-radius: 12px; border: 1px solid var(--border);">
      <div style="font-family: 'DM Sans', sans-serif; font-size: 3rem; font-weight: 400; line-height: 1; margin-bottom: 1rem;">Aa</div>
      <div class="body-medium">DM Sans</div>
      <div class="body-sm">Medium · Regular · Light</div>
      <div class="code-comment" style="margin-top: 1rem;">Body copy · UI text · Navigation</div>
    </div>
    <div class="typeface-card" style="padding: 1.5rem; background: var(--bg-3); border-radius: 12px; border: 1px solid var(--border);">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 3rem; font-weight: 400; line-height: 1; margin-bottom: 1rem;">Aa</div>
      <div class="body-medium">JetBrains Mono</div>
      <div class="body-sm">Medium · Regular</div>
      <div class="code-comment" style="margin-top: 1rem;">Code blocks · Labels · Metadata</div>
    </div>
  </div>
</div>

<hr class="divider" />

<!-- 02 HEADING SCALE -->
<div class="typ-section">
  <div class="label">02 — Heading Scale</div>
  <span class="code-comment">// Syne · weights 600–800 · tight tracking</span>

  <div style="margin: 2rem 0; display: flex; flex-direction: column; gap: 2.5rem;">
    <div>
      <span class="code-comment">// h1 · extra bold · −0.04em tracking</span>
      <h1>The quick brown fox jumps over the lazy dog</h1>
    </div>
    <div>
      <span class="code-comment">// h2 · bold · −0.03em tracking</span>
      <h2>The quick brown fox jumps over the lazy dog</h2>
    </div>
    <div>
      <span class="code-comment">// h3 · bold · −0.03em tracking</span>
      <h3>The quick brown fox jumps over the lazy dog</h3>
    </div>
    <div>
      <span class="code-comment">// h4 · semibold · −0.02em tracking</span>
      <h4>The quick brown fox jumps over the lazy dog</h4>
    </div>
    <div>
      <span class="code-comment">// h5 · semibold · −0.01em tracking</span>
      <h5>The quick brown fox jumps over the lazy dog</h5>
    </div>
    <div>
      <span class="code-comment">// h6 · semibold · standard tracking</span>
      <h6>The quick brown fox jumps over the lazy dog</h6>
    </div>
  </div>
</div>

<hr class="divider" />

<!-- 03 SIZE SCALE -->
<div class="typ-section">
  <div class="label">03 — Size Scale</div>
  <span class="code-comment">// visual ramp from hero to caption</span>

  <div class="scale-ramp" style="margin: 2rem 0; display: flex; flex-direction: column; gap: 1rem;">
    <div style="display: flex; align-items: baseline; gap: 2rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">
      <span class="body-xs" style="min-width: 140px;">hero · 4.5rem</span>
      <span class="h1-display" style="margin: 0;">Display Hero</span>
    </div>
    <div style="display: flex; align-items: baseline; gap: 2rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">
      <span class="body-xs" style="min-width: 140px;">h1 · 2.5rem</span>
      <span class="h1" style="margin: 0; font-family: var(--font-display); font-weight: 800; font-size: 2.5rem;">Page Title</span>
    </div>
    <div style="display: flex; align-items: baseline; gap: 2rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">
      <span class="body-xs" style="min-width: 140px;">h2 · 2.1rem</span>
      <span class="h2" style="margin: 0; font-family: var(--font-display); font-weight: 700; font-size: 2.1rem;">Section Title</span>
    </div>
    <div style="display: flex; align-items: baseline; gap: 2rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">
      <span class="body-xs" style="min-width: 140px;">lead · 1.35rem</span>
      <span class="lead" style="margin: 0;">Lead Paragraph</span>
    </div>
    <div style="display: flex; align-items: baseline; gap: 2rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">
      <span class="body-xs" style="min-width: 140px;">base · 1rem</span>
      <span class="body-base" style="margin: 0;">Standard Body Copy</span>
    </div>
    <div style="display: flex; align-items: baseline; gap: 2rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">
      <span class="body-xs" style="min-width: 140px;">sm · 0.875rem</span>
      <span class="body-sm" style="margin: 0;">Small Text / Metadata</span>
    </div>
    <div style="display: flex; align-items: baseline; gap: 2rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">
      <span class="body-xs" style="min-width: 140px;">xs · 0.75rem</span>
      <span class="body-xs" style="margin: 0;">Caption / Label</span>
    </div>
  </div>
</div>

<hr class="divider" />

<!-- 04 BODY TEXT -->
<div class="typ-section">
  <div class="label">04 — Body Text</div>
  <span class="code-comment">// DM Sans · weight 300 base · line-height 1.7–1.75</span>

  <div style="margin: 2rem 0; display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <span class="code-comment">// lead · 1.35rem · weight 300 · color text-2</span>
      <p class="lead">Creator, tech enthusiast, and problem solver — building things that matter at the intersection of design and engineering.</p>
    </div>
    <div>
      <span class="code-comment">// body-lg · 1.2rem · weight 300</span>
      <p class="body-lg">Large body text for introductory paragraphs or content that needs extra presence. It balances well against display headings and provides breathing room for the reader.</p>
    </div>
    <div>
      <span class="code-comment">// body-base · 1rem · weight 300 · standard reading copy</span>
      <p class="body-base">Standard body copy at base size. This is the workhorse of the type system — used for descriptions, blog posts, and general interface content. The light weight keeps things elegant without feeling thin.</p>
    </div>
    <div>
      <span class="code-comment">// body-medium · 1rem · weight 500 · emphasis</span>
      <p class="body-medium">Medium weight body for labels, card descriptions, or content that needs to stand out slightly without reaching for bold. Works well in UI contexts.</p>
    </div>
    <div>
      <span class="code-comment">// body-sm · 0.875rem · weight 400 · color text-2</span>
      <p class="body-sm">Small body text in muted colour for secondary information, captions, dates, and metadata. Remains highly legible even at this reduced scale.</p>
    </div>
    <div>
      <span class="code-comment">// body-xs · 0.78rem · weight 400 · color text-3</span>
      <p class="body-xs">Extra small text in the dimmest tone — used for fine print, timestamps, or deeply nested metadata. Approach sparingly.</p>
    </div>
  </div>
</div>

<hr class="divider" />

<!-- 05 INLINE STYLES -->
<div class="typ-section">
  <div class="label">05 — Inline Styles</div>
  <span class="code-comment">// emphasis, marks, and inline utilities</span>

  <p class="body-base" style="margin: 2rem 0;">
    This sentence uses <strong>medium weight (500)</strong> for emphasis within body copy.
    Italics use <em>DM Sans Italic 300</em> with a muted colour shift.
    You can <u>underline with an offset</u> for a cleaner look.
    <s>Strikethrough</s> renders in muted tones.
    Use <mark>highlighted text</mark> to call attention to a key phrase.
    Press <kbd>⌘</kbd> <kbd>K</kbd> to open command palette.
    Superscript<sup>1</sup> and subscript<sub>note</sub> are supported too.
    And of course <code class="inline-code">inline-code</code> in accent gold monospace.
  </p>
</div>

<hr class="divider" />

<!-- 06 CODE -->
<div class="typ-section">
  <div class="label">06 — Code & Monospace</div>
  <span class="code-comment">// JetBrains Mono · 0.82rem · line-height 1.85</span>

  <div style="margin: 2rem 0; display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <span class="code-comment">// inline code</span>
      <p class="body-base">
        Use <code class="inline-code">font-family: 'JetBrains Mono'</code> with
        <code class="inline-code">var(--accent)</code> colour for inline tokens.
      </p>
    </div>

    <div>
      <span class="code-comment">// code block with syntax highlighting</span>
      <pre class="code-block"><span class="cmt">// design system config</span>
<span class="kw">const</span> <span class="acc">typography</span> = {
  display:  <span class="str">'Syne'</span>,
  body:     <span class="str">'DM Sans'</span>,
  mono:     <span class="str">'JetBrains Mono'</span>,
};

<span class="kw">function</span> <span class="fn">applyTheme</span>(theme) {
  document.documentElement.dataset.theme = theme;
  <span class="kw">return</span> <span class="str">`Applied ${theme} theme`</span>;
}

<span class="fn">applyTheme</span>(<span class="str">'dark'</span>);   <span class="cmt">// → 'Applied dark theme'</span></pre>
    </div>
  </div>
</div>

<hr class="divider" />

<!-- 07 BLOCKQUOTE -->
<div class="typ-section">
  <div class="label">07 — Blockquote</div>
  <span class="code-comment">// 2px left border · accent colour · italic body · mono cite</span>

  <blockquote class="bq">
    <p>Great design is not just what it looks like and feels like — it's how it communicates, how it moves, and whether it earns the attention of the person reading it.</p>
    <cite>— Typography Principle, Design System v1.0</cite>
  </blockquote>
</div>

<hr class="divider" />

<!-- 08 LISTS -->
<div class="typ-section">
  <div class="label">08 — Lists</div>
  <span class="code-comment">// custom bullets (✦ accent) · leading-zero ordered</span>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin: 2rem 0;">
    <div>
      <span class="code-comment">// unordered · ✦ accent bullet</span>
      <ul class="custom-ul">
        <li>Syne for all display headings</li>
        <li>DM Sans for body and UI text</li>
        <li>JetBrains Mono for code and labels</li>
        <li>Accent gold (#c8a97a) as primary highlight</li>
      </ul>
    </div>
    <div>
      <span class="code-comment">// ordered · leading-zero mono counter</span>
      <ol class="custom-ol">
        <li>Define the visual hierarchy</li>
        <li>Choose a distinctive type pairing</li>
        <li>Set a consistent spacing scale</li>
        <li>Apply colour purposefully</li>
      </ol>
    </div>
  </div>
</div>

<hr class="divider" />

<!-- 09 LINKS -->
<div class="typ-section">
  <div class="label">09 — Links & Navigation Text</div>
  <span class="code-comment">// four link variants · all interactive</span>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
    <div>
      <span class="code-comment">// link-base · underline</span><br />
      <a href="#" class="link-base">Underline Link</a>
    </div>
    <div>
      <span class="code-comment">// link-subtle · border-bottom</span><br />
      <a href="#" class="link-subtle">Subtle Border Link</a>
    </div>
    <div>
      <span class="code-comment">// link-arrow · animated</span><br />
      <a href="#" class="link-arrow">
        Arrow Link
        <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
    </div>
    <div>
      <span class="code-comment">// link-ghost · pill button</span><br />
      <a href="#" class="link-ghost">Ghost Pill</a>
    </div>
  </div>
</div>

<hr class="divider" />

<!-- 10 LABELS & CHIPS -->
<div class="typ-section">
  <div class="label">10 — Labels, Badges & Chips</div>
  <span class="code-comment">// JetBrains Mono · uppercase · letter-spacing 0.12em</span>

  <div style="display: flex; flex-direction: column; gap: 2rem; margin: 2rem 0;">
    <div>
      <span class="code-comment">// section label · decorative dash</span>
      <div class="label" style="margin-bottom: 0;">Section Label</div>
    </div>

    <div>
      <span class="code-comment">// status badge · animated pulse</span>
      <div class="status-badge">
        <div class="status-dot"></div>
        Available for work
      </div>
    </div>

    <div>
      <span class="code-comment">// colour chips · semantic variants</span>
      <div class="color-chips">
        <span class="chip chip-text">accent</span>
        <span class="chip chip-muted">muted</span>
        <span class="chip chip-dim">dim</span>
        <span class="chip chip-green">green</span>
        <span class="chip chip-blue">blue</span>
        <span class="chip chip-purple">purple</span>
      </div>
    </div>
  </div>
</div>

<hr class="divider" />

<!-- 11 SPECIAL PATTERNS -->
<div class="typ-section">
  <div class="label">11 — Special Patterns</div>
  <span class="code-comment">// hero name & horizontal rules</span>

  <div style="display: flex; flex-direction: column; gap: 3rem; margin: 2rem 0;">
    <div>
      <span class="code-comment">// hero name · accent last name</span>
      <div class="h1-display" style="font-size: clamp(2rem, 8vw, 5rem); line-height: 0.9;">Harman<br /><span class="text-accent">Hira</span></div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
      <div>
        <span class="code-comment">// hr-solid</span>
        <hr class="hr-solid" />
      </div>
      <div>
        <span class="code-comment">// hr-accent</span>
        <hr class="hr-accent" />
      </div>
      <div>
        <span class="code-comment">// hr-gradient</span>
        <hr class="hr-gradient" />
      </div>
      <div>
        <span class="code-comment">// hr-thick</span>
        <hr class="hr-thick" />
      </div>
    </div>
  </div>
</div>

<hr class="divider" />

<!-- 12 BUTTONS -->
<div class="typ-section">
  <div class="label">12 — Buttons</div>
  <span class="code-comment">// DM Sans 500 · border-radius 8px</span>

  <div style="display: flex; flex-direction: column; gap: 2rem; margin: 2rem 0;">
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-ghost">Ghost</button>
      <button class="btn btn-accent-outline">Outline</button>
      <button class="btn btn-green">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        Success
      </button>
      <button class="btn btn-danger">Danger</button>
    </div>
    
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
      <button class="btn btn-primary btn-sm">Small</button>
      <button class="btn btn-primary">Default</button>
      <button class="btn btn-primary btn-lg">Large</button>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <button class="btn btn-primary" disabled>Disabled Primary</button>
      <button class="btn btn-ghost" disabled>Disabled Ghost</button>
    </div>
  </div>
</div>

<hr class="divider" />

<!-- 13 FORM ELEMENTS -->
<div class="typ-section">
  <div class="label">13 — Form Elements</div>
  <span class="code-comment">// interactive inputs & controls</span>

  <div style="display: flex; flex-direction: column; gap: 3rem; margin: 2rem 0;">
    <div class="form-grid">
      <div class="form-group">
        <label class="form-label">Full Name</label>
        <input class="form-input" type="text" placeholder="Harman Singh Hira" />
        <span class="form-helper">// default state</span>
      </div>
      <div class="form-group">
        <label class="form-label">Email Address</label>
        <input class="form-input success" type="email" value="harman@example.com" />
        <span class="form-success-text">// success state</span>
      </div>
      <div class="form-group">
        <label class="form-label">Password</label>
        <input class="form-input error" type="password" value="wrong" />
        <span class="form-error-text">// error state</span>
      </div>
      <div class="form-group">
        <label class="form-label">Role</label>
        <select class="form-select">
          <option>Creator</option>
          <option>Developer</option>
        </select>
      </div>
      <div class="form-group full">
        <label class="form-label">Message</label>
        <textarea class="form-textarea" placeholder="Write something..."></textarea>
      </div>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 4rem;">
      <div class="check-group">
        <span class="code-comment">// checkboxes</span>
        <label class="check-item">
          <input type="checkbox" checked />
          <span class="check-box"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span>
          <span class="check-label">Checked state</span>
        </label>
        <label class="check-item">
          <input type="checkbox" />
          <span class="check-box"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span>
          <span class="check-label">Unchecked</span>
        </label>
      </div>

      <div class="check-group">
        <span class="code-comment">// radio buttons</span>
        <label class="check-item">
          <input type="radio" name="reference-role" checked />
          <span class="radio-box"><div class="radio-dot"></div></span>
          <span class="check-label">Selected</span>
        </label>
        <label class="check-item">
          <input type="radio" name="reference-role" />
          <span class="radio-box"><div class="radio-dot"></div></span>
          <span class="check-label">Not selected</span>
        </label>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <span class="code-comment">// toggles</span>
        <label class="toggle-wrap">
          <input type="checkbox" class="toggle-input" checked />
          <div class="toggle-track"><div class="toggle-thumb"></div></div>
          <span class="toggle-label">Active</span>
        </label>
        <label class="toggle-wrap">
          <input type="checkbox" class="toggle-input" />
          <div class="toggle-track"><div class="toggle-thumb"></div></div>
          <span class="toggle-label">Inactive</span>
        </label>
      </div>
    </div>
  </div>
</div>

<hr class="divider" />

<!-- 14 ALERTS -->
<div class="typ-section">
  <div class="label">14 — Alert Banners</div>
  <span class="code-comment">// contextual feedback components</span>

  <div class="alert-stack" style="margin: 2rem 0;">
    <div class="alert alert-info">
      <svg viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      <div class="alert-content">
        <div class="alert-title">Information</div>
        <p class="alert-body">This design system is built to scale smoothly across all breakpoints.</p>
      </div>
    </div>
    <div class="alert alert-success">
      <svg viewBox="0 0 24 24" stroke="currentColor"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <div class="alert-content">
        <div class="alert-title">Success</div>
        <p class="alert-body">Typography classes have been successfully integrated into the build.</p>
      </div>
    </div>
  </div>
</div>

<hr class="divider" />

<!-- 15 TABLE -->
<div class="typ-section">
  <div class="label">15 — Table</div>
  <span class="code-comment">// structured data reference</span>

  <div class="table-wrap">
    <table class="ds-table">
      <thead>
        <tr>
          <th>Family</th>
          <th>Role</th>
          <th>Base Size</th>
          <th>Tracking</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="td-strong">Syne</td>
          <td>Headings</td>
          <td>clamp(2–2.5rem)</td>
          <td>−0.04em</td>
        </tr>
        <tr>
          <td class="td-strong">DM Sans</td>
          <td>Body</td>
          <td>1rem</td>
          <td>0</td>
        </tr>
        <tr>
          <td class="td-strong">JetBrains Mono</td>
          <td>Labels</td>
          <td>0.72rem</td>
          <td>+0.12em</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<hr class="divider" />

<!-- 16 DEFINITION LIST -->
<div class="typ-section">
  <div class="label">16 — Definition List</div>
  <span class="code-comment">// semantic term descriptions</span>

  <dl class="ds-dl">
    <dt>--accent</dt>
    <dd>The primary brand color used for highlights and interactive focus states.</dd>
    <dt>--text-2</dt>
    <dd>Secondary text color used for descriptive paragraphs and metadata.</dd>
  </dl>
</div>

<hr class="divider" />

<!-- 17 NESTED LIST -->
<div class="typ-section">
  <div class="label">17 — Nested Lists</div>
  <span class="code-comment">// visual hierarchy within lists</span>

  <ul class="nested-ul" style="margin: 2rem 0;">
    <li>
      <div>
        Design Foundation
        <ul>
          <li>
            Typography
            <ul>
              <li>Display (Syne)</li>
              <li>Body (DM Sans)</li>
            </ul>
          </li>
          <li>Colors (Accent Gold)</li>
        </ul>
      </div>
    </li>
  </ul>
</div>

<hr class="divider" />

<!-- 18 NAVIGATION PATTERNS -->
<div class="typ-section">
  <div class="label">18 — Navigation Patterns</div>
  <span class="code-comment">// interactive discovery components</span>

  <div style="display: flex; flex-direction: column; gap: 3rem; margin: 2rem 0;">
    <div>
      <nav class="breadcrumb">
        <span class="breadcrumb-item"><a href="#">Home</a></span>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-item"><a href="#">Design</a></span>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-item active">Typography</span>
      </nav>
    </div>

    <div class="tab-bar">
      <button class="tab-item active">All Elements</button>
      <button class="tab-item">Tokens</button>
      <button class="tab-item">Components</button>
    </div>

    <div class="pagination">
      <button class="page-btn"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>
      <button class="page-btn active">01</button>
      <button class="page-btn">02</button>
      <button class="page-btn"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></button>
    </div>

    <div class="pill-row" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <button class="tag-pill active">All</button>
      <button class="tag-pill">UI</button>
      <button class="tag-pill">UX</button>
      <button class="tag-pill">Code</button>
    </div>
  </div>
</div>

<hr class="divider" />

<!-- 19 STATS -->
<div class="typ-section">
  <div class="label">19 — Stats & Numbers</div>
  <span class="code-comment">// large numerical highlights</span>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-number">100<span>%</span></div>
      <div class="stat-label">Responsive</div>
      <div class="stat-sub">across all devices</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">24<span>/</span>7</div>
      <div class="stat-label">Consistency</div>
      <div class="stat-sub">enforced by system</div>
    </div>
  </div>
</div>

<hr class="divider" />

<!-- 20 ABBR & TOOLTIPS -->
<div class="typ-section">
  <div class="label">20 — Abbreviations & Tooltips</div>
  <span class="code-comment">// subtle interactive annotations</span>

  <div style="display: flex; flex-direction: column; gap: 2rem; margin: 2rem 0;">
    <p class="body-base">
      We follow <abbr class="ds-abbr" title="Web Content Accessibility Guidelines">WCAG</abbr> best practices for color contrast and font scaling.
    </p>

    <div style="display: flex; gap: 1rem;">
      <div class="tooltip-wrap">
        <span class="tooltip-trigger">Hover me</span>
        <div class="tooltip-box">This is a design system tooltip</div>
      </div>
    </div>
  </div>
</div>

<hr class="divider" />

<!-- 21 LETTER SPACING -->
<div class="typ-section">
  <div class="label">21 — Letter Spacing</div>
  <span class="code-comment">// Syne tight → Mono loose</span>

  <div style="display: flex; flex-direction: column; gap: 1rem; margin: 2rem 0;">
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding: 0.5rem 0;">
      <span class="body-xs">−0.04em · display</span>
      <span class="h2" style="letter-spacing: -0.04em; margin: 0;">Harman Singh Hira</span>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding: 0.5rem 0;">
      <span class="body-xs">+0.12em · labels</span>
      <span class="label" style="margin: 0;">Section Label</span>
    </div>
  </div>
</div>

</div>