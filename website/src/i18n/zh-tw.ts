import type { Dict } from './en';

/**
 * 繁體中文（台灣用語）詞典。
 * 結構與 en.ts 完全對應；語氣維持「計畫／提案／待驗證」的計畫態。
 */
export const zhTw: Dict = {
  meta: {
    title: 'BitCong — 一聰，一社群。',
    description:
      'BitCong 是一個獨立的社群文化專案，計畫建立在 Solana 上，靈感來自比特幣的最小單位。發行前狀態：尚未發行任何代幣。'
  },

  nav: {
    home: '首頁',
    whitepaper: '白皮書',
    tokenomics: '代幣經濟',
    community: '社群',
    transparency: '透明度',
    contact: '聯絡'
  },

  common: {
    readWhitepaper: '閱讀白皮書',
    tokenDesign: '代幣設計',
    viewDetails: '查看詳情',
    explore: '探索',
    backToTop: '回到頂端',
    comingSoon: '即將推出',
    pendingVerification: '官方連結待驗證',
    downloadPdf: '下載 PDF',
    printVersion: '列印版',
    lastUpdated: '討論稿 · 2026 年 10 月',
    languageLabel: '語言',
    swap: '兌換 BCONG',
    swapSoon: '發行後開放兌換',
    swapNote: '將重新導向至公開聚合器。錢包始終留在你的瀏覽器中。',
    swapUnavailable: '尚無鑄造地址 — 兌換入口將於發行後啟用。'
  },

  home: {
    hero: {
      kicker: '獨立社群專案 · SOLANA',
      titleLine1: '一聰。',
      titleLine2: '一社群。',
      lead:
        'BitCong 取名自比特幣的最小單位。其計畫供應量等於未來將存在的每一聰 — 這是文化上的引用，並非對比特幣的任何權利主張。',
      note: '發行前。本網站所示內容均尚未發行、部署或上鏈。'
    },
    stats: {
      supplyLabel: '計畫供應量',
      supplyValue: '2.1Q',
      supplyNote: '等於所有聰的總量',
      networkLabel: '網路',
      networkValue: 'Solana',
      networkNote: 'SPL Token 標準',
      tickerLabel: '代幣',
      tickerValue: 'BCONG',
      tickerNote: '代號尚待可用性檢查',
      statusLabel: '狀態',
      statusValue: '尚未發行',
      statusNote: '不存在鑄造地址'
    },
    why: {
      eyebrow: '為何是 BITCONG',
      title: '一個小單位，一段共同的故事。',
      intro:
        '聰是比特幣最小的面額。BitCong 借用這個文化符號，探索一個社群如何在稀缺性、開放性與可驗證規則之上形成 — 而不假裝自己是比特幣。',
      items: [
        {
          tag: '01 / 文化',
          title: '致敬，而非主張',
          body:
            'BitCong 是獨立專案。它不是比特幣、不是分叉、不是封裝資產，也與 Satoshi Nakamoto 或任何比特幣組織沒有任何關聯。'
        },
        {
          tag: '02 / 社群',
          title: '由參與者共同建立',
          body:
            '文化、內容與活動由加入的人共同承擔。成長以持續參與衡量，而非錢包數量。'
        },
        {
          tag: '03 / 透明度',
          title: '驗證，而非相信',
          body:
            '各項參數在發行前公布。任何尚未部署的事項都會標示為計畫中，絕不標示為已完成。'
        }
      ]
    },
    tokenomics: {
      eyebrow: '代幣設計',
      title: '四項分配，毫無隱藏。',
      intro:
        '全部供應量分為四種用途。沒有預售、沒有私募輪、沒有做市分配、沒有回購儲備。',
      cta: '完整代幣經濟'
    },

    definition: {
      eyebrow: '一眼看懂',
      title: '三句話說明 BitCong 是什麼。',
      items: [
        {
          k: '它是什麼',
          t: '一個計畫建立在 Solana 上的社群文化專案，以比特幣的最小單位命名。'
        },
        {
          k: '為何是這個數字',
          t: '其計畫供應量等於未來將存在的每一聰：2,100 萬 BTC × 1 億聰。'
        },
        {
          k: '目前進度',
          t: '尚未發行。沒有鑄造地址、沒有資金池、沒有銷售，也未進行任何分配。'
        }
      ],
      qa: [
        {
          q: 'BitCong 是什麼？',
          a: '一個圍繞單一理念建立的社群文化專案：以最小單位表達稀缺性。它首先是社會與文化實驗，其次才是代幣。'
        },
        {
          q: '它是比特幣，或與比特幣有關嗎？',
          a: '不是。它獨立存在，沒有技術連結、沒有兌換權利，也未獲得 Satoshi Nakamoto 或任何比特幣組織的背書。名稱只是引用，別無其他。'
        },
        {
          q: '專案目前在哪個階段？',
          a: '準備階段。參數與規則已公布、白皮書已起草，法律審查為先決條件。目前尚未有任何內容上鏈。'
        },
        {
          q: '我可以如何參與？',
          a: '閱讀白皮書、在官方管道驗證後追蹤，並貢獻內容、翻譯或審閱。目前沒有購買步驟。'
        }
      ]
    },

    roadmap: {
      eyebrow: '路線圖',
      title: '四週準備，然後是一個決定，不是一個期限。',
      intro:
        '發行是一道關卡，不是一個日期。若法律審查、技術演練、資金或營運尚未就緒，代幣就不會發行。',
      phases: [
        {
          when: '第 01 週',
          note: '品牌與規則',
          title: '定義各項條款',
          body: '確認名稱、標誌與代號並檢查衝突。白皮書 v2.0。錢包架構。法律審查啟動。'
        },
        {
          when: '第 02 週',
          note: '基礎設施',
          title: '讓資訊公開',
          body: '網站以五種語言上線。官方管道開啟。發布第一批文化內容。建立多簽金庫。'
        },
        {
          when: '第 03 週',
          note: '社群測試',
          title: '驗證這個故事',
          body: '發布內容系列、邀請早期參與者、進行安全自我稽核，衡量真實互動而非追蹤人數。'
        },
        {
          when: '第 04 週',
          note: '發行準備',
          title: '在 devnet 演練',
          body: '完整 devnet 流程：建立、撤銷、分配、加入流動性。確認地址與歸屬時程。審查五道關卡。'
        },
        {
          when: '第 05–08 週',
          note: '有條件',
          title: '僅在核准後執行',
          body: '若所有關卡通過，發行並公開鏈上資訊。若有任何關卡未通過，公布原因並延期。'
        }
      ]
    },
    community: {
      eyebrow: '社群',
      title: '三個管道，沒有噪音。',
      intro:
        '官方管道僅列於此處，別無其他。未驗證的帳號會標示為待驗證，而不提供連結。',
      cta: '社群準則'
    },
    risk: {
      title: '風險揭露',
      body:
        'BitCong 是一個獨立的社群驅動代幣專案，計畫部署於 Solana 區塊鏈。它不是比特幣，並非由任何比特幣相關組織發行或與之關聯，也不代表 Bitcoin Core、Bitcoin Foundation、Satoshi Nakamoto，或對比特幣的任何權利主張。',
      body2:
        '數位資產價格高度波動，可能損失部分或全部價值。不保證流動性、市場需求、價格上漲、投資報酬或專案成功執行。代幣供應量、分配、權限管理、流動性安排、金庫治理及其他描述為計畫中或提案中的機制，在實際實施並可於鏈上獨立驗證之前均不生效。',
      body3:
        '本網站任何內容均不構成投資、法律、稅務或財務建議。讀者應自行研究，並在適當情況下諮詢獨立顧問。'
    }
  },

  whitepaper: {
    eyebrow: 'BITCONG / 白皮書',
    title: '白皮書',
    version: '版本 2.0 · 討論稿',
    intro:
      '本文件描述專案的計畫內容：定位、代幣規格、分配、供應與權限、流動性、金庫、安全、社群、行銷、路線圖與風險。任何標示為計畫中、提案中或待驗證的事項均尚未生效。',
    tocLabel: '目錄',
    chapterLabel: '章',
    prev: '上一章',
    next: '下一章'
  },

  tokenomics: {
    eyebrow: '供應與分配',
    title: '代幣經濟',
    intro:
      '以下所有數字均為計畫值。尚未鑄造、分配、鎖定或加入流動性。發行後，鏈上狀態是唯一可信來源。'
  },

  community: {
    eyebrow: '社群優先',
    title: '社群',
    intro:
      'BitCong 首先是文化專案。第一階段的目標不是大量受眾，而是少數會持續出現的人。'
  },

  transparency: {
    eyebrow: '驗證，而非相信',
    title: '透明度',
    intro:
      '每一件重要的事都應能被獨立查核。本頁列出已存在、計畫中，以及仍缺少的項目。不展示任何佔位地址。'
  },

  contact: {
    eyebrow: '聯絡',
    title: '聯絡',
    intro:
      '僅一個官方地址。不會有要求提供私鑰、簽名或轉帳的直接訊息。',
    emailTitle: '官方電子郵件',
    emailNote: '列為目前網站的聯絡地址。',
    securityTitle: '安全提醒',
    securityBody:
      '管理員絕不會索取助記詞、私鑰、錢包簽名，或要求轉帳以領取獎勵。任何聲稱相反的帳號都是冒充者。',
    channelsTitle: '官方管道',
    channelsNote: '社群帳號驗證後會公布於此。在此之前均標示為待驗證。'
  },

  pages: {
    community: {
      platforms: [
        {
          id: 'x',
          name: 'X',
          purpose: '公告、品牌敘事與短篇文化內容。',
          detail: '國際觸及的主要管道。'
        },
        {
          id: 'telegram',
          name: 'Telegram',
          purpose: '社群討論、提問與活動通知。',
          detail: '公告與公開聊天分開。'
        },
        {
          id: 'facebook',
          name: 'Facebook',
          purpose: '擴大受眾觸及與社群內容分發。',
          detail: '驗證後用於區域社群。'
        }
      ],
      pillarsTitle: '我們發布什麼',
      pillars: [
        { title: '每天一則貼文', body: '比特幣文化或 BitCong 主題。不評論價格，不追逐熱門話題。' },
        { title: '每週一場活動', body: '討論、問答或內容召集。一切都在 Telegram 內進行。' },
        { title: '公開進度', body: '開發、支出與分配依固定節奏報告。' }
      ],
      metricsTitle: '我們衡量什麼',
      metrics: [
        { title: '真實對話', body: '來自真人的相關主題訊息，排除機器人與喊盤。' },
        { title: '留存', body: '連續四週回來的成員，而非單次出席高峰。' },
        { title: '原創產出', body: '社群自行產生的作品、翻譯與貼文。' }
      ],
      rulesTitle: '社群規則',
      rules: [
        '不得有價格預測、報酬承諾或「保證」分配。',
        '不得冒充管理員或官方帳號。',
        '不得主動私訊、推薦垃圾訊息或空投釣魚。',
        '歡迎意見分歧；不容許辱罵。'
      ]
    },

    tokenomics: {
      mechanicsTitle: '供應機制',
      mechanics: [
        { title: '無交易稅', body: '計畫為 0%。轉帳不收取專案費用。' },
        { title: '無持續通膨', body: '計畫為固定供應量。發行後不再鑄造。' },
        { title: '無隱藏供應', body: '每個分配地址在分配前公布。' },
        { title: '不做市', body: '沒有回購、沒有金庫價格支撐、沒有交易所上架承諾。' }
      ],
      authorityTitle: '權限與驗證',
      authorityNote:
        '每一項權限操作都會附上交易雜湊公布。在雜湊存在之前，狀態維持「計畫中」。',
      vestingTitle: '團隊歸屬',
      vestingBody:
        '提案：6 個月閉鎖期，之後 18 個月線性釋出。此為設計意向，並非鏈上承諾。歸屬工具、受益地址與釋出時程必須在計畫生效前公布。',
      canceledTitle: '刻意排除的機制',
      canceled: [
        { name: '遞減式空投', reason: '規則複雜，獎勵的是機器人而非長期參與者。' },
        { name: '未領取代幣自動銷毀', reason: '人為製造稀缺，與固定供應設計相矛盾。' },
        { name: '積分挖礦與 NFT 礦工', reason: '建置成本高、易被農場化，且與文化無關。' },
        { name: '回購與銷毀', reason: '需要持續資金，且易被解讀為價格支撐。' }
      ]
    },

    transparency: {
      tableHead: { item: '項目', status: '狀態', verify: '驗證方式' },
      verify: {
        launch: '鑄造地址公布於本頁',
        mint: '鏈上 mint authority 欄位',
        freeze: '鏈上 freeze authority 欄位',
        metadata: 'Metaplex 中繼資料更新權限',
        vesting: '歸屬合約與交易紀錄',
        treasury: 'Squads 多簽頁面',
        audit: '公布的稽核報告',
        liquidity: 'AMM 資金池地址與 LP 部位'
      },
      warning:
        '不要相信任何人以 BitCong 名義提供的搶先參與、內部配額或領取服務。官方地址只會在本頁出現，且必須已存在於鏈上。',
      principleTitle: '報告節奏',
      principles: [
        '發行前：鑄造地址、分配地址、歸屬時程、金庫簽署人、流動性計畫。',
        '每次分配：標準、範圍、數量與交易雜湊。',
        '每月：金庫餘額、支出與分配進度。',
        '任何規則變更：提前公告，絕不追溯。'
      ]
    },

    contact: {
      audienceTitle: '可以寫什麼',
      audiences: [
        { title: '安全回報', body: '冒充、釣魚網站或使用 BitCong 名稱的假帳號。' },
        { title: '社群詢問', body: '內容合作、翻譯與志工參與。' },
        { title: '媒體與研究', body: '查核專案參數或請求說明。' }
      ],
      responseNote: '回覆由人工處理。準備階段期間回覆會較慢。'
    }
  },

  footer: {
    tagline: '一聰，一社群。',
    columns: {
      project: '專案',
      documents: '文件',
      contact: '聯絡'
    },
    disclaimer:
      'BCONG 是一項獨立的社群文化實驗。它不是 BTC、不是比特幣網路上的資產，也不與 Satoshi Nakamoto 或 Bitcoin Core 有關聯。專案處於討論階段且尚未發行任何代幣：此處顯示的所有參數、分配與規則均為計畫，未部署的事項不會被呈現為已完成。',
    rights: 'BITCONG 社群。獨立社群專案。',
    notAffiliated: '與比特幣或 Satoshi Nakamoto 無關聯。'
  },

  allocationNames: {
    community: '社群',
    liquidity: '流動性',
    team: '團隊',
    treasury: '社群金庫'
  },

  allocationNotes: {
    community: '對真實參與者的公開分配。每輪開始前公布規則。',
    liquidity: '於公開 AMM 的初始與持續流動性。發行前公布金額。',
    team: '提案為 6 個月閉鎖期，之後 18 個月線性釋出。尚未上鏈。',
    treasury: '提案為 2-of-3 多簽。簽署人與支出均公開。'
  },

  statuses: {
    not_launched: '尚未發行',
    planned_revocation: '計畫撤銷',
    planned_management: '計畫管理',
    proposed: '提案中',
    pending_verification: '待驗證',
    not_completed: '尚未完成',
    completed: '已完成'
  },

  statusItems: {
    launch: '代幣發行',
    mint: '鑄造權限',
    freeze: '凍結權限',
    metadata: '中繼資料權限',
    vesting: '團隊歸屬',
    treasury: '金庫多簽',
    audit: '合約稽核',
    liquidity: '流動性鎖定'
  }
};
