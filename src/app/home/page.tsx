import NewsGridSection from "@/components/garbage/NewsGridSection";
import AboutSection from "@/components/home/AboutSection";
import Herosection from "@/components/home/Herosection";
import ServicesSection from "@/components/home/ServicesSection";
import TextMarquee from "@/components/home/TextMarquee";
import VideoSection from "@/components/home/VideoSection";
import Footer from "@/components/layout/Footer";
import LogoLoop from "@/components/ui/LogoLoop";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function HomePage() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  return (
    <main className="space-y-14 px-3 py-3">
      <Herosection />

      {/* Trusted By Section */}
      <section className="flex items-center gap-8 overflow-hidden px-6 py-4">
        {/* Label */}
        <div className="shrink-0">
          <p className="text-sm font-medium tracking-wide text-black/60 uppercase">
            Trusted By
          </p>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-black/10" />

        {/* Logo Loop */}
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="left"
            logoHeight={28}
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
      <NewsGridSection />
      <Footer />
    </main>
  );
}
