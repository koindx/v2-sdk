import { interfaces } from "koilib"

export const PeripheryAbi: interfaces.Abi = {
  "methods": {
    "authorize_update": {
      "description": "Authorize of protocol",
      "argument": "periphery.authorize_update_arguments",
      "return": "periphery.boole",
      "entry_point": 2417988571,
      "read_only": false
    },
    "get_config": {
      "description": "Get configs of protocol",
      "argument": "periphery.get_config_arguments",
      "return": "periphery.configs_object",
      "entry_point": 3159346644,
      "read_only": true
    },
    "set_config": {
      "description": "Set configs of protocol",
      "argument": "periphery.set_config_arguments",
      "return": "periphery.empty_object",
      "entry_point": 1269140617,
      "read_only": false
    },
    "get_pair": {
      "description": "get address of a pair",
      "argument": "periphery.get_pair_arguments",
      "return": "periphery.address",
      "entry_point": 4024190401,
      "read_only": true
    },
    "create_pair": {
      "description": "Create pair if it doesn't exist",
      "argument": "periphery.create_pair_arguments",
      "return": "periphery.empty_object",
      "entry_point": 678105445,
      "read_only": false
    },
    "add_liquidity": {
      "description": "Add liquidity to pair",
      "argument": "periphery.add_liquidity_arguments",
      "return": "periphery.add_liquidity_result",
      "entry_point": 117856717,
      "read_only": false
    },
    "remove_liquidity": {
      "description": "Remove liquidity from pair",
      "argument": "periphery.remove_liquidity_arguments",
      "return": "periphery.remove_liquidity_result",
      "entry_point": 650612145,
      "read_only": false
    },
    "swap_tokens_in": {
      "description": "Swap tokens with exact input",
      "argument": "periphery.swap_tokens_in_arguments",
      "return": "periphery.empty_object",
      "entry_point": 2335548678,
      "read_only": false
    },
    "swap_tokens_out": {
      "description": "Swap tokens with exact output",
      "argument": "periphery.swap_tokens_out_arguments",
      "return": "periphery.empty_object",
      "entry_point": 3761082301,
      "read_only": false
    },
    "get_quote": {
      "description": "Get quote depending on reservations",
      "argument": "periphery.get_quote_arguments",
      "return": "periphery.uint64",
      "entry_point": 1066984845,
      "read_only": true
    },
    "get_amount_out": {
      "description": "Get amounts out",
      "argument": "periphery.get_amount_out_arguments",
      "return": "periphery.uint64",
      "entry_point": 562360101,
      "read_only": true
    },
    "get_amount_in": {
      "description": "Get amounts in",
      "argument": "periphery.get_amount_in_arguments",
      "return": "periphery.uint64",
      "entry_point": 1161269195,
      "read_only": true
    }
  },
  "koilib_types": {
    "nested": {
      "periphery": {
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
          "address": {
            "fields": {
              "value": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
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
          "configs_object": {
            "fields": {
              "feeOn": {
                "type": "bool",
                "id": 1
              },
              "feeTo": {
                "type": "bytes",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              }
            }
          },
          "pair_key": {
            "fields": {
              "tokenA": {
                "type": "string",
                "id": 1
              },
              "tokenB": {
                "type": "string",
                "id": 2
              }
            }
          },
          "authorize_update_arguments": {
            "fields": {
              "hash": {
                "type": "bytes",
                "id": 1
              }
            }
          },
          "get_config_arguments": {
            "fields": {}
          },
          "set_config_arguments": {
            "fields": {
              "value": {
                "type": "configs_object",
                "id": 1
              }
            }
          },
          "get_pair_arguments": {
            "fields": {
              "tokenA": {
                "type": "string",
                "id": 1
              },
              "tokenB": {
                "type": "string",
                "id": 2
              }
            }
          },
          "create_pair_arguments": {
            "fields": {
              "tokenA": {
                "type": "string",
                "id": 1
              },
              "tokenB": {
                "type": "string",
                "id": 2
              }
            }
          },
          "add_liquidity_arguments": {
            "fields": {
              "from": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "receiver": {
                "type": "bytes",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "tokenA": {
                "type": "string",
                "id": 3
              },
              "tokenB": {
                "type": "string",
                "id": 4
              },
              "amountADesired": {
                "type": "uint64",
                "id": 5,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "amountBDesired": {
                "type": "uint64",
                "id": 6,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "amountAMin": {
                "type": "uint64",
                "id": 7,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "amountBMin": {
                "type": "uint64",
                "id": 8,
                "options": {
                  "jstype": "JS_STRING"
                }
              }
            }
          },
          "add_liquidity_result": {
            "fields": {
              "liquidity": {
                "type": "uint64",
                "id": 1,
                "options": {
                  "jstype": "JS_STRING"
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
          "remove_liquidity_arguments": {
            "fields": {
              "from": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "receiver": {
                "type": "bytes",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "tokenA": {
                "type": "string",
                "id": 3
              },
              "tokenB": {
                "type": "string",
                "id": 4
              },
              "liquidity": {
                "type": "uint64",
                "id": 5,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "amountAMin": {
                "type": "uint64",
                "id": 6,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "amountBMin": {
                "type": "uint64",
                "id": 7,
                "options": {
                  "jstype": "JS_STRING"
                }
              }
            }
          },
          "remove_liquidity_result": {
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
          "swap_tokens_in_arguments": {
            "fields": {
              "from": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "receiver": {
                "type": "bytes",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "amountIn": {
                "type": "uint64",
                "id": 3,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "amountOutMin": {
                "type": "uint64",
                "id": 4,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "path": {
                "rule": "repeated",
                "type": "string",
                "id": 5
              }
            }
          },
          "swap_tokens_out_arguments": {
            "fields": {
              "from": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "receiver": {
                "type": "bytes",
                "id": 2,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "amountOut": {
                "type": "uint64",
                "id": 3,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "amountInMax": {
                "type": "uint64",
                "id": 4,
                "options": {
                  "jstype": "JS_STRING"
                }
              },
              "path": {
                "rule": "repeated",
                "type": "string",
                "id": 5
              }
            }
          },
          "get_quote_arguments": {
            "fields": {
              "amount": {
                "type": "uint64",
                "id": 1,
                "options": {
                  "jstype": "JS_STRING"
                }
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
              }
            }
          },
          "get_amount_out_arguments": {
            "fields": {
              "amountIn": {
                "type": "uint64",
                "id": 1,
                "options": {
                  "jstype": "JS_STRING"
                }
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
              }
            }
          },
          "get_amount_in_arguments": {
            "fields": {
              "amountOut": {
                "type": "uint64",
                "id": 1,
                "options": {
                  "jstype": "JS_STRING"
                }
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
              }
            }
          },
          "register_event": {
            "fields": {
              "pair": {
                "type": "bytes",
                "id": 1,
                "options": {
                  "(koinos.btype)": "ADDRESS"
                }
              },
              "tokenA": {
                "type": "string",
                "id": 2
              },
              "tokenB": {
                "type": "string",
                "id": 3
              }
            }
          }
        }
      }
    }
  }
}