import React from "react";

type Props = {};

export default function AboutSection({}: Props) {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        {/* Tag */}
        <div className="shrink-0">
          <div className="inline-flex rounded-xl border border-gray-200 bg-white px-4 py-2">
            <p className="text-sm font-medium tracking-tight text-stone-900 sm:text-base">
              About Chaos Closet
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl">
          <p className="text-left text-lg font-medium leading-[1.5] text-stone-900 sm:text-xl md:text-2xl lg:text-3xl">
            Chaos Closet is a curated thrift store built for streetwear lovers,
            vintage hunters, and people who dress like they’ve got stories to
            tell.
            <span className="mt-3 block text-stone-500">
              From rare vintage finds to chaotic 1/1 pieces, every drop is
              selected to stand out, not blend in.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
