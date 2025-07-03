import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";
import Image from "next/image";
import Appointment from "../animation/Appointment";

const Aboutus = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-20 space-y-20 bg-background text-foreground">
      {/* Intro */}
      <div className="relative w-full max-w-7xl mx-auto text-left space-y-4">
        {/* Decorative Floating Pastel Circles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-40 blur-md animate-pulse bg-[oklch(85%_0.09_15)]" />
          <div className="absolute top-40 right-20 w-16 h-16 rounded-full opacity-50 blur-md animate-bounce bg-[oklch(80%_0.11_60)]" />
          <div className="absolute bottom-20 left-1/4 w-14 h-14 rounded-full opacity-35 blur-md animate-pulse bg-[oklch(78%_0.12_345)]" />
        </div>

        {/* Text Content */}
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-wide">
            Crafted with Care, Rooted in Beauty
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-mono leading-relaxed">
            At Suri Nails, we believe beauty is a ritual not just a service. Our
            studio is more than a place for nails; it’s a calm, nurturing space
            where confidence is restored, artistry shines, and femininity is
            celebrated. Whether you&apos;re here for a polish or a pause,
            you&apos;re always welcomed with warmth and intention.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-6xl mx-auto">
        {/* Image */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md transition-all duration-500 ease-in-out">
          <Image
            src="/about/About.jpeg"
            alt="Suri Nails - Elegant Interior"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Text */}
        <div className="space-y-6 text-left">
          <h1 className="text-4xl sm:text-5xl font-bold font-sans leading-snug text-foreground/80">
            About <span className="text-accent italic">Suri Nails</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg font-mono leading-relaxed">
            Where elegance meets precision. At Suri Nails, we blend artistic
            passion with a commitment to beauty and self-expression. From the
            first brush stroke to the final shimmer, every detail is crafted
            with love and purpose. Because beauty isn’t one-size-fits-all, and
            neither is your story.
          </p>
          <Button asChild size="lg">
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>

      {/* Founder Story */}
      <div className="max-w-4xl mx-auto text-left space-y-6">
        <h2 className="text-3xl font-bold text-foreground flex items-center justify-center gap-2">
          <Heart className="w-6 h-6 text-accent" />
          Meet the Founder
        </h2>
        <p className="text-muted-foreground text-base font-mono leading-loose">
          Founded by <strong>Suri Mj</strong>, a passionate artist and beauty
          visionary, Suri Nails began as a quiet dream. Through years of
          dedication, it blossomed into a sanctuary of creativity and feminine
          energy. With every design, she invites you to slow down, reconnect,
          and feel beautiful, not just on the outside, but deep within.
        </p>
      </div>

      {/* Mission & Values */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left font-sans">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-foreground">
            Our Mission
          </h3>
          <p className="text-muted-foreground text-sm font-mono">
            To empower individuals through self-care and artistic beauty. We
            strive to create a luxurious, safe, and uplifting experience for
            every client, every time. Because you deserve more than just a
            treatment. You deserve to be seen, celebrated, and cared for.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-foreground">
            What Sets Us Apart
          </h3>
          <p className="text-muted-foreground text-sm font-mono">
            We don’t just polish nails, we craft confidence. Our nature-inspired
            palettes, spotless hygiene, and personalized attention ensure every
            visit feels like a luxury retreat, even if it’s just for a quick
            touch-up.
          </p>
        </div>
      </div>

      {/* Highlight CTA */}
      <div className="relative py-16 px-6 sm:px-10 lg:px-20 max-w-2xl mx-auto overflow-hidden rounded-3xl bg-[oklch(98.5%_0.05_20)] shadow-md border border-border mt-10 isolate">
        {/* Decorative Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[oklch(90%_0.15_345)] opacity-20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[oklch(88%_0.11_60)] opacity-25 blur-2xl rounded-full" />
        </div>

        {/* CTA Text & Button */}
        <div className="text-center space-y-4">
          <p className="text-xl sm:text-2xl font-medium text-muted-foreground font-mono">
            Ready to experience beauty, the{" "}
            <span className="text-accent italic font-bold">Suri</span> way?
          </p>
          <Button asChild size="lg" className="text-base tracking-wide ">
            <Link href="/booking" className="flex items-center gap-2">
              <span>Book Your Appointment</span>
              <Appointment />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
