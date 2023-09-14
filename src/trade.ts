import BigNumber from "bignumber.js"
import { Currency, Pair } from "./entities"
import invariant from "tiny-invariant"

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export type TradeResult = {
  type: TradeType
  path: Currency[]
  results: BigNumber[]
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

  tradeExactOut(amount: BigNumber): TradeResult {
    let path = this.path.map(token => token);
    let pairs = this.pairs;
    let results: BigNumber[] = new Array(path.length - 1);
    results[path.length - 1] = amount;
    for (let i = pairs.length; i > 0; i--) {
      let pair = pairs[i - 1]
      let result = pair.getInputAmount(path[i - 1], results[i])
      results[ i - 1 ] = result
    }
    return {
      type: TradeType.EXACT_INPUT,
      path: path,
      results: results
    }
  }

  tradeExactIn(amount: BigNumber): TradeResult {
    let path = this.path.map(token => token);
    let pairs = this.pairs;
    let results: BigNumber[] = new Array(path.length);
    results[0] = amount;
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i]
      let result = pair.getOutputAmount(path[i], results[i])
      results[i + 1] = result
    }
    return {
      type: TradeType.EXACT_OUTPUT,
      path: path,
      results: results
    }
  }
}

