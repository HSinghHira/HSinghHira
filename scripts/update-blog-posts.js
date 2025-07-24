const fs = require('fs');
const Parser = require('rss-parser');
const parser = new Parser();

const FEED_URL = 'https://me.hsinghhira.me/atom.xml';
const MAX_POSTS = 5;
const README_FILE = 'README.md';
const START_MARK = '<!-- BLOG-POST-LIST:START -->';
const END_MARK = '<!-- BLOG-POST-LIST:END -->';

(async () => {
  try {
    const feed = await parser.parseURL(FEED_URL);
    console.log(`✅ Loaded feed with ${feed.items.length} items`);

    const allPosts = feed.items.slice(0, MAX_POSTS).map(item => {
      console.log(`📌 ${item.title}`);
      console.log(`   ↳ link: ${item.link}`);
      console.log(`   ↳ categories:`, item.categories);
      return `- [${item.title}](${item.link})`;
    });

    const readme = fs.readFileSync(README_FILE, 'utf8');
    const updated = readme.replace(
      new RegExp(`${START_MARK}[\\s\\S]*?${END_MARK}`),
      `${START_MARK}\n${allPosts.join('\n')}\n${END_MARK}`
    );

    fs.writeFileSync(README_FILE, updated);
    console.log('✅ README.md updated with latest blog posts.');
  } catch (error) {
    console.error('❌ Failed to update README:', error);
    process.exit(1);
  }
})();
