import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "The Secular Buddhism Hub",
  author: "John Tate",
  description: "A central location for teachers and groups advocating for a secular interpretation of Buddhist teachings.",
  lang: "en",
  siteLogo: "/favicon.png",
  navLinks: [
    { text: "The Hub", href: "#sites" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [],
  socialImage: "/social-preview.png",
  canonicalURL: "https://secular-buddhism.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "The Secular Buddhism Hub",
    specialty: "A Global Portal for the Secular Buddhist Movement",
    summary: "Dedicated to hosting and highlighting organizations, teachers, and resources that interpret Buddhism through a secular, naturalistic, and immanent lens.",
    email: "your-email@example.com",
  },
  sites: [
    {
      name: "1. The Secular Buddhist Network",
      summary: "Furthering the contemporary shift toward a secular Dharma, as inspired by the foundational works of Stephen Batchelor and Winton Higgins.",
      image: "/sbn.png", 
      links: [
        { text: "Main Site", href: "https://secularbuddhistnetwork.org/" },
        { text: "Community", href: "https://secularbuddhistnetwork.org/the-sbn-community/" }
      ]
    },
    {
      name: "2. Naturalistic Buddhism",
      summary: "Gil Fronsdal's exploration of a non-supernatural Dharma rooted in the early teachings with links to his '7 a.m. sits' series.",
      image: "/gil.png",
      links: [
        { text: "Insight Center", href: "https://www.insightmeditationcenter.org/" },
        { text: "Audio Dharma", href: "https://www.audiodharma.org/" }
      ]
    },
    {
      name: "3. Doug’s Dharma",
      summary: "Extensive research and video analysis of Buddhist texts from a secular, historical perspective.",
      image: "/doug.png",
      links: [
        { text: "Website", href: "https://www.dougsdharma.com/" },
        { text: "YouTube", href: "https://www.youtube.com/c/dougsdharma" }
      ]
    },
    {
      name: "4. Noah Rasheta",
      summary: "Host of the Secular Buddhism Podcast, focusing on Buddhism as a living language adapted to modern secular culture.",
      image: "/noah.png",
      links: [
        { text: "8-Fold Path", href: "https://eightfoldpath.com" },
        { text: "Podcast", href: "https://secularbuddhism.com/" }
      ]
    },
    {
      name: "5. Secular Buddhist Tradition (SBT)",
      summary: "Venerable Tenzin Tarpa's network focused on moving away from religious authority, dogma, and ritual toward ethics and understanding.",
      image: "/sbt.png",
      links: [
        { text: "Visit SBT", href: "https://sbtonline.org/" },
        { text: "About SBT", href: "https://sbtonline.org/explore-secular-buddhism-guide/" }
      ]
    },
    {
      name: "6. Navayana Buddhism",
      summary: "Dr. B.R. Ambedkar’s 'New Vehicle'—a historical precedent reinterpreting the Buddha as a social and ethical reformer.",
      image: "/ambedkar.jpg",
      links: [
        { text: "Ambedkaree", href: "https://ambedkaree.com/" },
        { text: "Ambedkar Times", href: "https://ambedkartimes.com/" }
      ]
    },
    {
      name: "7. Secular Buddhism in the Lotus Tradition",
      summary: "Transitions the Lotus Sūtra's revelation of an Eternal Buddha into a universal ethic sourced in immanence, and introduces a corresponding secular practice.",
      image: "/lotus.png",
      links: [
        { text: "Secular Lotus", href: "https://secular-lotus.vercel.app/" },
        { text: "日本語", href: "https://sezoku-hokke.vercel.app/" }
      ]
    },
    {
      name: "Information Resources",
      summary: "",
      image: "/book.png",
      links: [
        { text: "Stephen Batchelor's article: A Secular Buddhism", href: "https://www.globalbuddhism.org/article/view/1189/1024"},
        { text: "The Coming of Secular Buddhism by Winton Higgins", href: "https://www.globalbuddhism.org/article/view/1188/1023" },
        { text: "Gil Fronsdal's article entitled Natural Buddhism", href: "https://www.insightmeditationcenter.org/books-articles/natural-buddhism/" },
        { text: "A video of monastics interviewing Gil Fronsdal", href: "https://www.insightmeditationcenter.org/books-articles/natural-buddhism/" },
        { text: "Doug Smith's video on Dr. Ambedkar's Secular Buddhism", href: "https://www.youtube.com/watch?v=qlH_qieCgCA" },
        { text: "Noah Rasheta's article: We're All Downstream", href: "https://secularbuddhistnetwork.org/were-all-downstream/"},
        { text: "The SBT Introduction to Secular Buddhism", href: "https://drive.google.com/file/d/1Dkaz8yHsuKKIjDwhTRFRn8CgEXCYaUMW/view"},
        { text: "A Secular Buddhism Based on the Lotus Sutra", href: "https://zenodo.org/records/20076233"}   
      ]
    },
  ],
  about: {
  description: `The Secular Buddhism Hub is a curated directory designed to serve as a central location for the diverse voices of the secular Buddhist movement. From the historical roots of Dr. Ambedkar's teachings in India to modern naturalistic and existential interpretations in the West, this hub provides a neutral space for teachers and groups to maintain an online presence. The goal is to make these resources accessible to anyone interested in a Buddhism grounded in the human condition, modern reason, and the challenges of contemporary life. For further information, contact the email address below.`,
  image: "/favicon.png",
},
};
