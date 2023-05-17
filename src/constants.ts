import BigNumber from "bignumber.js"

export enum ChainId {
  MAINNET = 1,
  TESTNET = 2
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export const PERIPHERY  = ""

export const MINIMUM_LIQUIDITY = new BigNumber(1000);

// exports for internal consumption
export const ZERO = new BigNumber(0);
export const ONE = new BigNumber(1);
export const TWO = new BigNumber(2);
export const TREE = new BigNumber(3);
export const _9975 = new BigNumber(9975);
export const _10000 = new BigNumber(10000);