export type PeerProtocolContracts = {
  // "version": "0.1.0",
  // "name": "peer_protocol_contracts",
  address: "B4ZgDcF5jok9LMkPzi3LexmhWfxr63rj5dAeas98h2rT";
  metadata: {
    name: "hiraise";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Created with Anchor";
  };
  constants: [
    {
      name: "USER_TAG";
      type: "bytes";
      value: "[85, 83, 69, 82, 95, 83, 84, 65, 84, 69]";
    },
    {
      name: "LOAN_TAG";
      type: "bytes";
      value: "[76, 79, 65, 78, 95, 83, 84, 65, 84, 69]";
    },
    {
      name: "ATA_PAY_TAG";
      type: "bytes";
      value: "[65, 84, 65, 95, 80, 65, 89]";
    },
    {
      name: "ADMIN_TAG";
      type: "bytes";
      value: "[65, 68, 77, 73, 78, 95, 84, 65, 71]";
    },
    {
      name: "COLLATERIAL_TAG";
      type: "bytes";
      value: "[67, 79, 76, 76, 65, 84, 69, 82, 73, 65, 76, 95, 84, 65, 71]";
    }
  ];
  instructions: [
    {
      name: "initialize";
      accounts: [
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "userProfile";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "initializeAdmin";
      accounts: [
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "adminProfile";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "addAcceptedCollaterial";
      accounts: [
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "adminProfile";
          isMut: true;
          isSigner: false;
        },
        {
          name: "acceptedCollaterial";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "ticker";
          type: "string";
        },
        {
          name: "mintAddress";
          type: "string";
        },
        {
          name: "poolAddress";
          type: "string";
        },
        {
          name: "image";
          type: "string";
        }
      ];
    },
    {
      name: "removeAcceptedCollaterial";
      accounts: [
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "acceptedCollaterial";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "adminProfile";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "depositCollaterial";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "fromAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "toAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "priceFeed";
          isMut: false;
          isSigner: false;
        },
        {
          name: "userProfile";
          isMut: true;
          isSigner: false;
        },
        {
          name: "acceptedCollaterial";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "withdrawCollaterial";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "fromAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "toAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "userProfile";
          isMut: true;
          isSigner: false;
        },
        {
          name: "ataPdaAuthority";
          isMut: true;
          isSigner: false;
        },
        {
          name: "acceptedCollaterial";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "createLoan";
      accounts: [
        {
          name: "userProfile";
          isMut: true;
          isSigner: false;
        },
        {
          name: "loanAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "duration";
          type: "u64";
        },
        {
          name: "interestRate";
          type: "f64";
        },
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "acceptLoan";
      accounts: [
        {
          name: "userProfile";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "loanAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "fromAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "toAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "ataPdaAuthority";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "loanIdx";
          type: "u8";
        }
      ];
    },
    {
      name: "removeLoan";
      accounts: [
        {
          name: "userProfile";
          isMut: true;
          isSigner: false;
        },
        {
          name: "loanAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "collaterialIdx";
          type: "u8";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "userProfile";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "lastLoan";
            type: "u64";
          },
          {
            name: "loanCount";
            type: "u64";
          },
          {
            name: "canBorrow";
            type: "bool";
          },
          {
            name: "canDeposit";
            type: "bool";
          },
          {
            name: "coinsDeposited";
            type: {
              vec: {
                defined: "DepositedColleterial";
              };
            };
          },
          {
            name: "coinsLent";
            type: {
              vec: {
                defined: "DepositedColleterial";
              };
            };
          }
        ];
      };
    },
    {
      name: "loan";
      type: {
        kind: "struct";
        fields: [
          {
            name: "lender";
            type: "publicKey";
          },
          {
            name: "idx";
            type: "u64";
          },
          {
            name: "duration";
            type: "u64";
          },
          {
            name: "interestRate";
            type: "f64";
          },
          {
            name: "collateral";
            type: {
              defined: "DepositedColleterial";
            };
          },
          {
            name: "borrower";
            type: "publicKey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "status";
            type: {
              defined: "LoanStatus";
            };
          },
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "tokenProgram";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "pool";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "vault";
            type: "publicKey";
          },
          {
            name: "mint";
            type: "publicKey";
          },
          {
            name: "bump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "adminProfile";
      type: {
        kind: "struct";
        fields: [
          {
            name: "collaterialCount";
            type: "u8";
          },
          {
            name: "authority";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "acceptedColleterial";
      type: {
        kind: "struct";
        fields: [
          {
            name: "ticker";
            type: "string";
          },
          {
            name: "mintAddress";
            type: "string";
          },
          {
            name: "poolAddress";
            type: "string";
          },
          {
            name: "image";
            type: "string";
          },
          {
            name: "adminAta";
            type: "publicKey";
          },
          {
            name: "adminAtaPda";
            type: "publicKey";
          },
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "decimals";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "depositedColleterial";
      type: {
        kind: "struct";
        fields: [
          {
            name: "ticker";
            type: "string";
          },
          {
            name: "mintAddress";
            type: "string";
          },
          {
            name: "poolAddress";
            type: "string";
          },
          {
            name: "image";
            type: "string";
          },
          {
            name: "adminAta";
            type: "publicKey";
          },
          {
            name: "adminAtaPda";
            type: "publicKey";
          },
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "decimals";
            type: "u8";
          },
          {
            name: "amount";
            type: "u64";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "LoanStatus";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Open";
          },
          {
            name: "Closed";
          }
        ];
      };
    },
    {
      name: "ProgramError";
      type: {
        kind: "enum";
        variants: [
          {
            name: "UserBalanceLessThanLending";
          },
          {
            name: "UserCannotDeposit";
          },
          {
            name: "UserCannotBorrow";
          },
          {
            name: "LoanDurationTooMuch";
          },
          {
            name: "LoanDurationTooSmall";
          },
          {
            name: "InterestTooSmall";
          },
          {
            name: "UserCannotWithdraw";
          },
          {
            name: "LoanAcceptedByNow";
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "InvalidPriceFeed";
      msg: "Invalid Price Feed";
    }
  ];
};

export const IDL: PeerProtocolContracts = {
  // "version": "0.1.0",
  // "name": "peer_protocol_contracts",
  address: "B4ZgDcF5jok9LMkPzi3LexmhWfxr63rj5dAeas98h2rT",
  metadata: {
    name: "hiraise",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Created with Anchor",
  },
  constants: [
    {
      name: "USER_TAG",
      type: "bytes",
      value: "[85, 83, 69, 82, 95, 83, 84, 65, 84, 69]",
    },
    {
      name: "LOAN_TAG",
      type: "bytes",
      value: "[76, 79, 65, 78, 95, 83, 84, 65, 84, 69]",
    },
    {
      name: "ATA_PAY_TAG",
      type: "bytes",
      value: "[65, 84, 65, 95, 80, 65, 89]",
    },
    {
      name: "ADMIN_TAG",
      type: "bytes",
      value: "[65, 68, 77, 73, 78, 95, 84, 65, 71]",
    },
    {
      name: "COLLATERIAL_TAG",
      type: "bytes",
      value: "[67, 79, 76, 76, 65, 84, 69, 82, 73, 65, 76, 95, 84, 65, 71]",
    },
  ],
  instructions: [
    {
      name: "initialize",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "userProfile",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "initializeAdmin",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "adminProfile",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "addAcceptedCollaterial",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "adminProfile",
          isMut: true,
          isSigner: false,
        },
        {
          name: "acceptedCollaterial",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "ticker",
          type: "string",
        },
        {
          name: "mintAddress",
          type: "string",
        },
        {
          name: "poolAddress",
          type: "string",
        },
        {
          name: "image",
          type: "string",
        },
      ],
    },
    {
      name: "removeAcceptedCollaterial",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "acceptedCollaterial",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "adminProfile",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "depositCollaterial",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "fromAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "toAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "priceFeed",
          isMut: false,
          isSigner: false,
        },
        {
          name: "userProfile",
          isMut: true,
          isSigner: false,
        },
        {
          name: "acceptedCollaterial",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "withdrawCollaterial",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "fromAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "toAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "userProfile",
          isMut: true,
          isSigner: false,
        },
        {
          name: "ataPdaAuthority",
          isMut: true,
          isSigner: false,
        },
        {
          name: "acceptedCollaterial",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "createLoan",
      accounts: [
        {
          name: "userProfile",
          isMut: true,
          isSigner: false,
        },
        {
          name: "loanAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "duration",
          type: "u64",
        },
        {
          name: "interestRate",
          type: "f64",
        },
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "acceptLoan",
      accounts: [
        {
          name: "userProfile",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "loanAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "fromAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "toAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "ataPdaAuthority",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "loanIdx",
          type: "u8",
        },
      ],
    },
    {
      name: "removeLoan",
      accounts: [
        {
          name: "userProfile",
          isMut: true,
          isSigner: false,
        },
        {
          name: "loanAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "collaterialIdx",
          type: "u8",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "userProfile",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "lastLoan",
            type: "u64",
          },
          {
            name: "loanCount",
            type: "u64",
          },
          {
            name: "canBorrow",
            type: "bool",
          },
          {
            name: "canDeposit",
            type: "bool",
          },
          {
            name: "coinsDeposited",
            type: {
              vec: {
                defined: "DepositedColleterial",
              },
            },
          },
          {
            name: "coinsLent",
            type: {
              vec: {
                defined: "DepositedColleterial",
              },
            },
          },
        ],
      },
    },
    {
      name: "loan",
      type: {
        kind: "struct",
        fields: [
          {
            name: "lender",
            type: "publicKey",
          },
          {
            name: "idx",
            type: "u64",
          },
          {
            name: "duration",
            type: "u64",
          },
          {
            name: "interestRate",
            type: "f64",
          },
          {
            name: "collateral",
            type: {
              defined: "DepositedColleterial",
            },
          },
          {
            name: "borrower",
            type: "publicKey",
          },
          {
            name: "amount",
            type: "u64",
          },
          {
            name: "status",
            type: {
              defined: "LoanStatus",
            },
          },
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "tokenProgram",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "pool",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "vault",
            type: "publicKey",
          },
          {
            name: "mint",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "adminProfile",
      type: {
        kind: "struct",
        fields: [
          {
            name: "collaterialCount",
            type: "u8",
          },
          {
            name: "authority",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "acceptedColleterial",
      type: {
        kind: "struct",
        fields: [
          {
            name: "ticker",
            type: "string",
          },
          {
            name: "mintAddress",
            type: "string",
          },
          {
            name: "poolAddress",
            type: "string",
          },
          {
            name: "image",
            type: "string",
          },
          {
            name: "adminAta",
            type: "publicKey",
          },
          {
            name: "adminAtaPda",
            type: "publicKey",
          },
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "decimals",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "depositedColleterial",
      type: {
        kind: "struct",
        fields: [
          {
            name: "ticker",
            type: "string",
          },
          {
            name: "mintAddress",
            type: "string",
          },
          {
            name: "poolAddress",
            type: "string",
          },
          {
            name: "image",
            type: "string",
          },
          {
            name: "adminAta",
            type: "publicKey",
          },
          {
            name: "adminAtaPda",
            type: "publicKey",
          },
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "decimals",
            type: "u8",
          },
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "LoanStatus",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Open",
          },
          {
            name: "Closed",
          },
        ],
      },
    },
    {
      name: "ProgramError",
      type: {
        kind: "enum",
        variants: [
          {
            name: "UserBalanceLessThanLending",
          },
          {
            name: "UserCannotDeposit",
          },
          {
            name: "UserCannotBorrow",
          },
          {
            name: "LoanDurationTooMuch",
          },
          {
            name: "LoanDurationTooSmall",
          },
          {
            name: "InterestTooSmall",
          },
          {
            name: "UserCannotWithdraw",
          },
          {
            name: "LoanAcceptedByNow",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "InvalidPriceFeed",
      msg: "Invalid Price Feed",
    },
  ],
};
