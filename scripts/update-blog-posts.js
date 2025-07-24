const fs = require('fs');

const START = '<!-- BLOG-POST-LIST:START -->';
const END = '<!-- BLOG-POST-LIST:END -->';
const FILE = 'README.md';

const readme = fs.readFileSync(FILE, 'utf8');

const lines = [
  '- [Test Inject 1](https://example.com/1)',
  '- [Test Inject 2](https://example.com/2)',
];

const regex = new RegExp(`${START}[\\s\\S]*?${END}`, 'g');

if (!regex.test(readme)) {
  console.error('❌ Could not find blog post markers in README.md');
  process.exit(1);
}

const result = readme.replace(regex, `${START}\n${lines.join('\n')}\n${END}`);

fs.writeFileSync(FILE, result);
console.log('✅ README.md updated.');
