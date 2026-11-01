export type LocaleCode = 'en' | 'ja' | 'ko' | 'zh-tw' | 'zh-cn';

export interface LocaleMeta {
  code: LocaleCode;
  /** 语言选择器里显示的名字（用该语言自己的写法） */
  label: string;
  short: string;
  flag: string;
  htmlLang: string;
  /** ready = 已完整翻译；pending = 尚未提供，选择器中禁用 */
  status: 'ready' | 'pending';
}

/**
 * 语言顺序固定：英文默认，其余按文档顺序。
 * 新增语种只需补字典并把 status 改成 ready。
 */
export const locales: LocaleMeta[] = [
  { code: 'en', label: 'English', short: 'EN', flag: '🇺🇸', htmlLang: 'en', status: 'ready' },
  { code: 'ja', label: '日本語', short: 'JA', flag: '🇯🇵', htmlLang: 'ja', status: 'ready' },
  { code: 'ko', label: '한국어', short: 'KO', flag: '🇰🇷', htmlLang: 'ko', status: 'ready' },
  { code: 'zh-tw', label: '繁體中文', short: '繁', flag: '🇹🇼', htmlLang: 'zh-Hant', status: 'ready' },
  { code: 'zh-cn', label: '简体中文', short: '简', flag: '🇨🇳', htmlLang: 'zh-Hans', status: 'ready' }
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const isLocale = (value: string): value is LocaleCode =>
  localeCodes.includes(value as LocaleCode);

export const getLocale = (code: LocaleCode): LocaleMeta =>
  locales.find((l) => l.code === code) ?? locales[0];
