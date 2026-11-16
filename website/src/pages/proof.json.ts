import type { APIRoute } from 'astro';
import { allocation, issuance, token } from '../config/site';

/**
 * 机器可读的发行证据。
 * 与 /proof/ 页面共用同一份 config/site.ts，不存在第二套数据。
 * 未发生的字段一律输出 null，避免任何形式的占位。
 */
export const GET: APIRoute = () => {
  const issued = issuance.state === 'issued' && issuance.mintAddress.length > 0;

  const payload = {
    project: token.name,
    symbol: token.ticker,
    network: token.network,
    standard: token.standard,
    metadataProgram: token.program,
    totalSupply: token.totalSupply,
    decimals: token.decimals,
    /** Metaplex 对 decimals=0 且 supply>1 的 Mint 固定判定为 FungibleAsset。 */
    tokenStandard: 'Fungible Asset',
    state: issuance.state,
    mintAddress: issuance.mintAddress || null,
    transactions: {
      createMint: issuance.createMintTx || null,
      initialSupply: issuance.supplyTx || null,
      revokeMintAuthority: issuance.mintAuthorityRevokedTx || null,
      lockMetadata: issuance.metadataLockTx || null
    },
    authorities: issued
      ? {
          mint: issuance.mintAuthorityRevokedTx ? 'revoked' : 'active',
          freeze: issuance.freezeAuthorityDisabled ? 'not-set' : 'active',
          metadata: issuance.metadataLocked ? 'locked' : 'updatable'
        }
      : null,
    allocation: allocation.map((item) => {
      const evidence = issuance.allocations.find((entry) => entry.key === item.key);
      return {
        bucket: item.key,
        percent: item.percent,
        amount: item.amount,
        address: evidence?.address || null,
        transaction: evidence?.tx || null
      };
    }),
    updatedAt: issuance.updatedAt || null
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
};
