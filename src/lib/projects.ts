export interface Project {
  id: number;
  slug: string;
  title: string;
  year: string;
  tech: string[];
  description: string;
  myRole: string[];
  images: string[];
  hoverImage: string;
  github: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'BizLink',
    title: 'BizLink B2B platform',
    year: '2026',
    tech: [
      'Next.js',
      'Node.js',
      'Express',
      'Socket.io',
      'PostgreSQL',
      'Tailwind CSS',
      'Shandcn Ui',
    ],
    description:
      'A real-time collaborative study platform featuring interactive classrooms, document rendering, and integrated study tools. Students can join virtual study rooms to collaborate on files, utilize text-to-speech learning aids, and query an automated assistant for summaries. Teachers can upload resource materials and participate in peer-to-peer discussions.',
    myRole: [
      'Designed and implemented real-time classroom state synchronization and live chat using Express and Socket.io.',
      'Integrated text processing and search SDKs to build an automated Study Assistant capable of generating lecture summaries, flashcards, and quizzes.',
      'Configured a backend document processor using libreoffice-convert to transform DOCX/PPTX slides into PDFs for frontend rendering.',
      'Implemented multi-format PDF rendering using React PDF and PDF.js to support interactive whiteboard and text highlighting features.',
      'Integrated Cloudinary for persistent media assets and Firebase SDK for secure file hosting and user authentication.',
      'Built responsive student and teacher dashboard layouts featuring smooth micro-animations using React, Tailwind CSS v4, and Framer Motion.',
    ],
    images: [
      '/Projects/c-study/02_CSP.webp',
      '/Projects/c-study/01_CSP.webp',
      '/Projects/c-study/03_CSP.webp',
      '/Projects/c-study/04_CSP.webp',
      '/Projects/c-study/06_CSP.webp',
    ],
    hoverImage: '/Projects/c-study/02_CSP.webp',
    github: 'https://github.com/priyanshu101120/Bizlink',
    liveUrl: 'https://bizlink-two.vercel.app/',
  },
  {
    id: 2,
    slug: 'Taskora',
    title: 'Task Management System',
    year: '2025',
    tech: [
      'React',
      'Express',
      'Node.js',
      'MongoDB',
      'Clinical Assessment',
      'Redux Toolkit',
      'Tailwind CSS',
    ],
    description:
      "Developed an intelligent productivity application utilizing Groq AI for automated task prioritization and smart user assistance.Built a secure backend infrastructure with Supabase, implementing Row Level Security (RLS) for multi-tenant data isolation.",
    myRole: [
      'Built the full-stack healthcare workflow using React, Express, Node.js, and MongoDB, incorporating Redux Toolkit for state management.',
      'Integrated text analysis engines to implement a patient symptom advisor, pre-consultation medical history synthesis, and suggested prescriptions.',
      'Developed independent portals for patients, doctors, and admins with custom dashboards and schedule slot managers.',
      'Implemented doctor registration verification and appointment approval workflows.',
      'Created global patient and staff search functionality for administrative record management.',
      'Designed a fully responsive UI utilizing Tailwind CSS, Ant Design layouts, and custom loading states for text generation.',
    ],
    images: [
      '/Projects/HMS/hospital-1.webp',
      '/Projects/HMS/hospital-2.webp',
     
    ],
    hoverImage: '/Projects/HMS/hospital-1.webp',
    github: 'https://github.com/priyanshu101120/TASKORA',
    liveUrl: 'https://taskora-beta.vercel.app/',
  },
  {
    id: 3,
    slug: 'ecommerce',
    title: 'E-Commerce Store',
    year: '2026',
    tech: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Redux Toolkit',
      'Stripe',
      'MongoDB',
      'Tailwind CSS',
    ],
    description:
      'A high performance e-commerce platform built using the Next.js App Router and React 19 to provide a smooth, dark themed shopping experience. The storefront integrates server side rendering for catalog queries, category filters, and sorting parameters, allowing for fast initial loads and search optimization. A key feature is the database persisted shopping cart which uses React 19 transition states and optimistic updates to reflect quantity changes instantly, automatically rolling back to the cached Redux store if backend updates fail. Transactions are completed through a secure Stripe checkout session that collects delivery details, logs orders, and flushes cart states upon redirect confirmation. The backend includes database safeguards such as connection caching, a failure cooldown guard, and an offline mock dataset fallback to maintain stability.',
    myRole: [
      'Architected the full-stack catalog using Next.js App Router, TypeScript, and MongoDB, employing server-side data fetching for category collections.',
      'Integrated React 19 optimistic updates and transition hooks inside a custom React Context provider to enable zero-latency cart modifications.',
      'Engineered an end-to-end checkout pipeline with Stripe Checkout Sessions, capturing payment events, user details, and order logging.',
      'Configured a resilient Mongoose database connection wrapper featuring caching, a 10-second failure cooldown lock, and mock data fallbacks.',
      'Implemented type-safe form validation using Zod and React Hook Form on the frontend and custom validation middleware on API routes.',
      'Designed a responsive, dark-themed user interface utilizing Tailwind CSS, custom loading spinners, and skeleton loaders to minimize layout shifts.',
    ],
    images: [
      '/Projects/ecommerce/1.webp',
      '/Projects/ecommerce/2.webp',
      '/Projects/ecommerce/3.webp',
      '/Projects/ecommerce/4.webp',
      '/Projects/ecommerce/5.webp',
      '/Projects/ecommerce/6.webp',
    ],
    hoverImage: '/Projects/ecommerce/1.webp',
    github: 'https://github.com/priyanshu101120/CARTORA',
    liveUrl: 'https://cartora-carw-g5c5zhpk7-priyanshu101120s-projects.vercel.app/',
  },
];
export function getAllProjects(): Project[] {
  return projects;
}
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
