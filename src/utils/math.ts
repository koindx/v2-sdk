import BigNumber from "bignumber.js"
import { ZERO, ONE, TWO,  TREE } from "../constants"

export function sqrt(y: BigNumber): BigNumber {
  let z: BigNumber = ZERO;
  if (y.gt(TREE)) {
    z = y;
    let x = y.div(TWO).plus(ONE);
    while (x.lt(z)) {
      z = x;
      x = y.div(x).plus(x).div(TWO)
    }
  } else if (!y.eq(ZERO)) {
    z = ONE;
  }
  return z
}

export function min(x: BigNumber, y: BigNumber): BigNumber {
  return x.lt(y) ? x : y;
}