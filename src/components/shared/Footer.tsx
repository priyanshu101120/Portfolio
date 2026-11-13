'use client';

import React from 'react';
// import { socials } from '@/lib/socials';
import CharcoalText from '@/components/ui/Charcoaltext';

export default function Footer() {
  return (
    <div className="w-full px-6 sm:px-10 py-4 shadow-2xl text-foreground transition-colors duration-300 hover:border-card-border-hover hover:shadow-accent/5">
      <div className="relative mx-auto w-full max-w-6xl">
        {/* ---------- Charcoal name: blurs on hover, sharp again when the cursor leaves ---------- */}
        <div className="mt-0">
          <CharcoalText
            text="Priyanshu"
            color="#FFC700"
          />
        </div>
      </div>
    </div>
  );
}