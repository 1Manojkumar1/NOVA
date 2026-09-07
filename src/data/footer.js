import {
  DiscordIcon,
  GithubIcon,
  XIcon,
  YoutubeIcon,
} from "../components/SocialIcons";

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Integrations", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#resources" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Startups", href: "#solutions" },
      { label: "Product Teams", href: "#solutions" },
      { label: "Marketing", href: "#solutions" },
      { label: "Enterprise", href: "#solutions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#resources" },
      { label: "Blog", href: "#resources" },
      { label: "Help Center", href: "#faq" },
      { label: "Contact", href: "#resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#resources" },
      { label: "Security", href: "#faq" },
      { label: "Privacy", href: "#resources" },
    ],
  },
];

export const socials = [
  { label: "NOVA on GitHub", href: "https://github.com", Icon: GithubIcon },
  { label: "NOVA on X", href: "https://x.com", Icon: XIcon },
  { label: "NOVA on YouTube", href: "https://youtube.com", Icon: YoutubeIcon },
  { label: "NOVA on Discord", href: "https://discord.com", Icon: DiscordIcon },
];

export const legalLinks = [
  { label: "Terms", href: "#resources" },
  { label: "Privacy", href: "#resources" },
];
