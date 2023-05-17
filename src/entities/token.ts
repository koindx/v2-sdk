import { ChainId } from "./../constants";

export class Token {
  readonly name: string | undefined;  
  readonly symbol: string | undefined;
  readonly decimals: number;
  readonly chainId: ChainId;
  readonly address: string;

  constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    this.name = name;
    this.symbol = symbol;
    this.chainId = chainId;
    this.address = address;
    this.decimals = decimals;
  }

  public equals(token: Token): boolean {
    const equal = this.chainId === token.chainId && this.address === token.address
    return equal;
  }
  
  public sortsBefore(other: Token): boolean {
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}