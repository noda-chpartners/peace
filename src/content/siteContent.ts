export const siteContent = {
  site: {
    name: 'PEACE',
    title: 'PEACE｜高円寺のハンドメイドシルバージュエリー',
    description:
      '高円寺・新高円寺駅から徒歩5分。ハンドメイドのシルバージュエリーとレザー小物を扱うPEACEの公式サイトです。',
    canonicalUrl: 'https://peace-craft.pages.dev/',
    ogImage: '/ogp.png',
  },
  navigation: [
    { label: 'CONCEPT', href: '#concept' },
    { label: 'CRAFT', href: '#craft' },
    { label: 'BRANDS', href: '#brands' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'ACCESS', href: '#access' },
  ],
  hero: {
    eyebrow: 'HANDCRAFTED SILVER JEWELRY',
    title: 'PEACE',
    location: 'KOENJI, TOKYO',
    statement: '日々に馴染み、永く使い続けられるものを。',
  },
  concept: {
    eyebrow: 'OUR ORIGIN',
    titleLines: ['つながりから生まれ、', '手仕事で受け継ぐ。'],
    peace:
      '1996年からWING ROCKオーナー・前崎リキ氏に師事。それがPEACEのorigin（始まり）です。',
    philosophy:
      '「MEDICINE WHEEL」が表す、みんなが繋がっているというPEACEな気持ち。学びを礎に、2007年にPEACEを設立しました。',
    sourceLabel: 'PEACE OFFICIAL CONCEPT',
  },
  craft: {
    eyebrow: 'THE CRAFT',
    titleLines: ['銀と向き合う、', '静かな時間。'],
    body:
      '道具を手に、素材の表情を見ながら、一点ずつ形にしていく。店の奥にある工房で、PEACEのジュエリーは生まれます。',
    note: 'HANDMADE IN KOENJI',
  },
  wingRock: {
    eyebrow: 'WING ROCK',
    title: 'インディアンジュエリーと、ハンドクラフト。',
    body:
      'ナバホ族が神聖な山として崇める実存の岩山“ウイングロック”の名を胸に、独学で身につけたシルバージュエリー製作で作品を作り続ける。',
    sourceLabel: 'WING ROCK OFFICIAL CONCEPT',
  },
  brands: [
    { name: 'PEACE', detail: 'ORIGINAL SILVER JEWELRY' },
    { name: 'WING ROCK', detail: 'INDIAN JEWELRY' },
    { name: 'はなぶさ', detail: 'SILVER JEWELRY' },
    { name: 'ZOOL LEATHER', detail: 'レザー小物' },
    { name: "PHERROW'S", detail: '' },
  ],
  online: {
    eyebrow: 'PEACE ONLINE SHOP',
    titleLines: ['PEACEの作品を、', 'オンラインでも。'],
    body:
      'リング、ペンダントトップ、バングル、ピアスなど、PEACEのオリジナルアイテムをご覧いただけます。',
    href: 'https://shop.peace-07.com/view/category/ct1',
    label: 'PEACEの商品を見る',
  },
  gallery: {
    eyebrow: 'AT PEACE',
    title: '店と工房の風景',
  },
  shop: {
    eyebrow: 'VISIT US',
    title: 'PEACE',
    telephone: '0333153833',
    telephoneDisplay: '03-3315-3833',
    address: '東京都杉並区高円寺南3丁目22-2',
    access: '高円寺駅・新高円寺駅から徒歩5分',
    hours: [
      { label: '平日', value: '11:00–19:00' },
      { label: '土日祝', value: '11:00–19:00' },
      { label: '定休日', value: '水曜日' },
    ],
    notice: '急な定休はX（旧Twitter）で随時更新します。',
    mapHref: 'https://maps.app.goo.gl/9MWvSLcpLtwMbp4e8?g_st=ic',
    mapEmbed:
      'https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%9D%89%E4%B8%A6%E5%8C%BA%E9%AB%98%E5%86%86%E5%AF%BA%E5%8D%973%E4%B8%81%E7%9B%AE22-2&output=embed',
  },
  social: [
    {
      name: 'Instagram',
      icon: 'instagram',
      href: 'https://www.instagram.com/hidepeace?igsh=MTJvNHhzaTJwMWJvYw==',
    },
    {
      name: 'X',
      icon: 'x',
      href: 'https://x.com/studiopeace?s=11&t=NaJd1Xq3_Obb4Tm_2FNb4Q',
    },
  ],
  footer: {
    copyright: '© PEACE. All rights reserved.',
  },
} as const;

export type SocialIconName = (typeof siteContent.social)[number]['icon'];
