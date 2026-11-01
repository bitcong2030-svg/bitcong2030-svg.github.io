/**
 * 英文词典（默认语言，也是其它语种的参考版本）。
 * 新增语种时复制本文件结构，保持字段一一对应。
 */

export const en = {
  meta: {
    title: 'BitCong — One Satoshi. One Community.',
    description:
      'BitCong is an independent community-driven cultural project planned on Solana, inspired by the smallest unit of Bitcoin. Pre-launch: no token has been issued.'
  },

  nav: {
    home: 'Home',
    whitepaper: 'Whitepaper',
    tokenomics: 'Tokenomics',
    community: 'Community',
    transparency: 'Transparency',
    contact: 'Contact'
  },

  common: {
    readWhitepaper: 'Read the whitepaper',
    tokenDesign: 'Token design',
    viewDetails: 'View details',
    explore: 'Explore',
    backToTop: 'Back to top',
    comingSoon: 'Coming soon',
    pendingVerification: 'Official link pending verification',
    downloadPdf: 'Download PDF',
    printVersion: 'Print version',
    lastUpdated: 'Discussion draft · October 2026',
    languageLabel: 'Language',
    swap: 'Swap BCONG',
    swapSoon: 'Swap opens after launch',
    swapNote: 'Redirects to a public aggregator. Wallet stays in your browser.',
    swapUnavailable: 'No mint address yet — the swap entry activates after launch.'
  },

  home: {
    hero: {
      kicker: 'INDEPENDENT COMMUNITY PROJECT · SOLANA',
      titleLine1: 'One Satoshi.',
      titleLine2: 'One Community.',
      lead:
        'BitCong takes its name from the smallest unit of Bitcoin. Its planned supply equals every satoshi that will ever exist — a cultural reference, not a claim on Bitcoin.',
      note: 'Pre-launch. Nothing on this site is issued, deployed, or on-chain yet.'
    },
    stats: {
      supplyLabel: 'Planned supply',
      supplyValue: '2.1Q',
      supplyNote: 'Equal to all satoshis',
      networkLabel: 'Network',
      networkValue: 'Solana',
      networkNote: 'SPL Token standard',
      tickerLabel: 'Token',
      tickerValue: 'BCONG',
      tickerNote: 'Ticker pending availability check',
      statusLabel: 'Status',
      statusValue: 'Not launched',
      statusNote: 'No mint address exists'
    },
    why: {
      eyebrow: 'WHY BITCONG',
      title: 'A small unit. A shared story.',
      intro:
        'Satoshi is the smallest denomination of Bitcoin. BitCong borrows that cultural symbol to explore how a community forms around scarcity, openness, and verifiable rules — without pretending to be Bitcoin.',
      items: [
        {
          tag: '01 / CULTURE',
          title: 'A tribute, not a claim',
          body:
            'BitCong is independent. It is not Bitcoin, not a fork, not a wrapped asset, and has no affiliation with Satoshi Nakamoto or any Bitcoin organisation.'
        },
        {
          tag: '02 / COMMUNITY',
          title: 'Built by participants',
          body:
            'The culture, content, and activities are carried by the people who join. Growth is measured by sustained participation, not by wallet count.'
        },
        {
          tag: '03 / TRANSPARENCY',
          title: 'Verify, don\'t trust',
          body:
            'Parameters are published before launch. Anything not yet deployed is labelled as planned, never as completed.'
        }
      ]
    },
    tokenomics: {
      eyebrow: 'TOKEN DESIGN',
      title: 'Four allocations. Nothing hidden.',
      intro:
        'The full supply is split into four purposes. No presale, no private round, no market-making allocation, no buyback reserve.',
      cta: 'Full tokenomics'
    },

    definition: {
      eyebrow: 'IN ONE LOOK',
      title: 'What BitCong is, in three sentences.',
      items: [
        {
          k: 'WHAT IT IS',
          t: 'A community cultural project planned on Solana, named after the smallest unit of Bitcoin.'
        },
        {
          k: 'WHY THIS NUMBER',
          t: 'Its planned supply equals every satoshi that will ever exist: 21 million BTC × 100 million satoshi.'
        },
        {
          k: 'WHERE IT STANDS',
          t: 'Not launched. No mint address, no pool, no sale, and no distribution has taken place.'
        }
      ],
      qa: [
        {
          q: 'What is BitCong?',
          a: 'A community cultural project built around one idea: scarcity expressed at the smallest unit. It is a social and cultural experiment first, and a token second.'
        },
        {
          q: 'Is it Bitcoin, or connected to Bitcoin?',
          a: 'No. It is independent, has no technical link, no exchange right, and no endorsement from Satoshi Nakamoto or any Bitcoin organisation. The name is a reference, nothing more.'
        },
        {
          q: 'Where is the project now?',
          a: 'Preparation. The parameters and rules are published, the whitepaper is drafted, and legal review is a precondition. Nothing is on-chain yet.'
        },
        {
          q: 'How can I take part?',
          a: 'Read the whitepaper, follow the official channels once verified, and contribute content, translation, or review. There is no purchase step today.'
        }
      ]
    },

    roadmap: {
      eyebrow: 'ROADMAP',
      title: 'Four weeks to prepare. Then a decision, not a deadline.',
      intro:
        'Launch is a gate, not a date. If legal review, technical rehearsal, funding, or operations are not ready, the token is not issued.',
      phases: [
        {
          when: 'WEEK 01',
          note: 'Brand & rules',
          title: 'Define the terms',
          body: 'Name, mark, and ticker confirmed and checked for collisions. Whitepaper v2.0. Wallet architecture. Legal review started.'
        },
        {
          when: 'WEEK 02',
          note: 'Infrastructure',
          title: 'Make information public',
          body: 'Website live in five languages. Official channels opened. First cultural content published. Multisig treasury created.'
        },
        {
          when: 'WEEK 03',
          note: 'Community test',
          title: 'Validate the story',
          body: 'Content series published, early participants invited, security self-audit, real engagement measured rather than follower counts.'
        },
        {
          when: 'WEEK 04',
          note: 'Launch prep',
          title: 'Rehearse on devnet',
          body: 'Full devnet run: create, revoke, allocate, add liquidity. Addresses and vesting schedule confirmed. Five gates reviewed.'
        },
        {
          when: 'WEEK 05–08',
          note: 'Conditional',
          title: 'Execute only if approved',
          body: 'If every gate passes, issue and disclose on-chain. If any gate fails, publish the reason and postpone.'
        }
      ]
    },
    community: {
      eyebrow: 'COMMUNITY',
      title: 'Three channels. No noise.',
      intro:
        'Official channels are listed here and nowhere else. Unverified accounts are shown as pending rather than linked.',
      cta: 'Community guidelines'
    },
    risk: {
      title: 'Risk disclosure',
      body:
        'BitCong is an independent community-driven token project planned for the Solana blockchain. It is not Bitcoin, is not issued by or affiliated with any Bitcoin-related organisation, and does not represent Bitcoin Core, Bitcoin Foundation, Satoshi Nakamoto, or any claim on Bitcoin.',
      body2:
        'Digital assets are highly volatile and may lose some or all of their value. There is no guarantee of liquidity, market demand, price appreciation, investment returns, or successful project execution. Token supply, allocation, authority management, liquidity arrangements, treasury governance, and other mechanisms described as planned or proposed are not effective until implemented and independently verifiable on-chain.',
      body3:
        'Nothing on this website is investment, legal, tax, or financial advice. Readers should do their own research and consult independent advisers where appropriate.'
    }
  },

  whitepaper: {
    eyebrow: 'BITCONG / WHITEPAPER',
    title: 'Whitepaper',
    version: 'Version 2.0 · Discussion draft',
    intro:
      'This document describes the project as planned: positioning, token specification, allocation, supply and authority, liquidity, treasury, security, community, marketing, roadmap, and risk. Every item marked as planned, proposed, or pending is not yet in effect.',
    tocLabel: 'Contents',
    chapterLabel: 'Chapter',
    prev: 'Previous chapter',
    next: 'Next chapter'
  },

  tokenomics: {
    eyebrow: 'SUPPLY & DISTRIBUTION',
    title: 'Tokenomics',
    intro:
      'All figures below are planned. Nothing has been minted, allocated, locked, or added to liquidity. Once issued, on-chain state is the only source of truth.'
  },

  community: {
    eyebrow: 'COMMUNITY FIRST',
    title: 'Community',
    intro:
      'BitCong is a cultural project first. The goal of the first phase is not a large audience but a small number of people who keep showing up.'
  },

  transparency: {
    eyebrow: 'VERIFY, DON\'T TRUST',
    title: 'Transparency',
    intro:
      'Everything important should be independently checkable. This page lists what exists, what is planned, and what is still missing. No placeholder addresses are shown.'
  },

  contact: {
    eyebrow: 'CONTACT',
    title: 'Contact',
    intro:
      'One official address. No direct messages asking for keys, signatures, or transfers.',
    emailTitle: 'Official email',
    emailNote: 'Listed as the contact address of the current website.',
    securityTitle: 'Security notice',
    securityBody:
      'Administrators will never ask for a seed phrase, private key, wallet signature, or a transfer to claim rewards. Any account claiming otherwise is an impersonator.',
    channelsTitle: 'Official channels',
    channelsNote: 'Social accounts will be published here once verified. Until then they are marked as pending.'
  },

  pages: {
    community: {
      platforms: [
        {
          id: 'x',
          name: 'X',
          purpose: 'Announcements, brand narrative, and short-form cultural content.',
          detail: 'Primary channel for international reach.'
        },
        {
          id: 'telegram',
          name: 'Telegram',
          purpose: 'Community discussion, questions, and event notices.',
          detail: 'Announcements are separated from open chat.'
        },
        {
          id: 'facebook',
          name: 'Facebook',
          purpose: 'Broader audience reach and community content distribution.',
          detail: 'Used for regional communities once verified.'
        }
      ],
      pillarsTitle: 'What we publish',
      pillars: [
        { title: 'One post a day', body: 'Bitcoin culture or BitCong themes. No price commentary, no chasing trending topics.' },
        { title: 'One event a week', body: 'Discussion, Q&A, or a content call. Everything happens inside Telegram.' },
        { title: 'Progress in public', body: 'Development, spending, and distribution reported on a fixed cadence.' }
      ],
      metricsTitle: 'What we measure',
      metrics: [
        { title: 'Real conversation', body: 'Messages on topic from humans, excluding bots and price chanting.' },
        { title: 'Retention', body: 'Members who return in four consecutive weeks, not peak attendance.' },
        { title: 'Original output', body: 'Artwork, translations, and posts produced by the community itself.' }
      ],
      rulesTitle: 'Community rules',
      rules: [
        'No price predictions, return promises, or "guaranteed" allocations.',
        'No impersonation of administrators or official accounts.',
        'No unsolicited DMs, referral spam, or airdrop phishing.',
        'Disagreement is welcome; abuse is not.'
      ]
    },

    tokenomics: {
      mechanicsTitle: 'Supply mechanics',
      mechanics: [
        { title: 'No transaction tax', body: 'Planned 0%. Transfers carry no project fee.' },
        { title: 'No ongoing inflation', body: 'Planned fixed supply. No minting after launch.' },
        { title: 'No hidden supply', body: 'Every allocation address is published before distribution.' },
        { title: 'No market making', body: 'No buyback, no treasury price support, no exchange listing commitments.' }
      ],
      authorityTitle: 'Authorities and verification',
      authorityNote:
        'Each authority action will be published with a transaction hash. Until a hash exists, the status stays "planned".',
      vestingTitle: 'Team vesting',
      vestingBody:
        'Proposed: a 6-month cliff followed by 18-month linear vesting. This is a design intention, not an on-chain commitment. The vesting tool, beneficiary address, and release schedule must be published before the plan takes effect.',
      canceledTitle: 'Mechanisms deliberately excluded',
      canceled: [
        { name: 'Decaying airdrops', reason: 'Complex rules that reward bots rather than long-term participants.' },
        { name: 'Auto-burn of unclaimed tokens', reason: 'Manufactured scarcity that contradicts a fixed-supply design.' },
        { name: 'Points mining and NFT miners', reason: 'Expensive to build, easy to farm, unrelated to the culture.' },
        { name: 'Buyback and burn', reason: 'Requires continuous funding and reads as price support.' }
      ]
    },

    transparency: {
      tableHead: { item: 'Item', status: 'Status', verify: 'How it will be verified' },
      verify: {
        launch: 'Mint address published on this page',
        mint: 'On-chain mint authority field',
        freeze: 'On-chain freeze authority field',
        metadata: 'Metaplex metadata update authority',
        vesting: 'Vesting contract and transaction history',
        treasury: 'Squads multisig page',
        audit: 'Published audit report',
        liquidity: 'AMM pool address and LP position'
      },
      warning:
        'Do not trust anyone offering early access, insider allocation, or claim services on behalf of BitCong. Official addresses appear on this page only, after they exist on-chain.',
      principleTitle: 'Reporting cadence',
      principles: [
        'Before launch: mint address, allocation addresses, vesting schedule, treasury signers, liquidity plan.',
        'Each distribution: criteria, scope, amount, and transaction hash.',
        'Monthly: treasury balance, spending, and distribution progress.',
        'Any rule change: announced in advance, never retroactive.'
      ]
    },

    contact: {
      audienceTitle: 'What to write about',
      audiences: [
        { title: 'Security reports', body: 'Impersonation, phishing sites, or fake accounts using the BitCong name.' },
        { title: 'Community enquiries', body: 'Content collaboration, translations, and volunteer participation.' },
        { title: 'Press and research', body: 'Fact-checking project parameters or requesting clarification.' }
      ],
      responseNote: 'Replies are handled manually. Expect a slower response during the preparation phase.'
    }
  },

  footer: {
    tagline: 'One Satoshi. One Community.',
    columns: {
      project: 'Project',
      documents: 'Documents',
      contact: 'Contact'
    },
    disclaimer:
      'BCONG is an independent community cultural experiment. It is not BTC, not an asset on the Bitcoin network, and not affiliated with Satoshi Nakamoto or Bitcoin Core. The project is in a discussion phase and no token has been issued: all parameters, allocations and rules shown here are plans, and nothing undeployed is presented as completed.',
    rights: 'BITCONG COMMUNITY. Independent community project.',
    notAffiliated: 'Not affiliated with Bitcoin or Satoshi Nakamoto.'
  },

  allocationNames: {
    community: 'Community',
    liquidity: 'Liquidity',
    team: 'Team',
    treasury: 'Community treasury'
  },

  allocationNotes: {
    community: 'Public distribution to real participants. Rules published before each round.',
    liquidity: 'Initial and ongoing liquidity on a public AMM. Amounts disclosed before launch.',
    team: 'Proposed 6-month cliff, then 18-month linear. Not on-chain yet.',
    treasury: 'Proposed 2-of-3 multisig. Signers and spending published.'
  },

  statuses: {
    not_launched: 'Not launched',
    planned_revocation: 'Planned revocation',
    planned_management: 'Planned management',
    proposed: 'Proposed',
    pending_verification: 'Pending verification',
    not_completed: 'Not completed',
    completed: 'Completed'
  },

  statusItems: {
    launch: 'Token issuance',
    mint: 'Mint authority',
    freeze: 'Freeze authority',
    metadata: 'Metadata authority',
    vesting: 'Team vesting',
    treasury: 'Treasury multisig',
    audit: 'Contract audit',
    liquidity: 'Liquidity lock'
  }
};

export type Dict = typeof en;
