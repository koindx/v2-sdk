import BigNumber from "bignumber.js"
import { Provider, Contract, utils } from "koilib";
import { Providers } from "./utils";
import { ChainId, PERIPHERY } from "./constants";
import { Token, Pair } from "./entities";
// abis
import CORE_ABI from "./abis/core-abi.json";
import PERIPHERY_ABI from "./abis/periphery-abi.json";

export class Fetcher {
  async fetchTokenData(chainId: ChainId, address: string, provider?: Provider): Promise<Token> {
    let _provider = provider;
    if(!provider) {
      _provider = Providers.getProvider(chainId);
    }
    const contract = new Contract({
      id: address,
      abi: utils.tokenAbi,
      provider: _provider,
    });
    let _name: any = "";
    let _symbol: any = "";
    let _decimals: any = 8;
    try {
      _name = (await contract.functions.name()).result
      _symbol = (await contract.functions.symbol()).result
      _decimals = (await contract.functions.decimals()).result
    } catch (error) {
      console.log(error)
    }
    return new Token(chainId, address, _decimals, _symbol, _name);
  }

  async fetchPairData(tokenA: Token, tokenB: Token, provider?: Provider): Promise<Pair | undefined> {
    let _provider
    if(!provider) {
      _provider = Providers.MAINNET;
    }
    const periphery = new Contract({
      id: PERIPHERY,
      abi: PERIPHERY_ABI,
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
          abi: CORE_ABI,
          provider: _provider,
        });
        let reserves = (await core.functions.get_reserves()).result
        if(reserves) {
          _kLast = reserves.kLast;
          _reserveA = new BigNumber(reserves.reserveA);
          _reserveB = new BigNumber(reserves.reserveB);
          _blockTime = reserves.blockTime;
        }
        let supply = (await core.functions.total_supply()).result
        if(supply) {
          _totalSupply = new BigNumber(supply.value)
        }
        _address = pair.value;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error)
    }
    return new Pair(_address, tokenA, tokenB, _kLast, _reserveA, _reserveB, _blockTime, _totalSupply);
  }
}