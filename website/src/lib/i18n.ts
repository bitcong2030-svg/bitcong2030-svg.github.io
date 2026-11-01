import { en, type Dict } from '../i18n/en';
import { defaultLocale, type LocaleCode } from '../i18n/locales';

/** 目前只有英文完整可用；其它语种补齐后在此注册。 */
const dictionaries: Partial<Record<LocaleCode, Dict>> = {
  en
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

/** 英文规范地址始终指向 /en/，根路径视为同一内容的默认入口 */
export const canonicalPath = (lang: LocaleCode, path: string): string =>
  url(`/${lang}${path === '/' ? '/' : path}`);

export const isDefaultLocale = (lang: string): boolean => lang === defaultLocale;
