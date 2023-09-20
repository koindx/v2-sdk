import invariant from "tiny-invariant";
import BigNumber from "bignumber.js";
import { _10000 } from "../constants";

export class Percent {
  public readonly numerator: BigNumber
  public readonly denominator: BigNumber
  constructor(numerator: BigNumber, denominator?: BigNumber) {
    this.numerator = numerator;
    if(denominator != undefined) {
      invariant(!denominator.isZero(), "ZERO_ERROR")
      invariant(denominator.isGreaterThan(numerator), "DENOMINATOR_ERROR")
      this.denominator = denominator
    } else {
      this.denominator = _10000;
    }
  }
}
