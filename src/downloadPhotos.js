const people = [
  {
    photo:
      'https://photos.infinum.com/store/30fe54f055afd073ffdc1fb2573a839f.png',
    name: 'Tomislav Car',
  },
  {
    photo: 'https://photos.infinum.com/store/d0222c5226b7f5465c644b6f22823e7b',
    name: 'Matej Spoler',
  },
  {
    photo:
      'https://photos.infinum.com/store/b1a13e890a5489b00c819ba2cc6d804c.png',
    name: 'Nikola Kapraljevic',
  },
  {
    photo: 'https://photos.infinum.com/store/723875dadb500ff32afc475b15d026cf',
    name: 'Josip Bišćan',
  },
  {
    photo: 'https://photos.infinum.com/store/8cfbccefb52921aea7b3e8a59358a1a5',
    name: 'Tamara Lah Momcilovic',
  },
  {
    photo: 'https://photos.infinum.com/store/f0b558be153b07b24736360a5ce0db0b',
    name: 'Adis Mustedanagic',
  },
  {
    photo: 'https://photos.infinum.com/store/8c40e271286936beb7365ae5760522c5',
    name: 'Filip Beć',
  },
  {
    photo: 'https://photos.infinum.com/store/6c09c771c546bd14f2cd8a6e4bf818f6',
    name: 'Darko Kukovec',
  },
  {
    photo: 'https://photos.infinum.com/store/4d3df007192bd74cd42bf4bcbd82c98b',
    name: 'Stjepan Hadjić',
  },
  {
    photo: 'https://photos.infinum.com/store/76eec114ee4b72a056975500d6eb0bf5',
    name: 'Željko Plesac',
  },
  {
    photo:
      'https://photos.infinum.com/store/271adba5f0d4e23b46faea055742358b.JPG',
    name: 'Goran Kovačević',
  },
  {
    photo: 'https://photos.infinum.com/store/7a6063dcc33a8863807b33797ae6834b',
    name: 'Damjan Vujaklija',
  },
  {
    photo: 'https://photos.infinum.com/store/faee5b165e9a042897be201cde81f94c',
    name: 'Ivan Kocijan',
  },
  {
    photo: 'https://photos.infinum.com/store/ee71b1187f2e5048a8074ce85c113857',
    name: 'Filip Vugec',
  },
  {
    photo: 'https://photos.infinum.com/store/61ecf61b351122ea43eba8f8506b1aba',
    name: 'Melita Kovač',
  },
  {
    photo: 'https://photos.infinum.com/store/d76be2fc1db71b36ecd2a822dc947809',
    name: 'Ivan Lučin',
  },
  {
    photo: 'https://photos.infinum.com/store/852a14b57c1fcb0527ab18e6dc2a3f78',
    name: 'Jan Varljen',
  },
  {
    photo:
      'https://photos.infinum.com/store/a57e62fa38392e3a7abc012e5488cca7.jpeg',
    name: 'Tanja Bulbuk Jergović',
  },
  {
    photo: 'https://photos.infinum.com/store/d8a90b9eb8b62a2547d74aca1ed8d53c',
    name: 'Mihael Šafarić',
  },
  {
    photo: 'https://photos.infinum.com/store/25d750df66085a1e11519e6bc5c00753',
    name: 'Ivan Marić',
  },
  {
    photo: 'https://photos.infinum.com/store/869146a6f109c0b1cd07835d8281c8d8',
    name: 'Vlaho Poluta',
  },
  {
    photo: 'https://photos.infinum.com/store/3263cc762a58756df097778b809277e1',
    name: 'Marina Jukić',
  },
  {
    photo: 'https://photos.infinum.com/store/0d83fe87e88329f3effb64ed2a22199f',
    name: 'Dubravko Tuksar',
  },
  {
    photo: 'https://photos.infinum.com/store/2f0c4f75fb81cffcbaa3208a54b297b3',
    name: 'Luka Marić',
  },
  {
    photo: 'https://photos.infinum.com/store/08568d7f5dc9ce9e10d22f3d759d9285',
    name: 'Ivan Bello',
  },
  {
    photo: 'https://photos.infinum.com/store/aa71c4feef267f5a1405ae469263773d',
    name: 'Petar Ćurković',
  },
  {
    photo: 'https://photos.infinum.com/store/acb7ba0c43a3366bc3df5cef58a15036',
    name: 'Mirta Rupnik',
  },
  {
    photo: 'https://photos.infinum.com/store/e1a1c802698202f2e94e520c42ce54f2',
    name: 'Stjepan Petruša',
  },
  {
    photo: 'https://photos.infinum.com/store/71b43646e57ade947dff81a12f7f1a1e',
    name: 'Ivica Batinić',
  },
  {
    photo: 'https://photos.infinum.com/store/60e7d08ff3c18f10f9b79c1a872b59c1',
    name: 'Marko Kršul',
  },
  {
    photo: 'https://photos.infinum.com/store/1ac5f930f4bc0b1ee74cfe7f62c4ff7b',
    name: 'Ivan Hribar',
  },
  {
    photo:
      'https://photos.infinum.com/store/fb67a981a35a9a1bd4affff328f7273d.jpeg',
    name: 'Nika Jukić',
  },
  {
    photo: 'https://photos.infinum.com/store/d654d884498ef07f934fc9601517c08c',
    name: 'Zoran Turk',
  },
  {
    photo: 'https://photos.infinum.com/store/098f97915360db6c7e5e4a690bd8209a',
    name: 'Domagoj Korman',
  },
  {
    photo: 'https://photos.infinum.com/store/4505d68ec3e0033c802a4aba51f6cb50',
    name: 'Barbara Vujičić',
  },
  {
    photo: 'https://photos.infinum.com/store/c55bac2dd227ce2fe4ebadbd310246c4',
    name: 'Filip Gulan',
  },
  {
    photo: 'https://photos.infinum.com/store/511af1894d522c47c5e48bc9b7c75a6f',
    name: 'Ivan Đikić',
  },
  {
    photo:
      'https://photos.infinum.com/store/df23b6ae06ad24f5464a82c98ec09168.png',
    name: 'Luka Višić',
  },
  {
    photo: 'https://photos.infinum.com/store/f70ead2c11c99272aed0f40a1e2dadf1',
    name: 'Luka Reicher',
  },
  {
    photo: 'https://photos.infinum.com/store/375a53e3e597eb748008a512aa712dc4',
    name: 'Neven Matas',
  },
  {
    photo:
      'https://photos.infinum.com/store/999285be723f2cc0a33edd82f307476c.png',
    name: 'Inoslav Bobanović',
  },
  {
    photo: 'https://photos.infinum.com/store/3694f123d7630e1539035f15c00ecd2f',
    name: 'Vedran Hrnčić',
  },
  {
    photo:
      'https://photos.infinum.com/store/bc9e39290952b1a4c6cb4a21b91461d9.jpg',
    name: 'Andrei Zvonimir Crnković',
  },
  {
    photo:
      'https://photos.infinum.com/store/27ac66e55b347c802ec8260b1c1ada03.jpg',
    name: 'Bojan Bajić',
  },
  {
    photo: 'https://photos.infinum.com/store/c85c56b12207dc95c20ae1557add5540',
    name: 'Igor Tepavac',
  },
  {
    photo: 'https://photos.infinum.com/store/3f0ad496a125a01ce49d17a83d5b47d8',
    name: 'Vedran Furlan',
  },
  {
    photo: 'https://photos.infinum.com/store/f7553615a4322d1ddbf36c24f8b07b9c',
    name: 'Katarina Šarlija',
  },
  {
    photo: 'https://photos.infinum.com/store/3ecb302d68f901862b94102075de60a5',
    name: 'Ervin Jagatić',
  },
  {
    photo: 'https://photos.infinum.com/store/887e583632bd307f3e02b9c731f2cc0d',
    name: 'Nives Vulić',
  },
  {
    photo: 'https://photos.infinum.com/store/b01deb6f2e247c7ad91be47be09694d4',
    name: 'Vanja Jeršek',
  },
  {
    photo: 'https://photos.infinum.com/store/63f1ad5c4910fd150d14137352a5c632',
    name: 'Jasmin Abou Aldan',
  },
  {
    photo: 'https://photos.infinum.com/store/238b09621c0e32bf0241457ce5a51ef8',
    name: 'Moroa Novak',
  },
  {
    photo: 'https://photos.infinum.com/store/c173828cdce90669bb1966e701d8846c',
    name: 'Vanja Bobotić',
  },
  {
    photo:
      'https://photos.infinum.com/store/49a9f30854c3b97f6f31cf6e53b1a340.jpg',
    name: 'Marko Ćilimković',
  },
  {
    photo: 'https://photos.infinum.com/store/71566039bef9b251b88eddfe25b00142',
    name: 'Vedran Perković',
  },
  {
    photo: 'https://photos.infinum.com/store/0b25360632537f0121c1211192c7e464',
    name: 'Antun Flaš',
  },
  {
    photo: 'https://photos.infinum.com/store/ca04a9b8d5c6a1480b12f0d147a1a50c',
    name: 'Renato Turić',
  },
  {
    photo: 'https://photos.infinum.com/store/a5934da49c1a3bcd6a7ee443c6fe1ea1',
    name: 'Matej Janjić',
  },
  {
    photo: 'https://photos.infinum.com/store/6c05bea317b6369554eb8ae5b1b235ef',
    name: 'Sven Vidak',
  },
  {
    photo: 'https://photos.infinum.com/store/d3094ae47590bd849bddb3c5302a862d',
    name: 'Nikola Šimunko',
  },
  {
    photo: 'https://photos.infinum.com/store/cbc25898f4f52a91aec2604d12d3616c',
    name: 'Ana Car',
  },
  {
    photo: 'https://photos.infinum.com/store/c4773d97fedd655229a5db14932719f2',
    name: 'Ivan Ružević',
  },
  {
    photo: 'https://photos.infinum.com/store/86659a489c50c58dc56fe6ccb52321d6',
    name: 'Kristijan Bambir',
  },
  {
    photo: 'https://photos.infinum.com/store/5d6205a95dc3719361b6441d3d709ba5',
    name: 'Ivan Vecko',
  },
  {
    photo: 'https://photos.infinum.com/store/648b1db7e3f9f670a7c713cf902f9e67',
    name: 'Mario Kovačević',
  },
  {
    photo: 'https://photos.infinum.com/store/a869aafd4764b37d6999e6205e9d7f9b',
    name: 'Neven Pavelić',
  },
  {
    photo:
      'https://photos.infinum.com/store/fe5acc884a12dd9f16593acc4fd30996.jpg',
    name: 'Hrvoje Hrvoić',
  },
  {
    photo: 'https://photos.infinum.com/store/334fa959b7d999f75b6f824fceeedcfe',
    name: 'Nikola Majcen',
  },
  {
    photo:
      'https://photos.infinum.com/store/faa5144c615f036e55065465748355c3.JPG',
    name: 'Krešimir Valjevac',
  },
  {
    photo:
      'https://photos.infinum.com/store/575440468481ba73e429cd83d1b07e35.jpg',
    name: 'Filip Voska',
  },
  {
    photo:
      'https://photos.infinum.com/store/b93cc3859bd4b519941115b347d96c66.jpg',
    name: 'Adrian Bićanić',
  },
  {
    photo:
      'https://photos.infinum.com/store/27068da0efcb82618ca76ffac368d13c.jpg',
    name: 'Denis Žoljom',
  },
  {
    photo:
      'https://photos.infinum.com/store/2faba6df32d303310105adc101adba7d.JPG',
    name: 'Renato Mandić',
  },
  {
    photo:
      'https://photos.infinum.com/store/e84ce21cfe955d356d04e7b449943604.jpg',
    name: 'Vedrana Čolić',
  },
  {
    photo:
      'https://photos.infinum.com/store/2c4eeff648e8e9e58b780ff3241cd2a0.jpg',
    name: 'Josh Landman',
  },
  {
    photo:
      'https://photos.infinum.com/store/9180477bc2acbeed71ad27abcb4c2f0d.png',
    name: 'Nikolina Fuzul',
  },
  {
    photo:
      'https://photos.infinum.com/store/1026f1e120dc6dcc434ef3e97b35a728.jpg',
    name: 'Nikolina Kentrić',
  },
  {
    photo:
      'https://photos.infinum.com/store/aaded566c7b6ffdb6da673fe99dae4e1.jpg',
    name: 'Antun Badurina',
  },
  {
    photo:
      'https://photos.infinum.com/store/5dcb6659b49ec52708ce74f657fe9a3f.jpg',
    name: 'Marko Novina',
  },
  {
    photo:
      'https://photos.infinum.com/store/d72375e82db0e0887db467f319d2c571.png',
    name: 'Marko Mihelj',
  },
  {
    photo:
      'https://photos.infinum.com/store/910840f851a060347f67635e64ac45ea.jpg',
    name: 'Vedran Serenčeš',
  },
  {
    photo:
      'https://photos.infinum.com/store/0425ec6a9c86753478f11252bd900d89.jpeg',
    name: 'Boris Plavljanić',
  },
  {
    photo:
      'https://photos.infinum.com/store/cf7e22116d34bdcef30abc96e6809d6e.JPG',
    name: 'Ana Šekerija',
  },
  {
    photo:
      'https://photos.infinum.com/store/99c89d971da8f89f9ad8debb0f7c5a03.jpg',
    name: 'Branimir Akmadža',
  },
  {
    photo: 'https://infinum.com/images/people-placeholder@2x.png',
    name: 'Jerko Čulina',
  },
  {
    photo: 'https://infinum.com/images/people-placeholder@2x.png',
    name: 'Tomislav Vukić',
  },
  {
    photo: 'https://infinum.com/images/people-placeholder@2x.png',
    name: 'Ana Anić',
  },
  {
    photo: 'https://infinum.com/images/people-placeholder@2x.png',
    name: 'Goran Brlas',
  },
  {
    photo: 'https://infinum.com/images/people-placeholder@2x.png',
    name: 'Kristina Jurić',
  },
  {
    photo: 'https://infinum.com/images/people-placeholder@2x.png',
    name: 'Ana Valjak',
  },
  {
    photo:
      'https://photos.infinum.com/store/cd405edc9a9648b1c8be8a71885d5ca0.jpg',
    name: 'Vita Vrebac',
  },
  {
    photo:
      'https://photos.infinum.com/store/3da58f65159fcab05aef2dd759006b17.jpg',
    name: 'Tihana Vidaković',
  },
  {
    photo:
      'https://photos.infinum.com/store/4d587fc8c4fd89eb162f26bf033c62a3.jpg',
    name: 'Dunja Šašić',
  },
  {
    photo:
      'https://photos.infinum.com/store/05885a6dea9433853ff0e069408d3dba.jpg',
    name: 'Ema Penezić',
  },
  {
    photo:
      'https://photos.infinum.com/store/15d3f3e63dad29f452c789facb97b9a9.jpg',
    name: 'Filip Floreani',
  },
  {
    photo:
      'https://photos.infinum.com/store/f2382f94645cc396f368e54838e1aee0.jpg',
    name: 'Andrej Pufler',
  },
  {
    photo:
      'https://photos.infinum.com/store/da4aedd730ec00219c428ba53659840b.JPG',
    name: 'Mario Slatinac',
  },
  {
    photo:
      'https://photos.infinum.com/store/91211adb4141a707c88fcfde893d7990.png',
    name: 'Lovro Gracin',
  },
  {
    photo:
      'https://photos.infinum.com/store/e2330452c3c7dd891fcfa883883405eb.JPG',
    name: 'Elizabeta Lončar',
  },
  {
    photo:
      'https://photos.infinum.com/store/a1bf5cbeef1c448fbc729e3e2529a091.jpg',
    name: 'David Kampić',
  },
  {
    photo:
      'https://photos.infinum.com/store/39839563a83fc4543e98e48b4bd4c083.png',
    name: 'Anamarija Balaban',
  },
  {
    photo:
      'https://photos.infinum.com/store/e28c91ea0259597a6ebbcbf8c3c59820.jpg',
    name: 'Zrinka Rukavina',
  },
  {
    photo:
      'https://photos.infinum.com/store/84fa0a9c12f55aa8b686967537e6a6ed.jpg',
    name: 'Dominik Hodja',
  },
  {
    photo:
      'https://photos.infinum.com/store/7b037d725ceffe7b855065a2176eefea.png',
    name: 'Darko Raguž',
  },
  {
    photo:
      'https://photos.infinum.com/store/fcf2ac617e79d27a01972197e0ae5255.png',
    name: 'Mislav Skomrak',
  },
  {
    photo:
      'https://photos.infinum.com/store/4da403799a9e8426794cd6ddc13f7a84.jpg',
    name: 'Luka Jurić',
  },
  {
    photo:
      'https://photos.infinum.com/store/39a49f6adc1777548f8b133f401810bc.jpg',
    name: 'Marko Docevski',
  },
  {
    photo:
      'https://photos.infinum.com/store/bab04626f1ce534afd66014ef2b8ace0.jpg',
    name: 'Jaka Šušteršič',
  },
  {
    photo:
      'https://photos.infinum.com/store/e0941358a79171ca9d157dbac56e2133.jpg',
    name: 'Eva Cukor',
  },
  {
    photo:
      'https://photos.infinum.com/store/99e7f5388805ee9fb1c32711835d7f77.jpg',
    name: 'Marko Vukosavljević',
  },
  {
    photo:
      'https://photos.infinum.com/store/56d6b9788503a0bc9b7ada467f794264.jpg',
    name: 'Dario Oroz',
  },
  {
    photo:
      'https://photos.infinum.com/store/5b54c2be08337f877a5303e099e2ce55.jpg',
    name: 'Luka Štedul',
  },
  {
    photo:
      'https://photos.infinum.com/store/48655b2018ceb26d0313590e2f2663f6.png',
    name: 'Ivan Grginov',
  },
  {
    photo:
      'https://photos.infinum.com/store/3b8659eaeaa4deb39cfff43b78feabcc.png',
    name: 'Gabriel Glogoški',
  },
  {
    photo:
      'https://photos.infinum.com/store/9c96384413c31d68b5e09954b0a99236.jpg',
    name: 'Bojan Komljenović',
  },
  {
    photo:
      'https://photos.infinum.com/store/bfc5bb938b1ed1b3bac7b109e4da4633.png',
    name: 'Lana Ljevaković',
  },
  {
    photo:
      'https://photos.infinum.com/store/19c4c51e9aa240f7bcb9da499663d600.jpeg',
    name: 'Vedran Pavić',
  },
  {
    photo:
      'https://photos.infinum.com/store/a1f63ae57a2bc9d432f5a584c7c94a2f.jpg',
    name: 'Goran Piskač',
  },
  {
    photo:
      'https://photos.infinum.com/store/086f9489a476c0c45d4534b82d937d95.jpg',
    name: 'Ivan Tomica',
  },
  {
    photo:
      'https://photos.infinum.com/store/49de9740eed3cc861bd0eef8026e0cd3.jpg',
    name: 'Josip Krnjić',
  },
  {
    photo:
      'https://photos.infinum.com/store/8419a27aaf09d9538c75405d7c03418f.jpg',
    name: 'Lovro Bikić',
  },
  {
    photo:
      'https://photos.infinum.com/store/3d225e9edd53e7b7555b43a9076930bc.jpg',
    name: 'Jonatan Pleško',
  },
  {
    photo:
      'https://photos.infinum.com/store/6f5071a1246373454584109043c9eaa3.JPG',
    name: 'Nikola Buhiniček',
  },
  {
    photo:
      'https://photos.infinum.com/store/0f7286aef01a9ffc8544c38df69cd2eb.jpg',
    name: 'Marin Krešo',
  },
  {
    photo:
      'https://photos.infinum.com/store/42518855abe99609e6046abd5df75d6e.jpg',
    name: 'Martina Barać',
  },
  {
    photo:
      'https://photos.infinum.com/store/afe3a634894c76f62153aa14f2796563.jpeg',
    name: 'Kristijan Jaklinović',
  },
  {
    photo:
      'https://photos.infinum.com/store/9963523aaa7c294f00485b3678df9f6c.jpg',
    name: 'Mislav Opašić',
  },
  {
    photo:
      'https://photos.infinum.com/store/6672f0192cc9a54821be013e3d5441dd.jpg',
    name: 'Matea Penezić',
  },
  {
    photo:
      'https://photos.infinum.com/store/d96e02c3c81da19c6590d89ec562b46c.png',
    name: 'Tomislav Habalija',
  },
  {
    photo:
      'https://photos.infinum.com/store/de3cd3bee05088eb90d4491111fdb50a.jpg',
    name: 'Maroje Marcelić',
  },
  {
    photo:
      'https://photos.infinum.com/store/b19e28040f3e8c0c2bf8cf5e2f41135b.jpg',
    name: 'Jure Cindro',
  },
  {
    photo:
      'https://photos.infinum.com/store/37ae784ef614c355315a472beaf2527c.jpg',
    name: 'Neja Ludvik',
  },
  {
    photo:
      'https://photos.infinum.com/store/98d58e107f977db238647b8758923b09.jpeg',
    name: 'Siniša Abramović',
  },
  {
    photo:
      'https://photos.infinum.com/store/14d6e0748f5b3c07f2d02a15a7374cb6.jpg',
    name: 'Luka Filipan',
  },
  {
    photo:
      'https://photos.infinum.com/store/32155d760fe7287994c78f6a910ab662.jpg',
    name: 'Matija Đurđek',
  },
  {
    photo:
      'https://photos.infinum.com/store/183310c382441f1280c0e122f03fd587.jpg',
    name: 'Stela Cvijanović',
  },
  {
    photo:
      'https://photos.infinum.com/store/156909887bfe7f872cc70af5067f7cad.jpg',
    name: 'Dino Fazlić',
  },
  {
    photo:
      'https://photos.infinum.com/store/dd6a80ed78663747dec4f2c0084eda27.jpg',
    name: 'Borislav Goleš',
  },
  {
    photo:
      'https://photos.infinum.com/store/1f00f27d719f19e859e45d8269775a0b.jpg',
    name: 'Jelena Njeguš',
  },
  {
    photo:
      'https://photos.infinum.com/store/e9dbb564e993848bd15dd97c30529d65.jpeg',
    name: 'Marijana Šimag',
  },
  {
    photo:
      'https://photos.infinum.com/store/c6ab6ae1c85d01807c776c422af64146.jpg',
    name: 'Matija Derk',
  },
  {
    photo:
      'https://photos.infinum.com/store/00a6645b95e4659d4c2b510bd92d5ee1.png',
    name: 'Luka Marić',
  },
  {
    photo:
      'https://photos.infinum.com/store/3df835eafca11fe0262e09ee60bec2f0.jpeg',
    name: 'Karlo Volf',
  },
  {
    photo:
      'https://photos.infinum.com/store/b00ecb056d0a8ae7682617ebddce9adc.jpeg',
    name: 'Mate Masnov',
  },
  {
    photo:
      'https://photos.infinum.com/store/5f2c10eb999b9f9b60cca65abbb64fc7.jpeg',
    name: 'Emanuel Loborec',
  },
  {
    photo:
      'https://photos.infinum.com/store/355fd86d181f1381844fdffbc14dabd2.jpg',
    name: 'Jurica Martinčević',
  },
  {
    photo:
      'https://photos.infinum.com/store/9be81a752324f17a0b72832806cd1e01.jpg',
    name: 'Nikola Gobović',
  },
  {
    photo:
      'https://photos.infinum.com/store/a17dbd794769ab5213791954dfead14b.jpg',
    name: 'Ivana Prebeg',
  },
  {
    photo:
      'https://photos.infinum.com/store/10cc8e3bbf67688105a5bc49c58d2bc5.jpg',
    name: 'Gordan Bareza',
  },
  {
    photo:
      'https://photos.infinum.com/store/b991be96193a2f387de72caefcf79db8.jpg',
    name: 'Jelena Tomšić',
  },
  {
    photo:
      'https://photos.infinum.com/store/e8473db1ac3d2a916face581d2897397.jpg',
    name: 'Una Mihajlović',
  },
  {
    photo:
      'https://photos.infinum.com/store/b86f1f907d3bc8c011a9d18ec36ca421.jpg',
    name: 'David Valič',
  },
  {
    photo:
      'https://photos.infinum.com/store/6fe71888e9f5554d06f6c1247a224186.jpg',
    name: 'Danijel Buhin',
  },
  {
    photo:
      'https://photos.infinum.com/store/18d45e51d06414280bf8e0beb7266dfe.jpg',
    name: 'Elvis Aličić',
  },
  {
    photo:
      'https://photos.infinum.com/store/41f1e5885a5780735e6abec6c27e0d77.jpg',
    name: 'Bruno Gudelj',
  },
  {
    photo:
      'https://photos.infinum.com/store/99dd96f32dd049c33c9b6069f697ad26.jpeg',
    name: 'Mladen Rakonjac',
  },
  {
    photo:
      'https://photos.infinum.com/store/a7de037e61447b3d984fefba5cea3868.jpg',
    name: 'Đani Pavić',
  },
  {
    photo:
      'https://photos.infinum.com/store/a9e559d8a08e5ecce7e4b2cd54bf70b7.jpeg',
    name: 'Petra Grubišić',
  },
  {
    photo:
      'https://photos.infinum.com/store/aaea282e682dbe4721ecbfd208befbdf.jpg',
    name: 'Ivan Arlović',
  },
  {
    photo:
      'https://photos.infinum.com/store/f384ecec7f5eb510b4b1edbcf1725baf.jpg',
    name: 'Martina Šnajder',
  },
  {
    photo:
      'https://photos.infinum.com/store/e2bef51a1ca543628c5c5f20078e330f.jpg',
    name: 'Miloš Darmanović',
  },
  {
    photo:
      'https://photos.infinum.com/store/fce31ad667233623900b78ba75845d61.jpg',
    name: 'Andrija Šćepanović',
  },
  {
    photo:
      'https://photos.infinum.com/store/7bf3e773194c6096dd20213b24a54f19.JPG',
    name: 'Nebojša Žigić',
  },
  {
    photo:
      'https://photos.infinum.com/store/f98f0c8de76c5b68be69f36eafe7e4f4.jpg',
    name: 'Sara Nejašmić',
  },
  {
    photo:
      'https://photos.infinum.com/store/c84901ad9f68ad057ad64ad6f5158e4d.jpg',
    name: 'Luka Pavić',
  },
  {
    photo:
      'https://photos.infinum.com/store/b3a252cb9166449ffcead608a0a66ff5.jpg',
    name: 'Tanja Bezjak',
  },
  {
    photo:
      'https://photos.infinum.com/store/1635d96e8c49220bbf447ca06a4254fe.jpg',
    name: 'Tin Bubanko',
  },
  {
    photo:
      'https://photos.infinum.com/store/b178528f97c37fe2065e3de282e8a25b.jpg',
    name: 'Filip Ambruš',
  },
  {
    photo:
      'https://photos.infinum.com/store/06f9419c66d6cc9d3e7e8d7dc8272750.jpg',
    name: 'Alex Pinchuk',
  },
  {
    photo:
      'https://photos.infinum.com/store/f746a85fd859e3f8ed8fb6f3beb73f80.jpg',
    name: 'Nikola Heged',
  },
  {
    photo:
      'https://photos.infinum.com/store/10e4d92a89a04209860e5f2c7b5e22c4.png',
    name: 'Kristian Jurišić',
  },
  {
    photo:
      'https://photos.infinum.com/store/985b3f97cdeee80d56cc959598dd2d78.JPG',
    name: 'Ivana Lončarek',
  },
  {
    photo:
      'https://photos.infinum.com/store/577bbe08d22dd9eced7a56dde36ea00d.jpg',
    name: 'Ante Pelivan',
  },
  {
    photo:
      'https://photos.infinum.com/store/63e3a32d94f44b4e379be9fffbd7af7b.JPG',
    name: 'Petra Završki',
  },
  {
    photo:
      'https://photos.infinum.com/store/7e1853e84ad41a515013d00ec2e146ad.jpg',
    name: 'Kristijan Trbojević',
  },
  {
    photo:
      'https://photos.infinum.com/store/2e7f387b99192405870f858674d9d480.png',
    name: 'Mirna Marković',
  },
  {
    photo:
      'https://photos.infinum.com/store/ea75dcf00c1eb2ff9d2a905cebc302c5.jpg',
    name: 'Stjepan Banek',
  },
  {
    photo:
      'https://photos.infinum.com/store/fd6ac8e43ca458d075f8958d2d935061.PNG',
    name: 'Domagoj Hustnjak',
  },
  {
    photo:
      'https://photos.infinum.com/store/a8170e2c3ff5b363122833d7256b4bd7.jpg',
    name: 'Jakov Mučnjak',
  },
  {
    photo:
      'https://photos.infinum.com/store/2c3693e93ce2166bec96a8224a76245d.jpg',
    name: 'Dario Krišković',
  },
  {
    photo:
      'https://photos.infinum.com/store/3843fbe219d8518b0453ba9745e86911.jpg',
    name: 'Giorgio Provenzale',
  },
  {
    photo:
      'https://photos.infinum.com/store/11ec3794b51bebb08521bb743888d113.jpeg',
    name: 'Tin Petračić',
  },
  {
    photo:
      'https://photos.infinum.com/store/1ebf031dc60242af18039945553f5b1d.jpeg',
    name: 'Kristian Djakovic',
  },
  {
    photo:
      'https://photos.infinum.com/store/c1544e34bdb0f51088372c268c457a3a.png',
    name: 'Ivana Leto',
  },
  {
    photo:
      'https://photos.infinum.com/store/3618aad7a6b276b7a7a8356933056431.jpeg',
    name: 'Anteo Ivankov',
  },
  {
    photo:
      'https://photos.infinum.com/store/21a58e5875a142d3a73b0557baf3a6a6.jpg',
    name: 'Marin Šimić',
  },
  {
    photo:
      'https://photos.infinum.com/store/ca8adf75b02c76b542ddc16cf69e70c8.png',
    name: 'Marko Košak',
  },
  {
    photo:
      'https://photos.infinum.com/store/275db45c10ac992a0bf330437ea5dbcc.jpg',
    name: 'Hrvoje Podhraški',
  },
  {
    photo:
      'https://photos.infinum.com/store/cb5edbe60785b43950878d07fbd9eec9.png',
    name: 'Mirna Hari',
  },
  {
    photo:
      'https://photos.infinum.com/store/cac2e1eb6891b7c6a68123237ff5d6b9.png',
    name: 'Jurica Pavlović',
  },
  {
    photo:
      'https://photos.infinum.com/store/4f1a6e5bc7a85790b0ab0586bd250575.jpeg',
    name: 'Bojan Rendulić',
  },
  {
    photo:
      'https://photos.infinum.com/store/a198886eeea12197464d87b8045fd467.jpg',
    name: 'Martin Obad',
  },
  {
    photo:
      'https://photos.infinum.com/store/98b21b11bb937bdb8c7d96bd1c06487e.png',
    name: 'Luka Klarić',
  },
  {
    photo:
      'https://photos.infinum.com/store/816aa93f46e0646513fbfd0343b9c53b.png',
    name: 'Marko Došen',
  },
  {
    photo:
      'https://photos.infinum.com/store/77fd13d568aca392ccda87840b2c3840.jpg',
    name: 'Ivan Šlabek',
  },
  {
    photo:
      'https://photos.infinum.com/store/7a3ddb17dafef5cb0b597c4ab7acea96.jpg',
    name: 'Anže Pureber',
  },
  {
    photo:
      'https://photos.infinum.com/store/8d3689ce0b7670750174bb78a0a7187e.jpg',
    name: 'Matea Lay',
  },
  {
    photo:
      'https://photos.infinum.com/store/4bec9bef0baddc591e9c26ac07771298.png',
    name: 'Marko Milić',
  },
  {
    photo:
      'https://photos.infinum.com/store/4ccd18711333de7fafe5f696ab864514.jpg',
    name: 'Roko Spahija',
  },
  {
    photo:
      'https://photos.infinum.com/store/24cd32aece245249465cf6937848eb8c.jpg',
    name: 'Mark Frelih',
  },
  {
    photo:
      'https://photos.infinum.com/store/d8125deabdd7aa361ecc8cdc5188fcc8.jpg',
    name: 'Kata Juras',
  },
  {
    photo:
      'https://photos.infinum.com/store/fcb64560661dcc0d2329f11b696645ce.png',
    name: 'Lovro Klopotan',
  },
  {
    photo:
      'https://photos.infinum.com/store/bbe8d3a7751e59cc1fa9fa55f15239a8.jpg',
    name: 'Gabrijela Bošnjak',
  },
  {
    photo:
      'https://photos.infinum.com/store/c9670b3ab2bf7474abbe56187f3d76a8.jpg',
    name: 'Stjepan Šandor',
  },
  {
    photo:
      'https://photos.infinum.com/store/49c2a422998930374249fc1254aa5e84.png',
    name: 'Krešimir Šimičić',
  },
  {
    photo:
      'https://photos.infinum.com/store/facd699ed2304ad374c544c8a1b3f5d1.jpg',
    name: 'Željko Mešin',
  },
  {
    photo:
      'https://photos.infinum.com/store/3d631d5d3d3c8af6af438a50ae353986.png',
    name: 'Endrina Eskić',
  },
  {
    photo:
      'https://photos.infinum.com/store/1e2ea05708af8d5f9950e3247c9b5269.png',
    name: 'Hrvoje Kukolj',
  },
  {
    photo:
      'https://photos.infinum.com/store/1c5fde380968640339abb5e92875137b.jpg',
    name: 'Andrej Ivanović',
  },
  {
    photo:
      'https://photos.infinum.com/store/debb31ce5a7d566be213fdf6ec3f0c5d.jpeg',
    name: 'Višeslav Dasović',
  },
  {
    photo:
      'https://photos.infinum.com/store/9f18d9d7a1af241e6dd4f0b5a2ea70fa.jpg',
    name: 'Enio Jergović',
  },
  {
    photo:
      'https://photos.infinum.com/store/9926c164ea58c39a2ef47e3996960c7b.jpg',
    name: 'Ivan Miklec',
  },
  {
    photo:
      'https://photos.infinum.com/store/d4140f484c1b572583cc20a7a30cad5d.jpg',
    name: 'Marija Kata Vlašić',
  },
  {
    photo:
      'https://photos.infinum.com/store/711110a9688df85c63abb09eba80088d.jpg',
    name: 'Rade Filipović',
  },
  {
    photo:
      'https://photos.infinum.com/store/d19719c8006a34bcaf70a04889e340b1.png',
    name: 'Sabrina Belac',
  },
  {
    photo:
      'https://photos.infinum.com/store/bb05692215ff1bfbef3e47226f05e795.jpg',
    name: 'Mislav Miočević',
  },
  {
    photo:
      'https://photos.infinum.com/store/69c5f1dafdf4be5b900dd52130da1703.jpg',
    name: 'Marko Marin',
  },
  {
    photo:
      'https://photos.infinum.com/store/606057e74391ae235e705cc62bdcf84f.png',
    name: 'Petar Jadek',
  },
  {
    photo:
      'https://photos.infinum.com/store/9a460a5cf3149d9b8cac5d00129887a5.jpg',
    name: 'Matej Maroš',
  },
  {
    photo:
      'https://photos.infinum.com/store/62c100cc7c17ff95d882749ea27e92ca.jpg',
    name: 'Martin Čolja',
  },
  {
    photo:
      'https://photos.infinum.com/store/93037f8130ba3a82a0dbc45c68fcdcaf.jpg',
    name: 'Marko Knežević',
  },
  {
    photo:
      'https://photos.infinum.com/store/d996861561540dd73569c10373702f26.jpg',
    name: 'Ban Marković',
  },
  {
    photo:
      'https://photos.infinum.com/store/bef07585bcd0545135baeb0bdd6da8a4.jpg',
    name: 'Dino Vinković',
  },
  {
    photo:
      'https://photos.infinum.com/store/690c26f44674c635a5d4c56f55183caf.png',
    name: 'Lucija Zlatar',
  },
  {
    photo:
      'https://photos.infinum.com/store/b6c64919365eef0dd307adfafb926295.jpg',
    name: 'Paškvalino Gaćina',
  },
  {
    photo:
      'https://photos.infinum.com/store/f4bc8ab589da20cd014846267d111c14.jpeg',
    name: 'Josip Pupić',
  },
  {
    photo:
      'https://photos.infinum.com/store/039b2c7f9b0ea18a576f29e0f31fbd8f.jpg',
    name: 'Luka Knezić',
  },
  {
    photo:
      'https://photos.infinum.com/store/acae7f76e0e20c19818e1d2360a476b0.jpg',
    name: 'Antonio Matošević',
  },
  {
    photo:
      'https://photos.infinum.com/store/a1a4a04dfbe8c93b2e7b11703201e142.jpg',
    name: 'Marko Nikolić',
  },
  {
    photo:
      'https://photos.infinum.com/store/64bf0b1268e1195d2beb9da408b40ff4.png',
    name: 'Niko Pelicarić',
  },
  {
    photo:
      'https://photos.infinum.com/store/feb3504471af10af4ec9676a64ddb96e.jpg',
    name: 'Kristina Matijašić',
  },
  {
    photo:
      'https://photos.infinum.com/store/cf0b82a15c16a8fc764409f765e48cba.jpg',
    name: 'Juran Papuga',
  },
  {
    photo:
      'https://photos.infinum.com/store/395c806485a0c9280836eada2acefc19.jpg',
    name: 'Tena Roca',
  },
  {
    photo:
      'https://photos.infinum.com/store/77a79b078d52aa846828048175169069.jpg',
    name: 'Josip Šalković',
  },
  {
    photo:
      'https://photos.infinum.com/store/69ed56d54f92e4c183fe300501a72476.jpg',
    name: 'Stevan Bogosavljević',
  },
  {
    photo:
      'https://photos.infinum.com/store/4fe96e11bd472aead8a4bd2dda4ce47e.jpg',
    name: 'Maša Burda',
  },
  {
    photo:
      'https://photos.infinum.com/store/29250eb2f7e6a93eeb7166102f1c09cd.jpeg',
    name: 'Hana Sokolović',
  },
  {
    photo:
      'https://photos.infinum.com/store/211debfb7acd605f348b847ee918b34b.png',
    name: 'Marko Majcenić',
  },
  {
    photo:
      'https://photos.infinum.com/store/708112649dbf3cc0d0212dd67e3836f5.jpg',
    name: 'Filip Čulinović',
  },
  {
    photo:
      'https://photos.infinum.com/store/79d39eb2ba4fdd669bb0889c2be3702e.jpeg',
    name: 'Krešimir Vlahov',
  },
  {
    photo:
      'https://photos.infinum.com/store/11c7d57e6462304abe9d533bac18c8de.jpg',
    name: 'Leo Leljak',
  },
  {
    photo:
      'https://photos.infinum.com/store/5c42d36c1e1aedf53fb3cfc4062fb44d.png',
    name: 'Zen Lednik',
  },
  {
    photo:
      'https://photos.infinum.com/store/2e72a560d8e243baf607afd4b95d05ad.jpg',
    name: 'Marijan Novak',
  },
  {
    photo:
      'https://photos.infinum.com/store/e4a6f46beb2fa6f69237607d8a26acd0.jpg',
    name: 'Katarina Skelin',
  },
  {
    photo:
      'https://photos.infinum.com/store/3c6acf932ab5135a0415c7bee4d7fe54.jpg',
    name: 'Edvin Močibob',
  },
  {
    photo:
      'https://photos.infinum.com/store/867aa107383394175dcf5c099a7493a7.jpg',
    name: 'Raul Sušanj',
  },
  {
    photo:
      'https://photos.infinum.com/store/6aefca99a257814bfebfde33109b74bd.jpg',
    name: 'Alexandru Drumia',
  },
  {
    photo:
      'https://photos.infinum.com/store/eff243e1b7f2480edabbf7cfce1c418e.jpg',
    name: 'Petar Marinac',
  },
  {
    photo:
      'https://photos.infinum.com/store/523d0c1e07419d0222b7ea4202f7cfc5.jpg',
    name: 'Marko Vodopija',
  },
  {
    photo:
      'https://photos.infinum.com/store/bbbe189a4b016c78da866b8c40c2b131.jpg',
    name: 'Barbara Črgar',
  },
  {
    photo:
      'https://photos.infinum.com/store/bee56bb9cb2e2a472e826d37897920db.jpg',
    name: 'Igor Obradović',
  },
  {
    photo:
      'https://photos.infinum.com/store/859b0d3ec85afec5e3e92f761c9cab69.jpg',
    name: 'Vedran Dunkić',
  },
  {
    photo:
      'https://photos.infinum.com/store/5d91046a89c862f44e8065952b198210.jpeg',
    name: 'Ivana Križić',
  },
  {
    photo:
      'https://photos.infinum.com/store/26ee337ac15284a684a4e7210dca0922.jpg',
    name: 'Tomislav Zidar',
  },
  {
    photo:
      'https://photos.infinum.com/store/db2a9a54f64876c0474275985e32a0f3.jpg',
    name: 'Igor Buzatović',
  },
  {
    photo:
      'https://photos.infinum.com/store/24453ce12614b94b6ff5c2140607be12.jpg',
    name: 'Mihael Vuherer',
  },
  {
    photo:
      'https://photos.infinum.com/store/71423a4635e548e3b7eb7e8b22c3736b.jpeg',
    name: 'Tea Čonč',
  },
  {
    photo:
      'https://photos.infinum.com/store/586d4075d054fc8b96b06c53d0ef354b.jpg',
    name: 'Tomislav Marjanović',
  },
  {
    photo:
      'https://photos.infinum.com/store/8046bcd391ae436a2aa46ceee4570b02.jpg',
    name: 'Petra Bokulić',
  },
  {
    photo:
      'https://photos.infinum.com/store/ca0894d3ee2caa15c4483c426d816103.png',
    name: 'Josip Trbuščić',
  },
  {
    photo:
      'https://photos.infinum.com/store/cb98efe2d221b2f310ebb786ca1b7715.jpg',
    name: 'Sarah Baron Brljević',
  },
  {
    photo:
      'https://photos.infinum.com/store/29d9ec0c92e2a5b414d3790b5b6c13df.png',
    name: 'Hrvoje Matić',
  },
  {
    photo:
      'https://photos.infinum.com/store/f2d6d141c339ed5d502ff738d0783c02.jpeg',
    name: 'Goran Alković',
  },
  {
    photo:
      'https://photos.infinum.com/store/3a785965147df0f50d4b7fb5d72a1e89.png',
    name: 'Grigor Dumbović',
  },
  {
    photo:
      'https://photos.infinum.com/store/c1aeb2cd53eefdc573143a2f49fe4138.jpg',
    name: 'Klemen Klemenčič',
  },
  {
    photo:
      'https://photos.infinum.com/store/0ef0fe1383c33199da1709a819dda987.jpg',
    name: 'David Blažević',
  },
  {
    photo:
      'https://photos.infinum.com/store/617a0803bd7ecf833235895c7f4befc0.jpg',
    name: 'Toni Martinčić',
  },
  {
    photo:
      'https://photos.infinum.com/store/a7bd5783d806b2e912f3abe4f0d921ab.jpg',
    name: 'Matej Minažek',
  },
  {
    photo:
      'https://photos.infinum.com/store/18590f2f3c1474103208110676f81672.jpeg',
    name: 'Nives Mandić',
  },
  {
    photo:
      'https://photos.infinum.com/store/1142161588e9c97c266fc78974a884f8.jpg',
    name: 'Gabrijela Orsag',
  },
  {
    photo:
      'https://photos.infinum.com/store/5cbdf7d3ad95e0e9802b74f2d5171eca.jpg',
    name: 'Matea Bogdanić',
  },
  {
    photo:
      'https://photos.infinum.com/store/cdb11e63eee2ea9991980817e845eac5.png',
    name: 'Željko Trogrlić',
  },
  {
    photo:
      'https://photos.infinum.com/store/9be7c7df698a3f3da3fa67446660577c.jpeg',
    name: 'Fran Vižintin',
  },
  {
    photo:
      'https://photos.infinum.com/store/676f3b5d7ddde582e54b2381b6be63e4.png',
    name: 'Mihovil Nakić-Vojnović',
  },
  {
    photo:
      'https://photos.infinum.com/store/e2d5d520b4a17bb012b525555c3667e9.jpg',
    name: 'Adriano Grgić',
  },
  {
    photo:
      'https://photos.infinum.com/store/1ebcc2669ace2b647c2f529736c4a114.jpg',
    name: 'Tanja Abazi',
  },
  {
    photo:
      'https://photos.infinum.com/store/7eb5a2f23391f6053345f2196363332a.jpg',
    name: 'Vedran Brblić',
  },
  {
    photo:
      'https://photos.infinum.com/store/77afaa092a54c3e69468a7daaca88a54.jpg',
    name: 'Ivan Čižmak',
  },
  {
    photo:
      'https://photos.infinum.com/store/be9ca2d4fbed88de832131011148128a.jpg',
    name: 'Danijel Čubrilović',
  },
  {
    photo:
      'https://photos.infinum.com/store/5852fc91458baa2b63ecac8df0468a93.jpg',
    name: 'Ema Šimon',
  },
  {
    photo:
      'https://photos.infinum.com/store/4f5f7af7049138223dfc52e908b85f7b.jpg',
    name: 'Marko Cirkveni',
  },
  {
    photo:
      'https://photos.infinum.com/store/9bfddbbc737c18d0d01f4fe1887fe969.jpg',
    name: 'Josip Januš',
  },
  {
    photo:
      'https://photos.infinum.com/store/00a796f91438c21f5fc0963012fedc23.jpg',
    name: 'Saša Smolinski',
  },
  {
    photo:
      'https://photos.infinum.com/store/8904cef4733b572076c32bfee408b136.png',
    name: 'Višnja Jajetić',
  },
  {
    photo:
      'https://photos.infinum.com/store/1ccc5a6c94aa92bd847845bcbe7127aa.jpeg',
    name: 'Uroš Krstić',
  },
  {
    photo:
      'https://photos.infinum.com/store/5389854ceb005c680a2615f3ef740142.jpg',
    name: 'Damir Brdar',
  },
  {
    photo:
      'https://photos.infinum.com/store/eaae0592c627bc83323a6e5597ab80d1.png',
    name: 'Luka Bartolić',
  },
  {
    photo:
      'https://photos.infinum.com/store/5337e08a0f19741d6ee6b89b84d61d58.jpg',
    name: 'Cağri Atman',
  },
  {
    photo:
      'https://photos.infinum.com/store/9dd1c589c515a393b158af57a256d4c8.jpg',
    name: 'Branimir Gregov',
  },
  {
    photo:
      'https://photos.infinum.com/store/09b8d5fbae2799fbfccdfc8e1e8f0f4e.jpg',
    name: 'Dona Pejnović',
  },
  {
    photo:
      'https://photos.infinum.com/store/fd335119302843e8be94df7c69b219ad.jpg',
    name: 'Dominik Blažić',
  },
  {
    photo:
      'https://photos.infinum.com/store/750fdec1ee1ad67452931848db75539a.jpg',
    name: 'Davorin Prišlin',
  },
  {
    photo:
      'https://photos.infinum.com/store/bc5eee0b46c2b53225a2364441d4f3c0.png',
    name: 'Durim Kryeziu',
  },
  {
    photo:
      'https://photos.infinum.com/store/066f0708177b556c177bbeefc89b963b.jpg',
    name: 'Antonela Petek',
  },
  {
    photo:
      'https://photos.infinum.com/store/60b4329b204210b5e91d03d541c32910.jpg',
    name: 'Marijan Hranj',
  },
  {
    photo:
      'https://photos.infinum.com/store/2d8b4f495dd5892a9447b62815fe3ed2.jpg',
    name: 'Monia Škurtan',
  },
  {
    photo:
      'https://photos.infinum.com/store/2aa785c9a276e17581c31a02e432c717.jpg',
    name: 'Vedran Devčić',
  },
  {
    photo:
      'https://photos.infinum.com/store/201490c23ef965fc91fbf27f4e07f654.jpg',
    name: 'Igor Lide',
  },
  {
    photo:
      'https://photos.infinum.com/store/137cd46b591171d2124d51b90bb65134.jpg',
    name: 'Mia Maček',
  },
  {
    photo:
      'https://photos.infinum.com/store/58fb185b9f55f4655b58e23e9477bd6d.jpg',
    name: 'Marina Soldan',
  },
  {
    photo:
      'https://photos.infinum.com/store/70d79f8d76b4c55878fac735ac46ed25.jpeg',
    name: 'Nikolina Martinec',
  },
  {
    photo:
      'https://photos.infinum.com/store/cb57096fbf20cb84a95b09c4f6e5e41f.jpeg',
    name: 'Đorđe Lacmanović',
  },
  {
    photo:
      'https://photos.infinum.com/store/19d709d727bcff5d0fa0fc555fcafcbc.jpg',
    name: 'Maja Matanović',
  },
  {
    photo:
      'https://photos.infinum.com/store/eb8eb25eaed28aa9145d7adc09f7053c.jpg',
    name: 'Emanuel Đolo',
  },
  {
    photo:
      'https://photos.infinum.com/store/8613a4e873675cbaecd258b0ab41912c.jpg',
    name: 'Tea Glumac',
  },
  {
    photo:
      'https://photos.infinum.com/store/040e3266798d11e56caa5b889867ad79.jpg',
    name: 'Tibor Rogulja',
  },
  {
    photo:
      'https://photos.infinum.com/store/63d48481f9e7e6309679917fdb85ec91.jpg',
    name: 'Marino Franušić',
  },
  {
    photo:
      'https://photos.infinum.com/store/45ec3f3e84b7ce2988cf52ab1389f273.png',
    name: 'Alen Grakalić',
  },
  {
    photo:
      'https://photos.infinum.com/store/f238861426f632feb82ba955dba053cc.jpg',
    name: 'Ana Petričić',
  },
  {
    photo:
      'https://photos.infinum.com/store/a279de8c4ddb22b8d55d8cc1e0c6fe84.jpg',
    name: 'Josipa Tadić',
  },
  {
    photo:
      'https://photos.infinum.com/store/419e7d33491787237b19c8977a629965.jpg',
    name: 'Matej Keser',
  },
  {
    photo:
      'https://photos.infinum.com/store/541b925509c48ab823e2563f712ee030.jpg',
    name: 'Mato Stanić',
  },
  {
    photo:
      'https://photos.infinum.com/store/bd2671c4e62f24dabdf016f7bd191da5.jpg',
    name: 'Milan Vilov',
  },
  {
    photo:
      'https://photos.infinum.com/store/116b1a43ca437f6f6de9aa4608c0b7ee.jpg',
    name: 'Miroslav Foltyn',
  },
  {
    photo:
      'https://photos.infinum.com/store/8afc1b30179c7f6f97d857f2f7c03494.jpg',
    name: 'Zlatko Štulić',
  },
  {
    photo:
      'https://photos.infinum.com/store/13188228b0f8334d15b8ac73c91322ab.jpg',
    name: 'Maja Turković',
  },
  {
    photo:
      'https://photos.infinum.com/store/517f5d125868cde01c3c7d0d8030490e.jpg',
    name: 'Palma Dizdarević',
  },
  {
    photo:
      'https://photos.infinum.com/store/49735c4349cfdd8170a8e8334c36c540.png',
    name: 'Martina Tuškan Mendaš',
  },
  {
    photo:
      'https://photos.infinum.com/store/0ee3006acbf2cc76cac9354fd5edd782.jpg',
    name: 'Andrea Fusek',
  },
  {
    photo:
      'https://photos.infinum.com/store/882a39c50e5f0cfeb8e1f8c7695231b1.jpeg',
    name: 'Željko Mataić',
  },
  {
    photo:
      'https://photos.infinum.com/store/319f62fb0949615ae6edd9b4f66ddff7.jpg',
    name: 'Mario Borna Mjertan',
  },
  {
    photo:
      'https://photos.infinum.com/store/9c8302b0b5af51bd6ffa261724dc5727.jpg',
    name: 'Ante Kovačević',
  },
  {
    photo:
      'https://photos.infinum.com/store/83e6b16228c65247ae0dd72e13658668.jpg',
    name: 'Josip Kovačić Radovanović',
  },
  {
    photo:
      'https://photos.infinum.com/store/c32c45a1f6a9ca83a3b7bd351d223e83.jpg',
    name: 'Luka Mihačić',
  },
  {
    photo:
      'https://photos.infinum.com/store/7a67507c0888b8aeda419786176d16c0.jpg',
    name: 'Jelena Musić',
  },
  {
    photo:
      'https://photos.infinum.com/store/c0b65d583207099450d7ae9ca1b3debc.jpeg',
    name: 'Rafael Munitić',
  },
  {
    photo:
      'https://photos.infinum.com/store/a1cae072cf42b37137b13684ebabc09a.jpg',
    name: 'Šimun Ivanac',
  },
  {
    photo:
      'https://photos.infinum.com/store/51b485ce5e727e8fda314e267c5fa875.jpg',
    name: 'Jonathan Boakes',
  },
  {
    photo:
      'https://photos.infinum.com/store/4a754895ed67e980e8170608ab495847.jpeg',
    name: 'Matilda Duvnjak',
  },
  {
    photo:
      'https://photos.infinum.com/store/5221969762a19e9610f3875686b9c121.png',
    name: 'Ricardo Kulušić',
  },
  {
    photo:
      'https://photos.infinum.com/store/ac0a30a9ff0694d4a5c61d2f1bd54a56.jpg',
    name: 'Zvonimir Medak',
  },
  {
    photo:
      'https://photos.infinum.com/store/cb48217effacd28a68ba8243910dfb6d.png',
    name: 'Dražen Smaranduj',
  },
  {
    photo:
      'https://photos.infinum.com/store/9ee0877e74b937bfb01286f19712a23a.jpg',
    name: 'Ivan Mitrić',
  },
  {
    photo:
      'https://photos.infinum.com/store/da80f0c07196139219b6c5912df32055.jpg',
    name: 'Ranko Pavić',
  },
  {
    photo:
      'https://photos.infinum.com/store/15ad84ab9f3b39a1d485ed352315e4d7.jpeg',
    name: 'Vicko Lukšić',
  },
  {
    photo:
      'https://photos.infinum.com/store/aeb69d59e9e322a66e631845ca22484a.jpg',
    name: 'Manuel Vrhovac',
  },
  {
    photo:
      'https://photos.infinum.com/store/cee03d1f2775cce43839006eb62e35a1.jpg',
    name: 'Dominik Mikulčić',
  },
  {
    photo:
      'https://photos.infinum.com/store/d6f99467c14b26fab0131602f090fdd3.jpg',
    name: 'Kristijan Knežić',
  },
  {
    photo:
      'https://photos.infinum.com/store/11c77c1e735661fb6f659e6f6d9314c4.jpeg',
    name: 'Nicola Lasagni',
  },
  {
    photo:
      'https://photos.infinum.com/store/a8324b8f5a838244a9b3796f691e11f1.jpeg',
    name: 'Josip Zavada',
  },
  {
    photo:
      'https://photos.infinum.com/store/b1bbfe32e7c766f20949de731af55dec.jpg',
    name: 'Luka Terzić',
  },
  {
    photo:
      'https://photos.infinum.com/store/ef307eba383d1c61a14fd7b24a536ce9.jpg',
    name: 'Tihana Štifanić',
  },
  {
    photo:
      'https://photos.infinum.com/store/bc1ff513ebb0d03fc1c41cbe912889f1.jpg',
    name: 'Bruno Klarić',
  },
  {
    photo:
      'https://photos.infinum.com/store/4ccef47ef4a89e6f92ea7419abe5f649.jpg',
    name: 'Ramona Dragaš',
  },
  {
    photo:
      'https://photos.infinum.com/store/bf6718ea2a798698b2c8a10e49a2ffe4.jpg',
    name: 'Bono Tadić',
  },
  {
    photo:
      'https://photos.infinum.com/store/a5eb6f2ef66b98057d8471a2e73aa7fb.jpg',
    name: 'Filip Čulig',
  },
  {
    photo:
      'https://photos.infinum.com/store/a99c264a6ac61fa6f6e3afe5414ca3bc.jpg',
    name: 'Grigor Škarić',
  },
  {
    photo:
      'https://photos.infinum.com/store/e9d5ebfd3704b4be558c045cd46fdd03.jpg',
    name: 'Ines Kosir',
  },
  {
    photo:
      'https://photos.infinum.com/store/59a1bb6a226ac59701c01fca9c8ca3b3.jpg',
    name: 'Mihael Kampić',
  },
  {
    photo:
      'https://photos.infinum.com/store/b1ace8e826beac930ffef95548759fd6.jpg',
    name: 'Silvio Mihalic',
  },
  {
    photo:
      'https://photos.infinum.com/store/54dc53e63601f7ffe25c7742338549d3.jpg',
    name: 'Tin Reiter',
  },
  {
    photo:
      'https://photos.infinum.com/store/5a450a9a558f234a298e609cc2b6a829.jpeg',
    name: 'Ivan Navratil',
  },
];

const https = require('https');
const fs = require('fs');

people.forEach((person) => {
  const file = fs.createWriteStream(`${person.name}.jpg`);
  const request = https.get(person.photo, function (response) {
    response.pipe(file);
  });
});
