import Header from "../layout/Header";

export default function Herosection({}: any) {
  return (
    <div className="relative lg:min-h-[96.5vh] rounded-[20px] overflow-hidden">
      <video
        src="/assets/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 z-10 backdrop-blur-xl" />

      <div className="absolute z-20 p-5 w-full flex flex-col items-center justify-between gap-10 h-full">
        <Header />

        <div className="w-full flex items-center justify-center text-center ">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl md:text-5xl lg:text-9xl font-bold text-white">
              We Engineer
            </h1>

            <div className="flex items-center justify-center gap-5">
              <p className="text-4xl md:text-5xl lg:text-9xl font-bold text-white">
                Digital
              </p>
              <div className="w-50 h-22 overflow-hidden rounded-full">
                <video
                  src="/assets/hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className=""
                />
              </div>
              <p className="text-4xl md:text-5xl lg:text-9xl font-bold text-white">
                Solutions
              </p>
            </div>

            <p className="text-lg md:text-xl lg:text-5xl font-medium text-white mt-5">
              crafted for impact
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-between">
          <p className="text-start text-white font-medium max-w-sm text-sm">
            Organic media planners creating, distributing & optimising
            search-first content for SEO, Social, PR, Ai and LLM search
          </p>
          <p className="text-end text-white font-medium max-w-sm text-sm">
            Organic media planners creating, distributing & optimising
            search-first content for SEO, Social, PR, Ai and LLM search
          </p>
        </div>
      </div>
    </div>
  );
}
