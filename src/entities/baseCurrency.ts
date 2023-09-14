import { Currency } from "./currency"
import { ChainId } from "../chains"

export abstract class BaseCurrency {
  public abstract readonly isNative: boolean
  public abstract readonly isToken: boolean
  public readonly chainId: ChainId
  public readonly address: string
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string
  protected constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    this.chainId = chainId
    this.address = address
    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }

  public equals(token: Currency): boolean {
    const equal = this.chainId === token.chainId && this.address === token.address
    return equal;
  }

  public sortsBefore(other: Currency): boolean {
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}