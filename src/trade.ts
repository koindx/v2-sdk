import BigNumber from "bignumber.js"
import { Currency, Pair } from "./entities"
import invariant from "tiny-invariant"

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export type TradeExactIn = {
  amount_in: BigNumber
  amount_out_min: BigNumber
  path: Currency[]
}

export type TradeExactOut = {
  amount_out: BigNumber
  amount_in_max: BigNumber
  path: Currency[]
}

export class Router {
  public readonly pairs: Pair[]
  public readonly path: Currency[]
  public readonly input: Currency
  public readonly output: Currency

  constructor(pairs: Pair[], input: Currency, output: Currency) {
    invariant(pairs.length > 0, 'PAIRS')
    const chainId: string = pairs[0].chain
    invariant(pairs.every(pair => pair.chain === chainId), 'CHAIN_IDS')
    const path: Currency[] = [input]
    for (let i = 0; i < pairs.length; i++) {
      const currentPair = pairs[i];
      const currentInput = path[i];
      invariant(currentInput.equals(currentPair.token_0) || currentInput.equals(currentPair.token_1), 'PATH')
      const output = currentInput.equals(currentPair.token_0) ? currentPair.token_1 : currentPair.token_0
      path.push(output)
    }
    this.pairs = pairs
    this.path = path
    this.input = input
    this.output = output
  }

  tradeExactOut(amount: BigNumber, percent: BigNumber): TradeExactOut {
    let path = this.path.map(token => token);
    let pairs = this.pairs;
    let results: BigNumber[] = new Array(path.length - 1);
    results[path.length - 1] = amount;
    for (let i = pairs.length; i > 0; i--) {
      let pair = pairs[i - 1]
      invariant(!pair.reserve_0.isZero(), "RESERVE_A_INSUFFICIENT")
      invariant(!pair.reserve_1.isZero(), "RESERVE_B_INSUFFICIENT")
      let result = pair.getInputAmount(path[i - 1], results[i])
      invariant(result.isFinite(), "IS_FINITE")
      results[ i - 1 ] = result
    }
    let amountIn = results[0];
    let maxAmountIn = amountIn
    if(!percent.isZero()) {
      maxAmountIn = new BigNumber(amountIn).times(percent.div(10000)).plus(amountIn)
    }
    return {
      amount_out: amount,
      amount_in_max: maxAmountIn,
      path: path
    }
  }

  tradeExactIn(amount: BigNumber, percent: BigNumber): TradeExactIn {
    let path = this.path.map(token => token);
    let pairs = this.pairs;
    let results: BigNumber[] = new Array(path.length);
    results[0] = amount;
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i]      
      invariant(!pair.reserve_0.isZero(), "RESERVE_A_INSUFFICIENT")
      invariant(!pair.reserve_1.isZero(), "RESERVE_B_INSUFFICIENT")
      let result = pair.getOutputAmount(path[i], results[i])
      invariant(result.isFinite(), "IS_FINITE")
      results[i + 1] = result
    }
    let amountOut = results[ path.length - 1];
    let minAmountOut = amountOut;
    if(!percent.isZero()) {
      minAmountOut = new BigNumber(amountOut).times(percent.div(10000)).minus(amountOut).times(-1)
    }
    return {
      amount_in: amount,
      amount_out_min: minAmountOut,
      path: path
    }
  }
}

