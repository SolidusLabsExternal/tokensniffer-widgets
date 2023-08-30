export default {
    "message": "OK",
    "status": "ready",
    "chainId": "56",
    "address": "0x87230146e138d3f296a9a77e497a2a83012e9bc5",
    "name": "Squid Game",
    "symbol": "SQUID",
    "total_supply": 800000000,
    "decimals": 18,
    "created_at": 1634828793000,
    "deployer_addr": "0x77dff8fc406fae9a7bce4f837f7b95ce2c7107b7",
    "is_flagged": true,
    "exploits": [],
    "contract": {
      "is_source_verified": true,
      "has_mint": false,
      "has_fee_modifier": false,
      "has_max_transaction_amount": false,
      "has_blocklist": false,
      "has_proxy": true,
      "has_pausable": false
    },
    "score": 0,
    "riskLevel": "high",
    "tests": [
      {
        "id": "testForMissingSource",
        "description": "Verified contract source",
        "result": false
      },
      {
        "id": "testForProxy",
        "description": "Source does not contain a proxy contract",
        "result": true
      },
      {
        "id": "testForPausable",
        "description": "Source does not contain a pausable contract",
        "result": false
      },
      {
        "id": "testForMint",
        "description": "Source does not contain a mint function",
        "result": false
      },
      {
        "id": "testForRestoreOwnership",
        "description": "Source does not contain a function to restore ownership",
        "result": false
      },
      {
        "id": "testForMaxTransactionAmount",
        "description": "Source does not contain a function to set maximum transaction amount",
        "result": false
      },
      {
        "id": "testForModifiableFee",
        "description": "Source does not contain a function to modify the fee",
        "result": false
      },
      {
        "id": "testForBlacklist",
        "description": "Source does not contain a function to blacklist holders",
        "result": false
      },
      {
        "id": "testForOwnershipNotRenounced",
        "description": "Ownership renounced or source does not contain an owner contract",
        "result": false
      },
      {
        "id": "testForAuthorization",
        "description": "Creator not authorized for special permission",
        "result": false
      },
      {
        "id": "testForTokensLockedOrBurned",
        "description": "Tokens locked/burned",
        "result": true,
        "value": 41128658.922477335,
        "valuePct": 0.05141082365309667
      },
      {
        "id": "testForHighCreatorTokenBalance",
        "description": "Creator wallet contains less than 5% of token supply",
        "result": true,
        "value": 65001101.8481,
        "valuePct": 0.08565496986064176
      },
      {
        "id": "testForHighOwnerTokenBalance",
        "description": "Owner wallet contains less than 5% of token supply",
        "result": false,
        "value": 0,
        "valuePct": 0
      },
      {
        "id": "testForHighWalletTokenBalance",
        "description": "All other wallets contain less than 5% of token supply",
        "result": false,
        "data": []
      },
      {
        "id": "testForBurnedBalanceExceedsSupply",
        "description": "Burned amount exceeds total token supply",
        "result": false
      },
      {
        "id": "testForCombinedWalletsExceedSupply",
        "description": "All wallets combined contain less than 100% of token supply",
        "result": false
      },
      {
        "id": "testForImpossibleWalletTokenBalance",
        "description": "All wallets contain less than 100% of token supply",
        "result": false
      },
      {
        "id": "testForInadequateLiquidity",
        "description": "Adequate current liquidity",
        "result": false,
        "value": 1.600579124e-09,
        "valuePct": 219.07588759767114,
        "currency": "BNB"
      },
      {
        "id": "testForInadequateInitialLiquidity",
        "description": "Adequate initial liquidity",
        "result": false,
        "valuePct": 111.6587255
      },
      {
        "id": "testForInadeqateLiquidityLockedOrBurned",
        "description": "At least 95% of liquidity locked/burned",
        "result": true,
        "value": 5e+21,
        "valuePct": 0.011245103279785583
      },
      {
        "id": "testForHighCreatorLPBalance",
        "description": "Creator wallet contains less than 5% of liquidity",
        "result": false,
        "value": 0,
        "valuePct": 0
      },
      {
        "id": "testForHighOwnerLPBalance",
        "description": "Owner wallet contains less than 5% of liquidity",
        "result": false,
        "value": 0,
        "valuePct": 0
      },
      {
        "id": "testForUnableToSell",
        "description": "Token is sellable",
        "result": false
      },
      {
        "id": "testForHighBuyFee",
        "description": "Buy fee is less than 5%",
        "result": false,
        "valuePct": 0
      },
      {
        "id": "testForHighSellFee",
        "description": "Sell fee is less than 5%",
        "result": false,
        "valuePct": 0
      },
      {
        "id": "testForExtremeFee",
        "description": "Buy/sell fee is less than 30%",
        "result": false
      }
    ],
    "permissions": {
      "owner_address": "0x0000000000000000000000000000000000000000",
      "is_ownership_renounced": true
    },
    "swap_simulation": {
      "is_sellable": true,
      "buy_fee": 0,
      "sell_fee": 0
    },
    "balances": {
      "burn_balance": 41128658.922477335,
      "lock_balance": 0,
      "deployer_balance": 65001101.8481,
      "owner_balance": 0,
      "top_holders": [
        {
          "address": "0x0d0707963952f2fba59dd06f2b425ace40b492fe",
          "balance": 33452785.35141919,
          "is_contract": false
        },
        {
          "address": "0x0782a3f89701682164fa36395278a24fd5bc7198",
          "balance": 6190455.011139019,
          "is_contract": false
        },
        {
          "address": "0x080af9fb690d58261964ee03ef8cee48ff1eeb6d",
          "balance": 2671201.3305325783,
          "is_contract": false
        },
        {
          "address": "0x054e7f76731477ca0144021e2e83013e409a0c5c",
          "balance": 2482651.422152771,
          "is_contract": false
        },
        {
          "address": "0x0ff50fb49116418c82652362f39224c246d527dc",
          "balance": 2240813.3049745043,
          "is_contract": false
        },
        {
          "address": "0x089a4055b37e033675538513d84841b99a32226e",
          "balance": 1891502.0502876588,
          "is_contract": false
        },
        {
          "address": "0x14ac08f5ab92f16cb61adfdc4234f6da838161ab",
          "balance": 1528545.9171332554,
          "is_contract": false
        },
        {
          "address": "0x04b2c3a34174da15eed55fdfcd8c0685a427f6b0",
          "balance": 1216755.2111747044,
          "is_contract": false
        },
        {
          "address": "0x102c2bf15154364d3013dccc45b50c390104ce83",
          "balance": 1199324.097819111,
          "is_contract": false
        },
        {
          "address": "0x0fbe224f9c3904bcb951aadd1f1978797fa1a39d",
          "balance": 1031688.6945650862,
          "is_contract": false
        },
        {
          "address": "0x184bb5454dd648983aeed71ef45bbb61e5dd0065",
          "balance": 1000992.3333130783,
          "is_contract": false
        },
        {
          "address": "0x0188c12d419a561d5effbdb604fd9b5f134301ec",
          "balance": 972682.8105175163,
          "is_contract": false
        },
        {
          "address": "0x059453ecefcf4b255169e04000a3ec7791f17f1c",
          "balance": 888888.8888850617,
          "is_contract": false
        },
        {
          "address": "0x03951ab4d3a4bdf3141d49837d2789b2f449c039",
          "balance": 830972.5380981159,
          "is_contract": false
        },
        {
          "address": "0x09eff5ea0dae431bffc3610c4e344b744485706d",
          "balance": 826501.4708466851,
          "is_contract": false
        },
        {
          "address": "0x16bfbf31a0537ad64be4d73ca87d5aab4e3c7eed",
          "balance": 816957.760275,
          "is_contract": false
        },
        {
          "address": "0x038625ddcd10fde5253f1b3db84e53339d50f82f",
          "balance": 637357.2946245084,
          "is_contract": false
        },
        {
          "address": "0x148ba4cedaf84ffb3239d91bb9eb60970a296f48",
          "balance": 598211.794563545,
          "is_contract": false
        },
        {
          "address": "0x08075e53ae0a4fdaf25749590fd1aa706b144400",
          "balance": 588615.9073276954,
          "is_contract": false
        }
      ]
    },
    "pools": [
      {
        "address": "0x438f9009a1a2a40301d4663366af7eb7ffc91ff3",
        "name": "PancakeSwap v1",
        "base_symbol": "BNB",
        "base_address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        "total_supply": 496544840065507700,
        "decimals": 18,
        "base_reserve": 1.07826619197e-07,
        "initial_base_reserve": 0.001,
        "owner_balance": 0,
        "deployer_balance": 0,
        "burn_balance": 1000,
        "lock_balance": 0,
        "top_holders": [
          {
            "address": "0x87230146e138d3f296a9a77e497a2a83012e9bc5",
            "balance": 0.31622776601683694
          },
          {
            "address": "0x97d6560f7b3684a5a7a8e502f852e49b89ad3ea7",
            "balance": 2.0201881141e-08
          },
          {
            "address": "0x9e2c4933d6228a69149e3011cb1302f3e46a4263",
            "balance": 0.18031705384678867
          }
        ],
        "locks": []
      },
      {
        "address": "0x683c425d917e8fef34c8bbbeab57246dd2a8b718",
        "name": "PancakeSwap v2",
        "base_symbol": "BNB",
        "base_address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        "total_supply": 444637979358366360000000,
        "decimals": 18,
        "base_reserve": 876.3035503906846,
        "initial_base_reserve": 446.634902,
        "owner_balance": 0,
        "deployer_balance": 0,
        "burn_balance": 1000,
        "lock_balance": 5e+21,
        "top_holders": [
          {
            "address": "0x01bfdd714f2963938f086a5894b108091a62114d",
            "balance": 0.2907217668990331
          },
          {
            "address": "0x052b187f753a5575bc51a6ada4672bb14858ee6e",
            "balance": 0.005014161519028752
          },
          {
            "address": "0x064f697ba3f6f40cebab6efac2ab9378a474674e",
            "balance": 0.9025947769966337
          },
          {
            "address": "0x08075e53ae0a4fdaf25749590fd1aa706b144400",
            "balance": 380.07528336978476
          },
          {
            "address": "0x0914df427228e98a53cd146d8c9b1b869d7d6d0d",
            "balance": 0.5326288215468107
          },
          {
            "address": "0x0a9a4b9349ce6a4132861a956d0ce92dbb1e6be8",
            "balance": 0.39445864054649077
          },
          {
            "address": "0x0b04d7d2b510ec8b5c69c702433e34c97d84bb32",
            "balance": 25.86901217752922
          },
          {
            "address": "0x0b88de8a16ed8ae0b52136a005a4e1910d8eeec0",
            "balance": 0.010366774060235945
          },
          {
            "address": "0x0c32a21f2552c6d497f2cc32b65843ae7ecc299d",
            "balance": 1.9815615070163175
          },
          {
            "address": "0x0c89c0407775dd89b12918b9c0aa42bf96518820",
            "balance": 5000
          },
          {
            "address": "0x0d879f4c0e7b179460e452bf5b1330e0ca4e8970",
            "balance": 12.382236839022966
          },
          {
            "address": "0x0db94015c83e918659d69601bef2338c12982a1b",
            "balance": 4.928595347369794
          },
          {
            "address": "0x0dedd75b59298103dfb3baf7d327193744e3b8ee",
            "balance": 4.113372293783181
          },
          {
            "address": "0x0ed943ce24baebf257488771759f9bf482c39706",
            "balance": 510.0307589003465
          },
          {
            "address": "0x0f8555c0a40f7f38fcf681826eea186ef40f3240",
            "balance": 7.073147682914193
          },
          {
            "address": "0x0f922a31a0299e7c936dec0ad5e2915839e477b5",
            "balance": 17.805961175505388
          },
          {
            "address": "0x0f92fca2a794fd87d09d2ab1229e0bf02663dc82",
            "balance": 363.75584739837115
          },
          {
            "address": "0x1107c8fe4f135d7feee391474d44489b72c8ed05",
            "balance": 0.17107567548345462
          },
          {
            "address": "0x113863cb52340be0de64de69e1dc2838c51aee4f",
            "balance": 0.1389141944913386
          },
          {
            "address": "0x11f38a28e06fae2e264f92f1f891bba462d04cc1",
            "balance": 0.02147966402339168
          },
          {
            "address": "0x11f85e3c467cdc436439c0cbffe6711193cc6b6b",
            "balance": 5.963477238064457
          },
          {
            "address": "0x13423cf6c0f29d550cfbac2af3aeeaf52705fdc7",
            "balance": 4.694796489628576
          },
          {
            "address": "0x14838c665520be8539a9146c7f67ac3a5dcb2c67",
            "balance": 9.922980818676013
          },
          {
            "address": "0x148907237eaf596413f717927fc716efffae8a9b",
            "balance": 200.06424430983643
          },
          {
            "address": "0x16c274a598f65470c86a640b70518357537c7192",
            "balance": 42.353464705215735
          },
          {
            "address": "0x17eb1f6a34ef7110e7db5fa859ca7bf5d7a64bf3",
            "balance": 0.6811619746359009
          },
          {
            "address": "0x1933b79bc78122e298271c7ea5f1c1902cf0bf9e",
            "balance": 2.648275647984171
          },
          {
            "address": "0x19ae05ae1b039b392e7d310cf65c3e1e054a68e1",
            "balance": 2.4338948003797607
          },
          {
            "address": "0x19d9630b36741274e9812cee6e21c10eb4ea3761",
            "balance": 5.232504204121161
          },
          {
            "address": "0x1a149d1636dc6d37cdf54da591e84d6f1d65f66d",
            "balance": 627.8698814551891
          },
          {
            "address": "0x1bce08674efce85d758a62f39240fdfe3f69430a",
            "balance": 22.059003327203637
          },
          {
            "address": "0x20acd99984b1d14838b6acd2a0f6da21bf931ce2",
            "balance": 0.1723951666878202
          },
          {
            "address": "0x212e375b14d4197afc6199953ff827275b390abf",
            "balance": 23.622571247777145
          },
          {
            "address": "0x2255bfb8dcbc7beb2b1d287373cf448ba42b95af",
            "balance": 2.3370391691535857
          },
          {
            "address": "0x228c58dcc174784ac32b251e18c06440c5873c95",
            "balance": 3.892931220286445
          },
          {
            "address": "0x236b80e0af54ed6639c93cb87f94a626b1aecfd0",
            "balance": 525.6278562166046
          },
          {
            "address": "0x2540965a2303efdcde2578a50d3bbe4f4fbb7307",
            "balance": 3.620682439723759
          },
          {
            "address": "0x29d58cc68a3c22cf6e864c8844ff3514253deae1",
            "balance": 0.002710268653971618
          },
          {
            "address": "0x2ad6599274be06364abee0d383179d028714d339",
            "balance": 0.8940963794082066
          },
          {
            "address": "0x2dff0cbb42c038a97f0f10753163fe7cad21200b",
            "balance": 0.4046666408945363
          },
          {
            "address": "0x2f6ca45bb334b92891662f2a6196dbd2b9a9069b",
            "balance": 169.75767683659382
          },
          {
            "address": "0x30d3cdbf4c81a49b86e7b19e1b79a5415e204deb",
            "balance": 0.07887552306768217
          },
          {
            "address": "0x318ede038ef32cc730a4dacbeb03b51b8b9026a2",
            "balance": 0.4187499318108281
          },
          {
            "address": "0x32d12b1bdb4edbca0f81811cbfc9b483f0feffce",
            "balance": 0.023163815313993592
          },
          {
            "address": "0x33b91fbf5c6a4549a1bcb069dcb42ca42636f12c",
            "balance": 13.530402770571838
          },
          {
            "address": "0x33d1f01440b29171f5eeb8c4519b829919102306",
            "balance": 13.444648867410354
          },
          {
            "address": "0x356e1e5f9f7b9cce314bd23671733537b44c848b",
            "balance": 0.17685747687060266
          },
          {
            "address": "0x35d72f76062775f70d9d2402122e85a46d2dfef9",
            "balance": 19.11437276816585
          },
          {
            "address": "0x370dda4504c5b47f293f7238393abbb2911f049f",
            "balance": 111.3598122656218
          },
          {
            "address": "0x37a1b7a93ad204060acbe18a58e68f772418a2cb",
            "balance": 0.10554443858904054
          },
          {
            "address": "0x37e17ae13336762f9aabf370fd81823100fd2564",
            "balance": 0.023063653810709243
          },
          {
            "address": "0x386c116e14df7c8ca97ea99f6cf91f2d751e0d0d",
            "balance": 0.14878544040732275
          },
          {
            "address": "0x3abaeb660b3452c047ceae1fb07ffd08260b38bc",
            "balance": 4.7245799653225085
          },
          {
            "address": "0x3bb59c2f09fee0d0986f8622e4df9af11c09d6e6",
            "balance": 377475.387735554
          },
          {
            "address": "0x3cba0ba35241d7a2fbf6d87eea66dff40f14afa0",
            "balance": 8.068680418841128
          },
          {
            "address": "0x3d5b42f88eeb4117e5b2b7cd9cc4c79f7b3100bb",
            "balance": 4.668079590483444
          },
          {
            "address": "0x3e8635601bbb2e0f14f812a6e2ee5a19c64ca957",
            "balance": 3.3682976432208975
          },
          {
            "address": "0x3eba4e9125d817a466a00176588f24a94e070fde",
            "balance": 0.3914804654514322
          },
          {
            "address": "0x402675418a91ce0155c040e32cdadd5b1a591db5",
            "balance": 45.633184208714844
          },
          {
            "address": "0x42149d5399876ea802c5532f4c141664c25c0f60",
            "balance": 1.9847545992309434
          },
          {
            "address": "0x43f71abe85005f127dceac93b263433fec8aaa31",
            "balance": 16.779044144504958
          },
          {
            "address": "0x44367cb665a507437bd5f20038f3757d87e78a7b",
            "balance": 0.31047714567377604
          },
          {
            "address": "0x44ce6db9c40b38ec1e5a0208c04028a0c6043a13",
            "balance": 89.6358373297822
          },
          {
            "address": "0x463f76e2880fa456229896f9c55d842a78b194bc",
            "balance": 0.04144206945100856
          },
          {
            "address": "0x47b0a5b06822a112247a2b7bc816aee697be552f",
            "balance": 0.038640137239824346
          },
          {
            "address": "0x48d402bd033929e2fda04e5bb67397257af9b1cb",
            "balance": 9.992211857169544
          },
          {
            "address": "0x491cfa51c8740061e2bc64ef119b0351f767bfca",
            "balance": 24.91094415065642
          },
          {
            "address": "0x493e6463d34a3c399d6e65411ebe87691bd6984b",
            "balance": 109.05487348685385
          },
          {
            "address": "0x4b7d3867a095ea1176b10da75e16276270af821d",
            "balance": 4.904084002065958
          },
          {
            "address": "0x4c8f8089607ba1d370c7c62743a309bcb01d1eec",
            "balance": 0.8013798922263061
          },
          {
            "address": "0x4dfea678d3fbd561d55d147a4db3ef845a9f5fee",
            "balance": 35.70739206375525
          },
          {
            "address": "0x4effb8be955cb38dc1007015659437389b597406",
            "balance": 100.11832122549738
          },
          {
            "address": "0x545e10e4fb10959b58a37cc99448f39169957916",
            "balance": 1.738336293337151
          },
          {
            "address": "0x54c9710cc1346e2c992d868af5c9cf8744981754",
            "balance": 5.8991153419839675
          },
          {
            "address": "0x57ed4a00769d99b0df7624667e7d70b024eebd81",
            "balance": 0.047079446741991444
          },
          {
            "address": "0x58042a53d293e2d74a6a14b30f8879c88d07f17d",
            "balance": 0.0218778610532553
          },
          {
            "address": "0x58c938c280483d265952a8836d7ff8b2ca9c23c2",
            "balance": 140.69159282472643
          },
          {
            "address": "0x5a6264cb91e5cad07930dcedf5fb41b832702440",
            "balance": 3512.808253754791
          },
          {
            "address": "0x5c1f01fb7de591b7853cada72f2b1b9e674e80ec",
            "balance": 2.0448417518478896
          },
          {
            "address": "0x5ce002e10f188ed1221b8a59c7ce276784af05dd",
            "balance": 2.5604522588691427
          },
          {
            "address": "0x5d84c04098621eb6a52efd60317bbbc9c3e7d8e0",
            "balance": 0.7825360944168173
          },
          {
            "address": "0x636b41f10b25b4f035134dfee16669ef216d7956",
            "balance": 61.62398982331729
          },
          {
            "address": "0x64305af07d1e14e0dd8c54a42802b9226820333e",
            "balance": 170.62454782307745
          },
          {
            "address": "0x686997704e147bdf0cc5246b4daf5a2226e0d9c1",
            "balance": 7.857906197647578
          },
          {
            "address": "0x696ebf4a89c71e7a6affa37cabcfe4ab99f21319",
            "balance": 0.5820106165403858
          },
          {
            "address": "0x699b96d99c686847f1aa383303d2bb36d053dc2f",
            "balance": 0.000238139163507658
          },
          {
            "address": "0x6a012a1816eb3f72b47aaad55613a7ae4f546421",
            "balance": 17.7739115526175
          },
          {
            "address": "0x6cae3f270af1ea5e96cff051159596bc08427968",
            "balance": 3275.1564560491215
          },
          {
            "address": "0x6cb0c6a04a1c4a5777cb0cd4094c0cb0eb26c3f2",
            "balance": 8.501056462491745
          },
          {
            "address": "0x6dbcd5fd814b30f75ef489ddf72b92e6cb320ca7",
            "balance": 0.10669584965116655
          },
          {
            "address": "0x6e29bae08b8fea86cfdc27868d9e43e7f60caa77",
            "balance": 0.3942248627613668
          },
          {
            "address": "0x7126ba47d430f36e3ba78c1c00ce26568bc79095",
            "balance": 0.11556701131966281
          },
          {
            "address": "0x717c793ca5b05c80eca4138fb7a6b2c9e8e10afb",
            "balance": 2.195616468537724
          },
          {
            "address": "0x7300f842c047e03777060c103d0762f37883c482",
            "balance": 163.54609981077067
          },
          {
            "address": "0x753fa9cfc750e21e2d0874f90044d8595ba180b9",
            "balance": 26.945838461754175
          },
          {
            "address": "0x78fb960c88eacdcaf69f5aa1fd86a0228cfc74e0",
            "balance": 0.27255099128742283
          },
          {
            "address": "0x79afa7744bd3fbcd49c1b0a637edd5e073e68fe6",
            "balance": 22.68084155016043
          },
          {
            "address": "0x7bb8c33e8c3d36127ae5f9b81c61c721fbdf9a6b",
            "balance": 8.615031378975965
          },
          {
            "address": "0x7cb87a33f493207fb78bd64b808ed6ab182fe7d7",
            "balance": 1.3818712371317083
          },
          {
            "address": "0x7f8dd02f569278150edf10c978c3c8e427df67e4",
            "balance": 33.9817993251675
          },
          {
            "address": "0x7ffa1c2036c4c35d5941b23990ba93a58704baac",
            "balance": 43.89909480662597
          },
          {
            "address": "0x80de45eaedf2f66af5e3736f2838f64065d56aab",
            "balance": 1.9037150453010323
          },
          {
            "address": "0x824f109cb4a92652aa7db91953f58b40e3cf46d5",
            "balance": 0.19165541463311858
          },
          {
            "address": "0x82d37c738f3a277449725959c91afb5a22b55561",
            "balance": 11.508856961705003
          },
          {
            "address": "0x8307fd62ffa4eb607db0240d639fbe51add3188d",
            "balance": 73.91733431116869
          },
          {
            "address": "0x8420758274f5819b7173117bf891295e1447bf48",
            "balance": 1.1472752054639443
          },
          {
            "address": "0x85dae7a5704b8d7a8bba7485c310d3a21b0ed1b9",
            "balance": 0.048576817983381405
          },
          {
            "address": "0x86efcb9b1b86c7e252087880712d637a551a799b",
            "balance": 93.42854998694303
          },
          {
            "address": "0x8754aaefee208691843a899439f7a7b6e7f10a19",
            "balance": 0.23764009460926921
          },
          {
            "address": "0x88263ddbbab4236d4a5169b200f1cf5df08f8123",
            "balance": 19992.960209187157
          },
          {
            "address": "0x8917c70630bcc0707e2e2ac0a57fa61d06d0a06d",
            "balance": 1.779068863531136
          },
          {
            "address": "0x895d5800a8596ac015a9cc10cb0601977d37912b",
            "balance": 0.015075000000000002
          },
          {
            "address": "0x8b49ff82b9f8adec3ebb6ff2da01c1e2b1afe1cd",
            "balance": 5.316455436425438
          },
          {
            "address": "0x8be7d57e369209b616533d21f2703ad7723a7fa9",
            "balance": 15834.890512395248
          },
          {
            "address": "0x8cd137d5380146cfe51bd322a24ea3b0ac8f2e80",
            "balance": 0.00140904601037076
          },
          {
            "address": "0x8f73345239ad15ccd327a5d82c8f1db78c4facdf",
            "balance": 8758.740043630965
          },
          {
            "address": "0x8fadf885b4bcc7ee2d7f142fcd8f633fd0a78a97",
            "balance": 2605.4148532430013
          },
          {
            "address": "0x8ff6b3c8e0028e12e8a318c2d3cb34c8a48385d1",
            "balance": 1.053571300223666
          },
          {
            "address": "0x92e5121d436043dff78f0bcf78a8fda4071ada35",
            "balance": 0.45633517986510813
          },
          {
            "address": "0x96ca176089aaa87c01bdccb236673938645559e9",
            "balance": 7.801493730695042
          },
          {
            "address": "0x9700c4c610220a9f25b8a746a3ef0667fbb52e8c",
            "balance": 0.5109657877090406
          },
          {
            "address": "0x97d6560f7b3684a5a7a8e502f852e49b89ad3ea7",
            "balance": 1.919320480019e-06
          },
          {
            "address": "0x99904178ea67d894761547f1f9e0614ba85fbe05",
            "balance": 8.362738209125135
          },
          {
            "address": "0x9a0155a787c6e0f2e0707b5458afe2cf931d0df0",
            "balance": 296.54767233050086
          },
          {
            "address": "0x9a3cb7392752f046447565e766b1ea4c99c0b5c7",
            "balance": 0.31820674847078917
          },
          {
            "address": "0x9c2c10ee6e01daeb77816784b09cdc89b9934189",
            "balance": 0.506389664792645
          },
          {
            "address": "0x9d3ab7cd2f6f63a70e7d2f15c1fd6697b3287aff",
            "balance": 104.70675131693746
          },
          {
            "address": "0x9dda488d43cf01a9afaf7963cfa4c4c3179c88bd",
            "balance": 1.4825261690362357
          },
          {
            "address": "0x9e785b3ed5beeaabd5b0325d496267e4c5681f34",
            "balance": 0.08978890668019768
          },
          {
            "address": "0x9ea138b135fb8261a2ab3ab26b2b663c9861f5e1",
            "balance": 25.357933721162908
          },
          {
            "address": "0xa4b7535d8c071e092e72e359ae17565cd7817aa4",
            "balance": 5.437226438877202
          },
          {
            "address": "0xa54c7938c90682d1c1934764e7d85ecc45d80d19",
            "balance": 1
          },
          {
            "address": "0xa7102470ab38c4af2b74413b361fec2aca9eff28",
            "balance": 0.39515653731847744
          },
          {
            "address": "0xaae3e880ec0b1ab8aa9e9614d5b0af0c71e2c007",
            "balance": 7.557534055781285
          },
          {
            "address": "0xab7773428b0d9321731e11a193e3776bf9176ddf",
            "balance": 3.306701793733168
          },
          {
            "address": "0xac150e9fc993d757a3bd48a81a8be95ee245347c",
            "balance": 2.703276948929749
          },
          {
            "address": "0xac8554a7dfa502bf5e06abc4c0dd58f477a10b31",
            "balance": 2.769478046051554
          },
          {
            "address": "0xaf1a954e7726d8362193e9688e418575fce56c73",
            "balance": 40.483997393531574
          },
          {
            "address": "0xb0309a9f043b866c20a17994b096792340464066",
            "balance": 19.709038017997734
          },
          {
            "address": "0xb07102fc9681b61ed54508a4c8b88e249cd9932b",
            "balance": 0.02817245582194298
          },
          {
            "address": "0xb476720fb8147f31f5b2465cd6a8d65dcaecd8ac",
            "balance": 2.1880250053442913
          },
          {
            "address": "0xb5de1d626aeb82a498387b43ae3d3e770e511c3e",
            "balance": 11.824341501094738
          },
          {
            "address": "0xb6bfbc5a0ae04dc58a92c8ba0d396e444cba8446",
            "balance": 29.14747124469033
          },
          {
            "address": "0xb8db24337c82903a236d3f3cb4f212d2a0bec099",
            "balance": 17.15915634271783
          },
          {
            "address": "0xb9ef26eef218f3861ef9f3d3f9aabebeae2799a5",
            "balance": 0.020748494283920043
          },
          {
            "address": "0xba1d81e6d63b15355b89e5560cf5d6be76c6bbcc",
            "balance": 30.79871230793533
          },
          {
            "address": "0xba930b8a5fe9df773e54a4a04f3629801e1c62ef",
            "balance": 1.7615723574758955
          },
          {
            "address": "0xbc4ee35a1d1f76dd41fd2530374b055607f893d1",
            "balance": 0.045693956462524124
          },
          {
            "address": "0xbd2ba477a4a151bb852ead56a65dba57fe54c2a8",
            "balance": 0.027129390732387296
          },
          {
            "address": "0xbe60753d5a64acacd7fc28e9a71b98e95177cc8c",
            "balance": 149.23558895071528
          },
          {
            "address": "0xbfb7010ba502d6b249ade2c1f3d7f9860934985f",
            "balance": 102.94091906872141
          },
          {
            "address": "0xc1d4951a968b685f7a71207db6071f3dd5f973cb",
            "balance": 0.10663239833970208
          },
          {
            "address": "0xc3b75ea74310163da481b131d5e3d8c031039308",
            "balance": 0.16507963138108392
          },
          {
            "address": "0xc5a1c11ec7035ac93e18988735947ca785c722fd",
            "balance": 7.586460712302182
          },
          {
            "address": "0xc5afca67d8476987999df8fbaad55a359c9bed0b",
            "balance": 971.3589214504541
          },
          {
            "address": "0xc62434bdae7c95d8a8332d1f9b0ca4dd632aaaf8",
            "balance": 2.9329751817479837
          },
          {
            "address": "0xc6d2bc86ec26baf7947dc2cfcef35da32b423d75",
            "balance": 0.011440162520800556
          },
          {
            "address": "0xc8a4ce1a5fa3b4051a23d75516c8d52139891972",
            "balance": 12.494941032823636
          },
          {
            "address": "0xc8f78497c72a2940ca5bc1795c79d48d42b246a4",
            "balance": 0.1784533100250408
          },
          {
            "address": "0xcc06b91e5d6998cb65f90b59c5ff17af7400a8d4",
            "balance": 0.002729160802961381
          },
          {
            "address": "0xd05e98be349c10e7d3ce013a8ed8e785e25570aa",
            "balance": 0.2919961175671985
          },
          {
            "address": "0xd12063eacfb455ae21c8d452fdf47dc819c60fc4",
            "balance": 0.020685785177555684
          },
          {
            "address": "0xd1a606844b6dc361706773c71e4f7c3708c6d0e2",
            "balance": 0.8048326849602012
          },
          {
            "address": "0xd38cb65500113f910830250a33e750dad9e2f820",
            "balance": 0.27213790215493544
          },
          {
            "address": "0xd3a49f1a02995d6efbc81eb43aa7f13e7ec82942",
            "balance": 74.39605693205867
          },
          {
            "address": "0xd454d4e1bbd0593264ef9abc7c687a1a0ab4fc15",
            "balance": 0.8167626855537955
          },
          {
            "address": "0xd467ba52250b9048cdf8b893ea8339132242b0c7",
            "balance": 0.000229359088302086
          },
          {
            "address": "0xd59ef806b58aca17840d9a2ece6a0ff5da8195c4",
            "balance": 32.597265211399346
          },
          {
            "address": "0xd87aa411d5ad982953f63ec9039a628f70b5da5b",
            "balance": 33.10687847884751
          },
          {
            "address": "0xd8fe74775e1f9d938f7a1b70f7ec03575365ce4f",
            "balance": 21.28293016464759
          },
          {
            "address": "0xdaf2d29b7bdf66ba6546c39ec53f9ed82ed08f6b",
            "balance": 0.4289532290902424
          },
          {
            "address": "0xdf5c61ec6548220e1b43c9e1d4dc66f35a5ed0a8",
            "balance": 3.082445605570426
          },
          {
            "address": "0xdff07329196189e625ab33feb2f9c2a5798d9d86",
            "balance": 0.6368546161425371
          },
          {
            "address": "0xe1d6e44c6ec2c0d4e8059e60c321e7737a2bb56b",
            "balance": 17.94308353133046
          },
          {
            "address": "0xe3507ae0a1d5c52101dad30344e4ae24f728584f",
            "balance": 8.81869701472045
          },
          {
            "address": "0xe4a376af2771e5615280d3154e47f9480a94b67c",
            "balance": 6.408598634990324
          },
          {
            "address": "0xe5086f4f950641c9accab8c60454432716718d2b",
            "balance": 0.5621217153325415
          },
          {
            "address": "0xe8ab28816077d539658da6b7bbe1309cfbbd5666",
            "balance": 43.362683940846054
          },
          {
            "address": "0xe96e9f2bed6d96f04fc78fe98789b4f18abe3e4f",
            "balance": 26.355105348986573
          },
          {
            "address": "0xe9abae51154491efacdab72f6420c18bcfc4d7b7",
            "balance": 645.8623036217615
          },
          {
            "address": "0xea0621cd568e5f4166c9996c848cc4bd3a9cbcee",
            "balance": 7.481453642596109
          },
          {
            "address": "0xea9b03e1f70df70f16f622c65eb6eac7cf66cf93",
            "balance": 11.303405535950906
          },
          {
            "address": "0xeab3989cc440a58500a1c48e363eccd2d1d88855",
            "balance": 139.72605326052252
          },
          {
            "address": "0xec9bedc2497c454aa060a27b15c6996079f4ce2b",
            "balance": 0.08987485756665618
          },
          {
            "address": "0xede10f1a0425894742a2267987e177328c0c04c3",
            "balance": 1.1219940041578071
          },
          {
            "address": "0xefb7190fcc230afd9cd41547a638cfaca548634b",
            "balance": 0.2454154364420815
          },
          {
            "address": "0xf1f53253665076a03cd88eab7076a3f87dd7fb25",
            "balance": 7.038637835534902
          },
          {
            "address": "0xf234ee5e00dcae802cd768e99ca848990e7cc8c9",
            "balance": 198.68715797017563
          },
          {
            "address": "0xf2cb113e4c01eb710e36e5417049dc6abf279c17",
            "balance": 11.104942741863852
          },
          {
            "address": "0xf38b0d72e6a40a53aac890479741148253f8ef15",
            "balance": 2.1983797754517225
          },
          {
            "address": "0xf4510007432057f51542114a9c36c9539d164813",
            "balance": 3.6093645347479186
          },
          {
            "address": "0xf45537125e2735ad795a008bf7974491f8a7c796",
            "balance": 31.529731749310184
          },
          {
            "address": "0xf6368f34e38d0db509bd46d64b173607365b51b4",
            "balance": 91.3070973722462
          },
          {
            "address": "0xf79e36f6274dbebdf50dc542a0db64bf5accf038",
            "balance": 16.842663893769792
          },
          {
            "address": "0xfad6f271ae4e16f779d8cce8158870e358ea67e0",
            "balance": 0.45443547255404926
          },
          {
            "address": "0xfafed19f904d06cd481c08d5e44c1b8e548b7645",
            "balance": 346.4134115051901
          },
          {
            "address": "0xfb0b726ac7e72ebc8756340089eb3670ca073321",
            "balance": 1.2021857298770031
          },
          {
            "address": "0xfc908b1e136bef431776407a7ca0bc2ed78ed074",
            "balance": 5.964858823268966
          }
        ],
        "locks": [
          {
            "address": "0x0c89c0407775dd89b12918b9c0aa42bf96518820",
            "name": "TrustSwap",
            "url": "https://www.team.finance/",
            "balance": 5e+21,
            "end_time": null
          }
        ]
      },
      {
        "address": "0x68a21dde3f7aa6f9a76007b6fbb5bde3537e4996",
        "name": "PancakeSwap v2",
        "base_symbol": "BUSD",
        "base_address": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "total_supply": 13109021287568862000000,
        "decimals": 18,
        "base_reserve": 3.711448277115876,
        "initial_base_reserve": 0.4723905442868202,
        "owner_balance": 0,
        "deployer_balance": 0,
        "burn_balance": 1000,
        "lock_balance": 0,
        "top_holders": [
          {
            "address": "0x0af43ccead219cca13af2150fb2953f730eb71a3",
            "balance": 4.13533298e-10
          },
          {
            "address": "0x0ed943ce24baebf257488771759f9bf482c39706",
            "balance": 784.3033729067954
          },
          {
            "address": "0x1751ce060948b7d74588bc373265293670819fae",
            "balance": 1.8091897e-11
          },
          {
            "address": "0x1cd447ceaea5050b9fad40b4c6153addebdb3764",
            "balance": 2.131277619e-09
          },
          {
            "address": "0x28fe7c7b532b88d8d16d72ad7e07c866bd6dcaaf",
            "balance": 5.638380738e-09
          },
          {
            "address": "0x369ba6b135f75bf3da8a0e13cfaf956ee746adcf",
            "balance": 3.8480744e-11
          },
          {
            "address": "0x5b9fdfb4e470989b9aa3374ecf7fe6afa5477054",
            "balance": 1.8143371e-11
          },
          {
            "address": "0x6079d43b70bb77498329d5eaef532e9792165679",
            "balance": 2.131277619e-09
          },
          {
            "address": "0x6de2a2f6aebf64aa6ebe1c477f268a3a42d9d0d6",
            "balance": 1.336376305e-09
          },
          {
            "address": "0x7e6ac1d635a650cdd52512da6d094b862c82d3fc",
            "balance": 2.170627e-09
          },
          {
            "address": "0x92129632726406755c64ae12e245850b8ebe3bf7",
            "balance": 3513.104318200003
          },
          {
            "address": "0x9c5a8fe7854c4bf8200908ae87502564939c1cc0",
            "balance": 2.7324347788e-08
          },
          {
            "address": "0x9e5bb6bd28be853fe9cc3c95c746471e631724d5",
            "balance": 0.792550295239453
          },
          {
            "address": "0xa07550d215a867ad434dd1468f69bb416c7bb593",
            "balance": 1.21959949e-10
          },
          {
            "address": "0xa90d648c191aa82627f3825307f980e8fb6e3b9d",
            "balance": 88.0654706917752
          },
          {
            "address": "0xab71ae67b4f1735234eed73696023f75e219213f",
            "balance": 7360.468401958318
          },
          {
            "address": "0xbef7a9748fae3b8a5877d33047128ee33d03c176",
            "balance": 5.3730277e-10
          },
          {
            "address": "0xcada5a048d76d71243701b9516cb078cc625d6d3",
            "balance": 1362.2871734725236
          },
          {
            "address": "0xd5b5dd8aeea4ee7e03380db224d935e41ad73171",
            "balance": 1.68047188e-09
          },
          {
            "address": "0xe4ac9e1ae78876db2ca35338804a6181febf7ca9",
            "balance": 5.37810688e-10
          },
          {
            "address": "0xf0c0aa9da792d70cc6868abe4947bbb4fc99608c",
            "balance": 1.08711432e-10
          }
        ],
        "locks": []
      },
      {
        "address": "0x5b4ae42235bcd065894509a676c52364307b76d8",
        "name": "PancakeSwap v2",
        "base_symbol": "USDT",
        "base_address": "0x55d398326f99059ff775485246999027b3197955",
        "total_supply": 216185460155326000000000,
        "decimals": 18,
        "base_reserve": 5513.991288592217,
        "initial_base_reserve": 6.9745582679578e-05,
        "owner_balance": 0,
        "deployer_balance": 0,
        "burn_balance": 1000,
        "lock_balance": 0,
        "top_holders": [
          {
            "address": "0x00d3b5bdfe3552d487a3e3ff4df0bd181ada6acd",
            "balance": 147723.12477625193
          },
          {
            "address": "0x043f0b8652b5fb62f5eb4f74eb924d58d75b2c84",
            "balance": 1209.157947475492
          },
          {
            "address": "0x06c0e77bc4b78d8741e75371915ae486e6d46b7f",
            "balance": 3.356464251237e-06
          },
          {
            "address": "0x0af43ccead219cca13af2150fb2953f730eb71a3",
            "balance": 3.30384e-13
          },
          {
            "address": "0x0e06c93636bce4713f2553ae03ec0a86c865eb63",
            "balance": 16.20939065740114
          },
          {
            "address": "0x0ed943ce24baebf257488771759f9bf482c39706",
            "balance": 535.1907076327361
          },
          {
            "address": "0x141e24e965556256213043a9bb6486d9480cf8c2",
            "balance": 138.20882190823
          },
          {
            "address": "0x14682b1e9d9c6be01af78415644e8deeec64e784",
            "balance": 112.09186319830016
          },
          {
            "address": "0x186522dc663d012f1ee67a55b65f811c697a3e19",
            "balance": 4.7888798e-11
          },
          {
            "address": "0x1d93253f99e83cfa187f7adeeceadd846f7eb934",
            "balance": 31.750861013614813
          },
          {
            "address": "0x27e8a15d00f75af291f3748da30c4c595e92d93e",
            "balance": 3.30481e-13
          },
          {
            "address": "0x2dc063115c05129097318dcb253137005983e75c",
            "balance": 3.30481e-13
          },
          {
            "address": "0x302785eb14fd27fda9fcc23bbcedce4fc864e691",
            "balance": 841.8359360467715
          },
          {
            "address": "0x38bdc9e835a4100d1b890fef025f6a32c0b3c8d4",
            "balance": 1085.2905209565683
          },
          {
            "address": "0x399fe60e2741f935737757f178a1b437c99a2c89",
            "balance": 93.42323053909374
          },
          {
            "address": "0x45c75f0ac34ddd41a43dcaa0e3f1d87f82701ead",
            "balance": 35726.06327139873
          },
          {
            "address": "0x4f35414b3e5204723e801c8d66befddcc8c25233",
            "balance": 22.386822448047546
          },
          {
            "address": "0x55ec61d6381d1b5706df49000f42844c8060ef50",
            "balance": 1045.902895137687
          },
          {
            "address": "0x5795b4f6f56fdccec642ebe0a5ecfa8977193581",
            "balance": 1.338449e-12
          },
          {
            "address": "0x6c37bee12c0a68af3a469884a1a0aa65c807aae0",
            "balance": 909.1618339426005
          },
          {
            "address": "0x6f738d61ba3c809ea16bd290f0e5f29b4f6b0f13",
            "balance": 199.4401186322308
          },
          {
            "address": "0x7fe3897eabf695986cac02964ee8d8129074975a",
            "balance": 1.217313573911e-06
          },
          {
            "address": "0x80f411ce130f219bdf3ee1d2a9478d67572ff3e3",
            "balance": 0.001163011280108676
          },
          {
            "address": "0x811343caa106f88111bf96295a68d5b092333b46",
            "balance": 105.33978346930192
          },
          {
            "address": "0x899336a949222fc6db412e751be8c926e81e3c83",
            "balance": 562.7934559469747
          },
          {
            "address": "0x96d140c9bacdc7e412a71388a22e465186cf6569",
            "balance": 58.89159639725901
          },
          {
            "address": "0x9b124145462081875a455883ae97afbf58d21dea",
            "balance": 147.13294423287675
          },
          {
            "address": "0x9b540552692a2272da8998e37392fd179c0f6d50",
            "balance": 31.453360339264673
          },
          {
            "address": "0x9e23d6512ad0795307c42a28c9f55ab5f1e01523",
            "balance": 3.30473e-13
          },
          {
            "address": "0xa7c3e73a085371e808e61255b91df96d92f4db3f",
            "balance": 3.30451e-13
          },
          {
            "address": "0xaf2c8a6052e087ceee6fbca6f53d261bd5f1147c",
            "balance": 48.581791086863944
          },
          {
            "address": "0xb17f2a58cfeb8635c6e1058a68fe23a644cf58f9",
            "balance": 283.9738483623115
          },
          {
            "address": "0xb1c5aa6bc8939445f3403baf8bed46700a02e21c",
            "balance": 21169.29889335001
          },
          {
            "address": "0xcc759ae4ec6117ed8372c48f5c94454e88eb6d58",
            "balance": 409.82145684923927
          },
          {
            "address": "0xce1666f263265d434876f53192d7e22e5bf8edc1",
            "balance": 2478.4425263264193
          },
          {
            "address": "0xe14a77c2ada1fdaf55490fcd149c60b51aa5379e",
            "balance": 542.1821575077638
          },
          {
            "address": "0xe42ec83497120a7927fed4e9f4a38d201d3408d6",
            "balance": 125.31067682245055
          },
          {
            "address": "0xf0373c4f27254e897ca913c2cfebd054e193ae81",
            "balance": 307.18471393531416
          },
          {
            "address": "0xf1a35243286cc9749072b5c024ae8ba14ad2efd6",
            "balance": 4.647551217889644
          },
          {
            "address": "0xfbefffc4de6ae09dee20c84452204809120355ad",
            "balance": 221.1650645136828
          },
          {
            "address": "0xffe34f77d5819a60f0ca20a53ac7b7ce1cf79891",
            "balance": 0.000170143834341796
          }
        ],
        "locks": []
      },
      {
        "address": "0x98fb6ecb49231b6ba5d953eb0114ee4ae5e322e3",
        "name": "PancakeSwap v2",
        "base_symbol": "USDC",
        "base_address": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        "total_supply": 292799498825647770000000,
        "decimals": 18,
        "base_reserve": 0.06138419758484915,
        "initial_base_reserve": 10,
        "owner_balance": 0,
        "deployer_balance": 0,
        "burn_balance": 1000,
        "lock_balance": 0,
        "top_holders": [
          {
            "address": "0x14d6253436dd94e132c85102e07d010717932000",
            "balance": 9.266642463e-09
          },
          {
            "address": "0xb1b9b4bbe8a92d535f5df2368e7fd2ecfb3a1950",
            "balance": 134019.5939942631
          },
          {
            "address": "0xcff8ef0855d05cffdccaf1709e81076e463802a1",
            "balance": 31.622776601683793
          },
          {
            "address": "0xf8febb7dfa5e005dd25c1827f78f59f83162aff5",
            "balance": 158748.2820547737
          }
        ],
        "locks": []
      },
      {
        "address": "0xa584a5805dde848cb200da49a2a58174ccfd1ba8",
        "name": "ApeSwap",
        "base_symbol": "BNB",
        "base_address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        "total_supply": 3441314941639582700,
        "decimals": 18,
        "base_reserve": 1.600579124e-09,
        "initial_base_reserve": 0.1,
        "owner_balance": 0,
        "deployer_balance": 0,
        "burn_balance": 1000,
        "lock_balance": 0,
        "top_holders": [
          {
            "address": "0x24b400ed57b608310cacef257cfc68393caf5301",
            "balance": 3.068212942e-09
          },
          {
            "address": "0x3a539e9ddd4295b373db074bc56ada0908380dcf",
            "balance": 1.604909538945734
          },
          {
            "address": "0x94bfe225859347f2b2dd7eb8cbf35b84b4e8df69",
            "balance": 0.47338764612572537
          },
          {
            "address": "0xd506ea7d5d741bc175f795fd153566cbc1bfae54",
            "balance": 6.141272348e-09
          },
          {
            "address": "0xdc34ea6c8ab549d196ba13e5e3d8561626b38440",
            "balance": 1.363017747358637
          }
        ],
        "locks": []
      },
      {
        "address": "0x79d8c85940518ae6186d369433239ea6dea9ae95",
        "name": "ApeSwap",
        "base_symbol": "BUSD",
        "base_address": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "total_supply": 14892692900579457000,
        "decimals": 18,
        "base_reserve": 1.0008637798655e-05,
        "initial_base_reserve": 10,
        "owner_balance": 0,
        "deployer_balance": 0,
        "burn_balance": 1000,
        "lock_balance": 0,
        "top_holders": [
          {
            "address": "0x30a2683829ac73da1bcc3db08cce1dc91656a9d9",
            "balance": 9.999999999999998
          },
          {
            "address": "0x94bfe225859347f2b2dd7eb8cbf35b84b4e8df69",
            "balance": 0.9722700345867364
          },
          {
            "address": "0xa118ae89eb2a7355851c7c8e114c11ece52e736a",
            "balance": 3.9204228659927205
          }
        ],
        "locks": []
      },
      {
        "address": "0x31326cb08d150a6ec4fefd868bea74532b72ffcb",
        "name": "ApeSwap",
        "base_symbol": "USDT",
        "base_address": "0x55d398326f99059ff775485246999027b3197955",
        "total_supply": 10644866856019116,
        "decimals": 18,
        "base_reserve": 0.000934552463055401,
        "initial_base_reserve": 0.010602987880062595,
        "owner_balance": 0,
        "deployer_balance": 0,
        "burn_balance": 1000,
        "lock_balance": 0,
        "top_holders": [
          {
            "address": "0x94bfe225859347f2b2dd7eb8cbf35b84b4e8df69",
            "balance": 0.010644866856018115
          }
        ],
        "locks": []
      }
    ]
  };