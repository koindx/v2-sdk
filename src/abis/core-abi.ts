import { interfaces } from "koilib"

export const CoreAbi: interfaces.Abi = {
  "methods": {
    "name": {
      "description": "Get name of the token",
      "argument": "core.name_arguments",
      "return": "core.str",
      "entry_point": 2191741823,
      "read_only": true
    },
    "symbol": {
      "description": "Get the symbol of the token",
      "argument": "core.symbol_arguments",
      "return": "core.str",
      "entry_point": 3077209249,
      "read_only": true
    },
    "decimals": {
      "description": "Get the decimals of the token",
      "argument": "core.decimals_arguments",
      "return": "core.uint32",
      "entry_point": 4001430831,
      "read_only": true
    },
    "get_info": {
      "description": "Get name, symbol and decimals",
      "argument": "core.get_info_arguments",
      "return": "core.info",
      "entry_point": 3179243600,
      "read_only": true
    },
    "total_supply": {
      "description": "Get total supply",
      "argument": "core.total_supply_arguments",
      "return": "core.uint64",
      "entry_point": 2967091508,
      "read_only": true
    },
    "balance_of": {
      "description": "Get balance of an account 7",
      "argument": "core.balance_of_arguments",
      "return": "core.uint64",
      "entry_point": 1550980247,
      "read_only": true
    },
    "allowance": {
      "description": "Get balance of an account2",
      "argument": "core.allowance_arguments",
      "return": "core.uint64",
      "entry_point": 854630305,
      "read_only": true
    },
    "transfer": {
      "description": "Get balance of an account 6",
      "argument": "core.transfer_arguments",
      "return": "core.empty_object",
      "entry_point": 670398154,
      "read_only": false
    },
    "approve": {
      "description": "Get balance of an account 3",
      "argument": "core.approve_arguments",
      "return": "core.empty_object",
      "entry_point": 1960973952,
      "read_only": false
    },
    "get_reserves": {
      "description": "initializing core contract",
      "argument": "core.get_reserves_arguments",
      "return": "core.get_reserves_result",
      "entry_point": 1829526207,
      "read_only": true
    },
    "initialize": {
      "description": "initializing core contract",
      "argument": "core.initialize_arguments",
      "return": "core.empty_object",
      "entry_point": 1192148610,
      "read_only": false
    },
    "mint": {
      "description": "mint core contract",
      "argument": "core.mint_arguments",
      "return": "core.uint64",
      "entry_point": 3698268091,
      "read_only": false
    },
    "burn": {
      "description": "mint core contract",
      "argument": "core.burn_arguments",
      "return": "core.burn_result",
      "entry_point": 2241834181,
      "read_only": false
    },
    "swap": {
      "description": "swap core contract",
      "argument": "core.swap_arguments",
      "return": "core.empty_object",
      "entry_point": 3662136052,
      "read_only": false
    },
    "skim": {
      "description": "swap core contract",
      "argument": "core.skim_arguments",
      "return": "core.empty_object",
      "entry_point": 1989814226,
      "read_only": false
    },
    "sync": {
      "description": "swap core contract",
      "argument": "core.sync_arguments",
      "return": "core.empty_object",
      "entry_point": 1976000254,
      "read_only": false
    }
  },
  "koilib_types": {
    "nested": {
      "core": {
        "nested": {
          "str": {
            "fields": {
              "value": {
                "type": "string",
                "id": 1
              }
            }
          },
          "uint32": {
            "fields": {
              "value": {
                "type": "uint32",
                "id": 1
              }
            }
          },
          "uint64": {
            "fields": {
              "value": {
                "type": "uint64",
                "id": 1,
                "options": {
                  "jstype": "JS_STRING"
                }
              }
            }
          },
          "boole": {
            "fields": {
              "value": {
                "type": "bool",
                "id": 1
              }
            }
          },
          "empty_object": {
            "fields": {}
          },
          "info": {
            "fields": {
              "name": {
                "type": "string",
                "id": 1
              },
              "symbol": {
                "type": "string",
                "id": 2
              },
              "decimals": {
                "type": "uint32",
                "id": 3
              }
            }
          },
          "config_object": {
            "fields": {
              "tokenA": {
                "type": "bytes",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "tokenB": {
                "type": "bytes",
                "id": 3,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "kLast": {
                "type": "string",
                "id": 4
              },
              "reserveA": {
                "type": "uint64",
                "id": 5,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "reserveB": {
                "type": "uint64",
                "id": 6,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "blockTime": {
                "type": "uint64",
                "id": 7,
                "options": {
                  "jstype": "JS_STRING"
                }
              }
            }
          },
          "name_arguments": {
            "fields": {}
          },
          "symbol_arguments": {
            "fields": {}
          },
          "decimals_arguments": {
            "fields": {}
          },
          "get_info_arguments": {
            "fields": {}
          },
          "total_supply_arguments": {
            "fields": {}
          },
          "balance_of_arguments": {
            "fields": {
              "owner": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              }
            }
          },
          "allowance_arguments": {
            "fields": {
              "owner": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "spender": {
                "type": "bytes",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              }
            }
          },
          "transfer_arguments": {
            "fields": {
              "from": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "to": {
                "type": "bytes",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "value": {
                "type": "uint64",
                "id": 3,
                "options": {
                  "jstype": "JS_STRING"
                }
              }
            }
          },
          "approve_arguments": {
            "fields": {
              "owner": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "spender": {
                "type": "bytes",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "value": {
                "type": "uint64",
                "id": 3,
                "options": {
                  "jstype": "JS_STRING"
                }
              }
            }
          },
          "get_reserves_arguments": {
            "fields": {}
          },
          "get_reserves_result": {
            "fields": {
              "kLast": {
                "type": "string",
                "id": 1
              },
              "reserveA": {
                "type": "uint64",
                "id": 2,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "reserveB": {
                "type": "uint64",
                "id": 3,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "blockTime": {
                "type": "uint64",
                "id": 4,
                "options": {
                  "jstype": "JS_STRING"
                }
              }
            }
          },
          "initialize_arguments": {
            "fields": {
              "tokenA": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "tokenB": {
                "type": "bytes",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              }
            }
          },
          "mint_arguments": {
            "fields": {
              "to": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "fee": {
                "type": "bytes",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              }
            }
          },
          "burn_arguments": {
            "fields": {
              "to": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "fee": {
                "type": "bytes",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              }
            }
          },
          "burn_result": {
            "fields": {
              "amountA": {
                "type": "uint64",
                "id": 1,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "amountB": {
                "type": "uint64",
                "id": 2,
                "options": {
                  "jstype": "JS_STRING"
                }
              }
            }
          },
          "swap_arguments": {
            "fields": {
              "to": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "amountA": {
                "type": "uint64",
                "id": 2,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "amountB": {
                "type": "uint64",
                "id": 3,
                "options": {
                  "jstype": "JS_STRING"
                }
              }
            }
          },
          "skim_arguments": {
            "fields": {
              "to": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              }
            }
          },
          "sync_arguments": {
            "fields": {}
          },
          "initialize_event": {
            "fields": {
              "pair": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "tokenA": {
                "type": "bytes",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "tokenB": {
                "type": "bytes",
                "id": 3,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              }
            }
          },
          "mint_event": {
            "fields": {
              "sender": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "amountA": {
                "type": "uint64",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "amountB": {
                "type": "uint64",
                "id": 3,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              }
            }
          },
          "burn_event": {
            "fields": {
              "to": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "sender": {
                "type": "bytes",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "amountA": {
                "type": "uint64",
                "id": 3,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "amountB": {
                "type": "uint64",
                "id": 4,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              }
            }
          },
          "swap_event": {
            "fields": {
              "to": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "sender": {
                "type": "bytes",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "amountInA": {
                "type": "uint64",
                "id": 3,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "amountInB": {
                "type": "uint64",
                "id": 4,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "amountOutA": {
                "type": "uint64",
                "id": 5,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "amountOutB": {
                "type": "uint64",
                "id": 6,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              }
            }
          },
          "sync_event": {
            "fields": {
              "reserveA": {
                "type": "uint64",
                "id": 1,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "reserveB": {
                "type": "uint64",
                "id": 2,
                "options": {
                  "jstype": "JS_STRING"
                }
              }
            }
          }
        }
      }
    }
  }
}