import AboutSection from "@/components/home/AboutSection";
import Herosection from "@/components/home/Herosection";
import InstagramCTA from "@/components/home/InstagramCTA";
import ServicesSection from "@/components/home/ServicesSection";
import TextMarquee from "@/components/home/TextMarquee";
import VideoSection from "@/components/home/VideoSection";
import Footer from "@/components/layout/Footer";
import LogoLoop from "@/components/ui/LogoLoop";

export default function HomePage() {
  const imageLogos = [
    { src: "/nike2.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/stussy.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/carhartt.png", alt: "Company 3", href: "https://company3.com" },
    {
      src: "/stone-island.png",
      alt: "Company 3",
      href: "https://company3.com",
    },
    { src: "/arcteryx.png", alt: "Company 3", href: "https://company3.com" },
    { src: "/supreme2.png", alt: "Company 3", href: "https://company3.com" },
    { src: "/dickies.png", alt: "Company 3", href: "https://company3.com" },
    {
      src: "/polo-ralph-lauren.png",
      alt: "Company 3",
      href: "https://company3.com",
    },
    {
      src: "/tommy-hilfiger.webp",
      alt: "Company 3",
      href: "https://company3.com",
    },
    { src: "/bape.png", alt: "Company 3", href: "https://company3.com" },
  ];

  return (
    <main className="space-y-14 px-3 py-3">
      <Herosection />

      {/* Trusted By Section */}
      <section className="flex lg:flex-row flex-col items-center gap-8 overflow-hidden lg:px-6 lg:py-4">
        {/* Label */}
        <div className="shrink-0">
          <p className="text-sm font-medium tracking-wide text-black/60 uppercase">
            u might find
          </p>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-black/10" />

        {/* Logo Loop */}
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <LogoLoop
            logos={imageLogos}
            speed={50}
            direction="left"
            logoHeight={50}
            gap={90}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </section>

      <AboutSection />
      <VideoSection />
      <ServicesSection />
      <TextMarquee />
      <InstagramCTA />
      <Footer />
    </main>
  );
}
