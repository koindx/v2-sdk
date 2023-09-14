import { ChainId } from "./chains"

type ChainAddresses = {
  peripheryAddress: string
  namespaceAddress: string
  namespaces: string[]
}

const enum Periphery {
  MAINNET = "17e1q6Fh5RgnuA8K7v4KvXXH4k9qHgsT5s",
  HARBINGER = "18MV8beHrgV78JpHxTXrvPfSmP2kWy7DVk"
}

const enum Namespaces {
  MAINNET = "19WxDJ9Kcvx4VqQFkpwVmwVEy1hMuwXtQE",
  HARBINGER = "13NQnca5chwpKm4ebHbvgvJmXrsSCTayDJ"
}

const NAMESPACES = [
  "koin", "vhp"
];

const MAINNET_ADDRESSES: ChainAddresses = {
  peripheryAddress: Periphery.MAINNET,
  namespaceAddress: Namespaces.MAINNET,
  namespaces: NAMESPACES
}
const HARBINGER_ADDRESSES: ChainAddresses = {
  peripheryAddress: Periphery.HARBINGER,
  namespaceAddress: Namespaces.HARBINGER,
  namespaces: NAMESPACES
}

export const CHAIN_TO_ADDRESSES_MAP: Record<ChainId, ChainAddresses> = {
  [ChainId.MAINNET]: MAINNET_ADDRESSES,
  [ChainId.HARBINGER]: HARBINGER_ADDRESSES
}