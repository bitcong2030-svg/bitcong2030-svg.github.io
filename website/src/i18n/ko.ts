import type { Dict } from './en';

/** 한국어 사전. 키 구조와 배열 길이는 en.ts 와 동일하게 유지한다. */
export const ko: Dict = {
  meta: {
    title: 'BitCong — 하나의 사토시, 하나의 커뮤니티.',
    description:
      'BitCong 은 비트코인의 최소 단위에서 출발한, Solana 기반으로 계획 중인 독립 커뮤니티 문화 프로젝트입니다. 출시 전 단계이며 발행된 토큰은 없습니다.'
  },

  nav: {
    home: '홈',
    whitepaper: '백서',
    tokenomics: '토크노믹스',
    community: '커뮤니티',
    transparency: '투명성',
    contact: '문의'
  },

  common: {
    readWhitepaper: '백서 읽기',
    tokenDesign: '토큰 설계',
    viewDetails: '자세히 보기',
    explore: '둘러보기',
    backToTop: '맨 위로',
    comingSoon: '공개 예정',
    pendingVerification: '공식 링크 검증 대기',
    downloadPdf: 'PDF 다운로드',
    printVersion: '인쇄용 버전',
    lastUpdated: '논의용 초안 · 2026년 10월',
    languageLabel: '언어',
    swap: 'BCONG 스왑',
    swapSoon: '스왑은 출시 후 열립니다',
    swapNote: '공개 애그리게이터로 이동합니다. 지갑은 브라우저에 남습니다.',
    swapUnavailable: '아직 민트 주소가 없습니다. 스왑 진입점은 출시 후 활성화됩니다.'
  },

  home: {
    hero: {
      kicker: '독립 커뮤니티 프로젝트 · SOLANA',
      titleLine1: '하나의 사토시.',
      titleLine2: '하나의 커뮤니티.',
      lead:
        'BitCong 은 비트코인의 최소 단위에서 이름을 빌려왔습니다. 계획된 공급량은 앞으로 존재하게 될 모든 사토시의 수와 같습니다. 이는 문화적 참조일 뿐, 비트코인에 대한 권리를 뜻하지 않습니다.',
      note: '출시 전 단계입니다. 이 사이트의 어떤 내용도 아직 발행·배포·온체인화되지 않았습니다.'
    },
    stats: {
      supplyLabel: '계획 공급량',
      supplyValue: '2.1Q',
      supplyNote: '전체 사토시와 동일',
      networkLabel: '네트워크',
      networkValue: 'Solana',
      networkNote: 'SPL Token 표준',
      tickerLabel: '토큰',
      tickerValue: 'BCONG',
      tickerNote: '티커 사용 가능 여부 확인 중',
      statusLabel: '상태',
      statusValue: '미발행',
      statusNote: '민트 주소가 존재하지 않습니다'
    },
    why: {
      eyebrow: 'WHY BITCONG',
      title: '작은 단위, 함께 쓰는 이야기.',
      intro:
        '사토시는 비트코인의 최소 단위입니다. BitCong 은 이 문화적 상징을 빌려, 희소성과 개방성, 검증 가능한 규칙을 중심으로 커뮤니티가 어떻게 형성되는지 살펴봅니다. 비트코인인 척하지는 않습니다.',
      items: [
        {
          tag: '01 / 문화',
          title: '오마주이지 권리 주장이 아니다',
          body:
            'BitCong 은 독립적인 프로젝트입니다. 비트코인도, 포크도, 랩 자산도 아니며 Satoshi Nakamoto 또는 어떤 비트코인 단체와도 관계가 없습니다.'
        },
        {
          tag: '02 / 커뮤니티',
          title: '참여자가 만든다',
          body:
            '문화와 콘텐츠, 활동은 참여하는 사람들이 만들어 갑니다. 성장은 지갑 수가 아니라 지속적인 참여로 측정합니다.'
        },
        {
          tag: '03 / 투명성',
          title: '믿지 말고 검증한다',
          body:
            '파라미터는 출시 전에 공개합니다. 아직 배포되지 않은 항목은 완료가 아니라 계획으로 표시합니다.'
        }
      ]
    },
    tokenomics: {
      eyebrow: '토큰 설계',
      title: '네 가지 배분. 감춘 것은 없습니다.',
      intro:
        '전체 공급량을 네 가지 목적으로 나눕니다. 프리세일도, 프라이빗 라운드도, 마켓 메이킹용 배분도, 바이백 준비금도 없습니다.',
      cta: '전체 토크노믹스'
    },

    definition: {
      eyebrow: '한눈에 보기',
      title: 'BitCong 은 무엇인가. 세 문장으로.',
      items: [
        {
          k: '무엇인가',
          t: '비트코인의 최소 단위에서 이름을 따온, Solana 기반으로 계획 중인 커뮤니티 문화 프로젝트.'
        },
        {
          k: '왜 이 숫자인가',
          t: '계획 공급량은 앞으로 존재하게 될 모든 사토시의 수와 같습니다. 21,000,000 BTC × 100,000,000 사토시.'
        },
        {
          k: '현재 위치',
          t: '미발행. 민트 주소도, 풀도, 판매도, 분배도 이루어지지 않았습니다.'
        }
      ],
      qa: [
        {
          q: 'BitCong 은 무엇인가요?',
          a: '“최소 단위로 표현되는 희소성”이라는 하나의 아이디어를 중심에 둔 커뮤니티 문화 프로젝트입니다. 우선은 사회·문화적 실험이고, 토큰은 그 다음입니다.'
        },
        {
          q: '비트코인인가요, 비트코인과 연결되어 있나요?',
          a: '아니요. 독립적이며 기술적 연결도, 교환 권리도, Satoshi Nakamoto 또는 어떤 비트코인 단체의 승인도 없습니다. 이름은 참조에 불과합니다.'
        },
        {
          q: '프로젝트는 지금 어디까지 왔나요?',
          a: '준비 단계입니다. 파라미터와 규칙은 공개했고, 백서는 초안 상태이며, 법률 검토가 선행 조건입니다. 아직 온체인에 올라간 것은 없습니다.'
        },
        {
          q: '어떻게 참여할 수 있나요?',
          a: '백서를 읽고, 검증이 끝난 공식 채널을 따라가며, 콘텐츠·번역·검토에 기여할 수 있습니다. 현재 구매 단계는 없습니다.'
        }
      ]
    },

    roadmap: {
      eyebrow: '로드맵',
      title: '준비는 네 주. 이후는 결정이지 마감 기한이 아니다.',
      intro:
        '출시는 게이트이지 날짜가 아닙니다. 법률 검토, 기술 리허설, 자금, 운영이 준비되지 않았다면 토큰을 발행하지 않습니다.',
      phases: [
        {
          when: 'WEEK 01',
          note: '브랜드와 규칙',
          title: '용어를 정의하다',
          body:
            '이름, 마크, 티커를 확정하고 충돌 여부를 확인합니다. 백서 v2.0. 지갑 설계. 법률 검토 착수.'
        },
        {
          when: 'WEEK 02',
          note: '인프라',
          title: '정보를 공개하다',
          body:
            '웹사이트 다섯 개 언어로 공개. 공식 채널 개설. 첫 문화 콘텐츠 발행. 멀티시그 금고 생성.'
        },
        {
          when: 'WEEK 03',
          note: '커뮤니티 테스트',
          title: '이야기를 검증하다',
          body:
            '콘텐츠 시리즈 발행, 초기 참여자 초청, 보안 자체 점검, 실제 참여도를 팔로워 수 대신 측정.'
        },
        {
          when: 'WEEK 04',
          note: '출시 준비',
          title: 'devnet 에서 리허설하다',
          body:
            'devnet 전 과정 실행: 생성·중지·배분·유동성 추가. 주소와 베스팅 일정 확정. 다섯 개 게이트 검토.'
        },
        {
          when: 'WEEK 05–08',
          note: '조건부',
          title: '승인된 경우에만 실행하다',
          body:
            '모든 게이트를 통과하면 발행하고 온체인 데이터를 공개합니다. 하나라도 실패하면 이유를 공개하고 일정을 미룹니다.'
        }
      ]
    },
    community: {
      eyebrow: '커뮤니티',
      title: '세 개의 채널. 소음은 없습니다.',
      intro:
        '공식 채널은 여기에만 나열되며 다른 곳에는 없습니다. 검증되지 않은 계정은 링크 대신 대기 상태로 표시합니다.',
      cta: '커뮤니티 가이드라인'
    },
    risk: {
      title: '위험 공시',
      body:
        'BitCong 은 Solana 블록체인을 기반으로 계획된 독립 커뮤니티 주도 토큰 프로젝트입니다. 비트코인이 아니며, 어떤 비트코인 관련 단체가 발행하거나 이와 제휴한 프로젝트도 아니고, Bitcoin Core·Bitcoin Foundation·Satoshi Nakamoto 를 대표하지 않으며 비트코인에 대한 어떤 권리도 의미하지 않습니다.',
      body2:
        '디지털 자산은 변동성이 매우 크며 가치의 일부 또는 전부를 잃을 수 있습니다. 유동성, 시장 수요, 가격 상승, 투자 수익, 프로젝트 실행 성공에 대한 보장은 없습니다. 계획 또는 제안으로 설명된 토큰 공급, 배분, 권한 관리, 유동성 운용, 금고 거버넌스 및 기타 메커니즘은 실제로 구현되고 온체인에서 독립적으로 검증되기 전까지는 효력이 없습니다.',
      body3:
        '이 웹사이트의 어떤 내용도 투자·법률·세무·금융 자문이 아닙니다. 독자 스스로 조사하고 필요하면 독립적인 전문가와 상담해야 합니다.'
    }
  },

  whitepaper: {
    eyebrow: 'BITCONG / WHITEPAPER',
    title: '백서',
    version: '버전 2.0 · 논의용 초안',
    intro:
      '이 문서는 계획 단계의 프로젝트를 설명합니다: 포지셔닝, 토큰 명세, 배분, 공급량과 권한, 유동성, 금고, 보안, 커뮤니티, 마케팅, 로드맵, 위험. 계획·제안·대기로 표시된 항목은 아직 효력이 없습니다.',
    tocLabel: '목차',
    chapterLabel: '장',
    prev: '이전 장',
    next: '다음 장'
  },

  tokenomics: {
    eyebrow: '공급량과 분배',
    title: '토크노믹스',
    intro:
      '아래 모든 수치는 계획입니다. 발행·배분·잠금·유동성 추가는 아직 하나도 이루어지지 않았습니다. 발행 이후에는 온체인 상태만이 유일한 근거입니다.'
  },

  community: {
    eyebrow: '커뮤니티 우선',
    title: '커뮤니티',
    intro:
      'BitCong 은 우선 문화 프로젝트입니다. 첫 단계의 목표는 큰 관중이 아니라 계속 다시 나타나는 소수의 사람들입니다.'
  },

  transparency: {
    eyebrow: '믿지 말고, 검증하라',
    title: '투명성',
    intro:
      '중요한 것은 무엇이든 독립적으로 확인할 수 있어야 합니다. 이 페이지는 무엇이 존재하고, 무엇이 계획이며, 무엇이 아직 없는지 나열합니다. 임시 주소는 표시하지 않습니다.'
  },

  contact: {
    eyebrow: '문의',
    title: '문의',
    intro:
      '공식 주소는 하나입니다. 키, 서명, 이체를 요구하는 다이렉트 메시지는 없습니다.',
    emailTitle: '공식 이메일',
    emailNote: '현재 웹사이트의 문의 주소로 등록되어 있습니다.',
    securityTitle: '보안 공지',
    securityBody:
      '운영진은 시드 문구, 개인 키, 지갑 서명, 보상 수령을 위한 이체를 절대 요구하지 않습니다. 그렇지 않다고 말하는 계정은 사칭입니다.',
    channelsTitle: '공식 채널',
    channelsNote: '소셜 계정은 검증이 끝나면 이곳에 공개됩니다. 그전까지는 대기로 표시됩니다.'
  },

  pages: {
    community: {
      platforms: [
        {
          id: 'x',
          name: 'X',
          purpose: '공지, 브랜드 서사, 짧은 문화 콘텐츠.',
          detail: '국제 도달을 위한 주 채널.'
        },
        {
          id: 'telegram',
          name: 'Telegram',
          purpose: '커뮤니티 논의, 질문, 이벤트 공지.',
          detail: '공지와 자유 대화는 분리되어 운영됩니다.'
        },
        {
          id: 'facebook',
          name: 'Facebook',
          purpose: '더 넓은 도달과 커뮤니티 콘텐츠 배포.',
          detail: '검증 후 지역 커뮤니티에 활용.'
        }
      ],
      pillarsTitle: '무엇을 발행하는가',
      pillars: [
        { title: '하루 한 편', body: '비트코인 문화 또는 BitCong 주제. 가격 논평도, 유행 추종도 없습니다.' },
        { title: '일주일에 한 번 행사', body: '논의, Q&A, 콘텐츠 콜. 모든 진행은 Telegram 안에서 이루어집니다.' },
        { title: '공개적으로 진행 상황 보고', body: '개발, 지출, 분배를 정해진 주기로 보고합니다.' }
      ],
      metricsTitle: '무엇을 측정하는가',
      metrics: [
        { title: '실제 대화', body: '주제에 맞는 사람의 메시지. 봇과 가격 구호는 제외합니다.' },
        { title: '잔존율', body: '4주 연속 다시 돌아온 멤버. 최고 동시 접속자가 아닙니다.' },
        { title: '자체 산출물', body: '커뮤니티가 직접 만든 아트워크, 번역, 게시물.' }
      ],
      rulesTitle: '커뮤니티 규칙',
      rules: [
        '가격 예측, 수익 약속, “보장된” 배분은 금지합니다.',
        '운영진 또는 공식 계정을 사칭하지 않습니다.',
        '무단 다이렉트 메시지, 추천 스팸, 에어드롭 피싱은 금지합니다.',
        '반대 의견은 환영합니다. 모욕은 아닙니다.'
      ]
    },

    tokenomics: {
      mechanicsTitle: '공급 메커니즘',
      mechanics: [
        { title: '거래세 없음', body: '계획 0%. 전송에 프로젝트 수수료가 붙지 않습니다.' },
        { title: '지속 인플레이션 없음', body: '고정 공급량 계획. 출시 후 민팅은 없습니다.' },
        { title: '숨겨진 공급 없음', body: '모든 배분 주소는 분배 전에 공개됩니다.' },
        { title: '마켓 메이킹 없음', body: '바이백도, 금고에 의한 가격 지지도, 거래소 상장 약속도 없습니다.' }
      ],
      authorityTitle: '권한과 검증',
      authorityNote:
        '모든 권한 실행은 트랜잭션 해시와 함께 공개됩니다. 해시가 존재하기 전까지 상태는 “계획”으로 남습니다.',
      vestingTitle: '팀 베스팅',
      vestingBody:
        '제안: 6개월 클리프 이후 18개월 선형 베스팅. 이는 설계 의도이며 온체인 약속이 아닙니다. 베스팅 도구, 수혜 주소, 해제 일정은 계획이 효력을 얻기 전에 공개되어야 합니다.',
      canceledTitle: '의도적으로 배제한 메커니즘',
      canceled: [
        { name: '감쇠형 에어드롭', reason: '규칙이 복잡하고 장기 참여자보다 봇에 유리합니다.' },
        { name: '미청구 토큰 자동 소각', reason: '고정 공급 설계와 모순되는 인위적 희소성입니다.' },
        { name: '포인트 마이닝과 NFT 마이너', reason: '구축 비용이 크고 파밍이 쉬우며 문화와 무관합니다.' },
        { name: '바이백 앤 번', reason: '지속적인 자금이 필요하고 가격 지지로 읽힙니다.' }
      ]
    },

    transparency: {
      tableHead: { item: '항목', status: '상태', verify: '검증 방법' },
      verify: {
        launch: '이 페이지에 민트 주소 공개',
        mint: '온체인 민트 권한 필드',
        freeze: '온체인 동결 권한 필드',
        metadata: 'Metaplex 메타데이터 업데이트 권한',
        vesting: '베스팅 계약과 트랜잭션 이력',
        treasury: 'Squads 멀티시그 페이지',
        audit: '공개된 감사 보고서',
        liquidity: 'AMM 풀 주소와 LP 포지션'
      },
      warning:
        '조기 접근, 내부 배분, 또는 BitCong 을 대신한 수령 서비스를 제안하는 사람을 신뢰하지 마십시오. 공식 주소는 온체인에 존재한 뒤 이 페이지에만 게시됩니다.',
      principleTitle: '보고 주기',
      principles: [
        '출시 전: 민트 주소, 배분 주소, 베스팅 일정, 금고 서명자, 유동성 계획.',
        '분배 때마다: 기준, 범위, 수량, 트랜잭션 해시.',
        '매월: 금고 잔고, 지출, 분배 진행 상황.',
        '규칙 변경 시: 사전 공지, 소급 적용 없음.'
      ]
    },

    contact: {
      audienceTitle: '무엇을 보내면 되는가',
      audiences: [
        { title: '보안 신고', body: '사칭, 피싱 사이트, BitCong 이름을 사용하는 가짜 계정.' },
        { title: '커뮤니티 문의', body: '콘텐츠 협업, 번역, 자원봉사 참여.' },
        { title: '언론과 리서치', body: '프로젝트 파라미터 팩트체크 또는 설명 요청.' }
      ],
      responseNote: '회신은 수동으로 처리합니다. 준비 단계에서는 응답이 느릴 수 있습니다.'
    }
  },

  footer: {
    tagline: '하나의 사토시. 하나의 커뮤니티.',
    columns: {
      project: '프로젝트',
      documents: '문서',
      contact: '문의'
    },
    disclaimer:
      'BCONG 은 독립적인 커뮤니티 문화 실험입니다. BTC 가 아니고, 비트코인 네트워크상의 자산도 아니며, Satoshi Nakamoto 또는 Bitcoin Core 와 제휴하지 않습니다. 프로젝트는 논의 단계이며 발행된 토큰은 없습니다. 여기에 표시된 모든 파라미터, 배분, 규칙은 계획이고, 배포되지 않은 것을 완료로 제시하지 않습니다.',
    rights: 'BITCONG COMMUNITY. 독립 커뮤니티 프로젝트.',
    notAffiliated: '비트코인 및 Satoshi Nakamoto 와 제휴하지 않습니다.'
  },

  allocationNames: {
    community: '커뮤니티',
    liquidity: '유동성',
    team: '팀',
    treasury: '커뮤니티 금고'
  },

  allocationNotes: {
    community: '실제 참여자에게 공개 분배. 라운드마다 규칙을 먼저 공개합니다.',
    liquidity: '공개 AMM 에 초기 및 지속 유동성 공급. 수량은 출시 전 공시합니다.',
    team: '6개월 클리프 후 18개월 선형 제안. 아직 온체인 아님.',
    treasury: '2-of-3 멀티시그 제안. 서명자와 지출을 공개합니다.'
  },

  statuses: {
    not_launched: '미발행',
    planned_revocation: '중지 계획',
    planned_management: '관리 계획',
    proposed: '제안',
    pending_verification: '검증 대기',
    not_completed: '미완료',
    completed: '완료'
  },

  statusItems: {
    launch: '토큰 발행',
    mint: '민트 권한',
    freeze: '동결 권한',
    metadata: '메타데이터 권한',
    vesting: '팀 베스팅',
    treasury: '금고 멀티시그',
    audit: '컨트랙트 감사',
    liquidity: '유동성 잠금'
  }
};
