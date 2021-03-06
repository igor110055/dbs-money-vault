export const bscPools = [
  {
    id: 'bomb-bomb-btcb',
    name: 'BOMB-BTCB LP',
    token: 'BOMB-BTCB LP',
    tokenDescription: 'bomb.money',
    tokenAddress: '0x84392649eb0bC1c1532F2180E58Bae4E1dAbd8D6',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'bombfarmBOMB-BTCB',
    earnedTokenAddress: '0x94E85B8E050F3F281CB9597cc0144F1F7AF1fe9B',
    earnContractAddress: '0x94E85B8E050F3F281CB9597cc0144F1F7AF1fe9B',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'bomb-bomb-btcb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['BOMB', 'BTCB'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://pancakeswap.finance/add/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/0x522348779DCb2911539e76A1042aA922F9C47Ee3',
    buyTokenUrl:
      'https://app.bogged.finance/bsc/swap?tokenIn=0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c&tokenOut=0x522348779DCb2911539e76A1042aA922F9C47Ee3',
  },
  {
    id: 'bomb-bomb-maxi',
    name: 'BOMB-MAXI 80-20',
    token: 'BOMB-MAXI LP',
    tokenDescription: 'bomb.money (ACSI)',
    tokenAddress: '0xd6F52e8AB206e59A1E13b3D6c5B7f31E90ef46EF',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'bombfarm80BOMB',
    earnedTokenAddress: '0x9A9698F46769f178b4F0a68653bDD22186147D4f',
    earnContractAddress: '0x9A9698F46769f178b4F0a68653bDD22186147D4f',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'bomb-bomb-maxi',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'ACSI Finance',
    assets: ['BOMB', 'BTCB'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratMultiLP',
    addLiquidityUrl:
      'https://app.acsi.finance/#/pool/0xd6f52e8ab206e59a1e13b3d6c5b7f31e90ef46ef000200000000000000000028/invest',
    buyTokenUrl:
      'https://app.bogged.finance/bsc/swap?tokenIn=0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c&tokenOut=0x522348779DCb2911539e76A1042aA922F9C47Ee3',
  },
  {
    id: 'bomb-bshare-wbnb',
    name: 'BSHARE-BNB LP',
    token: 'BSHARE-BNB LP',
    tokenDescription: 'bomb.money',
    tokenAddress: '0x1303246855b5B5EbC71F049Fdb607494e97218f8',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'bomfarmBSHARE-BNB',
    earnedTokenAddress: '0x60c08c4442E200d609D05df6bE327e3bA836971C',
    earnContractAddress: '0x60c08c4442E200d609D05df6bE327e3bA836971C',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'bomb-bshare-wbnb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['BSHARE', 'BNB'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://pancakeswap.finance/add/BNB/0x531780FAcE85306877D7e1F05d713D1B50a37F7A',
    buyTokenUrl:
      'https://app.bogged.finance/bsc/swap?tokenIn=BNB&tokenOut=0x531780FAcE85306877D7e1F05d713D1B50a37F7A',
  },
  {
    id: 'bomb-bshare-maxi',
    name: 'BSHARE-MAXI 80-20',
    token: 'BSHARE-MAXI LP',
    tokenDescription: 'bomb.money (ACSI)',
    tokenAddress: '0x2C374eD1575e5C2C02c569f627299E902A1972cb',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'bombfarm80BSHARE',
    earnedTokenAddress: '0x25FF492E85d00E4C9883aa1710B52987B91d42F3',
    earnContractAddress: '0x25FF492E85d00E4C9883aa1710B52987B91d42F3',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'bomb-bshare-maxi',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['BSHARE', 'BNB'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratMultiLP',
    addLiquidityUrl:
      'https://app.acsi.finance/#/pool/0x2c374ed1575e5c2c02c569f627299e902a1972cb000200000000000000000027/invest',
    buyTokenUrl:
      'https://app.bogged.finance/bsc/swap?tokenIn=BNB&tokenOut=0x531780FAcE85306877D7e1F05d713D1B50a37F7A',
  },
  {
    id: 'bomb-busm-busd',
    name: 'BUSM-BUSD LP',
    token: 'BUSM-BUSD LP',
    tokenDescription: 'busm.money',
    tokenAddress: '0xEe46Bd06a8876c3cc86027dc7D2Df19af513cD12',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'bomfarmBUSM-BUSD',
    earnedTokenAddress: '0x34FCaeCd4a85cE2089b72cb3B63d1c82Cd86Ee81',
    earnContractAddress: '0x34FCaeCd4a85cE2089b72cb3B63d1c82Cd86Ee81',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'bomb-busm-busd',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['BUSM', 'BUSD'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://pancakeswap.finance/add/0x6216B17f696B14701E17BCB24Ec14430261Be94A/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    buyTokenUrl:
      'https://app.bogged.finance/bsc/swap?tokenIn=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&tokenOut=0x6216B17f696B14701E17BCB24Ec14430261Be94A',
  },
  {
    id: 'bomb-czbnb-bnb',
    name: 'CZBNB-BNB LP',
    token: 'CZBNB-BNB LP',
    tokenDescription: 'CZpegs.com',
    tokenAddress: '0x6773C6b86c15A9c10219eb92c036DE3F8F2ae956',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'czfarmCZBNB-BNB',
    earnedTokenAddress: '0x881598931619636D4A3377219A702a80F24D6505',
    earnContractAddress: '0x881598931619636D4A3377219A702a80F24D6505',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'bomb-czbnb-bnb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['CZBNB', 'BNB'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl: 'https://swap.czpegs.com/add/BNB/0xf43fffb83D7C73275c2feaAC15D5670f7D739B50',
    buyTokenUrl:
      'https://swap.czpegs.com/swap?inputCurrency=BNB&outputCurrency=0xf43fffb83D7C73275c2feaAC15D5670f7D739B50',
  },
  {
    id: 'bomb-czbomb-bomb',
    name: 'CZBOMB-BOMB LP',
    token: 'CZBOMB-BOMB LP',
    tokenDescription: 'CZpegs.com',
    tokenAddress: '0x84b860ED296b12615b3bA50A7BE482E8eF2699B1',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'czfarmCZBOMB-BOMB',
    earnedTokenAddress: '0x2a4a10237CBec8ef5FFe4eE4770D467966c4FEc4',
    earnContractAddress: '0x2a4a10237CBec8ef5FFe4eE4770D467966c4FEc4',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'bomb-czbomb-bomb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['BOMB', 'CZBOMB'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://swap.czpegs.com/add/0x737BC70D07aA6B7f4Ba6d12B45E8CDDBa2446B77/0x522348779DCb2911539e76A1042aA922F9C47Ee3',

    buyTokenUrl:
      'https://swap.czpegs.com/swap?inputCurrency=BNB&outputCurrency=0x737BC70D07aA6B7f4Ba6d12B45E8CDDBa2446B77',
  },
  {
    id: 'bomb-czemp-emp',
    name: 'CZEMP-EMP LP',
    token: 'CZEMP-EMP LP',
    tokenDescription: 'CZpegs.com',
    tokenAddress: '0xdDb1046a98A1068d1dCC3229699e3a1ee203b6D8',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'czfarmCZEMP-EMP',
    earnedTokenAddress: '0xc73A59A40AE80E75e4D308C2A96dc14558Da4810',
    earnContractAddress: '0xc73A59A40AE80E75e4D308C2A96dc14558Da4810',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'bomb-czemp-emp',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['CZEMP', 'EMP'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://swap.czpegs.com/add/0xa700Ec63f9D3D9A03981CF7F8Eb805c444EDBC21/0x3b248CEfA87F836a4e6f6d6c9b42991b88Dc1d58',
    buyTokenUrl:
      'https://swap.czpegs.com/swap?inputCurrency=BNB&outputCurrency=0xa700Ec63f9D3D9A03981CF7F8Eb805c444EDBC21',
  },
  {
    id: 'bomb-czbusd-busd',
    name: 'CZBUSD-BUSD LP',
    token: 'CZBUSD-BUSD LP',
    tokenDescription: 'CZpegs.com',
    tokenAddress: '0x16254Cd930547e9591cdF4e3594f32857d106E12',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'czfarmCZBUSD-BUSD',
    earnedTokenAddress: '0x447D793c9ff744a88758eADa0E90DaCF3B8534bE',
    earnContractAddress: '0x447D793c9ff744a88758eADa0E90DaCF3B8534bE',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'bomb-czbusd-busd',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['CZBUSD', 'BUSD'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://swap.czpegs.com/add/0xa700Ec63f9D3D9A03981CF7F8Eb805c444EDBC21/0x3b248CEfA87F836a4e6f6d6c9b42991b88Dc1d58',
    buyTokenUrl:
      'https://swap.czpegs.com/swap?inputCurrency=BNB&outputCurrency=0xa700Ec63f9D3D9A03981CF7F8Eb805c444EDBC21',
  },
  {
    id: 'bomb-czshares-bnb',
    name: 'CZSHARES-BNB LP',
    token: 'CZSHARES-BNB LP',
    tokenDescription: 'CZpegs.com',
    tokenAddress: '0x08E7b8D65045F9cC497b2Bd5BcB59b2eF9c76dA1',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'czfarmCZSHARES-BNB',
    earnedTokenAddress: '0x3AF94aD0323be1b2b946fCDa05221D078B2AF708',
    earnContractAddress: '0x3AF94aD0323be1b2b946fCDa05221D078B2AF708',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'bomb-czshares-bnb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['CZSHARES', 'BNB'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl: 'https://swap.czpegs.com/add/BNB/0x8169a36EC368882207515D6F509A2E7Fc74203d3',
    buyTokenUrl:
      'https://swap.czpegs.com/swap?inputCurrency=BNB&outputCurrency=0x8169a36EC368882207515D6F509A2E7Fc74203d3',
  },
  {
    id: 'bomb-bomb',
    name: 'BOMB',
    token: 'BOMB',
    tokenDescription: 'bomb.money',
    tokenAddress: '0x522348779DCb2911539e76A1042aA922F9C47Ee3',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'bomfarmBOMB',
    earnedTokenAddress: '0x932DFde877f3FcB5C5b809BB7e3bcF7EE4310BCa',
    earnContractAddress: '0x932DFde877f3FcB5C5b809BB7e3bcF7EE4310BCa',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'BOMB',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['BOMB', 'BSHARE'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'SingleStake',
    buyTokenUrl:
      'https://app.bogged.finance/bsc/swap?tokenIn=0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c&tokenOut=0x522348779DCb2911539e76A1042aA922F9C47Ee3',
  },
  {
    id: 'bomb-bomb-bshare',
    name: 'BOMB-BSHARE LP',
    token: 'BOMB-BSHARE LP',
    tokenDescription: 'bomb.money',
    tokenAddress: '0x54f9fE531224Fa43Feb218B20ABa84d22a8fDc0C',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'bomfarmBOMB-BSHARE',
    earnedTokenAddress: '0x4d574e560Fc5C2dc8997c13e1a5eEd1941dF9914',
    earnContractAddress: '0x4d574e560Fc5C2dc8997c13e1a5eEd1941dF9914',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'bomb-bomb-bshare',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['BSHARE', 'BOMB'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://pancakeswap.finance/add/0x522348779DCb2911539e76A1042aA922F9C47Ee3/0x531780FAcE85306877D7e1F05d713D1B50a37F7A',
    buyTokenUrl:
      'https://pancakeswap.finance/swap?outputCurrency=0x522348779DCb2911539e76A1042aA922F9C47Ee3',
  },
];
