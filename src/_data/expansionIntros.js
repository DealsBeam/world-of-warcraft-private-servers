const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'expansion-intros');
let out = {};
try {
  if (fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith('.md')) continue;
      const raw = fs.readFileSync(path.join(dir, f), 'utf8');
      const body = raw.split(/^---\s*$/m).slice(2).join('---').trim();
      // body is markdown with internal links; render minimal markdown to html: handle links and paragraphs
      // keep raw markdown for simplicity, convert links: [text](/path/) -> <a href="/path/">text</a>
      // split paragraphs by blank line
      const html = body.split(/\n\n+/).map(p => {
        p = p.trim().replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
        // if already html-ish, wrap in p
        if (p.startsWith('<')) return p;
        return `<p>${p}</p>`;
      }).join('\n');
      const slug = f.replace(/\.md$/, '');
      const eraMap = { vanilla: 'Vanilla', tbc: 'TBC', wotlk: 'WotLK', cataclysm: 'Cataclysm', mop: 'MoP', legion: 'Legion', tww: 'TWW', multi: 'Multi' };
      const era = eraMap[slug] || slug;
      out[era] = html;
    }
  }
} catch (e) { /* ponytail: ignore missing dir at build */ }

module.exports = out;
