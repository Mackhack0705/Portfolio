import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Expressjs } from "@/components/ui/svgs/expressjs";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Redux } from "@/components/ui/svgs/redux";
import { AWS } from "@/components/ui/svgs/aws";

export const DATA = {
  name: "Rajesh Mali",
  initials: "DV",
  url: "https://dillion.io",
  location: "Jaipur, India",
  locationLink: "https://www.google.com/maps/place/jaipur",
  description:
    "Associate Software Developer with expertise in web technologies, experienced in cross-functional teams. Active on Twitter.",
  summary:
    "In the starting of 2024, I started my career as an associate software developer trainee to go full-time into building and scaling Full-Stack and Saas applications. In the past, [I pursued a bachelor degree in computer science and engineering](/#education)",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Redux", icon: Redux },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Expressjs },
    { name: "MongoDB", icon: MongoDB },
    { name: "Postgres", icon: Postgresql },
    { name: "AWS", icon: AWS },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "malirajesh0705@gmail.com",
    tel: "+918824806628",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Mackhack0705",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rajesh-mali-976a9b238/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Mackhack_07",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Cyntexa",
      href: "https://cyntexa.com/",
      badges: [],
      location: "on-site",
      title: "Associate Software Developer",
      logoUrl: "/cyntexa.png",
      start: "August 2024",
      end: "Present",
      description:
        "Build the Responsive and Scalable Ecommerce sites and their features for clients. Improved the site perfromance by 50% by caching and lazy loading, deal with complex integrations such as stripe, google analytics, wrote the playwright test cases for debugging the production level issues at development stages before production break.",
    }
  ],
  education: [
    {
      school: "Arya Institute of Engineering and Technology",
      href: "https://www.aryacollege.org/",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/college.jpg",
      start: "2020",
      end: "2024",
    }
  ],
  projects: [
    {
      title: "Mack Travel",
      href: "https://macktravel.vercel.app/",
      dates: "Jan 2024 - Feb 2026",
      active: false,
      description:
        "I decided to build a SaaS which allows users to book trips, hotels and flights. This is a great way to build an audience to get interactions on your site. This was my first MERN stack project",
      technologies: [
        "React.js",
        "Express.js",
        "TailwindCSS",
        "Cloudinary",
        "redux"
      ],
      links: [
        {
          type: "Website",
          href: "https://macktravel.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dj9vccr8n/video/upload/v1778734457/Screen_Recording_2026-05-14_102334_wkl6hs.mp4",
    },
    {
      title: "Owl",
      href: "https://owl-watcher.vercel.app/",
      dates: "May 2026 - Present",
      active: true,
      description:
        "Open Source Repo's issue monitoring system",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "turbo repo",
        "Shadcn UI",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://owl-watcher.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "https://res.cloudinary.com/dj9vccr8n/video/upload/v1779364775/Owl_xbw6ny.mov",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ]
} as const;
