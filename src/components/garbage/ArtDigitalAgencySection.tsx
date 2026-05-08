// app/components/ArtDigitalAgencySection.tsx

export default function ArtDigitalAgencySection() {
  return (
    <section className="w-full bg-white text-black overflow-hidden py-7">
      <div className="leading-none tracking-[-0.08em] flex flex-col items-center justify-center">
        <div className="flex items-center gap-10">
          <h1 className="font-semibold text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[10rem] xl:text-[11rem]">
            Our Case
          </h1>
          <div className="mt-4 shrink-0 text-start">
            <p className="text-sm font-medium leading-tight text-black/80 md:text-xl">
              Based in
              <br />
              India
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <p className="text-sm font-medium leading-tight text-black/80 md:text-xl max-w-xs">
            We are specialised in generating Industrial Leaders
          </p>

          <div className="h-[140px] w-[2px] rotate-[24deg] bg-black/80 -ml-16 mr-5" />

          <h2 className="font-semibold text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[10rem] xl:text-[11rem]">
            Study
          </h2>
        </div>
      </div>
    </section>
  );
}
