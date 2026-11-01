import type { Dict } from './en';

/**
 * 简体中文词典。
 * 结构与 en.ts 一一对应；所有未落地的机制一律使用「计划」「拟」「尚未发行」「待验证」的表述。
 */
export const zhCn: Dict = {
  meta: {
    title: 'BitCong — 一聪，一社区',
    description:
      'BitCong 是一个计划部署在 Solana 上的独立社区文化项目，取名自比特币的最小单位。项目处于筹备阶段：尚未发行任何代币。'
  },

  nav: {
    home: '首页',
    whitepaper: '白皮书',
    tokenomics: '代币经济',
    community: '社区',
    transparency: '透明度',
    contact: '联系'
  },

  common: {
    readWhitepaper: '阅读白皮书',
    tokenDesign: '代币设计',
    viewDetails: '查看详情',
    explore: '了解更多',
    backToTop: '回到顶部',
    comingSoon: '即将上线',
    pendingVerification: '官方链接待验证',
    downloadPdf: '下载 PDF',
    printVersion: '打印版',
    lastUpdated: '讨论稿 · 2026 年 10 月',
    languageLabel: '语言',
    swap: '兑换 BCONG',
    swapSoon: '兑换功能将在发行后开放',
    swapNote: '将跳转到公开聚合器，钱包始终留在你的浏览器中。',
    swapUnavailable: '尚无铸造地址——兑换入口将在发行后启用。'
  },

  home: {
    hero: {
      kicker: '独立社区项目 · SOLANA',
      titleLine1: '一聪。',
      titleLine2: '一社区。',
      lead:
        'BitCong 取名自比特币的最小单位。其计划供应量等于未来将存在的全部聪——这是一处文化引用，并非对比特币的任何主张。',
      note: '筹备阶段。本站内容均尚未发行、尚未部署，也不在链上。'
    },
    stats: {
      supplyLabel: '计划供应量',
      supplyValue: '2.1Q',
      supplyNote: '等于全部聪的总量',
      networkLabel: '网络',
      networkValue: 'Solana',
      networkNote: 'SPL Token 标准',
      tickerLabel: '代币',
      tickerValue: 'BCONG',
      tickerNote: '代币代码可用性待核查',
      statusLabel: '状态',
      statusValue: '尚未发行',
      statusNote: '不存在铸造地址'
    },
    why: {
      eyebrow: '为何是 BITCONG',
      title: '一个很小的单位，一段共享的故事。',
      intro:
        '聪是比特币的最小面额。BitCong 借用这一文化符号，探讨一个社区如何在稀缺性、开放性与可验证规则之上形成——同时并不假装自己是比特币。',
      items: [
        {
          tag: '01 / 文化',
          title: '致敬，而非主张',
          body:
            'BitCong 是独立的。它不是比特币，不是分叉，不是封装资产，与中本聪及任何比特币组织均无关联。'
        },
        {
          tag: '02 / 社区',
          title: '由参与者共建',
          body:
            '文化、内容与活动由加入的人来承载。成长以持续参与衡量，而不是钱包数量。'
        },
        {
          tag: '03 / 透明度',
          title: '验证，而非信任',
          body:
            '参数在发行前公开。任何尚未部署的内容都会被标注为「计划」，绝不会写成已完成。'
        }
      ]
    },
    tokenomics: {
      eyebrow: '代币设计',
      title: '四项分配。没有隐藏项。',
      intro:
        '全部供应量分为四种用途。没有预售，没有私募轮，没有做市分配，没有回购储备。',
      cta: '完整代币经济'
    },

    definition: {
      eyebrow: '一眼看懂',
      title: '用三句话说明 BitCong 是什么。',
      items: [
        {
          k: '它是什么',
          t: '一个计划部署在 Solana 上的社区文化项目，取名自比特币的最小单位。'
        },
        {
          k: '为什么是这个数字',
          t: '其计划供应量等于未来将存在的全部聪：2100 万 BTC × 1 亿聪。'
        },
        {
          k: '当前进展',
          t: '尚未发行。没有铸造地址、没有资金池、没有销售，也未进行过任何分发。'
        }
      ],
      qa: [
        {
          q: 'BitCong 是什么？',
          a: '一个围绕单一理念建立的社区文化项目：以最小单位表达稀缺性。它首先是一场社会与文化实验，其次才是一个代币。'
        },
        {
          q: '它是比特币，或与比特币有关联吗？',
          a: '不是。它完全独立，没有技术关联，没有兑换权，也未获得中本聪或任何比特币组织的背书。这个名字只是一处引用，仅此而已。'
        },
        {
          q: '项目目前处于什么阶段？',
          a: '筹备阶段。参数与规则已经公开，白皮书已起草，法律审查是前置条件。目前没有任何内容在链上。'
        },
        {
          q: '我可以如何参与？',
          a: '阅读白皮书，在官方渠道通过验证后关注，并贡献内容、翻译或审阅。目前没有购买环节。'
        }
      ]
    },

    roadmap: {
      eyebrow: '路线图',
      title: '四周用于筹备，然后是一次决定，而不是一个截止日。',
      intro:
        '发行是一道门槛，而不是一个日期。如果法律审查、技术演练、资金或运营尚未就绪，代币就不会发行。',
      phases: [
        {
          when: '第 01 周',
          note: '品牌与规则',
          title: '确定基本条款',
          body: '确认名称、标识与代币代码，并排查撞名。白皮书 v2.0。钱包架构。启动法律审查。'
        },
        {
          when: '第 02 周',
          note: '基础设施',
          title: '让信息公开',
          body: '五种语言的网站上线。开通官方渠道。发布首批文化内容。创建多签金库。'
        },
        {
          when: '第 03 周',
          note: '社区测试',
          title: '验证这个故事',
          body: '发布内容系列，邀请早期参与者，进行安全自审，以真实互动而非粉丝数衡量效果。'
        },
        {
          when: '第 04 周',
          note: '发行准备',
          title: '在 devnet 上演练',
          body: '完整的 devnet 流程：创建、撤销、分配、注入流动性。确认地址与解锁时间表。复核五道门槛。'
        },
        {
          when: '第 05–08 周',
          note: '有条件',
          title: '仅在获批后执行',
          body: '若全部门槛通过，则发行并在链上披露。若有任一门槛未通过，公开原因并推迟。'
        }
      ]
    },
    community: {
      eyebrow: '社区',
      title: '三个渠道。没有噪音。',
      intro:
        '官方渠道仅在此处列出，别处不再列出。未验证的账号一律标注为待验证，而不提供链接。',
      cta: '社区准则'
    },
    risk: {
      title: '风险披露',
      body:
        'BitCong 是一个计划部署在 Solana 区块链上的独立社区代币项目。它不是比特币，不由任何与比特币相关的组织发行或与之关联，也不代表 Bitcoin Core、Bitcoin Foundation、中本聪，或对比特币的任何主张。',
      body2:
        '数字资产波动剧烈，可能损失部分或全部价值。无法保证流动性、市场需求、价格上涨、投资回报或项目成功落地。代币供应量、分配、权限管理、流动性安排、金库治理及其他被描述为「计划」或「拟议」的机制，在实施并可在链上独立验证之前均不生效。',
      body3:
        '本网站的任何内容均不构成投资、法律、税务或财务建议。读者应自行研究，并在适当情况下咨询独立顾问。'
    }
  },

  whitepaper: {
    eyebrow: 'BITCONG / 白皮书',
    title: '白皮书',
    version: '版本 2.0 · 讨论稿',
    intro:
      '本文档描述的是计划中的项目：定位、代币规格、分配、供应与权限、流动性、金库、安全、社区、营销、路线图与风险。凡标注为「计划」「拟议」或「待验证」的条目，均尚未生效。',
    tocLabel: '目录',
    chapterLabel: '章节',
    prev: '上一章',
    next: '下一章'
  },

  tokenomics: {
    eyebrow: '供应与分配',
    title: '代币经济',
    intro:
      '以下所有数字均为计划。尚未铸造、分配、锁定，也未注入流动性。发行之后，链上状态是唯一的事实来源。'
  },

  community: {
    eyebrow: '社区优先',
    title: '社区',
    intro:
      'BitCong 首先是一个文化项目。第一阶段的目标不是庞大的受众，而是一小群持续出现的人。'
  },

  transparency: {
    eyebrow: '验证，而非信任',
    title: '透明度',
    intro:
      '所有重要事项都应能被独立核查。本页列出已有的、计划中的，以及仍然缺失的内容。不展示任何占位地址。'
  },

  contact: {
    eyebrow: '联系',
    title: '联系',
    intro: '一个官方地址。不会有任何私信索要私钥、签名或转账。',
    emailTitle: '官方邮箱',
    emailNote: '作为当前网站的联络地址列出。',
    securityTitle: '安全提示',
    securityBody:
      '管理员绝不会索要助记词、私钥、钱包签名，也不会要求转账以领取奖励。任何声称相反的账号都是冒充者。',
    channelsTitle: '官方渠道',
    channelsNote: '社交账号将在验证后在此公布。在此之前，它们都标注为待验证。'
  },

  pages: {
    community: {
      platforms: [
        {
          id: 'x',
          name: 'X',
          purpose: '公告、品牌叙事与短文类文化内容。',
          detail: '面向国际触达的主要渠道。'
        },
        {
          id: 'telegram',
          name: 'Telegram',
          purpose: '社区讨论、提问与活动通知。',
          detail: '公告与公开聊天分开。'
        },
        {
          id: 'facebook',
          name: 'Facebook',
          purpose: '覆盖更广的受众与社区内容分发。',
          detail: '验证后用于各区域社区。'
        }
      ],
      pillarsTitle: '我们发布什么',
      pillars: [
        { title: '每日一帖', body: '比特币文化或 BitCong 主题。不谈价格，不追热点。' },
        { title: '每周一场活动', body: '讨论、问答或内容征集。一切都在 Telegram 内进行。' },
        { title: '进展公开', body: '开发、支出与分发按固定节奏汇报。' }
      ],
      metricsTitle: '我们衡量什么',
      metrics: [
        { title: '真实对话', body: '来自真人的切题发言，不计机器人与喊单。' },
        { title: '留存', body: '连续四周回归的成员，而非峰值在线人数。' },
        { title: '原创产出', body: '由社区自身创作的图像、翻译与帖子。' }
      ],
      rulesTitle: '社区规则',
      rules: [
        '禁止价格预测、回报承诺或「保底」分配。',
        '禁止冒充管理员或官方账号。',
        '禁止未经请求的私信、推荐刷屏与空投钓鱼。',
        '欢迎分歧，不容辱骂。'
      ]
    },

    tokenomics: {
      mechanicsTitle: '供应机制',
      mechanics: [
        { title: '无交易税', body: '计划为 0%。转账不收取项目费用。' },
        { title: '无持续增发', body: '计划为固定供应量。发行后不再铸造。' },
        { title: '无隐藏供应', body: '每个分配地址都会在分发前公布。' },
        { title: '不做市', body: '不回购，不用金库托价，不承诺上交易所。' }
      ],
      authorityTitle: '权限与验证',
      authorityNote:
        '每次权限操作都会连同交易哈希一起公布。在哈希出现之前，状态保持为「计划」。',
      vestingTitle: '团队解锁安排',
      vestingBody:
        '拟议：6 个月锁定期，随后 18 个月线性解锁。这是设计意图，不是链上承诺。解锁工具、受益地址与释放时间表必须在方案生效前公布。',
      canceledTitle: '刻意排除的机制',
      canceled: [
        { name: '递减式空投', reason: '规则复杂，奖励的是机器人而不是长期参与者。' },
        { name: '未领取代币自动销毁', reason: '人为制造的稀缺，与固定供应量的设计相矛盾。' },
        { name: '积分挖矿与 NFT 矿机', reason: '开发成本高、容易被刷，且与文化无关。' },
        { name: '回购并销毁', reason: '需要持续的资金投入，且会被理解为托价。' }
      ]
    },

    transparency: {
      tableHead: { item: '项目', status: '状态', verify: '验证方式' },
      verify: {
        launch: '铸造地址在本页公布',
        mint: '链上铸造权限字段',
        freeze: '链上冻结权限字段',
        metadata: 'Metaplex 元数据更新权限',
        vesting: '解锁合约与交易历史',
        treasury: 'Squads 多签页面',
        audit: '公开的审计报告',
        liquidity: 'AMM 资金池地址与 LP 头寸'
      },
      warning:
        '不要相信任何以 BitCong 名义提供早期名额、内部配额或领取服务的人。官方地址只会在链上存在之后，出现在本页。',
      principleTitle: '汇报节奏',
      principles: [
        '发行前：铸造地址、分配地址、解锁时间表、金库签署人、流动性方案。',
        '每次分发：标准、范围、数量与交易哈希。',
        '每月：金库余额、支出与分发进度。',
        '任何规则变更：提前公布，绝不追溯。'
      ]
    },

    contact: {
      audienceTitle: '可以写些什么',
      audiences: [
        { title: '安全报告', body: '冒用 BitCong 名义的冒充、钓鱼网站或虚假账号。' },
        { title: '社区咨询', body: '内容合作、翻译与志愿者参与。' },
        { title: '媒体与研究', body: '核实项目参数或请求说明。' }
      ],
      responseNote: '回复由人工处理。筹备阶段响应会较慢。'
    }
  },

  footer: {
    tagline: '一聪，一社区。',
    columns: {
      project: '项目',
      documents: '文档',
      contact: '联系'
    },
    disclaimer:
      'BCONG 是一个独立的社区文化实验。它不是 BTC，不是比特币网络上的资产，与中本聪或 Bitcoin Core 均无关联。项目处于讨论阶段，尚未发行任何代币：此处展示的全部参数、分配与规则均为计划，任何尚未部署的内容都不会被呈现为已完成。',
    rights: 'BITCONG 社区。独立社区项目。',
    notAffiliated: '与比特币或中本聪无关联。'
  },

  allocationNames: {
    community: '社区',
    liquidity: '流动性',
    team: '团队',
    treasury: '社区金库'
  },

  allocationNotes: {
    community: '面向真实参与者的公开分发。每轮规则在分发前公布。',
    liquidity: '在公开 AMM 上的初始与持续流动性。数量在发行前披露。',
    team: '拟议 6 个月锁定期，随后 18 个月线性解锁。尚未上链。',
    treasury: '拟议 2-of-3 多签。签署人与支出一律公开。'
  },

  statuses: {
    not_launched: '尚未发行',
    planned_revocation: '计划撤销',
    planned_management: '计划管理',
    proposed: '拟议',
    pending_verification: '待验证',
    not_completed: '未完成',
    completed: '已完成'
  },

  statusItems: {
    launch: '代币发行',
    mint: '铸造权限',
    freeze: '冻结权限',
    metadata: '元数据权限',
    vesting: '团队解锁',
    treasury: '金库多签',
    audit: '合约审计',
    liquidity: '流动性锁定'
  }
};
