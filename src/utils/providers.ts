import { Provider } from "koilib";
import { ChainId } from "../constants";

export namespace Providers {
  export const MAINNET = new Provider(["https://api.koinos.io"])
  export const TEXTNET = new Provider(["https://harbinger-api.koinos.io"])
  export const getProvider = (_chainId: ChainId) => {
    let _provider = Providers.MAINNET;
    switch(_chainId) {
      case ChainId.MAINNET:
        _provider = Providers.MAINNET;
        break;
      case ChainId.TESTNET:
        _provider = Providers.MAINNET;
        break;
      default:
        _provider = Providers.MAINNET
    }
    return _provider
  }
}