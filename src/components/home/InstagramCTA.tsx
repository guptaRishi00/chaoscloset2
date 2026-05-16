"use client";

import Link from "next/link";
import Image from "next/image";
import { FiInstagram, FiArrowUpRight } from "react-icons/fi";

export default function InstagramCTA() {
  return (
    <section className="relative w-full overflow-hidden rounded-[20px] bg-black px-4 py-20 sm:px-6 md:px-8 lg:px-12 lg:py-32 border-t border-white/10">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta.png"
          alt="Streetwear Archive Background"
          fill
          className="object-cover object-center grayscale-[50%]"
          sizes="100vw"
        />
        {/* Gradient overlay to ensure text legibility while keeping the grunge vibe */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      {/* Massive Background Text Accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.04]">
        <h2 className="whitespace-nowrap text-[15rem] font-black uppercase tracking-tighter text-white md:text-[16rem]">
          DIBRUGARH
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] flex flex-col items-center justify-center text-center">
        {/* Top Label */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#fa2282] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#fa2282]"></span>
          </span>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            Join The Underground
          </p>
        </div>

        {/* Main CTA Typography */}
        <h2 className="max-w-4xl text-3xl font-black uppercase tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-xl">
          Catch the drops <br className="hidden md:block" />
          before they fade.
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base md:text-lg drop-shadow-md">
          Exclusive 1/1 vintage pieces, raw streetwear, and weekly archives
          dropping first on our feed. Curated in Dibrugarh, Assam for the
          culture.
        </p>

        {/* Button Wrapper */}
        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
          <Link
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex w-fit items-center gap-3
              rounded-full bg-white px-8 py-5
              text-sm font-bold uppercase tracking-wide text-black
              transition-all duration-300
              hover:scale-105 hover:bg-[#fa2282] hover:text-white
              shadow-[0_0_40px_rgba(255,255,255,0.1)]
            "
          >
            <FiInstagram className="h-5 w-5" />
            Follow The Archive
            <FiArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bottom Social Proof / Teaser */}
        <div className="mt-16 flex items-center justify-center gap-4 border-t border-white/20 pt-8 text-xs font-bold tracking-widest text-neutral-400 uppercase">
          <span>Rare Finds</span>
          <span className="h-1 w-1 rounded-full bg-neutral-500"></span>
          <span>Zero Restocks</span>
          <span className="h-1 w-1 rounded-full bg-neutral-500"></span>
          <span>DM To Cop</span>
        </div>
      </div>
    </section>
  );
}
