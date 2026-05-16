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
      summary: "Exploring the contemporary shift toward a secular Dharma, featuring foundational works by Stephen Batchelor and Winton Higgins.",
      image: "/sbn.png", 
      links: [
        { text: "Main Site", href: "https://secularbuddhistnetwork.org/" },
        { text: "Community", href: "https://secularbuddhistnetwork.org/the-sbn-community/" }
      ]
    },
    {
      name: "2. Naturalistic Buddhism",
      summary: "Gil Fronsdal's exploration of a non-supernatural Dharma rooted in early teachings and the '7 a.m. sits' series.",
      image: "/gil.png",
      links: [
        { text: "Insight Center", href: "https://www.insightmeditationcenter.org/" },
        { text: "Audio Dharma", href: "https://www.audiodharma.org/" }
      ]
    },
    {
      name: "3. Doug’s Dharma",
      summary: "Extensive research and academic video analysis of Buddhist texts from a secular, historical perspective.",
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
      summary: "Venerable Tenzin Tarpa's network focused on moving away from religious authority, dogma, and ritual toward ethics and research.",
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
      name: "7. Secular Buddhism in the Lotus Sūtra Tradition",
      summary: "Transitions an ancient Mahayana scripture from a text filled with supernatural imagery to a virtue ethic sourced in immanence.",
      image: "/lotus.png",
      links: [
        { text: "Secular Lotus", href: "https://secular-lotus.vercel.app/" },
        { text: "日本語", href: "https://sezoku-hokke.vercel.app/" }
      ]
    },
    {
      name: "Information Resources",
      summary: "Links to Resources.",
      image: "/book.png",
      links: [
        { text: "Existential Buddhist", href: "https://www.existentialbuddhist.com/" }
      ]
    },
  ],
  about: {
  description: `The Secular Buddhism Hub is a curated directory designed to serve as a central location for the diverse voices of the secular Buddhist movement. From the historical roots of Dr. Ambedkar's teachings in India to modern naturalistic and existential interpretations in the West, this hub provides a neutral space for teachers and groups to maintain an online presence. The goal is to make these resources accessible to anyone interested in a Buddhism grounded in the human condition, modern reason, and the challenges of contemporary life. For further information, contact the email address below.`,
  image: "/favicon.png",
},
};
