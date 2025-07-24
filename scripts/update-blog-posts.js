const fs = require('fs');
const Parser = require('rss-parser');
const parser = new Parser();

const FEED_URL = 'https://me.hsinghhira.me/atom.xml';
const TAGS = ['works', 'blog']; // lowercase only
const MAX_POSTS = 5;
const README_FILE = 'README.md';
const START_MARK = '<!-- BLOG-POST-LIST:START -->';
const END_MARK = '<!-- BLOG-POST-LIST:END -->';

(async () => {
  try {
    const feed = await parser.parseURL(FEED_URL);

    const filtered = feed.items.filter(item => {
      const tags = (item.categories || []).map(c => c.toLowerCase());
      return tags.some(tag => TAGS.includes(tag));
    });

    const latestPosts = filtered.slice(0, MAX_POSTS).map(item => `- [${item.title}](${item.link})`);

    const readme = fs.readFileSync(README_FILE, 'utf8');
    const newContent = `${START_MARK}\n${latestPosts.join('\n')}\n${END_MARK}`;
    const updatedReadme = readme.replace(
      new RegExp(`${START_MARK}[\\s\\S]*?${END_MARK}`),
      newContent
    );

    fs.writeFileSync(README_FILE, updatedReadme);
    console.log('✅ README.md updated with latest blog posts.');
  } catch (error) {
    console.error('❌ Failed to fetch or update blog posts:', error);
    process.exit(1);
  }
})();
