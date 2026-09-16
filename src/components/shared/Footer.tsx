'use client';

import React from 'react';

const menuLinks = ['Home', 'Work', 'About'];
const socialLinks = ['X', 'Instagram', 'LinkedIn'];
const resourceLinks = ['Weekstack App', 'Newsletter'];

export default function Footer() {
  return (
    <div className="w-full px-6 py-10 sm:px-10 sm:py-14 shadow-2xl text-foreground transition-colors duration-300 hover:border-card-border-hover hover:shadow-accent/5">
      <div className="relative mx-auto w-full max-w-6xl">

        {/* ---------- Footer columns ---------- */}
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:mt-24 sm:grid-cols-4">
          <FooterColumn title="Menu" links={menuLinks} />
          <FooterColumn title="Socials" links={socialLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />

          {/* Newsletter column */}
          <div>
            <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-white">
              Newsletter
            </h3>
            <p className="text-[13px] text-white">Sign up for updates</p>
            <form className="mt-3 flex items-end gap-2 border-b pb-2 text-white">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-white text-xl italic placeholder:opacity-70 focus:outline-none sm:text-2xl"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              />
              <button type="submit" aria-label="Subscribe" className="pb-1 text-xl text-white">
                &#8594;
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-start">
          <h1
            className="select-none font-black uppercase leading-[0.78] tracking-[-0.01em] text-[88px] sm:text-[140px] md:text-[170px]  bg-gradient-to-b from-[#d8d8d8] via-[#555555] to-[#080808]
 bg-clip-text text-transparent"
            style={{ fontFamily: "'Arial Black', ui-sans-serif, sans-serif" }}
          >
            Priyanhsu
          </h1>

          {/* <p
            className="mt-2 whitespace-nowrap text-2xl italic sm:mt-6 sm:text-3xl md:text-4xl"
            style={{ color: RED, fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Created for life
          </p> */}
        </div>

        {/* ---------- Bottom bar ---------- */}
        {/* <div
          className="mt-14 flex flex-col gap-4 border-t text-white pt-5 text-[11px] sm:mt-20 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: 'rgba(214,57,31,0.3)' }}
        >
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>Made by You</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>Copyright 2026</span>
          </div>
          <p className="max-w-md opacity-80 sm:text-right">
            By subscribing, you agree to receive updates from us.
          </p>
        </div> */}
      </div>
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-white">{title}</h3>
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-[13px] transition-opacity hover:opacity-70 text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
