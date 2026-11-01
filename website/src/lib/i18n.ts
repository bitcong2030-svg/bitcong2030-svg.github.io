import { en, type Dict } from '../i18n/en';
import { ja } from '../i18n/ja';
import { ko } from '../i18n/ko';
import { zhTw } from '../i18n/zh-tw';
import { zhCn } from '../i18n/zh-cn';
import { defaultLocale, type LocaleCode } from '../i18n/locales';

/** 全部语种字典；缺任何一份都回落到英文，避免页面空白 */
const dictionaries: Record<LocaleCode, Dict> = {
  en,
  ja,
  ko,
  'zh-tw': zhTw,
  'zh-cn': zhCn
};

export const getDict = (lang: LocaleCode): Dict => dictionaries[lang] ?? en;

const BASE = import.meta.env.BASE_URL;

/** 站内绝对路径 → 带 base 前缀的可用链接 */
export const url = (path = '/'): string => `${BASE}${path.replace(/^\//, '')}`;

/**
 * 语言路径。
 * prefix 为空表示英文主站（根路径），非空表示该语言前缀（如 /ja）。
 */
export const href = (prefix: string, path = '/'): string => url(`${prefix}${path}`);

/** 规范地址：每种语言都指向自己的语言路径 */
export const canonicalPath = (lang: LocaleCode, path: string): string =>
  url(`/${lang}${path === '/' ? '/' : path}`);

export const isDefaultLocale = (lang: string): boolean => lang === defaultLocale;
