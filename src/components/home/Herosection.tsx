import Header from "../layout/Header";

export default function Herosection() {
  const logo = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png"];

  return (
    <section className="relative min-h-screen lg:min-h-[96vh] overflow-hidden rounded-[20px] lg:rounded-[20px]">
      {/* Background Video */}
      <video
        src="/assets/hero2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-20 flex min-h-screen lg:min-h-[96vh] flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        {/* Header */}
        <Header />

        {/* Hero Center */}
        <div className="flex flex-1 items-center justify-center py-10 sm:py-16">
          <div className="flex max-w-6xl flex-col items-center text-center">
            {/* Heading */}
            <h1 className="text-white font-bold leading-[0.9] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-9xl">
              We Curate
              <br />
              Streetwear Chaos
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-xl text-sm font-medium text-zinc-200 sm:text-base md:text-lg lg:text-2xl">
              Curated brands, vintage heat & limited drops for outsiders.
            </p>

            {/* Logos */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-5 sm:gap-x-8 md:gap-x-10 lg:gap-x-14">
              {logo.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Partner Logo ${index + 1}`}
                  className="h-4 w-auto object-contain opacity-90 sm:h-5 md:h-7 lg:h-9"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-5 text-white/90 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xs text-center text-[11px] leading-relaxed sm:text-xs md:text-left md:text-sm">
            Premium thrifted streetwear creating limited drops for rebels,
            outsiders and chaos lovers.
          </p>

          <p className="max-w-xs text-center text-[11px] leading-relaxed sm:text-xs md:text-right md:text-sm">
            Curated vintage, authentic streetwear and 1/1 drops from Dibrugarh,
            Assam.
          </p>
        </div>
      </div>
    </section>
  );
}
