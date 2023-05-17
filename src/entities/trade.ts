import BigNumber from "bignumber.js"
import { Pair } from "./pair";
import { Token } from "./token";
import { TradeType } from "../constants";

export class Trade{
  readonly paths: Pair[];

  constructor(token: Token, pairs: Pair[], amount: BigNumber, tradeType: TradeType) {
    if(!Trade.checkPairs(pairs)) {
      throw "Pair Errors"
    }

    this.paths = Trade.getPath(token, pairs)
    if(tradeType == TradeType.EXACT_INPUT) {
      for (let i = 0; i < this.paths.length - 1; i++) {
        
      }
    } else {
      for (let i = this.paths.length - 1; i > 0; i--) {

      }
    }
  }

  static getPath(token: Token, pairs: Pair[]): Pair[] {
    let token0pair0 = pairs[0].token_0.equals(token);
    let token1pair0 = pairs[0].token_0.equals(token);
    if(token0pair0 || token1pair0) {
      return pairs
    } else {
      return pairs.reverse()
    }
  }

  static checkPairs(pairs: Pair[]): boolean {    
    for (let index = 0; index < pairs.length; index++) {
      const pair0 = pairs[index];
      const pair1 = pairs[index + 1];      
      if(
        !(pair0.token_0.equals(pair1.token_0) ||
        pair0.token_0.equals(pair1.token_1) ||
        pair0.token_1.equals(pair1.token_0) ||
        pair0.token_1.equals(pair1.token_1))
      ) {
        return false
      }
    }
    return true
  }
}