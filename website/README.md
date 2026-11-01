# BitCong Website

Astro static site for the BitCong project. See the [root README](../README.md) for project context, deployment settings, and disclaimers.

BitCong 官网，Astro 静态站。项目背景、部署参数与免责声明见[根目录 README](../README.md)。

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Content rules · 内容规则

Before launch, these must stay true:

- Token parameters are edited in `src/config/site.ts` only.
- Anything not deployed is written as planned (`计划` / `拟` / `目标`), never as done.
- No mint address, treasury address, or liquidity address is shown until it exists on-chain and has been verified.
- No price talk, no return promise, no buyback, no market making.
- All social links and the contact address must be verified before they are published.

## Fonts

Manrope (variable) and DM Mono are self-hosted in `public/fonts/`. No external font CDN is used, so the site does not depend on `fonts.googleapis.com` — which is unreachable from mainland China. Chinese text falls back to the system CJK stack (PingFang SC, Microsoft YaHei, Noto Sans CJK).
