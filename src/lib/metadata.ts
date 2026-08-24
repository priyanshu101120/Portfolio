import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: {
    default: 'Priyanshu',
    template: '%s | Priyanshu',
  },
  description:
    'Web developer specializing in React, Next.js, and MERN Stack development. Building fast, scalable, and user-focused web applications.',
  keywords: [
    'Priyanshu',
    'Web Developer',
    'Frontend Developer',
    'Full Stack Developer',
    'Next.js',
    'React',
    'JavaScript',
    'MERN Stack',
    'Portfolio',
  ],
  authors: [
    {
      name: 'Priyanshu Singh ',
    },
  ],
  creator: 'Priyanshu',
  metadataBase: new URL('https://priiyanshu.me'),
  alternates: {
    canonical: './',
  },
  icons: {
    icon: '/favicon.webp',
  },
  openGraph: {
    title: 'Priyanshu - Full Stack Developer',
    description:
      'Portfolio of Priyanshu Singh, Full Stack Developer specializing in MERN stack, Next.js, and polished web experiences.',
    url: 'https://priiyanshu.me',
    siteName: 'Priyanshu Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Priyanshu - Full Stack Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanshu - Full Stack Developer',
    description:
      'Portfolio of Priyanshu, Full Stack Developer specializing in MERN stack, Next.js, and polished web experiences.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
