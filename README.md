# BitCong · 比特聪

> **One Satoshi. One Community.**
> 一聪虽小，共识无限。

BitCong is an independent community meme project on Solana, inspired by Bitcoin culture. It is not a fork of Bitcoin, not a DeFi protocol, and not a payments network. Its fixed supply equals the total number of satoshis in all bitcoin: 2,100,000,000,000,000.

比特聪是一个基于 Solana 的独立社区 Meme 项目，以比特币文化为叙事起点。它不是比特币的分叉，不是 DeFi 协议，也不是支付网络。其固定总量等于全网比特币的聪总数：2,100,000,000,000,000。

---

## Project status · 项目状态

**Pre-launch. Discussion draft. No token has been issued.**

The project is in its preparation stage. Nothing in this repository should be read as a completed deployment: no mint address exists yet, no liquidity pool has been created, and no token distribution has taken place.

项目处于准备阶段，尚未发行代币：无 Mint 地址、无流动性池、未进行任何分配。仓库中所有参数与规则均为计划，未完成的事项不作完成声明。

---

## Repository layout · 仓库结构

```
.
├── website/                 Astro static site (official website)
│   ├── public/fonts/        Self-hosted webfonts (no external CDN)
│   └── src/
│       ├── config/site.ts   Single source of truth for token parameters
│       ├── layouts/
│       ├── pages/           index / whitepaper / tokenomics / community / transparency
│       └── styles/
└── docs/
    └── whitepaper/          Whitepaper V1.0 — HTML + PDF
        ├── index.html
        ├── bitcong-whitepaper-v1.0.pdf
        └── assets/          Fonts, charts, libraries
```

All token parameters live in a single file: [`website/src/config/site.ts`](website/src/config/site.ts). Change them there, not in page templates.

所有代币参数集中在 `website/src/config/site.ts`，页面模板不单独写死数值。

---

## Local development · 本地运行

Requires Node.js ≥ 20.3.

```bash
cd website
npm install
npm run dev        # http://localhost:4321
```

Build and preview a production bundle:

```bash
npm run build      # output: website/dist
npm run preview
```

---

## Deployment · 部署

The website is a fully static build and deploys to Cloudflare Pages:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Root directory | `website` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `20` (`NODE_VERSION=20`) |

No server, database, environment variables, or API keys are required.

---

## Whitepaper · 白皮书

| Format | File |
| --- | --- |
| Web | [`docs/whitepaper/index.html`](docs/whitepaper/index.html) |
| PDF (A4, 24 pages) | [`docs/whitepaper/bitcong-whitepaper-v1.0.pdf`](docs/whitepaper/bitcong-whitepaper-v1.0.pdf) |

The whitepaper is a discussion draft. It is bilingual only in headings and brand terms; the body is written in Simplified Chinese.

白皮书为讨论稿，正式发行前须经法律顾问审核。

---

## Transparency principles · 透明度原则

- Parameters are published before launch, not after.
- Anything not yet deployed is labelled as planned, never as completed.
- Supply, authorities, allocations, and treasury are verifiable on-chain once issued.
- No price prediction, no return promise, no buyback, no market making.

---

## Disclaimer · 免责声明

BCONG is an independent community culture experiment. It is not BTC, not an asset on the Bitcoin network, and is not affiliated with Satoshi Nakamoto, Bitcoin Core, or any Bitcoin-related organisation.

Digital assets are highly speculative and may lose all value. Nothing in this repository constitutes investment advice, an offer of securities, a solicitation, or a promise of return in any jurisdiction. The project does not raise funds from residents of mainland China and provides no fiat on-ramp or custody service.

BCONG 是独立的社区文化实验，不是 BTC，不代表中本聪或 Bitcoin Core。数字资产具有高度风险，可能损失全部价值。本仓库内容不构成投资建议、证券要约、募集邀请或任何收益承诺。

---

## Contact · 联系方式

bitcong2030@gmail.com

---

## License

Code and site source: [MIT](LICENSE) © 2026 BitCong.

The MIT license covers the source code, templates, and configuration in this repository. It does not grant any right to the BCONG token, the brand name, the logo, or the whitepaper text, which remain the property of the project owner.

代码与站点源码采用 [MIT](LICENSE) 许可。该许可仅覆盖本仓库的源代码、模板与配置，不涉及 BCONG 代币、品牌名称、标识与白皮书文本。
