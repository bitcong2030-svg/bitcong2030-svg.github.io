/**
 * 全站唯一参数源。
 * 所有数字以原始整数存储，展示层按语言格式化（见 src/lib/format.ts）。
 * 任何页面都不允许再写死代币数量。
 */

export const token = {
  name: 'BitCong',
  nameZh: '比特聪',
  ticker: 'BCONG',
  network: 'Solana',
  standard: 'SPL Token',
  program: 'Metaplex Token Metadata',
  totalSupply: 2_100_000_000_000_000,
  decimals: 0,
  tax: 0
} as const;

export type AllocationKey = 'community' | 'liquidity' | 'team' | 'treasury';

export const allocation: Array<{
  key: AllocationKey;
  percent: number;
  amount: number;
  color: string;
}> = [
  { key: 'community', percent: 60, amount: 1_260_000_000_000_000, color: '#FF8A24' },
  { key: 'liquidity', percent: 20, amount: 420_000_000_000_000, color: '#FFC178' },
  { key: 'team', percent: 10, amount: 210_000_000_000_000, color: '#8A94A6' },
  { key: 'treasury', percent: 10, amount: 210_000_000_000_000, color: '#3F4654' }
];

/** 社交渠道。url 为空即视为未核验，页面显示 Pending Verification。 */
export const socials = [
  { id: 'x', label: 'X', handle: '', url: '', status: 'pending' as const },
  { id: 'telegram', label: 'Telegram', handle: '', url: '', status: 'pending' as const },
  { id: 'facebook', label: 'Facebook', handle: '', url: '', status: 'pending' as const }
];

export const contact = {
  emailUser: 'bitcong2030',
  emailDomain: 'gmail.com',
  display: 'bitcong2030 [at] gmail.com'
} as const;

/** 发行与链上状态。只有拿到真实证据后才能改成 completed。 */
export const chainStatus = [
  { key: 'launch', state: 'not_launched' },
  { key: 'mint', state: 'planned_revocation' },
  { key: 'freeze', state: 'planned_revocation' },
  { key: 'metadata', state: 'planned_management' },
  { key: 'vesting', state: 'proposed' },
  { key: 'treasury', state: 'proposed' },
  { key: 'audit', state: 'pending_verification' },
  { key: 'liquidity', state: 'not_completed' }
] as const;

export const siteUrl = 'https://bitcong2030-svg.github.io';
