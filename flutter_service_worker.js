'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "82c08bd8bf83314d4e094773117f7a6b",
".git/config": "c47829cd618e8d42c6ab4c635a19cb64",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "95e481dacc25c462959e9e10af797b4d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7423233ad64fe0be33c85d9b8ea29e0a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e734b9af4939b66eafedfc8241f43c4f",
".git/logs/refs/heads/main": "6385a3fea5b79a3e8ce17e6b7f069e20",
".git/logs/refs/remotes/origin/HEAD": "f327c75acb63f5caad986226105f8e31",
".git/logs/refs/remotes/origin/main": "d546f0d1e003848d6acd876dc36876b5",
".git/objects/01/5c9e5157d129753dae92197d67a2f0faaa8565": "9f1fd17b8d3186b3c049496d9af1713f",
".git/objects/04/3bd53f0719a9294e4e7d98d919d9b63a58928d": "b869ef20be6deb37bf60796aa760eb53",
".git/objects/04/df67fd63ba9d16caa957fe833458b29b93245d": "261fb37d60e7775ecda6ef9038762909",
".git/objects/05/ac93123141d6025e87bd337c4abde01cb14f9b": "a29bd418716bc76d72f635224fc0edbd",
".git/objects/06/8ca6f9fe2c66e4bc99dbff0f06d4c4fff6b74d": "750115e02aed0e820da4b1352f2776d7",
".git/objects/07/6ba369be9b20ef8cf31bceb2bb19b3afec0a15": "a715598871927e37e9fcdd28e8a68b99",
".git/objects/08/05a9c5fa54d71f87f2da9947efb0f00c5c93bf": "d1433b051b169322ca9099cc38908e32",
".git/objects/08/8d5c453bf5c2e3fba04dca5af177cd0800411a": "d1bb023490dd711bb08140cd882cac7d",
".git/objects/09/e4061d0717c061999e36f586465009e00bb8cb": "b98a2076151c0726e5242b8259880383",
".git/objects/09/e552d3a60a6b1b26d1aff59cb02623d9c93df8": "ac57ca8f28015a134ec3542d173ac4f3",
".git/objects/0a/0ea3202c40e7b2dee6137bb09fb3e8954963a9": "c8fd2bbf009710f4c37afd9e8f490395",
".git/objects/0a/be39db019539d38976b421874ff2aea5589370": "524ffa3816e42948b7ae6e0eadb8f5ce",
".git/objects/0e/57b0840ff7a68af3f03acb1f3a5789ca1d8dd5": "06387a4abc8af05d533f9761fb156b09",
".git/objects/0f/4787dc1048df36c41693f3ca1c437fda325450": "41198a2f41b8c26e3734e715eac80a64",
".git/objects/0f/ccc2a015fee5790d8fd9d483125dba9115c30d": "a33b7f8564b30ac2f7f8e783da1541fc",
".git/objects/10/53cf0e82bafa9bba7c684dd2e201bb2ff17bb4": "bbc70d35aa06ac376120246696a8b11c",
".git/objects/11/2f20e4003301e7b156f3a7a556a48e31f8cb1d": "dfbd46cf433312c0df591849af7ee515",
".git/objects/12/7938a55d30aad415956dff122dfdb09adb69d9": "261d699a6430a48847fbaa94b5201efb",
".git/objects/12/993115c66c119b3a133aa8d9913cbc2d9afa99": "3a5cc5b1b23f484fa370bb222f688e93",
".git/objects/13/575d4d95721527836cbbd1f4cd41106ad6fb30": "2d1254a0463e4aff466f14f2a44e121e",
".git/objects/13/9f77e62183c29aceaee8fed20b006b6f1df723": "4e6b3596f1c0b000205b6eda03bb79e1",
".git/objects/13/b14852acc3249a71349effd1e539460d97bd3c": "2908e1545b8470946877a357e131e810",
".git/objects/14/1b219e0738e486a4d67f8608e208545d6ca731": "fb8dccd5ccd420bfe49ee777d2f004d0",
".git/objects/15/d4f104b34742975170c582f308aee54e15a508": "53f4382c63afa11770422002ac2427c2",
".git/objects/15/e6d82ded719f27a16595fc59b504c7da124c10": "d1a2897e495b1ce74196379fa5ed4e92",
".git/objects/17/22da788d1e28f0c02b1ecd17e3b156499a16a1": "539a948532a49e5e6a4cea344aa4dc59",
".git/objects/18/14e2913bfb9fe84d2dced42b8d4a0cece554c3": "430e2dc9437e1e5c74a00d58d3d0097f",
".git/objects/18/52b9d4b1b00ddbb0fc10ff7bd2abfc30072032": "20e2083349bc8343f2595070a27fe419",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1a/f7c390d027c8d6858017cea4d9866349513de7": "ebab814216f00bb7bbe87e4dc28931cd",
".git/objects/1a/ffc301f2e6d4e66b98dac33a5da9bf31883125": "a3f07abe78123ba900ab4e4f1edcb023",
".git/objects/1d/a6e084e34fa7a73d46f1cc821f0a03858e2fde": "ec001b42f4b1a29ca27d8f5810d20613",
".git/objects/1d/dd21c5c03d1330468477794292a4e90a0420c1": "86cfc9384f2661125a007c10e714ee45",
".git/objects/1d/ead10b6ac682629a1912f57019cece62b29cb1": "b30ec52dd67856d72c3b774c6fec60a8",
".git/objects/1e/57c806cf424aa5632adae1acb12462a035d496": "1db517c60656cf179035aecee63a3795",
".git/objects/1e/9a365add9d47b3b1eb82ea1c3cb02465e625f4": "568258e40fefeaed46e54ec280c3546e",
".git/objects/1f/6ee63028bfbc31b2077fccbd0c968e20540698": "72d940f8282d43633d0303a1bc4153d2",
".git/objects/1f/a31f7de76782bce7d1bbbcc94d7da77905e24c": "87520b01f4c0ee4595a246198ff0ba67",
".git/objects/20/5ce011e243a6d0bd5283e62d4c91f0f80bac22": "3e7a09959af4719a7ad5610c5d534d56",
".git/objects/20/81a1a8ea14ab4bd5d0eb3766df21fbb8394ac6": "3e57ed477d9afe1cc8c1640951df8718",
".git/objects/22/c3a32243003c7ee4d10124341deb8f1bae0f8e": "9b55b82a7b7acd1968a3723d1a198d49",
".git/objects/22/cc27b1c5da18f30a05a8c1fe6ec1525cd66881": "e842feabe54a54c46bb6deb090daa056",
".git/objects/23/568d1db23083e39c94f0f60b43791671d14f80": "6aa3c1608c56289a9d19150204901323",
".git/objects/25/199b51a8efd3331056ab10d414855f360c44a4": "027f186f3599319e71bce07346b1a250",
".git/objects/25/f63a641aab66d0b4a7fdc83d4348a2cf8e9f30": "b6e1fd3f8abb7dd119fdbd05df2b1789",
".git/objects/26/47dc417586bb69793859b62b9477765bb14020": "56aedf4debd179991ba15e0cb57c6edf",
".git/objects/27/40010becbc094b421b8f4def1d4b3b3a3c7350": "b7a57f62aa57304dc27d67928a297065",
".git/objects/27/8e45017c614f5e4a7fc35a981c9c20ba6a331e": "03f67cad0f4e1b3cc720de8baf06bb4c",
".git/objects/27/ebe05d52e92685ec05de31f11cea65f297e929": "830b8b67368d3fa00244cf07293f0ec4",
".git/objects/2a/16ee16890da31b3cd3fe6733e61b2547323fff": "04318fa459750c2f6f2aeb79d471a19f",
".git/objects/2c/f29e0aababbb26030f942b88bea5b5e310295c": "3696c1d907611f0f199cb028536d7765",
".git/objects/2d/227f15744a4b409508b9ac4db09c8bb31a0ef6": "9128aa84f55173ac534e454550d110be",
".git/objects/2d/c910c94ace5f4f3c8f7d1f76f28371273840ed": "030c589173d7fd52f29e7c0e71d65692",
".git/objects/2f/43e14672b07b26dcded9127eadf793e0059df8": "dd9ccf7445b887972543270d2642bcf6",
".git/objects/2f/d3a39ad68266a0f1478d01950a268e1da67495": "c411efd61c402414b11b0dc7fb283545",
".git/objects/31/69e6b83228dbebcdcf385da621e968833629b2": "58efc20b50f788d6e416391f625b88ca",
".git/objects/32/994ba6526c82e7d87b6008b07aef19812d3796": "0eb5ac2691417b3b49525d8ce7faea90",
".git/objects/33/863a98d0b146367cafb14e915ed5a38189eeba": "79ccce7b82b519b6727ae6e8021da0c4",
".git/objects/35/d9a25a1929de9ce3b31be2176591edc883f5e7": "bafbbdc63b8402e19839dbb7ae72cfb6",
".git/objects/37/9d52335fd795edc497761fc1596437bb96d03e": "85bc1efbbc54e04787bc9779b8dda58c",
".git/objects/38/61c437e43dc3262c7871088a856768c55d16e1": "7dada270b13faefa968899cdcd1f6239",
".git/objects/39/19b9447be746a884a4de397cf24007e3bff076": "f8e845b4b459657a6b54309e0490c891",
".git/objects/39/4956c1d929a0ecba901e2f619f983a4b98c585": "d06deccf08ac67cb73d0b3809857db82",
".git/objects/39/54dd455ec2d849129932970662def206777121": "82f3c15c2d60ba74dcf7d5c1c6352f7c",
".git/objects/3a/21d10829da5e0365dab108c3bc268c556302d3": "cc4656f216b0feb15fab2386b4037a20",
".git/objects/3a/4af24df9722d8c94fc00f09647243d2613f24f": "cfd8442fbf4b6e1b5baf8bf8435154ea",
".git/objects/3c/37d922e060c33ee951cf6f2d4547a8a548c016": "369da7e6c2051dc9adc0ae090c8c4b35",
".git/objects/3c/6c803b067bc06207c485d2794a566e598f624c": "d640583b84f132c0511dee3cf28fa513",
".git/objects/3f/077265d2f9c07be971c5a7c41bb5f1eec4fac9": "9fdc38fce89a74e2e1530bb281a17d61",
".git/objects/3f/76d7e7726186255b9186f4e2a08b2ca0e9ddec": "c1f8e0f15b0c0c89ad78b8075199bdc1",
".git/objects/40/7127688c1b58a4de8ca337ed526d8918865f09": "79fce26157059ad51695ff8711957200",
".git/objects/41/22250bb2442f2f7c0cb7fdcfaec14c087363fe": "53230399bcd1f612a72fe926603c832d",
".git/objects/42/db45ac1c111c53bfe43b49de2e3d6c9dd47576": "bd3e4f1f2e515aedc3434d12a54b1d72",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/34ba0f6251de0ab216c44210fd76a8050df185": "a7d6aae84a3e9934474a1278ecc7e4f9",
".git/objects/49/d75008621edbae9bfe1fe680ae9de86bce7779": "1e03ff8c540d22fb4495f7fa6226ed8a",
".git/objects/4a/bed4ecda81ee9835d56782a0e5c0dd3168b74b": "e7676597ea36d47a7beb10101a59eb6e",
".git/objects/4b/7f315a4d799bf6d7a01d23fab701ee29c6f6c7": "2b0b0414d9549b82aae93b68a3f1f3f8",
".git/objects/4b/de02213af551810d2c801b09cbb80c473c654f": "c5cbffc9ac26ebdb28674da98a5f99b8",
".git/objects/4b/f05c03e2fa8e1d0aadd5a893cb95dcd56a4e67": "244b0a33d70a3133d37a386302851f85",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/c32ca73ae8351b5e5ed88ec2b4b64a46adace3": "00387df8848479db0494006627648145",
".git/objects/4d/f45b22e933110db3ed211aad7c4acbc8f0688d": "54d3150674ea7260ad95f07857f18dfa",
".git/objects/4e/b1437706c3e6596d1e265dacb2187cc2e27c94": "71069ce931a07c6e7a512e27e65faec6",
".git/objects/4f/0792e708daa1fa1ce711833fa752114e10b7a2": "4bd26d9b2836b7f0e9dd108a090d2238",
".git/objects/4f/8e43eab034be449cc23214bde4cd5482aa5aa5": "754d48632defa06698333bd19a001ea9",
".git/objects/4f/b19cb9ed35613d84befd95dfa59d3ce2a00886": "0547db33aa9118cdcbf90a7b28a87367",
".git/objects/4f/bca8317d16087a8da206555d2f5aff567ae109": "8854b5ac03d57ecd34b472d81743f961",
".git/objects/50/62d556892f679b5f775f91f07dfacdb0495ee8": "ac441ee8f7e272cc557443f5ecd1d27c",
".git/objects/50/79ffa9bbb119bba75a69b04bb9faa9f8a17a92": "ef704e28ccdc0aec78b312b3b68bf552",
".git/objects/50/e08d034533bb07a7827ab449516b5fdf11cb19": "2bcf5837754e70fe350399d0ad4b0c24",
".git/objects/52/00cd979b7d696ed6f93001ad9d4098957f45fb": "8ebc6ba503256df6f4ce2bd58fc5892f",
".git/objects/52/ac337aa76497f263bae21b131e510d48251761": "2e1041e764b0ad0f8facb9cba4c884f4",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/3cdcd09c2719e74bc6c378d553aff58195903e": "0c048e2df7649c57452d61d0d1075042",
".git/objects/54/4900cd7f9c7bbdb58261f52be339af17c09e1e": "6e4a6b078be3d17d1691e951a5a2add3",
".git/objects/54/d0f24574bebaf3338eb80ea78fcaf056bec60c": "947d91ae8cd63f9b496f57a5a52f1aad",
".git/objects/55/846ca01015b9f35a24d87a0421ab3af1a1f59d": "85e3a56e83e926a822838660d2076f0a",
".git/objects/55/cbb311a9e6e05414d7b98e59ff96b28f72e9ff": "54fd569e3b89660ac07917e2fa7f5273",
".git/objects/56/453af4965b7d77c2811d453c9965b69495b8c1": "785e25a4611731a7cff64a6e07608914",
".git/objects/57/b09547260c6c0a2e10044892f6f19c6d70c3a3": "738a4e33083c9c76387cb8025b9b4fea",
".git/objects/59/03c3bfd15fa12c52d6a03aff87eb208a1cfa01": "794395fc021399fff9aff97898c96036",
".git/objects/59/343c1235cbc2bc6aab167a10f42fe016991441": "188b1b2f1a196e548a4ba2859591cb34",
".git/objects/5d/5336a9a1f605c1678c30276aff862ab8aeda4e": "d0abd3aed9dcb760e56302d0a921a3c8",
".git/objects/5e/28b39406e5a63a0188d382727d8dd82c0e0acd": "fe46ebb28a7b755d1c5d1e254d75fe85",
".git/objects/5e/c1d25f4e5d34e374a08d5dfcc7aaa98b8ab411": "8430af0081da1a82a3c5ce17d09ff960",
".git/objects/61/89a5c6755b4e7d1c61c1e1adde6dd6962c950d": "5745de31ec21c91bc585e7548c819cbb",
".git/objects/64/c4ede167608fe3b05cf395658407465a9c354f": "f5640e4defbc9cb1fa93c84be18e40d0",
".git/objects/65/201fbcc873c16f8c1e956e7fdac05960a93a71": "38d7c6ad8b5ba55c95f2dab088ee77b0",
".git/objects/67/bf8f5c11b852cb0d7279de5372b731635755fe": "6ea47fbbc650fdd3651af674b172bd69",
".git/objects/6a/391820b59eece58bdb856a95c0638649562c37": "5cc5e13df9f3652b4259326b6aa23746",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/f72e33c5a8575028280aeb5123ed3be3263d2b": "c1ff3ed863f721d5677cc1f83ea04444",
".git/objects/6c/45437f3c6db864f710bb6184c831fdc75c691b": "6b0f79e5ff883d70223be42c09f8bdcb",
".git/objects/6c/ad498ce82a2965b68aef3040b385d0a48b93ea": "67ec42cf36ddcf100999c59cfddf0207",
".git/objects/6c/fbb0c37d8f3ce2256e9e5ee28756573a1fe4e6": "cba0eba907b7dbcc90c44e72023a9388",
".git/objects/6e/9b10b590ba2c9809c2e97b3a1a8b2e43c5b364": "77711aec1e4b6751f1ef399302a8431b",
".git/objects/6e/c22e35a052cb9a109cdee9caa5567665a975cf": "5901dba68c51628cdcbb5b6b0e5cd177",
".git/objects/6f/e55e9085a3e1ccedecaf41071265ec518fd2dc": "75241973f0fa882e4245976dc832c2a0",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/41c91d433dff7f9a4d93489e242566b2b4dd04": "78690b880cd36ba2c77fb4a9898249f8",
".git/objects/72/37984e03fef84aed8232fc46581dfaa5cc20c7": "0fd25292338dc0f768a3765970985694",
".git/objects/72/aa700a2b496efed586789ed6c473ecc0215593": "af81bfa7a80fe776745e11acc9c71a92",
".git/objects/73/3f16f66bdc70c6d0b232e1cf1dd566d6c02084": "781098c20f133e67338d710e70f935d7",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/a88e1d3e6486db26ae02317760f710aea502df": "12706a517b158e733338769143c4a8b2",
".git/objects/75/535f6d138b51a0421a8f601e341951159a0c10": "7467871da5a9da0e0a07e621270a97a9",
".git/objects/78/22ad2b84c5a6771da950181f32c5ded28f2cf1": "b86a98ad5b63f19fc9d3d4279a052477",
".git/objects/78/8c497354684f23216367f4f5c61ceda3cfdb65": "2013c9888a6d9a6ffa9b4da97a261ede",
".git/objects/78/c8f1b9da9714ffcf0717d108876997bf995cc3": "0b46367015eff9947fe72953ac4d8b2a",
".git/objects/79/47c0ddcb1a7f2d447c0ee1a9ac957e68016ca3": "c2e9fde9f8bff33ce7b60a46feae5a65",
".git/objects/79/798c9cc1b6f2a382bf87eb53442db341aa43a0": "7783230b0f0dcefb240b9b1503dfe09a",
".git/objects/7b/352ba01d2bd597bef262e94468b7618df53ea8": "2dee15e03048d3e4eae4e920590bd8b8",
".git/objects/7b/573a29ccb4ff3075bbc04d1ce90a4edd2d1c85": "59ee7afaabc8d5d951565bdcc21b8e8d",
".git/objects/7c/c45331dfbbc25fdaf0f706bb733e22bafa99d7": "ecdfef0bee2d9ad7c2d82f819144339f",
".git/objects/7d/7439afa5d3c37b9b1c1fb6fc6a5b2e038fd062": "d0939a10d0af35b95446fe5d5040ed2b",
".git/objects/7f/46a883cbd4a868e346f0aaa160160c012fb298": "c343fea7206b8112859b0da7a1ec9466",
".git/objects/80/639b48d97f5f56aae3c25429feb4270f066f5f": "d67cae215e1d33657fbb98fdc91ff0b3",
".git/objects/81/fb7e9e3f51d7e43448c1880c90d143c323a854": "897d951cf45deb6561c88793b6965ada",
".git/objects/83/3e4761f782b4b6c441b03fcc0caf9e4f13f931": "41232624fdb76feb6d7944dfab406357",
".git/objects/83/6411d25917a5a3dbe65609eb6a40556ce04b86": "fdb83ba3d38f93b5828321e39f127fd1",
".git/objects/83/711d26beefba3f8a38b0ae3746e373c00483fa": "5b1aed60d0de3718a281cb065d03f10a",
".git/objects/84/1e2917c131c50687f8ba520ff8f88a02dfd3c3": "1bf57769a7dc711fccbd79b02f51c611",
".git/objects/87/246940916746078ea4a0252bea7989f6fadfd0": "85088b78366503634723cfe75b4ee029",
".git/objects/87/9a57b670a83483464e00326af3402d87494103": "dfd661cc32cc2649cb3a23a74783c7b2",
".git/objects/88/52fef407ba8f49e0afd8b9e2366c0808b98803": "182547757911b51b0227b282f2a576ab",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/d00079649145257a2933422afcd6d6bdb591e0": "c172a07308d8d914502bb1a7a1e597a0",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/0720bdf091b2a849c6e06907fde71a3fddb06e": "80d0ec9adb5e813f34505122b780ef2a",
".git/objects/91/3efc0f8cec2c652b09bcb10abd166036f8b3af": "44be667bb7907b0304448783bcdf848c",
".git/objects/91/d3f7f0dfa5dc5b63b8cd01e4fe357879470b22": "82112b15f8e57688c5b3ea6007be60aa",
".git/objects/92/a593a6f365526420e621eda1c2eecebb4896fd": "11defa99e9c7ec682562b0efcd688a8c",
".git/objects/94/031a19af9fc6c74bcf200b6eb2b8fe83f55e8f": "40391498cdc68f662a3e669c90855941",
".git/objects/95/6e4c913657c5b180ed96173061754352985e9b": "9544a83e543990313b860ab051cf86ac",
".git/objects/98/2922539872fe12187bff5de1d8d1d7bfd5394b": "8c5ac06a9c010417b3d8749fa58545ec",
".git/objects/98/fb9dd9741f2c31c6669d4ce1bd899bf23dbed1": "2a51b07404b94569e1961f9dd88e4b9d",
".git/objects/99/0c28bc633eb607c55ac7596b29f1b90db5f6e4": "642a24a6167851c438e06565cb135972",
".git/objects/99/1df5c46fd576a36bdd8bc99dc504a05eeb8b99": "4e48d003095e9dc7ba20b30d08d70c9b",
".git/objects/99/2aaaf4d648947f5cb24736d241cbdc8c8aaff5": "7046479d124069ab396076dca02315e2",
".git/objects/99/7dc50c983267575386d6b2420ed9aa34977374": "1eb95e43c0ca56c1d560e8224badfc2f",
".git/objects/9b/0481cab1976cef172f66e76fdac96ada8c8e3a": "957672426c3ee4b6744a8d5c3125ecbb",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/a5e1e29930814e645d3fef5d97b8ff018823ea": "63d58f866430365aac1fdaf77f0d20b8",
".git/objects/9f/0ef57fbd3ec37e9c003ffe891e729da1fa58bc": "8dcba6697efd95cd58d4338b3fc307e7",
".git/objects/9f/f7cbbafee629130bd292a810bd7d977925bcc1": "742a85bb34ca8c4c479b246e623beaae",
".git/objects/a0/206d747667cc8b4e545e1a27ca52279f2e4d2c": "1a6c1be3e5308eaf26153179f242b631",
".git/objects/a2/3987a4bdbfeb2e1a0d01cc89fc9f2fbb3ac9d9": "a62d41a205be8ff23bab5729014976d2",
".git/objects/a3/13075dc6e3419a2d93a489e7fcc36a94707077": "34a1b90cc00afdb0a2a5844fd58d8538",
".git/objects/a3/5b154fbdea89bea8e8cda182fb0cbbf16a1d61": "d9839a44c586ff9c695e56a4dd7884fe",
".git/objects/a3/8e6f716e1139216416ae412bd1351a4fc68245": "0f609f7c8d00e06de9fd4de825340513",
".git/objects/a3/d1916239948ce4f0255c7cc4219875427064aa": "47482f4733dbdae3cf21db627657b62a",
".git/objects/a7/5d11fd2adbf4a7add4058ddd89a7dc9e22a7bf": "c796e717e8a7313f051d5b5ce9e37316",
".git/objects/a8/fcd7ded500c032c17077999a38c9ca7ad636d8": "14dcf51366104924182c3499398919c0",
".git/objects/a9/3b0138a1f59bca9ab866b216b54efd4b0600e5": "5b4bbc83dcdde206eda57be6ecfd1524",
".git/objects/a9/b85dda6a8e11a655d1e4e9ab860baa9699a8c7": "399e1805c188c57be27fb2215390e99f",
".git/objects/aa/90448ad2ad9c8975c2352bb6981862a778ae64": "723b61d0af5a1e76c0e97823a8928ca5",
".git/objects/ad/1731de011288e83bc2cd207dedc1620b7086cc": "50aead33d9c64c89607faed496922e0c",
".git/objects/ad/682611c6a0dc3f2b534cb4d0dc860d68e46eb8": "694074cd7396e8f6e9ae9f6bb578c330",
".git/objects/ae/06fa4c0f664453e8aa85c36663b14cb9786fe3": "ec0a01c8cea02562b3cafcaee2f9b7bc",
".git/objects/ae/2e4be639ade13d53b92afa17bb03b42b899069": "72634b1b803ea62c9d3836ef63c1c873",
".git/objects/ae/eb7cb2674b9186031ba7a7cd222a9e0ebd2135": "fb787252b0931fd879f0fa77ee626f54",
".git/objects/ae/f00a454504b497a953d27b012dc82018d44b03": "d20a07b78ab14129c6aff4be470fa03f",
".git/objects/af/43b2f72b7eb21e51e622f12ef36840e68e0e87": "67c07a0c155261d2093d8e53df16f9ce",
".git/objects/af/fe2100a526b7fd390e7e64c2c34d73962677a3": "28d2c398b5ca46d6416750ab6f25085e",
".git/objects/b2/d04d0353a79e4ec2ae2e2bd8403a9636094711": "88cda718fa4eb338716fb653d658d3e4",
".git/objects/b3/0cd8cd4605b74f3d03e3786831e8d3e5003537": "c776595b24d99e0c4d9c91ac31c46785",
".git/objects/b3/4d4a6bbf9a6a1a537c7a96020dc56928d8a472": "f4e30d5f0a33225e8795e4c0f1e46274",
".git/objects/b3/aac67b728bfba3ea4b9f5b706b53f2cdbed985": "bcc83979a8d0a1f3cc3867407209a55c",
".git/objects/b3/b302170dfd7663179603958b433ffd6cc7a14d": "3b0ef29ba92a483c85e85265eabd3d85",
".git/objects/b3/be750dff1e78e479046b0e0ac4dfece435f007": "7bf5c61c5014888517cc35378e6ce63d",
".git/objects/b4/d2cf26e92b7121191fc6dc4e1ab52edad50331": "ab35ecd6680f08dcb72b8e6f79c14e2d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8cb4d2c8b4e4733056fe9f80019bb6d070d661": "46fdfff034627d08942a9cedf01b9005",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/6ab751e7d6e932c57bfd1d65701426c6c3fa68": "840d14942a0a6763c8abdae1c459bf9c",
".git/objects/bc/d4a3f06dc1429d1dc6f24142ddd57f10dcaef3": "f076490f9695a9a584f67d41fbe48362",
".git/objects/bd/391bfd3598711d76d850e006d305678af79408": "363c3629aa6e4a3b74a66a70a1733576",
".git/objects/bd/aabdd41079630003efd1c4790b15c1a6e8102f": "4f9abcd21846ab6adb0b8e2dd62fb8cc",
".git/objects/be/3ed558bf27fa90eb75687070733b5ce172000a": "db0216490fcbceabf00de09de090d254",
".git/objects/be/b40b62b7b03f238bc417372e8d9294f138fb3d": "a7461b421216dc5513ff13d498fe0a7e",
".git/objects/bf/75e8f438e02e4eb38efdb4ffe329977a2adeec": "f96f62a89ac0f314cff6a53d50b01251",
".git/objects/c0/71e3b1c1559a936e223668abe9366cb3d30975": "c02fe8126de8d8dddd1d5d42c7547c7d",
".git/objects/c0/794657708f636e742ec94ad20fdc2bf426aefe": "b849c513d19f21d164eda2fdedbd9030",
".git/objects/c0/cb5cf975d77e5044e300c480c43b65f782a849": "6d746882fe1cd0cb8c693fbcb962af1f",
".git/objects/c1/b70c0f34601e384d9d75fa0d579ac213edce93": "36553dabe4820cce3b09aede6e356111",
".git/objects/c1/e8b7b76bbf8dad38203eb7a0f044f145bbec68": "655a0ff0d7e6e314b619c8fd77263920",
".git/objects/c5/5fd7df5d34d0bb4b995177147cc27408ad691b": "2a5f85625a9372e34f21c8a8fa86b71d",
".git/objects/c5/c3a21fdb1fc939e494f6553c8c03e41dd7a17a": "f7eb9acbc511b32098ff068ed1fe77bc",
".git/objects/c6/8b40f5e2eeeb19f8c13511a28b80402bceed8a": "fd5912ff3178ebbebe2cccc683840f9a",
".git/objects/c6/a6fb718cb1f096dd002d3a8aa9e3503221c2a2": "3b2646b6da1a82fb5a9e58a8cfedf060",
".git/objects/c7/2deab67559e4cddaef042bacc19f19f1f40065": "4d779f8754ecb2406c6768925e024fcc",
".git/objects/c7/5a276b04f756f82ee8454fc1bd2d09fecd6e47": "3f39ea0ea32ffebb148b36ace1267259",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/6f02a189a31f25d2fbd01f4b862f2e953bfad1": "df0e332ffa65ae9b8f70bd905a730891",
".git/objects/c9/b692db112adf430f1d44d286542b90c1598b40": "068d4e203f5c434f1e4d9832d50731a9",
".git/objects/ca/669b703f7e19825cb8498abc9f16959638fdad": "3da65d0e02d1e98050f82e462a21d4ed",
".git/objects/cc/9f9bd7ab69b1c43587224388ab15130afd907c": "227ad6205a770bc79b4ef64a7c3eb37f",
".git/objects/cc/a3c9fa407f1b32c0c574052550a7eb00a9d9cc": "f9ea8c21d437762d3fb558e4ab3cf9c1",
".git/objects/cc/f352def1169f206cf1148ed2cba4f07e0e582c": "069cab747343cc3a334698fd2a454511",
".git/objects/cd/c7cd6fbf6d40bd27c3c3e53329eb01246c9227": "8f128a5448daae9dc36b2e2a796e0ad4",
".git/objects/ce/1235709e192308f0f8ccbe94d33cf07e41f9e3": "9b13c8b3f315cc707a53b3d2fc48528d",
".git/objects/ce/3cd738af1bc608ae5f963bcde8a4e8bce8eddb": "12db1ee079995c8939487a986060a510",
".git/objects/ce/99905ad0fa5f8aba3bfd3f6d8b8a770cf1bc29": "15837ad674a0dac177fb63f4c0d50e77",
".git/objects/ce/c55d30c944335c1f85ee15b5eca92d9314d4a0": "764d44f8836475526b92155056116bd7",
".git/objects/d0/a2a11808224b2970d4d8a5c73f605aa2231e2b": "85c0e8689cd33559771f225f149b4da2",
".git/objects/d2/663fabcb43e88ec503d502d049e412e8c5ad0d": "551b0065d87dbaa86bbbb00ea336ef93",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/fc85aef8650db9cd3da2066d717a5acc9fbb50": "0664b37e025231ab602c0ecf9d3e01dd",
".git/objects/d5/38554a40fd18837ac7f55d8f7f837d12a09cf2": "e4dbbe9e9be5bae47c322c21e6496fbc",
".git/objects/d6/936debd0afb93089cbf62debce38c87f4b27b6": "acf8a2d7916fc0c104eaac92da136fb3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5a6765fcb1d5647c19329330ed190613f3f615": "a33074f0295ec739811bf3189c45c67b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/4eff8b0d65933f242ae9cf72c46fc9159c9f5f": "4af145a9fe70c14e358981db1f375d4f",
".git/objects/d8/db70b909d273a55d16d0551aedb3ca7187f193": "d9b1e6bff04a8ffb3b57a7bcc423ed70",
".git/objects/da/36574811ef3a73ba1d3dd92f7703b6da00ee0a": "1ea5356f02548704ebcf3b1fca616b29",
".git/objects/db/20658cea609ad120bee22ec5cbdf615fe56cea": "30bdaa517556f088d0edaf5198ff957e",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/de/2fbef6c9c90903a79416eca0fd925501760b1b": "ddd7080683e9afb2ce632751de1c6298",
".git/objects/e0/6c0dc14ddeab6ef882bd4b2973c45eb3846912": "f39e11a29ce26ab5dcaabdae4fb176b0",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e3/ec382bf5d7ac327966be47ca59f74d4c1307b9": "239655eb5c89061d9dc2383b3726f818",
".git/objects/e7/9a6178534f43ebbfc90c613497197006e324bc": "b46e42aec6cbea6b2cd9b24648094727",
".git/objects/e7/d0d9696d7ce77bb4efc7cecb928637c180d4e8": "87601d64765715c8cc92236401d4727d",
".git/objects/e8/14704e75b11c20e858666390e7b2a516e14c21": "6cc16815e7bd295e9feebba4412fc8c1",
".git/objects/e8/6bc369e66ae9da1280080aa0b6c3c4347496fb": "7121b25552109038d65cb03cc7561f66",
".git/objects/e8/857cb38ae7c8adef7a45a52e48066b57a85247": "d1b1c98bf84744425f54659c0b49d647",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/9c710d001746c874e7759ba47b631a87038497": "376fd02577691bea3526d9e720757fcd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/7fe4e4d0e80f4a3d372a18f0af1927feb3271d": "a411ebd35310c7c893eb40e5807226fe",
".git/objects/ec/9eaaaab62135c06a2f2635e6702ec49475f42a": "494408ee7299ba0271f334e7b647fe74",
".git/objects/f0/d15a908185b5563e84ef7eab6d52cf5bcb7342": "18aba573efaae2a80f5e680dfbcc8c14",
".git/objects/f0/f132a7a00aeb1ab38ef641c8d3a696d6554de7": "5d6370e9f50c29bfc52fe8641580d016",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/0887931530313d16ed79cc7610ef5470cae8c0": "17bdd470235498d49fb03e09cfa84366",
".git/objects/f7/195679f0629465882d60a3dc0d33ce1b33946d": "a565e4f27993d10d2522fb4b59bae403",
".git/objects/f9/8de241edcc49a2901b12beae87d336c560ec7d": "70ba81cb6f6110f52ecc6b93ae7b785b",
".git/objects/f9/adf1b6f9014cc01f9722c3c0e9fac9833771a6": "b04ec5d9a512fe795a6369c642f7b76b",
".git/objects/f9/d44636affea999a9ac36ee3db2b181af871e0b": "f9fff1e42027af7feb799025c49792c3",
".git/objects/fa/2d5bf07a72aaafbd2cff596e227a3faaffa003": "b8fc2d0519a377192ae43f3513e49ef4",
".git/objects/fb/60f07df13d4b5a62d9d236e7edb4a041362759": "f9218be3b1f16fe7d0cc69d731a16e86",
".git/objects/fb/632fd616982461c0f176cfacde585cc379a86b": "9519fa63be7a8a7e3153dd42b7fa6d96",
".git/objects/fb/65a99706ccefd901a50c35fd1f8e9927945c62": "3bd1cb1facf02ffc29124b1f5ad59fc3",
".git/objects/fd/17cbfd0a0a443ed57f2a7ee07cd5942b979bba": "61a9554625a0b284aa2438d05c0110b0",
".git/objects/fe/505841e843ed20f93755645b5e659554bbbee7": "c9a058e24ddd0a29a0b1711f88e8746a",
".git/objects/ff/843e161a93499a454bb7deea155ff754e48c3a": "83ed6c1d0f9cb97ed28c4f46e93284e0",
".git/objects/pack/pack-fc494ce493a539100bebdda41d562405bae75db7.idx": "c13caf8856d938ca7b5644a7e8ab3ca3",
".git/objects/pack/pack-fc494ce493a539100bebdda41d562405bae75db7.pack": "d23badf81f0855b402f2629d6aa1880c",
".git/objects/pack/pack-fc494ce493a539100bebdda41d562405bae75db7.rev": "bcb546c37c32a6bcf4df9a809739a969",
".git/refs/heads/main": "2333d010dbf70e6cae4738b178be8e71",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d08a919bb0c732b1668d9cd884c3e323",
"assets/AssetManifest.bin": "8885295daa6221a0698032b89f05f074",
"assets/AssetManifest.bin.json": "2dcdf50ea32342dffd11b3e5203e0dba",
"assets/AssetManifest.json": "ef7cba64778810576cdbe630f44f0fbe",
"assets/assets/audio/musica.mp3": "726fe80bb376fe51feeb431a14c5e5f5",
"assets/assets/Imagenes/imagenes_bienvenida/logo.png": "0465d3f0d2b71dd6a7bde64b1a53ea3a",
"assets/assets/Imagenes/imagenes_curso_ciencia/img_ciencia_1.png": "6c9613ab37b050f732fa3fbb0208e61f",
"assets/assets/Imagenes/imagenes_curso_ciencia/img_ciencia_2.png": "babad9d72b8360d6ffd3db42d824a86d",
"assets/assets/Imagenes/imagenes_curso_comunicacion/img_comunicacion_1.png": "bd3d652e47661aa73c19a9a9fda60001",
"assets/assets/Imagenes/imagenes_curso_comunicacion/img_comunicacion_2.png": "b303f092f2c7808fc204293dee4d1e61",
"assets/assets/Imagenes/imagenes_curso_matematicas/img_matematica_1.png": "a62d26e8e1adbcbddbacb99818ba1d04",
"assets/assets/Imagenes/imagenes_curso_matematicas/img_matematica_2.png": "e61806b93d37f4ef2e3c64972d4c2f23",
"assets/assets/Imagenes/imagenes_edad/Ni%25C3%25B1a.png": "e70dadc8776648430ab23f47ba20f0e1",
"assets/assets/Imagenes/imagenes_edad/Ni%25C3%25B1o.png": "980f0dfd8bbc83f06cf29fa17124fef2",
"assets/assets/Imagenes/imagenes_nombre/PreguntaNombre.png": "c72bbe4e61ef1a4159e4ecbeb4c4488c",
"assets/assets/Imagenes/imagenes_perfil/imagenusuario.png": "e9ace2e2dac30ed544ae393f52a0a0e0",
"assets/assets/Imagenes/imagenes_seleccionar_cursos/Ni%25C3%25B1osCient.png": "a5abe00861b7da7f788a3662af86d5ad",
"assets/assets/Imagenes/imagenes_seleccionar_cursos/Ni%25C3%25B1osComu.png": "7a97e66eadc2d23097ab22ece08a1ea4",
"assets/assets/Imagenes/imagenes_seleccionar_cursos/Ni%25C3%25B1osMate.png": "6de594f2d121c4ab681a2e89136d161e",
"assets/assets/Imagenes/Juegos/files/animalesTiposCien.csv": "ad90ac992c7ef85ad6bf6607d646647b",
"assets/assets/Imagenes/Juegos/files/palabrasJuegoOrtografia.csv": "825f5b0da6d49baaf5971c3b9fb21964",
"assets/assets/Imagenes/Juegos/files/partesDelCuerpoCien.csv": "6c4ca5d94093593cd33adae4d1e0720d",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Barriga.png": "2e9ebd3bdf02997abb001954c339617f",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Boca.png": "26a7243a80217d70392c4c74ad7c8894",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Brazos.png": "16db4c046de3a93378a8ee5f736db46d",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Cabello.png": "de36b5d2806628926a636f7ef4513d60",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Cintura.png": "5c527091419b920b21a03efeb37e361f",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Codos.png": "002b53ca07dbf72eb27eb1b7143f0ac9",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Cuello.png": "f08aea29144fe6ca88c0d86ab94bb89d",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Dedos%2520(manos).png": "afe87a1c37afe5af303345f652aca015",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Dedos%2520(pies).png": "139a1b0b905bb21af9f44b46de44efae",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Dientes.png": "535343f64902f9333aeafcff8e5adebd",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Espalda.png": "e786891ec7f7f585dd0655cf3c6d4a0e",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Frente.png": "608fe4ab0adb0b041ce9d1105139a5d1",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Hombros.png": "a58f365bb312464a8c5552e1da8383de",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Lengua.png": "0bb5a28924a0c4effbb8f6e4cd9538d5",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Manos.png": "40dff7f5c5171e4a67e3a5dc9607dbce",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Mejillas.png": "c1912c43c6a5fb531e3c2dc89a677d92",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Mu%25C3%25B1ecas.png": "8666f4a2da331b7c8e57b3d2af75fb05",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Nariz.png": "a8651df8f9185a976c1c650f55cbe13e",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Ojos.png": "074fee0b6c891c651f39d93bd6e9e5b8",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Orejas.png": "330f2657b719dcdee972d804f1190635",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Pecho.png": "7d3c8409d6493e000177e8165d6507b2",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Piernas.png": "27ba7cc0cd6fe3f602c273e100108893",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Pies.png": "7501993bef062308866d950c49e8be29",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Rodillas.png": "98bdc50755fbf97f13c2c451dbd3bb4c",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego1/Tobillos.png": "82a6ed96346438d58e2072ee862e4f56",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Abeja.png": "c5932775f8e7f185606cf65e43673e8e",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Ardilla.png": "efee0e823119cb59e09ba7616581d350",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Ballena.png": "48941efdc14f8415f0b6c4d2c2489f6f",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Caballo.png": "9e886472fb77bf5d79763b27caac94c7",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Cabra.png": "f5ce0aefe395542d0c0c26c29df566f4",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Camale%25C3%25B3n.png": "a3a6abcefe194c405adfaba987dffa7f",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Cangrejo.png": "e59ef63ba2f2033a2baab6e5df092cba",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Cocodrilo.png": "159fdc2ce9615b1bdc1a0189c4b5dcd2",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Delf%25C3%25ADn.png": "1d373d777958913ad5f23de2748bea1a",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Elefante.png": "3f80ccae5b7a26afa2b78d4178dad480",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Erizo%2520de%2520mar.png": "5786964561c65e512dd18159807310c9",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Estrella%2520de%2520mar.png": "60137cac0ad8a481737eab72dba029a0",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Gallina.png": "8d22b57d7bf1afe14f51fdb893749c2f",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Gato.png": "4bb2d75294a4ab8cd8992ddd4065dfeb",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Gorila.png": "6bfa362416fca7c0b8fbcb705722499c",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Hormiga.png": "206bdd3e4dcfbb3724729d7735dc2493",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Iguana.png": "cb098cc1a3c51fcac277f816f9459e02",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Koala.png": "67b49f3c286eab9793f9cd2d72512311",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Langosta.png": "4f8999076b68f35e21e7434efe19e463",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Le%25C3%25B3n.png": "863c88a63ce4d7e73dc8504313a80f8f",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Lombriz.png": "503267a693ca70b3eea6bd13e6b8bf45",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Mariposa.png": "864cf572fc67a87c19c9d08d294468a7",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Medusa.png": "0f6b1cc28201c4b820c71b80a7d878ae",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Murci%25C3%25A9lago.png": "7bfc53cf6ad224277f38746826521584",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Ornitorrinco.png": "9c56ff51e338a46e7879f25578140120",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Pato.png": "c0f90b55f73e5aeb0422335eadc45240",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Perro.png": "c9c01b20d59b067d7aa5173165e398be",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Pez%2520espada.png": "ae536ba95454d3f6a741dd4be6ce7d7f",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Pez%2520payaso.png": "dcc65dc15bd9cb18fc3b058b629497ab",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Ping%25C3%25BCino.png": "039f070cf1c89dba0fd6983f250c6a68",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Pulpo.png": "85165019c927f8856b5afda318319172",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Rat%25C3%25B3n.png": "bdea1eebb7fc3aa5dce09cec48f08d5c",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/reverso.png": "3367b58a84ac76b618663e76dbc74e4f",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Serpiente.png": "ebc593a8bd557e06f9f6cd77402dd1e0",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Tar%25C3%25A1ntula.png": "26a765c2d00b9641ef789721acdee228",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Tibur%25C3%25B3n.png": "a8d41073a71d5b9c565cd05df4a59452",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Tigre.png": "6bfc465cd2547b579193904d1768203d",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Tortuga.png": "0cf7559680e7687a4ccfad5d7e22c404",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Vaca.png": "93197e5ca09c7da45bf785b030a4e4f2",
"assets/assets/Imagenes/Juegos/JuegosCien/Juego2/Zorro.png": "6a0422ae909ab7c643e61a5f3bf61b71",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/%25C3%25A9xito.png": "ea191dc08338e87093aae7451d199f00",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/amigo.png": "ce69ed4cba730ecf89f00ec5de3b9d31",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/avi%25C3%25B3n.png": "84db274304306168465d38bfd3128d3d",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/azul.png": "fc71f00ca4be92eebedeb2ab224b38eb",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/ba%25C3%25B1era.png": "f1fc9c643fcd40a909e570571b7c00bc",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/bajo.png": "40a0817d5fb6d44263620e1f56466abd",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/barco.png": "8621d4156266e136d50a1120e359a874",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/barrer.png": "fd1976030f8a0ab04eb2d4c0c14e9b31",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/barril.png": "0997d5bfc6e58f9d9a8f4dd39706faac",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/bast%25C3%25B3n.png": "ac2c54a69d5acd2c417c25e4cb32938c",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/bebe.png": "54b965c94a4dcd7c455397a3becccb92",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/bebida.png": "98df2c9b2dd15eb3c4edd2e270d39c07",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/bombilla.png": "46c415c1505dd5c9855c545cd83ef11e",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/botella.png": "4dc8ce5f69aaa9fa2feb8167b3ff3cc9",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/burro.png": "8cf0101c517888d8ed8dd4893465838e",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/cama.png": "99334b61b0760aece6fb221560b63eb5",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/cami%25C3%25B3n.png": "72470962ec49f75bbb6de2c9954ddac7",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/camino.png": "0a8dc85408c4f6da47d98832fc19eaad",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/canci%25C3%25B3n.png": "cd3708f70b8e8b7ac701af05a07fbd3a",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/carreta.png": "27e0871280ad1db6655395a6fd021c89",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/carro.png": "5456996608280ce4fb96b94670f692fd",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/casa.png": "e1a7a27e20a26863d4becefb346193dd",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/cereza.png": "c61a18800578312f6b2e5c65325f4a47",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/cerrar.png": "e392911c3e6790bced7b85ceeb89404d",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/cerro.png": "7efcb9db544a776c8860ce9ec05f3cb6",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/chancla.png": "09da98a2ee3f4fedf02d3e24815959fd",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/chico.png": "f12e89e019ea53f8534e75dc5f90c588",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/chill%25C3%25B3n.png": "75dfcc1a40c1d6b1db352b5b5f8743cf",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/chino.png": "874787b19247f6ea9bf9437493c426ba",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/chisme.png": "78f53db15cd2c6fa56917c8fd24b7d13",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/chiste.png": "286add009e04c5b15d917d7dc725e3c0",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/chocolate.png": "d1d5250156b3dd8ed8cfdef3ce2f6eb0",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/chorro.png": "f6aef23e329bc061d9d5b400583e186f",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/cielo.png": "4755e7bf78ab04b23b76a9788c0d8501",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/cima.png": "0d7103ae3fc4ff0ecb34ee344c20c171",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/ciruela.png": "22cc68c8029cf57c339a2979c7fc001e",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/cocer.png": "44ee71c0ea1fa6b5fd6a002276a496a0",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/coraz%25C3%25B3n.png": "9da76c46efcfe328d50b446669df026f",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/corre.png": "d10517dd007395b4e6e59b4e44e66446",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/d%25C3%25ADa.png": "30257e82045c352c633530fd15705b07",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/exacto.png": "6cae79856505d1d9060f4bb44ec9ac2f",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/examen.png": "995863c794530f9b77d9c5cce5a16f4b",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/excusa.png": "db2a1e3670d02419e819f5ecaf91ee38",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/experto.png": "03b3dca901ce57b68c2294b5082da594",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/explicar.png": "c9576d0bc83bfa4de48864b0c2eb376e",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/explorar.png": "14af34a7441a716e47281824839e71ed",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/explosi%25C3%25B3n.png": "3f0780963a1fff6f6435fe88fb701fc5",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/expreso.png": "f9272ee62e52fb9a801b5e2eead4a9ed",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/extra%25C3%25B1o.png": "d2ee8ea8886df5bf401a4d1c323940d1",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/ferrocarril.png": "45b645bd41e269ad1db297af482416ca",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/flor.png": "e5ec9d1c7718ca7e0cdfee222838962c",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/gato.png": "0abe73ad372b16da4b605c5b37c36f6a",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/goma.png": "eb762a94a6d6e2fdb6aeddcdc5c0d32e",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/hacer.png": "e1ac2c37c58f8b8e92634df8b106c3eb",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/hacha.png": "9fe1e1be01b21829a5ba07e8639b1687",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/hermano.png": "b4b5f546532fa6ec0fa0d90d290ab059",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/herrero.png": "8368aee9d6ef6d21dac81a9c9d9538a7",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/hielo.png": "ff73f41d33d4c44aa1962062a9212a4a",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/hilo.png": "34d21a8b92368718c7170ffb09fdb063",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/hoja.png": "ac3fb4fb99d841f6d1663ff82147aaa7",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/hombro.png": "9afe546a8c264d9a9990b55d16216d55",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/hora.png": "5a8b1ef6a268c0a3e431b8e55e6f5735",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/hormiga.png": "423a13884dbb9db4a146369872475c08",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/huevo.png": "1c10813162706474c53ea19a6b512437",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/ingl%25C3%25A9s.png": "61098b6a7dace596cd79255d71307246",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/jab%25C3%25B3n.png": "932b0db4f5b8e1f537233fb5bd5170e5",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/jam%25C3%25B3n.png": "6676247a1dc8312ce2cb3cd2091ba35b",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/jardinero.png": "4f80d72e3fd32ac886fd40b36883ec46",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/jarra.png": "f24c8b8a59bcb6c62871acadf5b9e79e",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/jirafa.png": "097af8acc172d7642cdcf2f4c7f84881",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/jugar.png": "457dbd4e21246a23f50543cae9793b02",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/jugo.png": "f9d6e584cbca26e8045d8aa8a0a2ed0c",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/juguete.png": "9595acc0f78f3615f382fa101f74cbc5",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/l%25C3%25A1piz.png": "b3ebbb8482f9a2fe3f20ea8cd161cf83",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/le%25C3%25B3n.png": "2465a519a059483e4bfcc3f21669328c",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/lechuga.png": "d26890def5c951d20ff20b50bc6b8458",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/llama.png": "a3419a152dc37554c9dcc2509dcb6314",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/llamada.png": "37f731cc9b7d0e7eed6ad82bb5267bfd",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/llanta.png": "8e960ab2a308c3635eb2f53dc08c39f2",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/llanura.png": "2423c21c232bac5556ca6e8addb9767d",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/llavero.png": "13a9c3d4f0ef69c139301488ef134c6c",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/llegar.png": "275c65d17d1bf58e43b44918a829c21d",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/lleno.png": "eb6e9b8ebc14533e095c21c58ebcdfa0",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/llorar.png": "66afdc6475e406d11fd139c6a31e1bd7",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/llover.png": "e65b858dc4dc695528ac7c4b91b5e157",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/lluvia.png": "841a697033af63f7e2cfdccdc7798808",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/m%25C3%25ADo.png": "1144126a9e3387f2918fd9aa0c5fd75b",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/mam%25C3%25A1.png": "512b185d5ce1d3c2ed7c2086a8039bb0",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/mesa.png": "44132225e3d297cd05b985dc9a03b2b6",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/mucho.png": "3c847c0f1b36918daf7bc4f2bfcec7bf",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/ni%25C3%25B1o.png": "c9c3ec428da5dc11cecabe03b3fe3cb3",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/pan.png": "99c216ab46de6fa0eb463162871b5a64",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/pap%25C3%25A1.png": "5915cff89fa4e8f4d80ee5c826ad44b5",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/pelota.png": "e2901d5a6c2549257ea69945a71c7d93",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/perro.png": "bdeae30c957497e0c8fbb867f1892a21",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/qu%25C3%25ADmica.png": "f50618e428866348cdf0a6116a41ff23",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/quedar.png": "67cef1ac3b36c517901bde8e2293bb42",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/quema.png": "11a19f94206212d430c8323b4fff09e7",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/querer.png": "3479dd0d31a3085edf2dde971c6f7508",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/queso.png": "33e87f2783be70348d6823abd9ef0291",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/quinto.png": "46eec0e58d04f4edf25537da57c894ef",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/quitar.png": "1e2d8c7242dd686712e1a643abb4decd",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/rat%25C3%25B3n.png": "280a833f27919c3fc5b4e72ad8ee92f0",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/rojo.png": "95bedabba7f784695f85c3d565515453",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/sof%25C3%25A1.png": "6f95461037b8ad1a8ec82a167a429b4a",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/sol.png": "57fa8982640a5196dfa4594458e0ef41",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/solito.png": "76d1e9f08de6ec52e720dff211eb465e",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/tel%25C3%25A9fono.png": "5283b2241d611dcca8c9c848b1dd2f2f",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/tierra.png": "c30fca15c8711bccb3759e66aa3d47c7",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/tigre.png": "ee3c755b193d97d25a9e048b5bba8fd0",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/vaca.png": "93197e5ca09c7da45bf785b030a4e4f2",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/vaso.png": "5b113db191fded7806d1d89eb2a7cdb6",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/vecino.png": "878387cdf286385a427d369f9cf0a10a",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/vela.png": "c5689d6466dfd1ff469c3ba909ae64d3",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/venado.png": "483465fdd47c57f30d70fb788d78091e",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/verde.png": "7f310d7b9a87dee8080072d1d2749367",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/viento.png": "1e3567467a2e6727f0344ca4dc54572d",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/vino.png": "3513451bfe2fcc085547db7b4428bc87",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/vivir.png": "5279ef76b42e38613a30bacb6177b913",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/volar.png": "acf21c01d4a54fa1157eadce851bc1b2",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/yoio.png": "3c7be047649f2849bf6de25d714839b5",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/zanahoria.png": "17bae66ed720f66990c4c0b9def1cf76",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/zapato.png": "6d1f6fdae061467622a0aaa9643032d1",
"assets/assets/Imagenes/Juegos/JuegosComu/Juego1/zorro.png": "6a0422ae909ab7c643e61a5f3bf61b71",
"assets/assets/Imagenes/Juegos/JuegosMate/Juego2/graphics/A%25CE%2594B.png": "357866db4df48615bd17c441980faebc",
"assets/assets/Imagenes/Juegos/JuegosMate/Juego2/graphics/A%25E2%2588%25A9B.png": "35860b94f844f9339d4bb6c287bd8171",
"assets/assets/Imagenes/Juegos/JuegosMate/Juego2/graphics/A-B.png": "3ef203d99fa9137713d6347f947060c3",
"assets/assets/Imagenes/Juegos/JuegosMate/Juego2/graphics/AUB.png": "a03bded69529525d558d730e49fc8952",
"assets/assets/Imagenes/Juegos/JuegosMate/Juego2/graphics/B-A.png": "0f841e7826d5c1e6220fe6370bd73929",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8aa3c15d6c68b7d8c8a004b94e497b68",
"assets/NOTICES": "0fabb3a894510a01e04c9c9b4dbcbef5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "fe8620e13634875c512498cebea97bf5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3b337a0080408950bb550e686f0c2239",
"/": "3b337a0080408950bb550e686f0c2239",
"main.dart.js": "7b660f3e158611b48474999e24a941cd",
"manifest.json": "318478017ec55dc831323614bef169e0",
"version.json": "e91e499fe8610be803f2b945495d247b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
