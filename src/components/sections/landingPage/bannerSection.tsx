import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const BannerSection = () => {
  return (
    <section className="relative w-full h-[280px] sm:h-[320px] md:h-[400px] lg:h-[480px] overflow-hidden">
      {/* Banner Image */}
      <Image
        src="/models/Banner.jpg"
        alt="Banner CTA"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-accent-foreground/30 z-10" />

      {/* Text & CTA */}
      <div className="absolute inset-0 z-20 flex flex-col text-center items-center justify-center px-6 md:px-12 lg:px-20">
        <p className="text-sm sm:text-base text-muted mb-2 tracking-wide uppercase font-sans">
          Looking for something beyond our services?
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-background mb-6 max-w-xl font-mono">
          Let’s Create Your Perfect Beauty Experience
        </h2>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
};

export default BannerSection;
