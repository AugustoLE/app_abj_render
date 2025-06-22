'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4cb0d6fdfb2d38cc75de3b1ff0c24920",
"assets/AssetManifest.bin.json": "4ae9ee6bac18f17d9237e392e4f2e912",
"assets/AssetManifest.json": "0e12f48b61f9a454e4b6cd493c0791bc",
"assets/assets/audio/musica.mp3": "726fe80bb376fe51feeb431a14c5e5f5",
"assets/assets/fonts/Caprasimo-Regular.ttf": "54cc2fb9aeecccedde96c183678cbdd8",
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
"assets/FontManifest.json": "370f4284741f990ac7ade32e2c37846d",
"assets/fonts/MaterialIcons-Regular.otf": "b601b839c38ea7214e8aa73586b9fdec",
"assets/NOTICES": "2b2caacc96f2660ec05a0b01502bc47e",
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
"flutter_bootstrap.js": "3ace7f45c55ce4492d5d0fd419b84a22",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3b337a0080408950bb550e686f0c2239",
"/": "3b337a0080408950bb550e686f0c2239",
"main.dart.js": "180ae24a2bb9efa3354c374fb4a0c786",
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
