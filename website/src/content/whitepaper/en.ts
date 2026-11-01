export type Block =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'note'; text: string };

export interface Chapter {
  id: string;
  num: string;
  title: string;
  blocks: Block[];
}

/**
 * 白皮书 V2.0（英文主版本，14 章）。
 * 其它语种翻译时保持同样的章节 id 与结构，只替换文字。
 */
export const chapters: Chapter[] = [
  {
    id: 'executive-summary',
    num: '01',
    title: 'Executive Summary',
    blocks: [
      {
        type: 'p',
        text:
          'BitCong is an independent community project planned for the Solana blockchain. It borrows the name of the smallest unit of Bitcoin — the satoshi — and builds a cultural identity around scarcity, openness, and verifiable rules.'
      },
      {
        type: 'p',
        text:
          'The planned supply is 2.1 quadrillion BCONG, a number equal to every satoshi in all 21 million bitcoin. That relationship is a cultural reference. It creates no claim, conversion right, or technical link to Bitcoin, and the project is not affiliated with Satoshi Nakamoto, Bitcoin Core, or any Bitcoin organisation.'
      },
      {
        type: 'ul',
        items: [
          'Fixed supply of 2.1Q, decimals 0, no transaction tax, no ongoing inflation.',
          'Four allocations only: community 60%, liquidity 20%, team 10%, treasury 10%.',
          'No presale, no private round, no market-making allocation, no buyback reserve.',
          'Mint and freeze authorities planned for revocation, with transaction hashes published afterwards.',
          'Launch is a gate, not a date: legal, technical, funding, and operational checks must pass first.'
        ]
      },
      {
        type: 'note',
        text:
          'Status at the time of writing: not launched. No mint address exists, no token has been distributed, and no liquidity pool has been created. Every parameter in this document is a plan until it is verifiable on-chain.'
      }
    ]
  },
  {
    id: 'project-overview',
    num: '02',
    title: 'Project Overview',
    blocks: [
      { type: 'h3', text: 'The number behind the name' },
      {
        type: 'p',
        text:
          'Bitcoin is capped at 21 million coins, and each coin divides into 100 million satoshis. Multiply the two and the result is 2.1 quadrillion — the total number of satoshis that will ever exist. Almost nobody discusses this number, because it is not a design limit but a consequence of two other numbers.'
      },
      {
        type: 'p',
        text:
          'A satoshi is small enough that most people will never hold a whole bitcoin and still can hold a satoshi. It has no chart of its own, no ticker, no exchange listing. It is simply the last digit of the ledger — and the reason bitcoin can be divided, held, and used at a human scale.'
      },
      { type: 'h3', text: 'What BitCong takes from Bitcoin' },
      {
        type: 'p',
        text:
          'BitCong does not inherit Bitcoin\'s technology and makes no claim of endorsement. What it takes is cultural: respect for absolute scarcity, scepticism toward discretionary issuance, and the idea that a small unit can still carry meaning.'
      },
      { type: 'h3', text: 'What BitCong is not' },
      {
        type: 'table',
        head: ['Common assumption', 'Actual position'],
        rows: [
          ['A Bitcoin fork or sidechain', 'No technical connection. Not endorsed by any Bitcoin community.'],
          ['A public blockchain or L2', 'No chain of its own. One SPL token on Solana.'],
          ['A DeFi protocol or yield product', 'No staking yield, no return promise, no revenue-sharing pool.'],
          ['A payments token', 'No payment product exists. The utility label is deliberately avoided.'],
          ['An investment product', 'No price target, no market making, no buyback support.']
        ]
      },
      {
        type: 'p',
        text:
          'This section exists because most community token projects fail at definition rather than execution. A project that cannot say what it is not will eventually be described by someone else.'
      }
    ]
  },
  {
    id: 'blockchain-architecture',
    num: '03',
    title: 'Blockchain Architecture',
    blocks: [
      {
        type: 'p',
        text:
          'The first phase contains three components and one token standard. There is no custom on-chain program, no backend service, no database, and no user account system.'
      },
      {
        type: 'table',
        head: ['Component', 'Role', 'Status'],
        rows: [
          ['Website', 'Official information, parameters, risk disclosure, verified links', 'Live (English)'],
          ['SPL Token', 'Fixed supply, metadata, revocable authorities', 'Planned'],
          ['Public AMM pool', 'Open market for BCONG/SOL', 'Not created'],
          ['Community channels', 'Announcements and discussion', 'Pending verification']
        ]
      },
      { type: 'h3', text: 'Why Solana' },
      {
        type: 'p',
        text:
          'The single reason is verifiability at low cost. Creating a token, revoking an authority, and opening a pool cost cents, which means a project without a development team can still perform every step in public. SPL Token and Metaplex metadata are public standards, so anyone can inspect supply and authorities in a block explorer without trusting the project.'
      },
      { type: 'h3', text: 'Deliberately excluded in phase one' },
      {
        type: 'ul',
        items: [
          'Indexing databases, caches, and queue infrastructure',
          'Paid RPC providers before public endpoints become a limitation',
          'Custom airdrop contracts and Merkle distributors',
          'Trading bots and market-making tooling',
          'Mini apps, chat bots, and account systems'
        ]
      },
      {
        type: 'note',
        text:
          'Anything that increases attack surface, maintenance cost, or legal exposure before there is real demand is postponed, not rejected.'
      }
    ]
  },
  {
    id: 'token-specification',
    num: '04',
    title: 'Token Specification',
    blocks: [
      {
        type: 'table',
        head: ['Parameter', 'Value', 'Note'],
        rows: [
          ['Name', 'BitCong / 比特聪', '—'],
          ['Ticker', 'BCONG', 'Availability check required before launch'],
          ['Network', 'Solana Mainnet-Beta', '—'],
          ['Standard', 'SPL Token + Metaplex metadata', 'No custom program'],
          ['Total supply', '2,100,000,000,000,000', 'Fixed, equals all satoshis'],
          ['Decimals', '0', '1 BCONG is the smallest unit'],
          ['Mint authority', 'Planned revocation', 'Hash published after execution'],
          ['Freeze authority', 'Planned revocation', 'Hash published after execution'],
          ['Metadata authority', 'Planned management', 'Locked or transferred after launch'],
          ['Transaction tax', '0% (planned)', 'No project fee on transfers']
        ]
      },
      { type: 'h3', text: 'Why decimals must be between 0 and 3' },
      {
        type: 'p',
        text:
          'The SPL Token supply field is an unsigned 64-bit integer, with a maximum of roughly 1.84 × 10¹⁹ base units. At a supply of 2.1 × 10¹⁵, each additional decimal multiplies the base-unit count by ten. Three decimals gives about 2.1 × 10¹⁸, which fits. Four decimals gives about 2.1 × 10¹⁹, which overflows and cannot be deployed.'
      },
      {
        type: 'p',
        text:
          'Decimals are therefore set to 0: one BCONG equals one base unit, matching the satoshi narrative and removing a common source of confusion for new holders.'
      },
      {
        type: 'note',
        text:
          'The ticker BCONG is a working choice. Before launch it must be checked against existing tokens on Solana and on major listings to avoid impersonation or confusion.'
      }
    ]
  },
  {
    id: 'tokenomics',
    num: '05',
    title: 'Tokenomics',
    blocks: [
      {
        type: 'p',
        text:
          'The economic design contains four decisions and no more. Every mechanism that would require continuous intervention has been removed.'
      },
      {
        type: 'ul',
        items: [
          'Fixed supply: 2.1Q, with no inflation path after deployment.',
          'Zero transfer tax: the token contract takes no fee.',
          'Four allocations, each with a stated purpose and a disclosure obligation.',
          'No price intervention: no buyback, no burn-for-scarcity, no market making.'
        ]
      },
      { type: 'h3', text: 'Design intent' },
      {
        type: 'p',
        text:
          'Scarcity is already expressed by the supply number. Adding artificial sinks on top of a fixed supply produces complexity without producing trust. Community tokens usually fail because participants cannot tell what the rules are, not because the supply is too large.'
      },
      {
        type: 'p',
        text:
          'The model therefore optimises for legibility: a reader should be able to understand the entire distribution, the authority state, and the release conditions in a single page.'
      }
    ]
  },
  {
    id: 'token-allocation',
    num: '06',
    title: 'Token Allocation',
    blocks: [
      {
        type: 'table',
        head: ['Allocation', 'Share', 'Amount', 'Management'],
        rows: [
          ['Community', '60%', '1.26Q', 'Public rules, published before each distribution'],
          ['Liquidity', '20%', '420T', 'Public AMM, amounts disclosed before launch'],
          ['Team', '10%', '210T', 'Public address, proposed cliff and linear release'],
          ['Treasury', '10%', '210T', 'Proposed 2-of-3 multisig, spending published']
        ]
      },
      { type: 'h3', text: 'Community — 60%' },
      {
        type: 'p',
        text:
          'This is a long-term allocation budget, not a launch-day drop. Five rules govern it:'
      },
      {
        type: 'ul',
        items: [
          'Rules first. Criteria are published before a round opens and are never changed retroactively.',
          'No zero-effort claims. No "register to receive" or "share to earn" mechanics that reward bots.',
          'Real participants first. Content, translation, development, and sustained participation outweigh simple holding.',
          'Unallocated tokens never revert to the team. The disposal rule is stated in advance.',
          'Every round is verifiable. Criteria, scope, amount, and transaction hash are published.'
        ]
      },
      { type: 'h3', text: 'Liquidity — 20%' },
      {
        type: 'p',
        text:
          'Reserved for the BCONG/SOL pool on a public automated market maker. The SOL amount, the chosen venue, and the LP handling method will be disclosed before the pool is created. No fixed burn ratio is promised, because LP instruments differ between venues; what matters is that control of the position is disclosed and cannot be quietly withdrawn.'
      },
      { type: 'h3', text: 'Team — 10%' },
      {
        type: 'p',
        text:
          'Proposed: a 6-month cliff followed by 18-month linear vesting, with a public address and a published schedule. This is a design intention, not an on-chain commitment. Until the vesting instrument exists and can be inspected, the status remains "proposed".'
      },
      { type: 'h3', text: 'Treasury — 10%' },
      {
        type: 'p',
        text:
          'Proposed to be held in a 2-of-3 multisig with publicly identified signers, at least one of whom represents the community. Intended for hosting, design, audit, and community activities. Every transfer is published with a purpose and a transaction hash.'
      }
    ]
  },
  {
    id: 'supply-and-authority',
    num: '07',
    title: 'Supply and Authority',
    blocks: [
      {
        type: 'p',
        text:
          'Authority is the part of a token that most projects describe loosely. This document treats it as a checklist with evidence attached to each item.'
      },
      {
        type: 'table',
        head: ['Authority', 'Target state', 'Evidence'],
        rows: [
          ['Mint authority', 'Revoked after launch', 'Transaction hash, then on-chain field reads null'],
          ['Freeze authority', 'Revoked after launch', 'Transaction hash, then on-chain field reads null'],
          ['Metadata update authority', 'Locked or transferred', 'Metaplex metadata account state']
        ]
      },
      { type: 'h3', text: 'Order of operations' },
      {
        type: 'ul',
        items: [
          'Confirm total supply and decimals on devnet, then repeat on mainnet.',
          'Distribute to the four allocation addresses before revoking mint authority.',
          'Revoke mint authority, publish the hash, and verify the field in a block explorer.',
          'Revoke freeze authority, publish the hash, and verify the field.',
          'Handle metadata authority, then publish the final state.'
        ]
      },
      {
        type: 'note',
        text:
          'Revocation is irreversible. It must be the last step after every distribution is complete, which is why the sequence above is fixed.'
      }
    ]
  },
  {
    id: 'liquidity',
    num: '08',
    title: 'Liquidity Mechanism',
    blocks: [
      {
        type: 'p',
        text:
          'Liquidity exists so that holders can exit, not so that the project can advertise a price. The mechanism is deliberately simple: one public pool, disclosed depth, disclosed control.'
      },
      {
        type: 'ul',
        items: [
          'The SOL amount contributed will be published before the pool is opened.',
          'The venue, pool address, and LP instrument will be published at creation.',
          'Control of the LP position will be disclosed, including whether it is locked, burned, or held by a multisig.',
          'No statement about liquidity will be made until the pool exists and can be inspected.'
        ]
      },
      { type: 'h3', text: 'What is not promised' },
      {
        type: 'p',
        text:
          'No minimum price, no depth guarantee, no market-making, and no exchange listing. A shallow pool produces large price movements from small trades; that risk is disclosed rather than engineered away with treasury funds.'
      }
    ]
  },
  {
    id: 'treasury-and-governance',
    num: '09',
    title: 'Treasury and Governance',
    blocks: [
      {
        type: 'p',
        text:
          'The treasury holds 10% of supply and exists to fund work that the community cannot do for free: hosting, design, audits, and events.'
      },
      {
        type: 'table',
        head: ['Item', 'Proposed arrangement'],
        rows: [
          ['Custody', '2-of-3 multisig'],
          ['Signers', 'Three individuals, identities published, at least one community representative'],
          ['Spending policy', 'Purpose and amount published before transfer'],
          ['Reporting', 'Monthly balance and spending summary'],
          ['Changes', 'Signer or threshold changes announced in advance']
        ]
      },
      { type: 'h3', text: 'Governance scope' },
      {
        type: 'p',
        text:
          'Phase one has no on-chain governance, no voting token, and no proposal system. Decisions are made by the operators and published, with community input collected in open channels. Formal governance is a later question, and only if there is a community large enough to justify the overhead.'
      },
      {
        type: 'note',
        text:
          'Until the multisig exists with published signers, the treasury must be described as proposed, not as governed.'
      }
    ]
  },
  {
    id: 'security-and-transparency',
    num: '10',
    title: 'Security and Transparency',
    blocks: [
      { type: 'h3', text: 'Key management' },
      {
        type: 'ul',
        items: [
          'Seed phrases are stored offline on paper, never in a repository, server, note app, or chat.',
          'Deployment uses a temporary wallet that is emptied afterwards.',
          'Project wallets and personal wallets never share a seed or an address.',
          'Two-factor authentication is enabled on every account that can speak for the project.'
        ]
      },
      { type: 'h3', text: 'Public disclosure' },
      {
        type: 'p',
        text:
          'Before launch: mint address, allocation addresses, vesting schedule, treasury signers, and the liquidity plan. After launch: every distribution with a transaction hash, monthly treasury reporting, and advance notice of any rule change.'
      },
      { type: 'h3', text: 'Impersonation' },
      {
        type: 'p',
        text:
          'Community token projects attract fake tokens, fake sites, and fake administrators. The only defence that works is a single canonical source: this website. Any address that does not appear here is not official, and no administrator will ever request a seed phrase, a private key, a signature, or a transfer.'
      },
      {
        type: 'table',
        head: ['Item', 'Current status'],
        rows: [
          ['Contract audit', 'Pending verification'],
          ['Website security review', 'Planned before launch'],
          ['Domain and account protection', 'Planned before launch']
        ]
      }
    ]
  },
  {
    id: 'community',
    num: '11',
    title: 'Community and Social Media Operations',
    blocks: [
      {
        type: 'p',
        text:
          'Community work in phase one is intentionally narrow: three channels, one content rhythm, and no growth mechanics that require paying for attention.'
      },
      {
        type: 'table',
        head: ['Channel', 'Purpose', 'Status'],
        rows: [
          ['X', 'Announcements, brand narrative, cultural content', 'Pending verification'],
          ['Telegram', 'Discussion, questions, event notices', 'Pending verification'],
          ['Facebook', 'Regional reach and community content', 'Pending verification'],
          ['Website', 'Single official source of truth', 'Live']
        ]
      },
      { type: 'h3', text: 'Rhythm' },
      {
        type: 'ul',
        items: [
          'One post a day on Bitcoin culture or project themes, without price commentary.',
          'One event a week that can be completed inside Telegram.',
          'Progress reported on a fixed cadence, including what did not go to plan.'
        ]
      },
      { type: 'h3', text: 'What is measured' },
      {
        type: 'p',
        text:
          'Not follower counts and not wallet counts. The three signals that matter are on-topic human conversation, retention across four consecutive weeks, and original output produced by members. If none of these grow in three months, the conclusion is that the story or the audience is wrong — not that spending was too low.'
      }
    ]
  },
  {
    id: 'marketing',
    num: '12',
    title: 'Marketing and Growth Strategy',
    blocks: [
      {
        type: 'p',
        text:
          'Growth is sequenced rather than purchased. Each phase produces something the next phase can build on, and no phase depends on paying for reach.'
      },
      {
        type: 'table',
        head: ['Phase', 'Focus', 'Output'],
        rows: [
          ['Brand', 'Story, visual identity, whitepaper, website', 'A project that can be understood in five minutes'],
          ['Community', 'Early members, discussion, rules', 'A small group that returns without incentives'],
          ['Content', 'Culture series, translations, member work', 'Material that spreads without paid distribution'],
          ['Maintenance', 'Transparency, governance discussions, updates', 'Trust that survives a quiet month']
        ]
      },
      { type: 'h3', text: 'Prohibited in all marketing' },
      {
        type: 'ul',
        items: [
          'Price predictions, return promises, or "guaranteed" allocation language',
          'Fabricated partnerships, listings, or endorsements',
          'Paid engagement presented as organic growth',
          'Any implication of affiliation with Bitcoin or Satoshi Nakamoto'
        ]
      }
    ]
  },
  {
    id: 'roadmap',
    num: '13',
    title: 'Roadmap',
    blocks: [
      {
        type: 'p',
        text:
          'The schedule below is a work plan, not a launch commitment. Week five begins only if the preceding reviews pass.'
      },
      {
        type: 'table',
        head: ['Week', 'Phase', 'Work'],
        rows: [
          ['01', 'Brand and rules', 'Name, mark, ticker, whitepaper v2.0, wallet architecture, legal review started'],
          ['02', 'Infrastructure', 'Website in five languages, official channels, first content, multisig created'],
          ['03', 'Community test', 'Content series, early participants, security audit, engagement measurement'],
          ['04', 'Launch preparation', 'Devnet rehearsal, address and vesting confirmation, five-gate review'],
          ['05–08', 'Conditional execution', 'Issue only if approved, publish on-chain data, continue operations']
        ]
      },
      { type: 'h3', text: 'The five gates' },
      {
        type: 'ul',
        items: [
          'Legal: written opinion covering issuer, token classification, distribution method, and jurisdictions.',
          'Technical: devnet run completed, including revocations and distribution transfers.',
          'Funding: liquidity SOL available and sourced, multisig tested.',
          'Operations: website, channels, and disclosures live.',
          'Information: final whitepaper, address list, vesting schedule, and liquidity plan published.'
        ]
      },
      {
        type: 'note',
        text:
          'A failed gate delays the project. It does not trigger a compensating shortcut.'
      }
    ]
  },
  {
    id: 'risk-disclosure',
    num: '14',
    title: 'Risk Disclosure',
    blocks: [
      {
        type: 'p',
        text:
          'BitCong is an independent community-driven token project planned for the Solana blockchain. It is not Bitcoin, is not issued by or affiliated with any Bitcoin-related organisation, and does not represent Bitcoin Core, Bitcoin Foundation, or Satoshi Nakamoto.'
      },
      {
        type: 'p',
        text:
          'Digital assets are highly volatile and may lose some or all of their value. There is no guarantee of liquidity, market demand, price appreciation, investment returns, or successful project execution. Token supply, allocation, authority management, liquidity arrangements, treasury governance, and other mechanisms described as planned or proposed are not effective until implemented and independently verifiable on-chain.'
      },
      {
        type: 'table',
        head: ['Risk', 'Description', 'Mitigation'],
        rows: [
          ['Value loss', 'A community token has no cash flow; consensus can disappear', 'Disclosed everywhere, never promised otherwise'],
          ['Thin liquidity', 'Small trades can move the price sharply', 'Depth disclosed, no depth claims'],
          ['Impersonation', 'Fake tokens, sites, and administrators', 'Single canonical link list, public warnings'],
          ['Regulatory change', 'Rules may restrict distribution or trading', 'No fund custody, distribution can be halted'],
          ['Community decay', 'Interest fades and maintenance stops', 'Measured by retention, not follower count'],
          ['Single-operator risk', 'Core member unavailable', 'Multisig, public documents, handover process']
        ]
      },
      { type: 'h3', text: 'Legal position' },
      {
        type: 'p',
        text:
          'The project does not raise funds from residents of mainland China, does not provide fiat on-ramps, custody, or conversion services, and does not promise any return. A written legal opinion is a precondition for issuance. Geographic blocking and terminology changes are not treated as compliance measures.'
      },
      {
        type: 'note',
        text:
          'Nothing in this document is investment, legal, tax, or financial advice. Readers should conduct their own research and consult independent advisers.'
      }
    ]
  }
];
