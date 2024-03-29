import { BaseCurrency } from "./baseCurrency"
import { ChainId } from "../chains"

export class Token extends BaseCurrency {
  public readonly isNative: false = false
  public readonly isToken: true = true
  constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(chainId, address, decimals, symbol, name)
  }
}

export class KOIN extends BaseCurrency {
  public readonly isNative: true = true
  public readonly isToken: false = false
  constructor(chainId: ChainId) {
    super(chainId, "koin", 8, "KOIN", "Koin")
  }
}

export class VHP extends BaseCurrency {
  public readonly isNative: true = true
  public readonly isToken: false = false
  constructor(chainId: ChainId) {
    super(chainId, "vhp", 8, "VHP", "Virtual Hash Power")
  }
}

export class TKOIN extends BaseCurrency {
  public readonly isNative: true = true
  public readonly isToken: false = false
  constructor(chainId: ChainId) {
    super(chainId, "koin", 8, "tKOIN", "Test Koin")
  }
}