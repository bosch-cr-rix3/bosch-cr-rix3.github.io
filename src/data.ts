import { publications } from "./publicationData";

export interface PublicationLink {
  url: string;
  text: string;
}

export interface Publication {
  title: string;
  badge: string;
  img?: string;
  excerpt: string;
  tags: string[];
  links: PublicationLink[];
}

export interface Award {
  name: string;
  year: number;
}

export interface Partner {
  name: string;
  logo: string;
}

export const siteData = {
  teamName: "Bosch Research | CR/RIX3-AP",
  tagline:
    "Pioneering Autonomous Driving Intelligence: Perception, Planning, Foundation Models & V2X Continuum",
  about:
    "We are researchers in the ADAS and Autonomous Driving field from Bosch Research. Our core competencies span foundational Perception, End-to-End Autonomous Driving, Vision-Language-Action (VLA) Foundation Models, HD Mapping, and Dependable Vehicle-Road-Cloud Continuum Systems.",
  publications,
  awards: [
    {
      name: "First Prize - Unicom Open Gateway Global Use Case Innovation Challenge 2025 - Autonomous Driving on Cloud",
      year: 2025,
    },
    {
      name: "2025年临空园区优秀科创项目奖 - 端到端自动驾驶项目",
      year: 2025,
    },
  ] satisfies Award[],
  partners: [
    {
      name: "The University of Hong Kong (HKU)",
      logo: "/images/school_logos/HONGKONG.png",
    },
    { name: "Inria", logo: "/images/school_logos/Inria.png" },
    { name: "MIT", logo: "/images/school_logos/MIT_Social_circle.png" },
    {
      name: "Nanyang Technological University (NTU)",
      logo: "/images/school_logos/NTU.png",
    },
    {
      name: "National University of Singapore (NUS)",
      logo: "/images/school_logos/NUS.png",
    },
    {
      name: "Peking University (PKU)",
      logo: "/images/school_logos/PKU_red.png",
    },
    {
      name: "Universite Paris-Saclay",
      logo: "/images/school_logos/SACLAY.png",
    },
    {
      name: "Southeast University",
      logo: "/images/school_logos/SOUTH.png",
    },
    {
      name: "The University of Tokyo",
      logo: "/images/school_logos/TOKOYO.png",
    },
    { name: "Waseda University", logo: "/images/school_logos/WASEDA.png" },
    { name: "University of Sydney", logo: "/images/school_logos/de.png" },
    {
      name: "Telecom Paris / IP Paris",
      logo: "/images/school_logos/paris.png",
    },
    {
      name: "The University of Queensland",
      logo: "/images/school_logos/queensland.png",
    },
    { name: "Tsinghua University", logo: "/images/school_logos/tsu.png" },
    {
      name: "Zhejiang University",
      logo: "/images/school_logos/zhejiang.png",
    },
  ] satisfies Partner[],
};
