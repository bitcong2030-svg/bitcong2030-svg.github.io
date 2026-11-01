import { chapters as en } from './en';
import { chapters as ja } from './ja';
import { chapters as ko } from './ko';
import { chapters as zhTw } from './zh-tw';
import { chapters as zhCn } from './zh-cn';
import type { Chapter } from './en';
import type { LocaleCode } from '../../i18n/locales';

export const whitepaperByLocale: Record<LocaleCode, Chapter[]> = {
  en,
  ja,
  ko,
  'zh-tw': zhTw,
  'zh-cn': zhCn
};

export const getChapters = (lang: LocaleCode): Chapter[] => whitepaperByLocale[lang] ?? en;
