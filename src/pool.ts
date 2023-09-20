import invariant from "tiny-invariant";
import BigNumber from "bignumber.js";
import { Currency, Pair, Percent } from "entities";

export type AddLiquidity = {
  token_a: Currency;
  token_b: Currency;
  amount_a_desired: BigNumber;
  amount_b_desired: BigNumber;
  amount_a_min: BigNumber;
  amount_b_min: BigNumber;
}

export type RemoveLiquidity = {
  token_a: Currency;
  token_b: Currency;
  liquidity: BigNumber;
  amount_a_min: BigNumber;
  amount_b_min: BigNumber;
}


export class Pool {
  public readonly pair: Pair

  constructor(pair: Pair) {
    this.pair = pair;
  }

  public addLiquidity(token: Currency, amount: BigNumber, percent: Percent): AddLiquidity {
    invariant(!amount.isZero(), "AMOUNT_INSUFFICIENT")
    invariant(token.equals(this.pair.token_0) || token.equals(this.pair.token_1), "INVALID_TOKEN")
    let quote = this.pair.getQuote(token, amount)
    let _tokenA = token.equals(this.pair.token_0) ? this.pair.token_0 : this.pair.token_1;
    let _tokenB = token.equals(this.pair.token_0) ? this.pair.token_1 : this.pair.token_0;
    let minA = amount;
    let minB = quote;
    if(!percent.numerator.isZero()) {
      minA = amount.times(percent.numerator.div(percent.denominator)).minus(amount).times(-1)
      minB = quote.times(percent.numerator.div(percent.denominator)).minus(quote).times(-1)
    }
    return {
      token_a: _tokenA,
      token_b: _tokenB,
      amount_a_desired: amount,
      amount_b_desired: quote,
      amount_a_min: minA,
      amount_b_min: minB
    }
  }

  public removeLiquidity(shares: BigNumber, percent: Percent): RemoveLiquidity {
    invariant(!shares.isZero(), "SHARES_INSUFFICIENT")
    let amountA = shares.times(this.pair.reserve_0).div(this.pair.total_supply);
    let amountB = shares.times(this.pair.reserve_1).div(this.pair.total_supply);
    let minA = amountA
    let minB = amountB
    if(!percent.numerator.isZero()) {
      minA = amountA.minus( amountA.times(percent.numerator).div(percent.denominator) )
      minB = amountB.minus( amountB.times(percent.numerator).div(percent.denominator) )
    }
    return {
      token_a: this.pair.token_0,
      token_b: this.pair.token_1,
      liquidity: shares,
      amount_a_min: minA,
      amount_b_min: minB
    }
  }
}