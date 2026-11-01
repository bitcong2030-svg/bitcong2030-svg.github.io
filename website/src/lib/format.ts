import type { LocaleCode } from '../i18n/locales';

/**
 * 数字展示规则（对应白皮书 2.2）：
 * 页面用各语言的自然大单位，精确整数只在参数表里出现。
 */

type Unit = { value: number; suffix: string };

const UNITS: Record<LocaleCode, Unit[]> = {
  en: [
    { value: 1e15, suffix: 'Q' },
    { value: 1e12, suffix: 'T' },
    { value: 1e9, suffix: 'B' },
    { value: 1e6, suffix: 'M' }
  ],
  ja: [
    { value: 1e12, suffix: '兆' },
    { value: 1e8, suffix: '億' }
  ],
  ko: [
    { value: 1e12, suffix: '조' },
    { value: 1e8, suffix: '억' }
  ],
  'zh-tw': [
    { value: 1e12, suffix: '萬億' },
    { value: 1e8, suffix: '億' }
  ],
  'zh-cn': [
    { value: 1e12, suffix: '万亿' },
    { value: 1e8, suffix: '亿' }
  ]
};

const INTL_LOCALE: Record<LocaleCode, string> = {
  en: 'en-US',
  ja: 'ja-JP',
  ko: 'ko-KR',
  'zh-tw': 'zh-TW',
  'zh-cn': 'zh-CN'
};

const trim = (n: number): string => {
  const s = n.toFixed(2).replace(/\.?0+$/, '');
  return s;
};

/** 精确整数，带千分位 */
export const formatFull = (n: number, lang: LocaleCode): string =>
  new Intl.NumberFormat(INTL_LOCALE[lang], { maximumFractionDigits: 0 }).format(n);

/** 语言相关的大单位缩写，例如 2.1Q / 2,100兆 / 2,100萬億 */
export const formatCompact = (n: number, lang: LocaleCode): string => {
  const units = UNITS[lang];
  for (const unit of units) {
    if (n >= unit.value) {
      const v = n / unit.value;
      const formatted = v >= 100 ? new Intl.NumberFormat(INTL_LOCALE[lang], { maximumFractionDigits: 0 }).format(v) : trim(v);
      return `${formatted}${unit.suffix}`;
    }
  }
  return formatFull(n, lang);
};

/** 中文的「亿」二级换算，用于说明性文案 */
export const toYi = (n: number, lang: LocaleCode): string => {
  const yi = n / 1e8;
  const suffix = lang === 'zh-tw' ? '億' : '亿';
  return `${formatFull(yi, lang)} ${suffix}`;
};
