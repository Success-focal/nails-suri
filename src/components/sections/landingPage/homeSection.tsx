"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LottieAnimation from "@/components/animation/lottieAnimation";

export default function HomeSection() {
  return (
    <section
      aria-label="Welcome to Suri Nails"
      className="relative w-full bg-muted/60 pb-24 pt-4 md:pt-0 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-6 items-center gap-12 relative z-10">
        {/* Left Side - Text Content */}
        <header className="md:col-span-3 space-y-8 text-center md:text-left">
          <h1 className="text-4xl font-mono font-bold text-foreground max-w-lg mx-auto md:mx-0 tracking-wide leading-snug">
            Welcome to <span className="text-accent italic">Suri Nails</span> -
            Where Elegance Meets Artistry
          </h1>

          <p className="text-lg font-sans text-muted-foreground max-w-md leading-relaxed mx-auto md:mx-0">
            Experience luxurious nail care, flawless extensions, and
            personalized beauty treatments tailored just for you. Because your
            hands deserve the best.
          </p>

          <Button asChild size="lg" className="gap-0">
            <Link href="/services">
              <span>Our Services</span>
              <LottieAnimation
                src="/animation/Nailpolishing.json"
                className="w-10 h-10"
              />
            </Link>
          </Button>
        </header>

        {/* Right Side - Model Image */}
        <div className="md:col-span-3 w-full flex justify-center py-4">
          <figure className="relative w-[90%] sm:w-[80%] h-72 sm:h-[22rem] md:h-[36rem] rounded-lg rounded-br-3xl sm:rounded-br-[6rem] md:rounded-br-full lg:rounded-br-[16rem] overflow-hidden shadow-lg transition-all duration-500">
            <Image
              src="/models/Model6.jpeg"
              alt="Model showcasing elegant nails"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-top object-cover"
              priority
            />
          </figure>
        </div>
      </div>

      {/* Bottom SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
        <svg
          className="relative block w-[162%] h-[142px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,
     70.36-5.37,136.33-33.31,206.8-37.5C438.64,
     32.43,512.34,53.67,583,72.05c69.27,18,
     138.3,24.88,209.4,13.08,36.15-6,
     69.85-17.84,104.45-29.34C989.49,25,
     1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-[oklch(98.7%_0.015_20)]"
          />

          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,
     47.69,72.05,99.41,111.27,165,111,
     224.58,91.58c31.15-10.15,60.09-26.07,
     89.67-39.8,40.92-19,84.73-46,
     130.83-49.67,36.26-2.85,
     70.9,9.42,98.6,31.56,
     31.77,25.39,62.32,62,
     103.63,73,40.44,10.79,
     81.35-6.69,119.13-24.28s75.16-39,
     116.92-43.05c59.73-5.85,
     113.28,22.88,168.9,38.84,
     30.2,8.66,59,6.17,
     87.09-7.5,22.43-10.89,
     48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-[oklch(98.6%_0.012_20)]"
          />

          <path
            d="M0,0V5.63C149.93,59,
     314.09,71.32,475.83,42.57c43-7.64,
     84.23-20.12,127.61-26.46,
     59-8.63,112.48,12.24,
     165.56,35.4C827.93,77.22,
     886,95.24,951.2,90c86.53-7,
     172.46-45.71,248.8-84.81V0Z"
            className="fill-[oklch(98.5%_0.009_20)]"
          />
        </svg>
      </div>
    </section>
  );
}
