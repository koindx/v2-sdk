import { Provider } from "koilib"
import { ChainId } from "./chains"

export const MAINNET_PROVIDER = new Provider(["https://api.koinos.io"])
export const HARBINGER_PROVIDER = new Provider(["https://harbinger-api.koinos.io"])

export const CHAIN_TO_PROVIDER_MAP: Record<ChainId, Provider> = {
  [ChainId.MAINNET]: MAINNET_PROVIDER,
  [ChainId.HARBINGER]: HARBINGER_PROVIDER
}
