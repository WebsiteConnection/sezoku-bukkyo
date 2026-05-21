import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "世俗仏教ハブ (The Secular Buddhism Hub)",
  author: "John Tate",
  description: "世俗的な仏教の実践を支援する指導者やグループへのリンク集。",
  lang: "ja",
  siteLogo: "/favicon.png",
  navLinks: [
    { text: "ハブ", href: "#sites" },
    { text: "概要", href: "#about" },
    { text: "English", href: "https://secular-buddhism.vercel.app" },
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
      name: "1. 法華伝統における世俗仏教",
      summary: "法華経のクライマックスである「久遠実成の仏（永遠のブッダ）」の開顕を、内在に根ざした普遍的倫理として再解釈し、それに対応する世俗的実践のための祈りを紹介しています。",
      image: "/lotus.png",
      links: [
        { text: "世俗の蓮", href: "https://sezoku-hokke.vercel.app/" },
        { text: "English（英語）", href: "https://secular-lotus.vercel.app/" }
      ]
    },
     {
      name: "2. ナヴァヤーナ仏教 (Navayana Buddhism）",
      summary: "B.R.アンベードカル博士が提唱した「新乗り物（新仏教）」。科学と互換性があり、平等主義的な改革に合致した市民文化を支えるのに適した倫理として、ブッダの教えを再解釈した歴史的先例です。",
      image: "/ambedkar.jpg",
      links: [
        { text: "Ambedkaree（英語）", href: "https://ambedkaree.com/" },
        { text: "Ambedkar Times（英語）", href: "https://ambedkartimes.com/" },
        { text: "ブッダとそのダルマ（英語）", href: "https://franpritchett.com/00ambedkar/ambedkar_buddha/" }
      ]
    },
    {
      name: "3. 世俗仏教ネットワーク (The Secular Buddhist Network）",
      summary: "スティーブン・バチェラーやウィントン・ヒギンズの基礎的な著作に触発され、現代における「世俗的なダルマ（法）」への転換を牽引しています。その活動グループは欧米諸国に広がっています。",
      image: "/sbn.png", 
      links: [
        { text: "公式サイト（英語）", href: "https://secularbuddhistnetwork.org/" },
        { text: "コミュニティ（英語）", href: "https://secularbuddhistnetwork.org/the-sbn-community/" }
      ]
    },
    {
      name: "4. 自然主義的仏教 (Naturalistic Buddhism）",
      summary: "ギル・フロンズダールによる、ブッダの初期教義に対する現代的かつ緻密に論考された解釈に基づく実践。同センターにおける彼のメディアプレゼンテーションやその他のサービスへのリンクを提供しています。",
      image: "/gil.png",
      links: [
        { text: "インサイト・センター（英語）", href: "https://www.insightmeditationcenter.org/" },
        { text: "ギルによるオーディオ・ダルマ（英語）", href: "https://www.audiodharma.org/speakers/1" }
      ]
    },
    {
      name: "5. ダグズ・ダルマ (Doug’s Dharma）",
      summary: "世俗的、歴史的、および学術的な観点から仏教テキストの広範な動画分析を行っています。ダグの動画の一部は世俗仏教に焦点を当てており、また別の動画では伝統的な教えや、それらと哲学思想との結びつきを検証しています。",
      image: "/doug.png",
      links: [
        { text: "ウェブサイト（英語）", href: "https://www.dougsdharma.com/" },
        { text: "YouTubeチャンネル（英語）", href: "https://www.youtube.com/c/dougsdharma" }
      ]
    },
    {
      name: "6. ノア・ラシェータ (Noah Rasheta）",
      summary: "「Secular Buddhism Podcast」のホストであり、AI搭載チャットを通じてアクセスできる仏教情報リソースを豊富に備えたデータベースを開発しています。",
      image: "/noah.png",
      links: [
        { text: "八正道（英語）", href: "https://eightfoldpath.com" },
        { text: "ポッドキャスト（英語）", href: "https://secularbuddhism.com/" }
      ]
    },
    {
      name: "7. 世俗仏教伝統 (Secular Buddhist Tradition / SBT）",
      summary: "テンジン・パルパ尊師による瞑想センターのネットワーク。宗教的な権威、教条（ドグマ）、儀礼から離れ、倫理と相互理解へと向かうことに焦点を当てています。",
      image: "/sbt.png",
      links: [
        { text: "SBTを訪問（英語）", href: "https://sbtonline.org/" },
        { text: "SBTについて（英語）", href: "https://sbtonline.org/explore-secular-buddhism-guide/" }
      ]
    },
    
    {
      name: "基本参考資料",
      summary: "（最初のリンクを除き、以下の参考資料はすべて英語文献となります）",
      image: "/book.png",
      links: [
        { text: "法華経に基づく世俗仏教（論文）", href: "https://drive.google.com/file/d/1EbT7dTw_JnYhhgHWqYkxFkElyvI42bVW/view?usp=drive_link" },
        { text: "スティーブン・バチェラー論文：「世俗仏教」", href: "https://www.globalbuddhism.org/article/view/1189/1024" },
        { text: "ウィントン・ヒギンズ：「世俗仏教の到来」", href: "https://www.globalbuddhism.org/article/view/1188/1023" },
        { text: "ギル・フロンズダール論文：「自然主義的仏教」", href: "https://www.insightmeditationcenter.org/books-articles/natural-buddhism/" },
        { text: "聖職者によるギル・フロンズダールへのインタビュー動画", href: "https://www.youtube.com/watch?v=CvFMx_HZ_nc" },
        { text: "ダグ・スミスによる解説：アンベードカル博士の世俗仏教", href: "https://www.youtube.com/watch?v=qlH_qieCgCA" },
        { text: "ノア・ラシェータ記事：「私たちはみな下流にいる」", href: "https://secularbuddhistnetwork.org/were-all-downstream/" },
        { text: "SBTによる世俗仏教入門ガイド", href: "https://drive.google.com/file/d/1Dkaz8yHsuKKIjDwhTRFRn8CgEXCYaUMW/view" }
      ]
    },
  ],
  about: {
    description: `「世俗仏教ハブ」は、現代の世俗仏教運動における多様な系譜や指導者を一望するための学術的ディレクトリです。インドのアンベードカル博士による先駆的な変革から、欧米の自然主義的・実存主義的な解釈に至るまで、超自然的な信仰に依存しない普遍的な探求のあり方を提示します。主要な潮流やリソースを俯瞰できるプラットフォームとして、伝統の枠組みを超えた新たな仏教の選択肢を模索する研究者や実践者へ、開かれた思索の場を提供することを目指しています。`,
    image: "/about wheel.png",
  },
};
