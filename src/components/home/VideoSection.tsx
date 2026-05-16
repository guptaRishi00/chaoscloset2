import React from "react";

type Props = {};

export default function VideoSection({}: Props) {
  return (
    <section className="mt-10 md:mt-16">
      <div className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-black md:rounded-[40px]">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            h-[500px] w-full object-cover
          
            sm:h-[580px]
            md:h-[720px]
          "
          src="/assets/video3.mp4"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Noise Texture - Hidden on mobile */}
        <div className="absolute inset-0 hidden opacity-[0.04] mix-blend-overlay md:block bg-[url('/noise.png')]" />

        {/* Floating Pills - Desktop Only */}
        <div className="absolute left-6 top-6 hidden flex-wrap items-center gap-3 md:flex">
          <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/80">
              Curated Vintage
            </p>
          </div>

          <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
            <p className="text-xs text-white/70">Limited thrifted drops</p>
          </div>
        </div>

        {/* Floating Buttons - Desktop Only */}
        <div className="absolute right-6 top-6 hidden flex-col gap-3 md:flex">
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition duration-300 hover:scale-110">
            ✦
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition duration-300 hover:scale-110">
            ↓
          </button>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-7 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* Left Content */}
            <div className="max-w-2xl">
              <h3
                className="
                  text-3xl font-semibold leading-[0.95]
                  tracking-[-0.04em] text-white
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                "
              >
                Chaos in every
                <br />
                curated drop.
              </h3>

              <p
                className="
                  mt-4 max-w-xl text-sm leading-relaxed text-white/70
                  sm:text-base
                  md:mt-5 md:text-lg
                "
              >
                Discover rare streetwear, vintage essentials and chaotic 1/1
                pieces curated for outsiders, rebels and people who never dress
                basic.
              </p>
            </div>

            {/* Stats - Hidden on mobile */}
            <div className="hidden grid-cols-2 gap-4 md:grid">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Pieces
                </p>

                <h4 className="mt-3 text-3xl font-semibold text-white">1/1</h4>

                <p className="mt-2 text-sm text-white/60">Rare curated finds</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Drops
                </p>

                <h4 className="mt-3 text-3xl font-semibold text-white">
                  Weekly
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  Limited collections
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  );
}
