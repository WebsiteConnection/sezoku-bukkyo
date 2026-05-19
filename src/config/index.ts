import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "The Secular Buddhism Hub",
  author: "John Tate",
  description: "Links to teachers and groups who support secular Buddhist practices.",
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
    email: "SecularLotus@gmail.com",
  },
  sites: [
    {
      name: "1. The Secular Buddhist Network",
      summary: "Leading the contemporary shift toward a secular Dharma, as inspired by the foundational works of Stephen Batchelor and Winton Higgins. Their community spans the globe.",
      image: "/sbn.png", 
      links: [
        { text: "Main Site", href: "https://secularbuddhistnetwork.org/" },
        { text: "Community", href: "https://secularbuddhistnetwork.org/the-sbn-community/" }
      ]
    },
    {
      name: "2. Naturalistic Buddhism",
      summary: "Gil Fronsdal's interpretation of a non-supernatural Dharma rooted in a vetted, well-reasoned adaptation of the Buddha's early teachings, with links to his audio presentations and other resources at the Insight Meditation Center.",
      image: "/gil.png",
      links: [
        { text: "Insight Center", href: "https://www.insightmeditationcenter.org/" },
        { text: "Gil's Audio Dharma", href: "https://www.audiodharma.org/speakers/1" }
      ]
    },
    {
      name: "3. Doug’s Dharma",
      summary: "Extensive research and video analysis of Buddhist texts from a secular, historical, and academic perspective. Some of Doug's videos are for those new to Secular Buddhism, while others examine the traditional teachings.",
      image: "/doug.png",
      links: [
        { text: "Website", href: "https://www.dougsdharma.com/" },
        { text: "YouTube", href: "https://www.youtube.com/c/dougsdharma" }
      ]
    },
    {
      name: "4. Noah Rasheta",
      summary: "Host of the Secular Buddhism Podcast, and developer of a repository filled with Buddhist information resources accessible through AI-powered chat.",
      image: "/noah.png",
      links: [
        { text: "8-Fold Path", href: "https://eightfoldpath.com" },
        { text: "Podcast", href: "https://secularbuddhism.com/" }
      ]
    },
    {
      name: "5. Secular Buddhist Tradition (SBT)",
      summary: "Venerable Tenzin Tarpa's network of meditation centers focused on moving away from religious authority, dogma, and ritual toward ethics and understanding.",
      image: "/sbt.png",
      links: [
        { text: "Visit SBT", href: "https://sbtonline.org/" },
        { text: "About SBT", href: "https://sbtonline.org/explore-secular-buddhism-guide/" }
      ]
    },
    {
      name: "6. Navayana Buddhism",
      summary: "Dr. B.R. Ambedkar’s 'New Vehicle'—a historical precedent that reinterprets the Buddha's teachings as an ethos compatible with science and well-suited to support a civic culture aligned with egalitarian reform.",
      image: "/ambedkar.jpg",
      links: [
        { text: "Ambedkaree", href: "https://ambedkaree.com/" },
        { text: "Ambedkar Times", href: "https://ambedkartimes.com/" },
        { text: "The Dhamma", href: "https://franpritchett.com/00ambedkar/ambedkar_buddha/" }
      ]
    },
    {
      name: "7. Secular Buddhism in the Lotus Tradition",
      summary: "Reinterprets the Lotus Sūtra's climactic revelation of an Eternal Buddha as a universal ethic sourced in immanence, and introduces options for a corresponding secular practice.",
      image: "/lotus.png",
      links: [
        { text: "Secular Lotus", href: "https://secular-lotus.vercel.app/" },
        { text: "日本語", href: "https://sezoku-hokke.vercel.app/" }
      ]
    },
    {
      name: "Basic Reference Material",
      summary: "",
      image: "/book.png",
      links: [
        { text: "Stephen Batchelor's article: A Secular Buddhism", href: "https://www.globalbuddhism.org/article/view/1189/1024"},
        { text: "The Coming of Secular Buddhism by Winton Higgins", href: "https://www.globalbuddhism.org/article/view/1188/1023" },
        { text: "Gil Fronsdal's article entitled Natural Buddhism", href: "https://www.insightmeditationcenter.org/books-articles/natural-buddhism/" },
        { text: "A video of monastics interviewing Gil Fronsdal", href: "https://www.youtube.com/watch?v=CvFMx_HZ_nc" },
        { text: "Doug Smith on Dr. Ambedkar's Secular Buddhism", href: "https://www.youtube.com/watch?v=qlH_qieCgCA" },
        { text: "Noah Rasheta's article: We're All Downstream", href: "https://secularbuddhistnetwork.org/were-all-downstream/"},
        { text: "The SBT Introduction to Secular Buddhism", href: "https://drive.google.com/file/d/1Dkaz8yHsuKKIjDwhTRFRn8CgEXCYaUMW/view"},
        { text: "A Secular Buddhism Based on the Lotus Sutra", href: "https://zenodo.org/records/20076233"}   
      ]
    },
  ],
  about: {
  description: `The Secular Buddhism Hub is a curated directory designed to reflect the diverse teachers and groups participating in the emergent secular Buddhist movement. From the innovations of Dr. Ambedkar in India to the modern naturalistic and existential interpretations in the West, this hub provides a space to evaluate the content of their teachings and practices. By placing links to these paths side by side, the platform offers those interested a convenient way to explore Buddhist options, free of supernatural beliefs. To suggest a listing, contact information is below.`,
  image: "/about wheel.png",
},
};
