import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "世俗仏教ハブ (The Secular Buddhism Hub)",
  author: "John Tate",
  description: "世俗的な仏教の実践を支援する指導者やグループへのリンク集。",
  lang: "ja",
  siteLogo: "/favicon.png",
  navLinks: [
    { text: "ハブ", href: "#sites" },
    { text: "当サイトについて", href: "#about" },
  ],
  socialLinks: [],
  socialImage: "/social-preview.png",
  canonicalURL: "https://sezoku-bukkyo.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "世俗仏教ハブ",
    specialty: "世俗仏教運動のためのグローバル・ポータル",
    summary: "仏教を世俗的、自然主義的、そして内在的な視点から解釈する組織、指導者、リソースを紹介・集約することを目的に掲げたプラットフォームです。",
    email: "SecularLotus@gmail.com",
  },
  sites: [
    {
      name: "1. The Secular Buddhist Network（世俗仏教ネットワーク）",
      summary: "スティーブン・バチェラーやウィントン・ヒギンズの基礎的な著作に触発され、現代における「世俗的なダルマ（法）」への転換を牽引しています。その活動グループは欧米諸国に広がっています。",
      image: "/sbn.png", 
      links: [
        { text: "公式サイト", href: "https://secularbuddhistnetwork.org/" },
        { text: "コミュニティ", href: "https://secularbuddhistnetwork.org/the-sbn-community/" }
      ]
    },
    {
      name: "2. Naturalistic Buddhism（自然主義的仏教）",
      summary: "ギル・フロンズダールによる、ブッダの初期教義に対する現代的かつ緻密に論考された解釈に基づく実践。同センターにおける彼のメディアプレゼンテーションやその他のサービスへのリンクを提供しています。",
      image: "/gil.png",
      links: [
        { text: "インサイト・センター", href: "https://www.insightmeditationcenter.org/" },
        { text: "ギルによるオーディオ・ダルマ", href: "https://www.audiodharma.org/speakers/1" }
      ]
    },
    {
      name: "3. Doug’s Dharma（ダグズ・ダルマ）",
      summary: "世俗的、歴史的、および学術的な観点から仏教テキストの広範な動画分析を行っています。ダグの動画の一部は世俗仏教に焦点を当てており、また別の動画では伝統的な教えや、それらと哲学思想との結びつきを検証しています。",
      image: "/doug.png",
      links: [
        { text: "ウェブサイト", href: "https://www.dougsdharma.com/" },
        { text: "YouTubeチャンネル", href: "https://www.youtube.com/c/dougsdharma" }
      ]
    },
    {
      name: "4. Noah Rasheta（ノア・ラシェータ）",
      summary: "「Secular Buddhism Podcast」のホストであり、AI搭載チャットを通じてアクセスできる仏教情報リソースを豊富に備えたデータベースを開発しています。",
      image: "/noah.png",
      links: [
        { text: "八正道（8-Fold Path）", href: "https://eightfoldpath.com" },
        { text: "ポッドキャスト", href: "https://secularbuddhism.com/" }
      ]
    },
    {
      name: "5. Secular Buddhist Tradition（SBT / 世俗仏教伝統）",
      summary: "テンジン・パルパ尊師による瞑想センターのネットワーク。宗教的な権威、教条（ドグマ）、儀礼から離れ、倫理と相互理解へと向かうことに焦点を当てています。",
      image: "/sbt.png",
      links: [
        { text: "SBTを訪問", href: "https://sbtonline.org/" },
        { text: "SBTについて", href: "https://sbtonline.org/explore-secular-buddhism-guide/" }
      ]
    },
    {
      name: "6. Navayana Buddhism（ナヴァヤーナ仏教）",
      summary: "B.R.アンベードカル博士が提唱した「新乗り物（新仏教）」。科学と互換性があり、平等主義的な改革に合致した市民文化を支えるのに適した倫理として、ブッダの教えを再解釈した歴史的先例です。",
      image: "/ambedkar.jpg",
      links: [
        { text: "Ambedkaree", href: "https://ambedkaree.com/" },
        { text: "Ambedkar Times", href: "https://ambedkartimes.com/" },
        { text: "ブッダとそのダルマ", href: "https://franpritchett.com/00ambedkar/ambedkar_buddha/" }
      ]
    },
    {
      name: "7. 法華伝統における世俗仏教",
      summary: "法華経のクライマックスである「久遠実成の仏（永遠のブッダ）」の開顕を、内在に根ざした普遍的倫理として再解釈し、それに対応する世俗的実践のための祈りを紹介しています。",
      image: "/lotus.png",
      links: [
        { text: "Secular Lotus（英語版）", href: "https://secular-lotus.vercel.app/" },
        { text: "日本語サイト", href: "https://sezoku-hokke.vercel.app/" }
      ]
    },
    {
      name: "基本参考資料",
      summary: "",
      image: "/book.png",
      links: [
        { text: "スティーブン・バチェラー論文：「世俗仏教（A Secular Buddhism）」", href: "https://www.globalbuddhism.org/article/view/1189/1024"},
        { text: "ウィントン・ヒギンズ：「世俗仏教の到来（The Coming of Secular Buddhism）」", href: "https://www.globalbuddhism.org/article/view/1188/1023" },
        { text: "ギル・フロンズダール論文：「自然主義的仏教（Natural Buddhism）」", href: "https://www.insightmeditationcenter.org/books-articles/natural-buddhism/" },
        { text: "聖職者によるギル・フロンズダールへのインタビュー動画", href: "https://www.youtube.com/watch?v=CvFMx_HZ_nc" },
        { text: "ダグ・スミスによる解説：アンベードカル博士の世俗仏教について", href: "https://www.youtube.com/watch?v=qlH_qieCgCA" },
        { text: "ノア・ラシェータ記事：「私たちはみな下流にいる（We're All Downstream）」", href: "https://secularbuddhistnetwork.org/were-all-downstream/"},
        { text: "SBTによる世俗仏教入門ガイド", href: "https://drive.google.com/file/d/1Dkaz8yHsuKKIjDwhTRFRn8CgEXCYaUMW/view"},
        { text: "法華経に基づく世俗仏教（論文）", href: "https://zenodo.org/records/20076233"}   
      ]
    },
  ],
  about: {
    description: `「世俗仏教ハブ」は、台頭しつつある世俗仏教運動に参加している多様な指導者やグループを反映するために設計された、厳選されたディレクトリです。インドにおけるアンベードカル博士の変革から、欧米における現代の自然主義的・実存的な解釈に至るまで、当ハブは彼らの教えと実践の内容を評価する空間を提供します。これらのアプローチへのリンクを並べて配置することで、当プラットフォームは、超自然的な信仰に依存しない仏教の選択肢を模索することに関心がある方々へ、利便性の高い探求の場を提供します。連絡先情報については、以下をご覧ください。`,
    image: "/about wheel.png",
  },
};
