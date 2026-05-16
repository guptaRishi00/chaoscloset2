// app/components/layout/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaArrowUp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className=" pb-2">
      <div className="overflow-hidden rounded-[20px] bg-black text-white">
        {/* Top: Newsletter & Instagram */}
        <div className="flex flex-col items-center justify-center gap-10 px-6 py-16 text-center md:px-8 lg:py-24">
          <h3 className="max-w-2xl text-[2rem] font-medium leading-[1.1] tracking-[-0.04em] text-white md:text-[3rem]">
            Stay updated with weekly drops and exclusive archives.
          </h3>

          {/* Email Input */}
          <div className="flex h-[74px] w-full max-w-md items-center rounded-full border border-white/20 bg-white/5 pl-7 pr-3 backdrop-blur-xl">
            <input
              type="email"
              placeholder="Your Email Address"
              className="h-full flex-1 bg-transparent text-lg text-white outline-none placeholder:text-white/45"
            />
            <button className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fa2282] text-white transition hover:scale-105">
              <FaArrowUp className="rotate-45 text-lg" />
            </button>
          </div>

          {/* Instagram Link */}
          <Link
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:scale-105 hover:bg-[#fa2282] hover:text-white"
          >
            <FaInstagram className="text-lg" />
            <span>Follow on Instagram</span>
            <FaArrowUp className="rotate-45 text-xs transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </Link>
        </div>

        {/* Giant Brand Logo */}
        <div className="flex justify-center px-4 pb-12 md:px-6 lg:px-8">
          {/* 
            Adjust the heights here (h-24, sm:h-32, etc.) depending on 
            the exact dimensions and aspect ratio of your logo.png 
          */}
          <div className="relative h-24 w-full max-w-[90vw] sm:h-32 md:h-48 lg:h-64 xl:h-[300px]">
            <Image
              src="/logo.png"
              alt="Chaos Closet Logo"
              fill
              sizes="(max-width: 768px) 90vw, 80vw"
              className="object-contain select-none"
              priority
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-6 text-xs font-bold uppercase tracking-widest text-white/50 md:flex-row md:px-8">
          <span>© 2026 Chaos Closet. All rights reserved.</span>
          <span>Dibrugarh, Assam</span>
        </div>
      </div>
    </footer>
  );
}
