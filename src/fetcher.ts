import invariant from "tiny-invariant"
import BigNumber from "bignumber.js"
import { Provider, Contract, utils } from "koilib"
import { ZERO } from "./constants"
import { ChainId } from "./chains"
import { CHAIN_TO_PROVIDER_MAP } from "./providers"
import { CHAIN_TO_ADDRESSES_MAP } from "./addresses"
import { Token, Pair, Currency } from "./entities"
// abis
import { CoreAbi, PeripheryAbi } from "./abis"

export class Fetcher {
  static async fetchTokenData(chainId: ChainId, address: string, provider?: Provider): Promise<Currency | undefined> {
    let _provider: Provider | undefined = provider;
    if(!provider) {
      _provider = CHAIN_TO_PROVIDER_MAP[chainId];
    }
    invariant(!!_provider, "PROVIDER_ERROR")
    const contract = new Contract({
      id: address,
      abi: utils.tokenAbi,
      provider: _provider,
    });
    let _name: string = "";
    let _symbol: string = "";
    let _decimals: number = 8;
    try {
      let nameChain: any = (await contract.functions.name()).result      
      if(nameChain && nameChain.value) {
        _name = nameChain.value
      }
      let symbolChain: any = (await contract.functions.symbol()).result
      if(symbolChain && symbolChain.value) {
        _symbol = symbolChain.value
      }
      let decimalsChain: any = (await contract.functions.decimals()).result
      if(decimalsChain && decimalsChain.value) {
        _decimals = decimalsChain.value
      }
    } catch (error) {
      console.log(error)
    }
    return new Token(chainId, address, _decimals, _symbol, _name);
  }

  static async fetchPairData(chainId: ChainId, tokenA: Currency, tokenB: Currency, provider?: Provider): Promise<Pair> {
    let _provider: Provider | undefined = provider
    if(!provider) {
      _provider = CHAIN_TO_PROVIDER_MAP[chainId];
    }
    invariant(tokenA.chainId == chainId, "TOKEN_A_CHAIN_ERROR")
    invariant(tokenB.chainId == chainId, "TOKEN_B_CHAIN_ERROR")
    invariant(tokenA.chainId == tokenB.chainId, "CHAIN_ERROR")
    invariant(!!_provider, "PROVIDER_ERROR")
    const addresses = CHAIN_TO_ADDRESSES_MAP[chainId];
    const periphery = new Contract({
      id: addresses.periphery,
      abi: PeripheryAbi,
      provider: _provider,
    });

    let _address: any;
    let _kLast: any
    let _reserveA: any;
    let _reserveB: any;
    let _blockTime: any;
    let _totalSupply: any;
    try {
      let pair = (await periphery.functions.get_pair({ tokenA: tokenA.address, tokenB: tokenB.address })).result
      if(pair) {
        const core = new Contract({
          id: pair.value,
          abi: CoreAbi,
          provider: _provider,
        });
        let reserves = (await core.functions.get_reserves()).result
        if(reserves) {
          _kLast =  new BigNumber(reserves.kLast);
          _reserveA = new BigNumber(reserves.reserveA);
          _reserveB = new BigNumber(reserves.reserveB);
          _blockTime = new BigNumber(reserves.blockTime);
        }
        let supply = (await core.functions.total_supply()).result
        if(supply) {
          _totalSupply = new BigNumber(supply.value)
        }
        _address = pair.value;
      } else {
        return new Pair(chainId, "", _provider, tokenA, tokenB, ZERO, ZERO, ZERO, ZERO, ZERO);
      }
    } catch (error) {
      console.log(error)
    }
    return new Pair(chainId, _address, _provider, tokenA, tokenB, _kLast, _reserveA, _reserveB, _blockTime, _totalSupply);
  }
}