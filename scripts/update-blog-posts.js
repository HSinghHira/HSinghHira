const fs = require('fs');

const README_FILE = 'README.md';
const START_MARK = '<!-- BLOG-POST-LIST:START -->';
const END_MARK = '<!-- BLOG-POST-LIST:END -->';

const testPosts = [
  '- [Test Post 1](https://example.com/post1)',
  '- [Test Post 2](https://example.com/post2)',
  '- [Test Post 3](https://example.com/post3)',
];

const readme = fs.readFileSync(README_FILE, 'utf8');
const updated = readme.replace(
  new RegExp(`${START_MARK}[\\s\\S]*?${END_MARK}`),
  `${START_MARK}\n${testPosts.join('\n')}\n${END_MARK}`
);

fs.writeFileSync(README_FILE, updated);
console.log('✅ Test blog posts injected into README.');
