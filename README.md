# Init_React

## How to create file .env

- Step 1: create file .env in root folder
- Step 2: write variables env with syntax: VITE_NAME_VARIABLE
- Step 3: import env variable to file you want import env with syntax: const {VITE_NAME_VARIABLE} = import.meta.env

### In App use library UniversalCookies to save token and use library JWT_decode to decode token save in Cookies

```
Init_React
├─ .eslintignore
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 00
│  │  │  ├─ 0ebcf7eecaca57b79c35a7feb3e65ce076d8e1
│  │  │  └─ f7df5ccb319c63a69cb0c2addf5207f1a05cbc
│  │  ├─ 03
│  │  │  ├─ 8891d9e84356ce64b8a3d5c22e3066eee4625d
│  │  │  ├─ b5388f9b8c527256bc7f8a149ed634a341213b
│  │  │  └─ d99da57dfa0f0f93c49d41233cb0af3e59734b
│  │  ├─ 0a
│  │  │  ├─ 5da1029f938f3316258d807c37eecd67028638
│  │  │  └─ cf038e9bfbf8c1bc8bb28c54d1fc6dc5fc3ea3
│  │  ├─ 0d
│  │  │  └─ 85b30c082f03a6fd96a9ada304d2a61b823065
│  │  ├─ 0e
│  │  │  └─ baf12347d0b217d457d2bb501655ebaada952d
│  │  ├─ 0f
│  │  │  └─ b4732adb6294ec5320f212d6db17ee9ae83c8c
│  │  ├─ 10
│  │  │  └─ f8a904e331068232b5c264b236b4a255a492a9
│  │  ├─ 11
│  │  │  └─ f02fe2a0061d6e6e1f271b21da95423b448b32
│  │  ├─ 15
│  │  │  └─ d2630b4c72f9da42dec58e69216c120560efdf
│  │  ├─ 18
│  │  │  └─ 4b1cb15ab5583fdddddb3d0527b23265afb500
│  │  ├─ 1b
│  │  │  └─ c9707b4adef96ee686bbe3b4aed7ee480e60db
│  │  ├─ 1e
│  │  │  └─ a2ff9b5a45ea864ce52da928bcd789c5990cb2
│  │  ├─ 1f
│  │  │  └─ 2d82842a09aa2f911b8af45170e08b93d5fc09
│  │  ├─ 20
│  │  │  └─ 77840bbda43afec50d0f5951a3da4edd91e2b8
│  │  ├─ 22
│  │  │  └─ 56b1b1c8c4ee4af796b74f1d981b99dd044c3d
│  │  ├─ 24
│  │  │  └─ 19536342af932d3b82b9127d585fe245ac6760
│  │  ├─ 25
│  │  │  └─ 8d3b360bebe1cb7fc1c10449907b6395dcd8df
│  │  ├─ 26
│  │  │  └─ 05152c6a9ec27822b5b17d3a9e14aea2bb6c27
│  │  ├─ 27
│  │  │  └─ ab67598b435a63a7240818c6250ba67df04c74
│  │  ├─ 29
│  │  │  ├─ 1ba08df553d6a52640db38f7ca2c856b11e7c6
│  │  │  └─ b9d64da4dd59d260ec6cb0c04fe73e5824d69c
│  │  ├─ 2a
│  │  │  └─ fe72663c32c02fbcd275550bcad7ab6dc48317
│  │  ├─ 2c
│  │  │  └─ 5e2ef5cd1a2efbaa88c769e9054df92d05ecae
│  │  ├─ 2d
│  │  │  ├─ 3205e929950fad39932edf4a6f54a98282975f
│  │  │  └─ e9ebfcc70bb37844cb5a46a786b5d3e781d1c8
│  │  ├─ 32
│  │  │  ├─ 2beb7da4902f6bed8382f2c3ea2dae2c8c745e
│  │  │  └─ ac2246bbbd49bf2118d874f1900814ac8da79f
│  │  ├─ 38
│  │  │  └─ e4d3a625ca265e5a6afa5bad0a02cda8b6a4da
│  │  ├─ 3b
│  │  │  └─ d9b0c5fd99e87708bc3cf7be63b8fa0fa8b63a
│  │  ├─ 3d
│  │  │  └─ 0a51a86e202419758206adb6effe775229ba38
│  │  ├─ 3f
│  │  │  └─ 503cb0c27f3512e0010069d73f1bc5d8a725f1
│  │  ├─ 41
│  │  │  ├─ 50b0fe20f664a3c39f3d414bb9d4191be16795
│  │  │  └─ a5ca0d29066540249d66b6497b968fd206b5cf
│  │  ├─ 43
│  │  │  └─ 089d45db5be5a236eeeea1659c0d0580df7af5
│  │  ├─ 45
│  │  │  ├─ 1717941362dc868db611c91fb757c8061dde48
│  │  │  └─ 7b4fde63f7716c066e4efe94fdd1d8e8734d51
│  │  ├─ 46
│  │  │  └─ 2e7c535d9dd73294562a08aa39f7efe0353d04
│  │  ├─ 47
│  │  │  └─ 608db0f79d16067f51c5e2a1f944860c8e6aa9
│  │  ├─ 4a
│  │  │  └─ a364ddebe040eff3b51bdfff9b006c98156e36
│  │  ├─ 4f
│  │  │  └─ 7cc4c9d9d56236e815504f8db75734e12914be
│  │  ├─ 54
│  │  │  └─ fb722aeba1f9bd9b9c50c3ad03470849a8814d
│  │  ├─ 55
│  │  │  ├─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  │  └─ d1272decaa8cae68cc17409bfd731fdc24aae6
│  │  ├─ 59
│  │  │  └─ 2572be4a155e246a94f998cab239fd51af1ad5
│  │  ├─ 5c
│  │  │  └─ 167344aea74355ac0325c822820b096c14463e
│  │  ├─ 5d
│  │  │  └─ 431da0fabad2d770c31a24a6cfa44e48282a6f
│  │  ├─ 5e
│  │  │  └─ 9edb1d5b0324e0e98336f46964770380d56b61
│  │  ├─ 61
│  │  │  └─ 39046eabc8ad7bf21cd922c1dceca6bcb2206a
│  │  ├─ 62
│  │  │  ├─ 0f6e9bc96a6ee73b6086a7bb5ed6b39c307de3
│  │  │  └─ 111b4a83f3029cd13e034b577a6103ab5495c0
│  │  ├─ 63
│  │  │  └─ 6dade66e81ccbc1a9b87218a8cb6f2050feb55
│  │  ├─ 64
│  │  │  └─ a152ba2e98b71a1f7dca9a5bc6f3a0b965adba
│  │  ├─ 6b
│  │  │  └─ b2e1dc1cc7253153b3c6fcd2b9500b3b886aa1
│  │  ├─ 6c
│  │  │  ├─ 2720e7c0be9f9d042d73eb88ea16c4c2331102
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  ├─ 6d
│  │  │  └─ 7efccd54c0ce8df75da4debf3dfdad92acc3b7
│  │  ├─ 6f
│  │  │  └─ 660a3a188e288afebc894d92a4bc10752b617e
│  │  ├─ 71
│  │  │  ├─ 05c6b8af57b6fa729d5e57b1c6f75ebb2e3aed
│  │  │  └─ 30d997ad12f40db8c67f2cec8bdcf4392ec299
│  │  ├─ 77
│  │  │  ├─ d7264360d438611f772075bde232376160ee68
│  │  │  └─ eb595574b2a2cd58aed65b0d24c1acb94afb8b
│  │  ├─ 79
│  │  │  └─ 1f139e242c70933e036ead54c9c25de43caf82
│  │  ├─ 7c
│  │  │  ├─ 95ff893a7d94fe09347db24ebb4119769fb284
│  │  │  └─ eb59f89a14551ad717dd1c9b2492359ba58ef2
│  │  ├─ 7e
│  │  │  ├─ 2dfeadc789e048a64f0444be64495a1329de6e
│  │  │  └─ b77d6f644727bde144c08f12cff46e2608baf0
│  │  ├─ 7f
│  │  │  ├─ 783dbea3f580a40e10654df539bf3ef1eeef09
│  │  │  └─ a8545f80f6120e1ce74a85f7ad0dc88fd6317b
│  │  ├─ 82
│  │  │  ├─ 3b4f2ec176c102262ab4acf67d9ffb5cbd144e
│  │  │  └─ 8a02cb643f2662d999ae51de9865060fcad0f4
│  │  ├─ 83
│  │  │  └─ 586ba13dd1728b7bd422c4cd4f36d8cafbbd64
│  │  ├─ 85
│  │  │  └─ b94962bbc9cdd13e462735d7407f85bb15a695
│  │  ├─ 87
│  │  │  └─ 68ccf147a04be9c33f3c26098d63c7cf79f0e3
│  │  ├─ 89
│  │  │  └─ 8dec48d00ba9689ebd515489b171622b07c18c
│  │  ├─ 91
│  │  │  ├─ 7888c1d1115a5bb9c12bad4b6f11f7def422be
│  │  │  └─ eddebb0f9e060d3d2dd7a499737aebd7ff8ad8
│  │  ├─ 93
│  │  │  └─ e556a9489b7ff3027b694e987ab1231607da1a
│  │  ├─ 94
│  │  │  └─ c0b2fc152a086447a04f62793957235d2475be
│  │  ├─ 99
│  │  │  └─ 25693723b764825a8dd96a8ff0bb08986b1c39
│  │  ├─ 9b
│  │  │  └─ 1d39f6c7779be60af015c66330f7f3a0d429ed
│  │  ├─ 9d
│  │  │  ├─ 31e2aed93c876bc048cf2f863cb2a847c901e8
│  │  │  └─ a3715b7a55d8ddd627742cfb65f2bbff435b60
│  │  ├─ a3
│  │  │  └─ 77f4439ac71e6fea9eaac0cb1924d968ea2767
│  │  ├─ a4
│  │  │  ├─ 5967395281fa7b71110eb9c0970693b86df71e
│  │  │  └─ 9adacdd40715557a3254d7998398f2d5e8c767
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a6
│  │  │  └─ 0284b0ff7acb7511290768b1740203b66a0178
│  │  ├─ ae
│  │  │  └─ aad87d16832e367b958e3b745338ad80a5de5d
│  │  ├─ b9
│  │  │  └─ 85d9d33b72fc4ab91142221726c7ebcbfb071f
│  │  ├─ ba
│  │  │  └─ 337b4f927fda52b9b7b8969bb636fdacc14789
│  │  ├─ be
│  │  │  ├─ 878871abb7688f43e46781e2865892b022170f
│  │  │  └─ d9748d0de90d081e6014a7e642115b86150cf7
│  │  ├─ c0
│  │  │  ├─ 937235b9565f1b698119c976b3cef08c968d31
│  │  │  └─ a7e7a8959d3ac8916cbbc7bd991e542824b975
│  │  ├─ c3
│  │  │  └─ f8a379c48cafe0b214a0779fa440b5ec35d0f1
│  │  ├─ c6
│  │  │  └─ 9d841e005017ffa8c2a0131411e393ce6c8adc
│  │  ├─ c9
│  │  │  └─ 350eb6f59b402cf5f9f6090f4fe8b104dc1b56
│  │  ├─ ca
│  │  │  └─ 1213563dc7cc5e525caba7fac9c0b682ce2b9d
│  │  ├─ cb
│  │  │  └─ ea0dec1cc91485726fbf1da0f536278ef4b23e
│  │  ├─ cd
│  │  │  └─ 201360b421e45382b24fb2b724d94052df017c
│  │  ├─ d1
│  │  │  ├─ 130ad334cf89984dd863108b53c40318ada30c
│  │  │  ├─ 8ddb7a04683bfb69056af992f62b2ab7482e8f
│  │  │  └─ df5be1058c0a61ca9efd42ae644afe86700460
│  │  ├─ d2
│  │  │  ├─ 3bb674481ecf41320254c019049bcdf66953bb
│  │  │  └─ eaea9a1ed1d3d56bfcf94945bd8cc96c8817f0
│  │  ├─ d4
│  │  │  └─ b05a4b3456d5b9654f64d3378d224d8c13df92
│  │  ├─ d6
│  │  │  └─ 24161db79b1b13c35ec197f2449f60687a1984
│  │  ├─ de
│  │  │  └─ 4f68ee596cc4d7af105abd74a69894a589ce5a
│  │  ├─ e0
│  │  │  └─ d1c840806ee7f517c3d9774be4bcf9c4e889db
│  │  ├─ e1
│  │  │  └─ 57b09094a397fe80cd9a457916085449bc14ec
│  │  ├─ e4
│  │  │  └─ 75e66dcc19a882bad771a5ad59b4dbce82e1de
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e7
│  │  │  ├─ 15cd9fa2a5167faad693aaa486020b7d6d824f
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ ea
│  │  │  └─ dcffa2a1da5a7b5e38de9d830b9a2764b40820
│  │  ├─ ec
│  │  │  └─ 9fe85704816d1075f8425e4eda39cc3b48a19a
│  │  ├─ ed
│  │  │  └─ 23bd217f78c29c457e11fe4dffcda0e06e288b
│  │  ├─ f1
│  │  │  ├─ 8917d7ec7f6e309ac7faeabdaf5dd194aeec9f
│  │  │  └─ a0764ac6f86610f008e5e856ae3466ee4adeb1
│  │  ├─ f2
│  │  │  └─ 0d45dc78ebddc17d113bfd7d159ba46f7cd7cc
│  │  ├─ f4
│  │  │  └─ 5a09d7d9a84a385a20ec8cbf8f21a3cd893c46
│  │  ├─ f5
│  │  │  ├─ 42610b4159d2b9a4196ea8be76ee89d844d42b
│  │  │  └─ 6fc4f2a8d9395e5da9234d64dbd68503f854b5
│  │  ├─ f6
│  │  │  └─ 79436e8815a0dd56080185bbb41842d3a8a543
│  │  ├─ f8
│  │  │  └─ dc9d3fe266cadc15de409b3e6a40e403f0ee2a
│  │  ├─ fb
│  │  │  └─ 92930d114fc57af9b0575c0da2b85cec77576e
│  │  ├─ fe
│  │  │  ├─ 51564bedba0f7af7f8e628ca017ab5da7a2090
│  │  │  └─ c531a6467739481a62089413814b6117e72177
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-4ae4317d971c9f10ff1a95d85b04bc6f6c26125a.idx
│  │     └─ pack-4ae4317d971c9f10ff1a95d85b04bc6f6c26125a.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ .prettierrc.json
├─ .stylelintrc.json
├─ index.html
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ api
│  │  ├─ axiosClient.ts
│  │  ├─ demoAPI.ts
│  │  └─ tokenAPI.ts
│  ├─ app
│  │  ├─ hooks.ts
│  │  ├─ middleware
│  │  │  └─ demoMiddleware.ts
│  │  ├─ reducers
│  │  ├─ slices
│  │  │  └─ demoSlice.ts
│  │  ├─ store.ts
│  │  └─ thunks
│  │     └─ demoThunk.ts
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  └─ reduxDemo
│  │     └─ index.tsx
│  └─ types
│     ├─ api
│     │  └─ response.d.ts
│     └─ redux
│        └─ demoSlice.d.ts
├─ tsconfig.eslint.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ yarn.lock

```