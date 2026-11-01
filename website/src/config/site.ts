/**
 * 站内链接统一走 url()，避免 GitHub Pages 子路径部署时 404。
 * BASE_URL 由 astro.config.mjs 的 base 决定，始终以 '/' 开头和结尾。
 */
const BASE = import.meta.env.BASE_URL;
export const url = (path = '/') => `${BASE}${path.replace(/^\//, '')}`;

export const site = {
  name: 'BitCong',
  chineseName: '比特聪',
  ticker: 'BCONG',
  network: 'Solana',
  totalSupply: '2,100,000,000,000,000',
  slogan: '一聪虽小，共识无限。',
  englishSlogan: 'ONE SATOSHI. ONE COMMUNITY.',
  // Replace these with verified official community URLs before launch.
  links: {
    x: '',
    telegram: '',
    github: ''
  },
  // 联系方式：页面渲染时以 data-mail 属性承载，点击时才拼成 mailto，避免明文地址被批量抓取
  contact: {
    emailUser: 'bitcong2030',
    emailDomain: 'gmail.com',
    display: 'bitcong2030 [at] gmail.com'
  },
  // Add the real Solana mint address only after deployment and independent verification.
  mintAddress: ''
};

export const allocation = [
  { name: '社区分配', en: 'Community allocation', percent: 60, amount: '1,260,000,000,000,000', color: '#C87A2A' },
  { name: '流动性', en: 'Liquidity', percent: 20, amount: '420,000,000,000,000', color: '#E0A05C' },
  { name: '团队', en: 'Team', percent: 10, amount: '210,000,000,000,000', color: '#8A8A90' },
  { name: '社区金库', en: 'Community treasury', percent: 10, amount: '210,000,000,000,000', color: '#4A4A50' }
];
