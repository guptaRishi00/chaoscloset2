"use client";
import {
  Navbar as AceternityNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Custom Logo Component moved outside to prevent re-creation during render
const CustomLogo = () => (
  <Link href="/" className="flex items-center gap-2 group">
    <Image
      src="/logo.png"
      alt="Grovio Logo"
      width={85}
      height={30}
      className="object-cover lg:w-30 w-12"
    />
  </Link>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100);
  });

  if (pathname.startsWith("/leads")) return null;

  return (
    <div className={`relative w-full `}>
      <AceternityNavbar className="z-[100]">
        {/* Desktop Navigation */}
        <NavBody className="">
          <div className="flex items-center gap-2">
            <CustomLogo />
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact-us"
              className={`relative px-6 py-4 bg-white hover:bg-[#fa2282] hover:text-white text-black font-semibold overflow-hidden group transition-all duration-300 hover:scale-105 rounded-full`}
            >
              <span
                className={`relative z-10 group-hover:text-white font-semibold`}
              >
                Get in Touch
              </span>
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader
            className={`${isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5 shadow-2xl" : "bg-transparent"} transition-all duration-300`}
          >
            <CustomLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className={!isScrolled ? "backdrop-blur-none bg-black" : ""}
          >
            <div className="flex w-full flex-col gap-4 mt-4">
              <Link
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative px-6 py-3 border border-white text-white font-semibold rounded-full overflow-hidden group transition-all duration-300 text-center"
              >
                <span className="absolute inset-0 w-0 bg-linear-to-r from-[#a881fb] to-[#d0bfff] transition-all duration-[250ms] ease-out group-hover:w-full"></span>
                <span
                  className={`relative z-10 group-hover:text-black uppercase tracking-wide text-sm font-semibold transition-colors duration-200`}
                >
                  Get in Touch
                </span>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </AceternityNavbar>
    </div>
  );
}
