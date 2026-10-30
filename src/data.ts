export interface PublicationLink {
  url: string;
  text: string;
}

export interface Publication {
  title: string;
  badge: string;
  img: string;
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
  publications: [
    {
      title:
        "Latency-Aware Function Offloading with 5G Integration for Intelligent Connected Vehicles",
      badge: "IEEE 102nd Vehicular Technology Conference (VTC2025-Fall)",
      img: "/images/papers/2025_vtc_latency.png",
      excerpt:
        "A fine-grained latency monitoring and adaptive control framework for offloading AI functions over 5G networks. Improves real-time responsiveness and reliability for Vision-Language Models in connected vehicles through declarative QoS management.",
      tags: ["VLA & Generative AI", "V2X & Systems"],
      links: [
        {
          url: "https://events.vtsociety.org/vtc2025-fall/conference-sessions/in-person-program-schedule/",
          text: "Paper",
        },
      ],
    },
    {
      title:
        "Dependability-Aware Coordination for Infrastructure-Side Critical V2X Services",
      badge: "IEEE 102nd Vehicular Technology Conference (VTC2025-Fall)",
      img: "/images/papers/2025_vtc_dependability.png",
      excerpt:
        "A Kubernetes-based coordination layer that brings automotive-grade dependability to roadside V2X services. Enables real-time monitoring, fault recovery, and workload reallocation for safety-critical applications.",
      tags: ["V2X & Systems"],
      links: [
        {
          url: "https://events.vtsociety.org/vtc2025-fall/conference-sessions/in-person-program-schedule/",
          text: "Paper",
        },
      ],
    },
    {
      title:
        "Towards Reliable Distributed Systems for Safety-Critical Vehicle-Road-Cloud Continuum",
      badge:
        "22nd EAI International Conference on Mobile and Ubiquitous Systems (MobiQuitous 2025)",
      img: "/images/papers/2025_mobiquitous_reliable.png",
      excerpt:
        "A unified reliability framework for the vehicle-road-cloud continuum with dependability-aware coordination and latency-aware offloading across city-scale deployments.",
      tags: ["V2X & Systems"],
      links: [
        {
          url: "https://mobiquitous.eai-conferences.org/2025/accepted-papers/",
          text: "Paper",
        },
      ],
    },
    {
      title:
        "SparseMeXt: Unlocking the Potential of Sparse Representations for HD Map Construction",
      badge:
        "IEEE/RSJ International Conference on Intelligent Robots and Systems (2025)",
      img: "/images/papers/2025_sparsemext.png",
      excerpt:
        "SparseMeXt is the first sparse paradigm to surpass dense methods in online HD map construction, setting a new benchmark.",
      tags: ["Perception & Planning"],
      links: [
        { url: "https://arxiv.org/pdf/2505.08808", text: "Paper" },
        { url: "https://SparseMeXT.github.io", text: "Project" },
        { url: "https://github.com/SparseMeXT/SparseMeXT", text: "Code" },
      ],
    },
    {
      title: "FlowDrive: Energy Flow Field for End-to-End Autonomous Driving",
      badge: "ArXiv",
      img: "/images/papers/2025_flowdrive.png",
      excerpt:
        "FlowDrive introduces physically interpretable energy-based flow fields to encode semantic priors and safety cues into BEV space.",
      tags: ["Perception & Planning"],
      links: [
        { url: "https://arxiv.org/pdf/2509.14303", text: "Paper" },
        {
          url: "https://astrixdrive.github.io/FlowDrive.github.io/",
          text: "Project",
        },
        { url: "https://github.com/AstrixDrive/FlowDrive", text: "Code" },
      ],
    },
    {
      title:
        "IRL-VLA: Training an Vision-Language-Action Policy via Reward World Model",
      badge: "ArXiv",
      img: "/images/papers/2025_irlvla.png",
      excerpt:
        "A close-loop reinforcement-learning method using an inverse-reward world model with a self-built VLA approach for autonomous driving.",
      tags: ["VLA & Generative AI", "Perception & Planning"],
      links: [
        { url: "https://arxiv.org/pdf/2508.06571", text: "Paper" },
        { url: "https://github.com/IRL-VLA/IRL-VLA", text: "Code" },
      ],
    },
    {
      title:
        "Impromptu VLA: Open Weights and Open Data for Driving Vision-Language-Action Models",
      badge: "NeurIPS 2025",
      img: "/images/papers/2025_ivla.png",
      excerpt:
        "Impromptu VLA provides open weights and a dataset of 80,000 carefully curated clips distilled from over two million source clips.",
      tags: ["VLA & Generative AI", "Perception & Planning"],
      links: [
        { url: "https://arxiv.org/pdf/2505.23757", text: "Paper" },
        { url: "https://impromptu-vla.c7w.tech/", text: "Project" },
        { url: "https://github.com/ahydchh/Impromptu-VLA", text: "Code" },
      ],
    },
    {
      title:
        "DiffVLA: Vision-Language Guided Diffusion Planning for Autonomous Driving",
      badge: "2nd Place in Autonomous Grand E2E AD Challenge 2025",
      img: "/images/papers/2025_diffvla.png",
      excerpt:
        "A hybrid sparse-dense diffusion policy empowered by a vision-language model, enabling efficient multi-modal driving behavior.",
      tags: ["VLA & Generative AI", "Perception & Planning"],
      links: [
        { url: "https://arxiv.org/pdf/2505.19381", text: "Paper" },
        { url: "https://diffvla.github.io/", text: "Project" },
        { url: "https://github.com/PeterJaq/DiffVLA", text: "Code" },
      ],
    },
    {
      title:
        "DASFO: Dependency-Aware Scalable Function Offloading Framework for Intelligent Connected Vehicles",
      badge:
        "22nd EAI International Conference on Mobile and Ubiquitous Systems (MobiQuitous 2025)",
      img: "/images/papers/2025_mobiquitous_dasfo.png",
      excerpt:
        "A multi-stage offloading framework optimizing latency, energy, and cost under dynamic conditions using DRL and GCN-based dependency modeling.",
      tags: ["V2X & Systems"],
      links: [
        {
          url: "https://mobiquitous.eai-conferences.org/2025/accepted-papers/",
          text: "Paper",
        },
      ],
    },
  ] satisfies Publication[],
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