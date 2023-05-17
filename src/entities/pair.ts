import BigNumber from "bignumber.js"
import { Token } from "./token";
import { _9975, _10000, ZERO, MINIMUM_LIQUIDITY } from "../constants";
import { sqrt, min } from "../utils";

export class Pair {
  readonly address: string;
  readonly token_0: Token;
  readonly token_1: Token;
  readonly klast: BigNumber;
  readonly reserve_0: BigNumber;
  readonly reserve_1: BigNumber;
  readonly block_time: Number;
  readonly total_supply: BigNumber;

  constructor(address: string, token_a: Token, token_b: Token, klast: BigNumber, reserveA: BigNumber, reserveB: BigNumber, blockTime: Number, totalSupply: BigNumber) {
    // base
    this.klast = klast;
    this.address = address;
    this.block_time = blockTime;
    // balance
    const tokens = token_a.sortsBefore(token_b) ? [token_a, token_b] : [token_b, token_a];
    this.token_0 = tokens[0];
    this.token_1 = tokens[1];
    this.reserve_0 = reserveA;
    this.reserve_1 = reserveB;
    this.total_supply = totalSupply;
  }

  public reserveOf(token: Token): BigNumber {
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

  public getQuote(token: Token, amount: BigNumber) {
    let reservesA = token.equals(this.token_0) ? this.reserve_0 : this.reserve_1;
    let reservesB = token.equals(this.token_0) ? this.reserve_1 : this.reserve_0;
    return amount.times(reservesA).div(reservesB);
  }

  public getInputAmount(tokenOut: Token, amountOut: BigNumber): BigNumber {
    let reservesA = !tokenOut.equals(this.token_0) ? this.reserve_0 : this.reserve_1;
    let reservesB = !tokenOut.equals(this.token_0) ? this.reserve_1 : this.reserve_0;
    const numerator = new BigNumber(reservesA).times(amountOut).times(_10000);
    const denominator = new BigNumber(reservesB).minus(amountOut).times(_9975);
    return numerator.div(denominator).plus(1);
  }

  public getOutputAmount(tokenIn: Token, amountIn: BigNumber): BigNumber {
    let reservesA = tokenIn.equals(this.token_0) ? this.reserve_0 : this.reserve_1;
    let reservesB = tokenIn.equals(this.token_0) ? this.reserve_1 : this.reserve_0;
    const amountInWithFee = new BigNumber(amountIn).times(_9975);
    const numerator = new BigNumber(amountInWithFee).times(reservesB);
    const denominator = new BigNumber(reservesA).times(10000).plus(amountInWithFee);
    return numerator.div(denominator);
  }

}