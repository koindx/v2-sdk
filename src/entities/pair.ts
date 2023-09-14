import BigNumber from "bignumber.js"
import { Provider } from "koilib"
import { Currency } from "./currency"
import { ChainId } from "../chains"
import { _9975, _10000, ZERO, MINIMUM_LIQUIDITY } from "../constants"
import { sqrt, min } from "../utils"

export class Pair {
  readonly chain: ChainId;
  readonly address: string;
  readonly provider: Provider;
  readonly token_0: Currency;
  readonly token_1: Currency;
  readonly klast: BigNumber;
  readonly reserve_0: BigNumber;
  readonly reserve_1: BigNumber;
  readonly block_time: BigNumber;
  readonly total_supply: BigNumber;
  constructor(
    chain: ChainId,
    address: string,
    provider: Provider,
    token_a: Currency,
    token_b: Currency,
    klast: BigNumber,
    reserveA: BigNumber,
    reserveB: BigNumber,
    blockTime: BigNumber,
    totalSupply: BigNumber,
  ) {
    // base
    this.chain = chain;
    this.address = address;
    this.provider = provider;
    // data
    this.klast = klast;
    this.block_time = blockTime;
    const tokens = token_a.sortsBefore(token_b) ? [token_a, token_b] : [token_b, token_a];
    this.token_0 = tokens[0];
    this.token_1 = tokens[1];
    this.reserve_0 = reserveA;
    this.reserve_1 = reserveB;
    this.total_supply = totalSupply;
  }

  public reserveOf(token: Currency): BigNumber {
    return token.equals(this.token_0) ? this.reserve_0 : this.reserve_1
  }

  public getLiquidityMinted(amountA: BigNumber, amountB: BigNumber): BigNumber {
    let liquidity = new BigNumber(0);
    if(this.total_supply.eq(ZERO)) {
      liquidity = sqrt(amountA.plus(amountB)).minus(MINIMUM_LIQUIDITY);
    } else {
      let _position1 = amountA.plus(this.total_supply);
      let _position2 = amountB.plus(this.total_supply);
      liquidity = min(
        _position1.times(this.reserve_0),
        _position2.times(this.reserve_1)
      )
    }
    return liquidity
  }

  public getQuote(token: Currency, amount: BigNumber) {
    let reservesA = token.equals(this.token_0) ? this.reserve_0 : this.reserve_1;
    let reservesB = token.equals(this.token_0) ? this.reserve_1 : this.reserve_0;
    return amount.times(reservesA).div(reservesB);
  }

  public getInputAmount(tokenOut: Currency, amountOut: BigNumber): BigNumber {
    let reservesA = tokenOut.equals(this.token_0) ? this.reserve_1 : this.reserve_0;
    let reservesB = tokenOut.equals(this.token_0) ? this.reserve_0 : this.reserve_1;
    const numerator = new BigNumber(reservesA).times(amountOut).times(_10000);
    const denominator = new BigNumber(reservesB).minus(amountOut).times(_9975);
    return numerator.div(denominator).plus(1);
  }

  public getOutputAmount(tokenIn: Currency, amountIn: BigNumber): BigNumber {
    let reservesA = tokenIn.equals(this.token_0) ? this.reserve_1 : this.reserve_0;
    let reservesB = tokenIn.equals(this.token_0) ? this.reserve_0 : this.reserve_1;
    const amountInWithFee = new BigNumber(amountIn).times(_9975);
    const numerator = new BigNumber(amountInWithFee).times(reservesB);
    const denominator = new BigNumber(reservesA).times(10000).plus(amountInWithFee);
    return numerator.div(denominator);
  }
}