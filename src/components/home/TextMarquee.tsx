// app/components/ui/TextMarquee.tsx

"use client";

import Image from "next/image";

const items = [
  "CHAOS CLOSET",
  "VINTAGE STREETWEAR",
  "CURATED 1/1 PIECES",
  "DIBRUGARH, ASSAM",
];

export default function TextMarquee() {
  return (
    <section className="w-full overflow-hidden bg-white py-10 border-y border-white/10">
      <div className="marquee">
        <div className="marquee-track flex">
          {[...Array(2)].map((_, loopIndex) => (
            <div key={loopIndex} className="flex shrink-0 items-center">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="mx-6 md:mx-10 flex shrink-0 items-center gap-6 md:gap-10"
                >
                  <h2 className="whitespace-nowrap text-6xl font-black uppercase tracking-tighter text-black md:text-8xl lg:text-[7rem]">
                    {item}
                  </h2>

                  {/* Mascot PNG */}
                  <Image
                    src="/cat.png"
                    alt="Chaos Closet Mascot"
                    width={120}
                    height={120}
                    className="h-auto w-20 md:w-28 lg:w-36"
                    priority
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
