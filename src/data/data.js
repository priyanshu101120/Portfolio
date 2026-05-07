import taskoraImg from "../assets/taskoraimage.webp";
import bizlinkImg from "../assets/bizlink.webp";
import commingsoon from "../assets/commingsoon.webp";
import cartoraImg from "../assets/cartora.webp";
export const project = [ {
  id: 1,
  title: "BizLink",
  description: "Engineered a real-time B2B platform to synchronize inventory data between suppliers and retailers instantly.",
  image: bizlinkImg,
  link: "https://bizlink-two.vercel.app/",
  githubLink: "https://github.com/priyanshu101120/Bizlink.git",
  tech: ["Next.js", "Supabase", "Tailwind","Shadcn UI"]
},{
  id: 2,
  title: "Taskora AI",
  description: "Developed an intelligent productivity application utilizing Groq AI for automated task prioritization and smart user assistance.Built a secure backend infrastructure with Supabase, implementing Row Level Security (RLS) for multi-tenant data isolation.",
  image: taskoraImg,
  link: "https://taskora-beta.vercel.app/",
  githubLink: "https://github.com/priyanshu101120/TASKORA.git",
  tech: ["React.js", "Groq AI", "Supabase", "Tailwind"]
}, {
  id: 3,
  title: "Cartora",
  description: "E-commerce platform built for a seamless and immersive shopping experience. It features a sophisticated Premium Dark aesthetic, utilizing modern design principles to ensure that products are the focal point. The application is engineered for scalability, high-speed data fetching, and robust state management.",
  image: cartoraImg,
  link: "https://cartora-yow4-lhpzo61pa-priyanshu101120s-projects.vercel.app",
  githubLink: "https://github.com/priyanshu101120/CARTORA.git",
  tech: ["React.js", "Redux", "Supabase", "Tailwind"]
},
  // {
  //   id: 4,
  //    title: "comming soon",
  //   description: "coming soon",
  //   image: commingsoon,
  //   link: "#",
  //   tech: ["coming soon", "coming soon", "coming soon"]
  // }, 
  // {
  //   id: 5,
  //  title: "comming soon",
  //   description: "coming soon",
  //   image: commingsoon,
  //   link: "#",
  //   tech: ["coming soon", "coming soon", "coming soon"]
  // }, {
  //   id: 6,
  //    title: "comming soon",
  //   description: "coming soon",
  //   image: commingsoon,
  //   link: "#",
  //   tech: ["coming soon", "coming soon", "coming soon"]
  // },
]