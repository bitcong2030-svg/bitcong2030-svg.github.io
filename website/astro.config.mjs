import { defineConfig } from 'astro/config';

// BASE_PATH 由部署环境注入：
//   GitHub Pages 项目站 → /<repo>/
//   GitHub Pages 用户站或自定义域名 → /
// 本地开发默认 '/'，改 base 不需要动任何模板代码。
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://bitcong2030-svg.github.io';

export default defineConfig({
  site,
  base,
  output: 'static',
  build: {
    format: 'directory'
  }
});
