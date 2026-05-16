"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Updated array to include image placeholders suited for a streetwear aesthetic
const collections = [
  {
    title: "Vintage Streetwear",
    image: "/p10.png",
  },
  {
    title: "Curated 1/1 Pieces",
    image: "/p9.png",
  },
  {
    title: "Weekly Drops",
    image: "/p6.png",
  },
  {
    title: "Authentic Vintage",
    image: "/p5.png",
  },
  {
    title: "Graphic Tees",
    image: "/p7.png",
  },
  {
    title: "Accessories",
    image: "/p8.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 md:px-8 lg:px-12 lg:py-24">
      {/* Top Blur Accent */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Heading Area */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-black/10 bg-white px-4 py-2">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/60">
                Chaos Closet
              </p>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap items-center gap-0 sm:gap-5">
              <h2
                className="
                  text-5xl font-semibold leading-none lg:tracking-[-0.08em]
                  text-black
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[8rem]
                "
              >
                Curated
              </h2>

              {/* Floating Inline Image */}
              <div className="relative h-14 w-26 ml-3 lg:ml-0 overflow-hidden rounded-2xl border border-black/10 sm:h-20 sm:w-32 md:h-24 md:w-44">
                <Image
                  src="/banner.jpg"
                  alt="Chaos Closet"
                  fill
                  sizes="(max-width: 768px) 120px, 180px"
                  className="object-cover"
                />
              </div>

              <h2
                className="
                  text-5xl font-semibold leading-none tracking-[-0.08em]
                  text-black
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[8rem]
                "
              >
                Chaos
              </h2>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black/60 sm:text-base md:text-lg">
              A rotating archive of vintage streetwear, oversized silhouettes,
              washed textures and rare thrift finds built for outsiders.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="https://www.instagram.com/_chaos.closet_/"
            className="
              group flex w-fit items-center gap-2
              rounded-full border border-black/10
              bg-black px-6 py-4
              text-sm font-medium text-white
              transition-all duration-300
              hover:scale-[1.03]
              hover:bg-[#fa2282]
              hover:border-[#fa2282]
            "
          >
            Explore Drops
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Image Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-neutral-100 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700"
              />

              {/* Gradient Overlay (Appears on Hover) */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" /> */}

              {/* Text Content (Slides up and fades in on hover) */}
              {/* <div className="absolute bottom-0 left-0 flex w-full flex-col justify-end p-6 sm:p-8 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-bold tracking-[0.2em] text-[#fa2282] mb-3 uppercase drop-shadow-md">
                  0{index + 1}
                </span>
                <h3 className="text-3xl font-semibold leading-none tracking-tight text-white sm:text-4xl">
                  {item.title}
                </h3>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
