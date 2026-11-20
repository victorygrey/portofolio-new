export interface SkillItem {
  name: string;
  category: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  type: string;
  category: "Web" | "Design";
  tags: string[];
  image: string;
  images?: string[];
  link?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  year: string;
}

export interface PortfolioData {
  name: string;
  shortName: string;
  role: string;
  location: string;
  github: string;
  intro: string;
  email: string;
  whatsapp: string;
  skills: SkillItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
}

export const portfolioData: PortfolioData = {
  name: "Muhamad Faizal Hamzah Sudiro",
  shortName: "Faizal Hamzah",
  role: "Web & Mobile Developer",
  location: "Bandung, Indonesia",
  github: "https://github.com/victorygrey",
  intro:
    "I build responsive web applications, Python data workflows, and practical Java desktop tools—grounded in a hands-on background in Computer & Network Engineering (TKJ) and visual print design.",
  email: "muhfaizalhamzah@gmail.com",
  whatsapp: "62895385759496",
  skills: [
    { name: "React / Next.js", category: "Web" },
    { name: "Bootstrap", category: "Web" },
    { name: "TypeScript", category: "Language" },
    { name: "HTML5", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "React Native / Expo", category: "Mobile" },
    { name: "Tailwind CSS", category: "Design" },
    { name: "Node.js", category: "Backend" },
    { name: "Supabase / PostgreSQL", category: "Database" },
    { name: "Troubleshooting", category: "Technical" },
    { name: "Networking (TKJ)", category: "Technical" },
  ],
  projects: [
    {
      title: "Sistem Manajemen Layanan",
      description:
        "Role-based service management web application (Admin & User) featuring a statistics dashboard, customer directory, transaction input, history tracking, and Excel/PDF report exports.",
      type: "Web App",
      category: "Web",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/images/contoh_project/project_02.png",
      link: "https://victorygrey.github.io/web-app-manajemen-layanan/",
    },
    {
      title: "Inventory Management",
      description:
        "Sistem manajemen inventaris untuk memantau dan mengelola stok barang secara efisien dengan antarmuka berbasis React dan integrasi database.",
      type: "Web App",
      category: "Web",
      tags: ["React", "Web", "Database"],
      image: "/images/contoh_project/project_07.png",
      link: "https://inventory-management-navy-theta.vercel.app/",
    },
    {
      title: "Kopi Kenangan Senja",
      description:
        "Responsive landing page for a local coffee shop with an interactive shopping cart, curated product gallery, and direct customer contact flow.",
      type: "Web App",
      category: "Web",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/images/contoh_project/project_03.png",
      link: "https://victorygrey.github.io/template-coffee-shop/",
    },
    {
      title: "Snake Game",
      description:
        "Game ular klasik yang diinterpretasikan ulang secara modern menggunakan JavaScript, HTML, dan CSS.",
      type: "Web App",
      category: "Web",
      tags: ["JavaScript", "HTML", "CSS"],
      image: "/images/contoh_project/project_05.png",
      images: [
        "/images/contoh_project/project_04.png",
        "/images/contoh_project/project_05.png",
        "/images/contoh_project/project_06.png",
      ],
      link: "https://victorygrey.github.io/snake-game/",
    },
    {
      title: "Tokopedia Store Scraper",
      description:
        "Skrip pengambilan dan ekstraksi data toko berbasis Python untuk kebutuhan pembelajaran materi kuliah dan pengolahan data.",
      type: "Python / Web",
      category: "Web",
      tags: ["Python", "Scraping", "HTML"],
      image: "/images/contoh_project/project_01.png",
      link: "https://github.com/victorygrey/scraping-toko-tokopedia",
    },
    {
      title: "Desain Booklet Company Profile",
      description:
        "Koleksi desain booklet profesional untuk company profile dan presentasi bisnis yang dirancang dengan layout yang rapi, terstruktur, dan informatif.",
      type: "Print & Editorial",
      category: "Design",
      tags: ["Canva", "Booklet", "Print Design", "Branding"],
      image: "/images/contoh_booklet/booklet_01.jpeg",
      images: [
        "/images/contoh_booklet/booklet_01.jpeg",
        "/images/contoh_booklet/booklet_02.jpeg",
        "/images/contoh_booklet/booklet_03.jpeg",
        "/images/contoh_booklet/booklet_04.jpeg",
        "/images/contoh_booklet/booklet_05.jpeg",
        "/images/contoh_booklet/booklet_06.jpeg",
        "/images/contoh_booklet/booklet_07.jpeg",
        "/images/contoh_booklet/booklet_08.jpeg",
        "/images/contoh_booklet/booklet_09.jpeg",
        "/images/contoh_booklet/booklet_10.jpeg",
        "/images/contoh_booklet/booklet_11.jpeg",
        "/images/contoh_booklet/booklet_12.jpeg",
      ],
    },
    {
      title: "Desain Brosur Promosi",
      description:
        "Kumpulan desain brosur promosi modern dan informatif untuk berbagai kebutuhan promosi bisnis dan pengumuman acara.",
      type: "Marketing Collateral",
      category: "Design",
      tags: ["Canva", "Brosur", "Marketing", "Graphic Design"],
      image: "/images/contoh_brosur/brosur_01.jpg",
      images: [
        "/images/contoh_brosur/brosur_01.jpg",
        "/images/contoh_brosur/brosur_02.jpg",
        "/images/contoh_brosur/brosur_03.jpg",
        "/images/contoh_brosur/brosur_04.jpg",
        "/images/contoh_brosur/brosur_05.jpg",
      ],
    },
    {
      title: "Desain Daftar Menu",
      description:
        "Desain daftar menu makanan dan minuman yang bersih dan mudah dibaca untuk kebutuhan usaha kuliner.",
      type: "Culinary Print",
      category: "Design",
      tags: ["Canva", "Menu", "Culinary", "Layout"],
      image: "/images/contoh_menu/menu_01.jpeg",
      images: [
        "/images/contoh_menu/menu_01.jpeg",
        "/images/contoh_menu/menu_02.jpeg",
      ],
    },
    {
      title: "Desain Spanduk & Banner",
      description:
        "Desain banner dan spanduk visual untuk kebutuhan promosi outdoor maupun acara indoor.",
      type: "Outdoor Media",
      category: "Design",
      tags: ["Canva", "Banner", "Spanduk", "Outdoor"],
      image: "/images/contoh_banner/banner_01.jpeg",
      images: ["/images/contoh_banner/banner_01.jpeg"],
    },
  ],
  experience: [
    {
      company: "CV. Dawis Qolbu Group",
      role: "Staff",
      period: "Des 2024 — Okt 2025",
      description:
        "Bertanggung jawab dalam administrasi dan operasional harian perusahaan.",
    },
    {
      company: "CV. Cipta Wahana Teknik",
      role: "Staff",
      period: "Jun 2023 — Des 2024",
      description:
        "Terlibat dalam administrasi proyek kontraktor lapangan dan rehabilitasi gedung kantoran.",
    },
    {
      company: "PT. Dago Wisata",
      role: "Staff IT",
      period: "Agu 2019 — Jun 2023",
      description:
        "Membantu dalam pemeliharaan sistem komputer, perangkat lunak, dan jaringan kantor.",
    },
    {
      company: "CV. Media Graha Computer",
      role: "Teknisi (PKL)",
      period: "Jan 2016 — Mar 2016",
      description:
        "Melakukan troubleshooting dan perbaikan perangkat keras laptop/notebook.",
    },
  ],
  education: [
    {
      school: "STMIK LPKIA",
      degree: "S1 Teknik Informatika",
      year: "2023 — 2025",
    },
    {
      school: "SMK Negeri 1 Purwokerto",
      degree: "Teknik Komputer dan Jaringan",
      year: "Lulus 2017",
    },
    {
      school: "SMP Negeri 5 Purwokerto",
      degree: "Pendidikan Dasar",
      year: "Lulus 2014",
    },
    {
      school: "SD Pertiwi Bandung",
      degree: "Pendidikan Dasar",
      year: "Lulus 2011",
    },
  ],
};
