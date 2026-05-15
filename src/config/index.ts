import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "The Secular Buddhism Hub",
  author: "John Tate",
  description: "A central location for teachers and groups advocating for a secular interpretation of Buddhist teachings.",
  lang: "en",
  siteLogo: "/favicon.png",
  navLinks: [
    { text: "The Hub", href: "#projects" },
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
    summary: "Dedicated to hosting and highlighting organizations, teachers, and resources that interpret Buddhist philosophy through a secular, naturalistic, and immanent lens.",
    email: "",
  },
  experience: [], 
  projects: [
    {
      name: "1. The Secular Buddhist Network",
      summary: "Exploring the contemporary shift toward a secular Dharma, featuring foundational works by Stephen Batchelor and Winton Higgins.",
      linkPreview: "https://secularbuddhistnetwork.org/",
      linkSource: "https://secularbuddhistnetwork.org/the-sbn-community/",
      image: "/sbn.png", 
    },
    {
      name: "2. Naturalistic Buddhism",
      summary: "Gil Fronsdal's exploration of a non-supernatural Dharma rooted in early teachings and the '7 a.m. sits' series.",
      linkPreview: "https://www.insightmeditationcenter.org/",
      linkSource: "https://www.audiodharma.org/",
      image: "/gil.jpg",
    },
    {
      name: "3. Doug’s Dharma",
      summary: "Extensive research and academic video analysis of Buddhist texts from a secular, historical perspective.",
      linkPreview: "https://www.dougsdharma.com/",
      linkSource: "https://www.youtube.com/c/dougsdharma",
      image: "/doug.png",
    },
    {
      name: "4. Noah Rasheta",
      summary: "Host of the Secular Buddhism Podcast, focusing on Buddhism as a living language adapted to modern secular culture.",
      linkPreview: "https://eightfoldpath.com",
      linkSource: "https://secularbuddhism.com/",
      image: "/noah.png",
    },
    {
      name: "5. Secular Buddhist Tradition (SBT)",
      summary: "Venerable Tenzin Tarpa's network focused on moving away from religious authority, dogma, and ritual toward ethics and research.",
      linkPreview: "https://sbtonline.org/",
      linkSource: "https://sbtonline.org/",
      image: "/sbt.png",
    },
    {
      name: "6. Navayana Buddhism",
      summary: "Dr. B.R. Ambedkar’s 'New Vehicle'—a historical precedent reinterpreting the Buddha as a social and ethical reformer.",
      linkPreview: "https://ambedkaree.com/",
      linkSource: "https://ambedkartimes.com/",
      image: "/ambedkar.jpg",
    },
    {
      name: "7. Secular Lotus / Sezoku Hokke",
      summary: "Research platforms documenting the transition of the Lotus Sūtra from religious scripture to a philosophy of immanence and virtue ethics.",
      linkPreview: "https://secular-lotus.vercel.app/",
      linkSource: "https://sezoku-hokke.vercel.app/",
      image: "/lotus.png",
    },
    {
      name: "8. Existential & Pragmatic Buddhism",
      summary: "Seth Zuihō Segall’s naturalized, eudaimonic approach, viewing these teachings as close cousins to the secular shift.",
      linkPreview: "https://www.existentialbuddhist.com/",
      linkSource: "https://www.existentialbuddhist.com/",
      image: "/segall.jpg",
    },
  ],
  about: {
    description: `
      The Secular Buddhism Hub is a curated directory designed to serve as a central location for the diverse voices of the secular Buddhist movement. 
      
      From the historical roots of Navayana in India to modern naturalistic and existential interpretations in the West, this hub provides a neutral space for teachers and groups to maintain an online presence. The goal is to make these resources accessible to anyone interested in a form of Buddhism that is grounded in the human condition, modern reason, and the challenges of daily life.
    `,
    image: "/favicon.png",
  },
};
