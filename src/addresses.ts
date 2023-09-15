import { ChainId } from "./chains"

type ChainAddresses = {
  periphery: string
  namespace: string
}

const enum Periphery {
  MAINNET = "17e1q6Fh5RgnuA8K7v4KvXXH4k9qHgsT5s",
  HARBINGER = "18MV8beHrgV78JpHxTXrvPfSmP2kWy7DVk"
}

const enum Namespaces {
  MAINNET = "19WxDJ9Kcvx4VqQFkpwVmwVEy1hMuwXtQE",
  HARBINGER = "13NQnca5chwpKm4ebHbvgvJmXrsSCTayDJ"
}

const MAINNET_ADDRESSES: ChainAddresses = {
  periphery: Periphery.MAINNET,
  namespace: Namespaces.MAINNET
}
const HARBINGER_ADDRESSES: ChainAddresses = {
  periphery: Periphery.HARBINGER,
  namespace: Namespaces.HARBINGER
}

export const CHAIN_TO_ADDRESSES_MAP: Record<ChainId, ChainAddresses> = {
  [ChainId.MAINNET]: MAINNET_ADDRESSES,
  [ChainId.HARBINGER]: HARBINGER_ADDRESSES
}