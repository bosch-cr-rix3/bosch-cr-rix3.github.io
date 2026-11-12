import { publications } from "./publicationData";

export interface PublicationLink {
  url: string;
  text: string;
}

export interface Publication {
  title: string;
  badge: string;
  img?: string;
  abstractSummary: string;
  categories: string[];
  links: PublicationLink[];
}

export interface Award {
  name: string;
  year: number;
}

export interface Affiliation {
  name: string;
  logo: string;
}

export const siteData = {
  teamName: "Bosch Research | CR/RIX3-AP",
  tagline: "Pioneering Physical AI - from research to real-world impact",
  about:
    "We are a team of researchers at Bosch Research pioneering the next generation of Physical AI. Our research spans Perception, Planning, End-to-End Autonomous Driving, World Action Model, Closed-Loop Reinforcement Learning, and Edge AI Infrastructure with a focus on developing intelligent systems that can perceive, understand, predict, and act in the physical world. \nWe bridge cutting-edge AI research and real-world applications, transforming foundational advances into robust, scalable, and deployable AI capabilities for autonomous driving, robotics and software defined vehicle. ",
  publications,
  awards: [
    {
      name: "Top 1 in CVPR2026 Critical Object Detection Competition",
      year: 2026,
    },
    {
      name: "Shanghai Collaborative Innovation Program for Foreign-Invested Research and Development",
      year: 2026,
    },
    {
      name: "Changning University-Industry Collaborative Talent Development Program",
      year: 2026,
    },
    {
      name: "Linkong Outstanding Technology Innovation Prize: End-to-End Driving",
      year: 2026,
    },
    {
      name: "First Prize in Open Gateway Innovation Challenge: Autonomous Driving on Cloud",
      year: 2025,
    },
    {
      name: "Top 2 in CVPR2025 NAVSIM v2 End-to-End Driving Challenge",
      year: 2025,
    },
    {
      name: "First Prize - Unicom Open Gateway Global Use Case Innovation Challenge 2025 - Autonomous Driving on Cloud",
      year: 2025,
    },
    {
      name: "2025年临空园区优秀科创项目奖 - 端到端自动驾驶项目",
      year: 2025,
    },
    {
      name: "Top 4 in CVPR2024 Map-less Driving Challenge",
      year: 2024,
    },
  ] satisfies Award[],
  affiliations: [
    {
      name: "Australian National University",
      logo: "/images/affiliations/Australian_National_University_Logo.svg",
    },
    {
      name: "Beihang University",
      logo: "/images/affiliations/Beihang_University_logo.svg",
    },
    {
      name: "Beijing Institute of Technology",
      logo: "/images/affiliations/Beijing_Institute_of_Technology_Logo.svg",
    },
    {
      name: "Beijing University of Posts and Telecommunications",
      logo: "/images/affiliations/Emblem_of_Beijing_University_of_Posts_and_Telecommunications.svg",
    },
    {
      name: "East China University of Science and Technology",
      logo: "/images/affiliations/华东理工大学-logo.svg",
    },
    {
      name: "ETH Zürich",
      logo: "/images/affiliations/ETH_Zürich_Logo_black.svg",
    },
    {
      name: "Fudan University",
      logo: "/images/affiliations/Fudan_University_Logo.svg",
    },
    {
      name: "Imperial College London",
      logo: "/images/affiliations/Shield_of_Imperial_College_London.svg",
    },
    {
      name: "Inria",
      logo: "/images/affiliations/inria.svg",
    },
    {
      name: "Institut Polytechnique de Paris",
      logo: "/images/affiliations/Institut_polytechnique_de_Paris_logo.svg",
    },
    {
      name: "Karlsruher Institut für Technologie",
      logo: "/images/affiliations/Logo_KIT.svg",
    },
    {
      name: "Nanyang Technological University",
      logo: "/images/affiliations/Nanyang_Technological_University.svg",
    },
    {
      name: "National University of Singapore",
      logo: "/images/affiliations/NationalUniversityofSingapore.svg",
    },
    {
      name: "Nokia Bell Labs",
      logo: "/images/affiliations/Nokia_Bell_Labs_logo.svg",
    },
    {
      name: "Shanghai University",
      logo: "/images/affiliations/SHU_VI_LOGO.svg",
    },
    {
      name: "Sichuan Agricultural University",
      logo: "/images/affiliations/四川农业大学-logo.svg",
    },
    {
      name: "Sorbonne Université",
      logo: "/images/affiliations/Logo_of_Sorbonne_University.svg",
    },
    {
      name: "Télécom ParisTech",
      logo: "/images/affiliations/Logo_Télécom_ParisTech.svg",
    },
    {
      name: "Tongji University",
      logo: "/images/affiliations/同济大学-logo.svg",
    },
    {
      name: "Universität Konstanz",
      logo: "/images/affiliations/Universitat_Konstanz_logo.svg",
    },
    {
      name: "Université de technologie de Compiègne",
      logo: "/images/affiliations/Technische_Universität_Compiègne_Logo.svg",
    },
    {
      name: "Université Paris-Saclay",
      logo: "/images/affiliations/Logo_Université_Paris-Saclay_(ComUE).svg",
    },
    {
      name: "University of California",
      logo: "/images/affiliations/The_University_of_California_1868_UCSC.svg",
    },
    {
      name: "University of Edinburgh",
      logo: "/images/affiliations/University_of_Edinburgh_címer.svg",
    },
    {
      name: "University of Electronic Science and Technology of China",
      logo: "/images/affiliations/电子科技大学-logo.svg",
    },
    {
      name: "University of Southampton",
      logo: "/images/affiliations/university-of-southampton-text.svg",
    },
    {
      name: "University of Tokyo",
      logo: "/images/affiliations/University_of_Tokyo_logo,_basic,_horizontal_(2004–2024).svg",
    },
    {
      name: "Waseda University",
      logo: "/images/affiliations/Waseda_university_logo.svg",
    },
    {
      name: "Wuhan University",
      logo: "/images/affiliations/武汉大学-logo.svg",
    },
  ] satisfies Affiliation[],
};
