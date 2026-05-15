export interface SiteConfig {
  title: string;
  author: string;
  description: string;
  lang: string;
  siteLogo: string;
  navLinks: { text: string; href: string }[];
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience?: any[]; // The '?' makes this optional so it won't crash when empty
  sites: ProjectsProps[]; // This matches the 'sites' name we chose
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ProjectsProps {
  name: string;
  summary: string;
  image: string;
  links: { text: string; href: string }[];
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
