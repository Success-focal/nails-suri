import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { serviceData } from "@/lib/data/datapool";
import Link from "next/link";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import LottieAnimation from "../animation/lottieAnimation";

export default function ServiceSection() {
  return (
    <section id="services" className="py-16 px-6 sm:px-12 md:px-20">
      <div className="relative text-center space-y-4 max-w-7xl mx-auto mb-12">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-40 blur-md animate-pulse bg-[oklch(85%_0.09_15)]" />
          <div className="absolute top-40 right-20 w-16 h-16 rounded-full opacity-50 blur-md animate-bounce bg-[oklch(80%_0.11_60)]" />
          <div className="absolute bottom-20 left-1/4 w-14 h-14 rounded-full opacity-35 blur-md animate-pulse bg-[oklch(78%_0.12_345)]" />
        </div>
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          <h2 className="text-4xl font-bold tracking-tight text-foreground font-sans">
            Our Signature Services
          </h2>
          <p className="text-muted-foreground text-md font-mono">
            Discover the elegance of nail perfection and pampering rituals. Each
            treatment is crafted with love, care, and high-quality vegan
            products to enhance your natural beauty.
          </p>
        </div>
      </div>

      <div className="space-y-24 max-w-5xl mx-auto">
        {Object.entries(serviceData).map(
          ([category, { id, image, services }]) => (
            <div
              key={category}
              id={id}
              className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start scroll-mt-28 "
            >
              {/* Left: Image (2/5 columns on large screens) */}
              <div
                className="md:col-span-2 w-[90%] md:w-full flex items-center justify-center relative rounded-2xl overflow-hidden shadow-md h-[300px] lg:h-[400px] group
               cursor-[url('/cursor/cursor.svg'),_pointer]"
              >
                <Image
                  src={image}
                  alt={category}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center rounded-2xl scale-110 blur-xs grayscale
                  transition-all ease-out group-hover:scale-100 duration-700 group-hover:blur-none group-hover:grayscale-0
                  "
                  priority={id === "manicure"}
                />

                <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <div className="flex items-center justify-between gap-2 font-sans bg-muted-foreground backdrop-blur-md px-4 py-2 rounded-xl shadow-md text-foreground text-sm font-medium tracking-wide">
                    <span className="text-accent">{category} Menu</span>
                    <span className="transform transition-transform duration-500 group-hover:translate-x-1 text-accent animate-pulse">
                      <MoveRight />
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Service List (3/5 columns on large screens) */}
              <div className="md:col-span-3 space-y-6">
                {/* Heading and Badge */}
                <div className="flex items-center gap-4 font-sans tracking-wider text-accent">
                  <h3 className="text-2xl md:text-3xl font-medium ">
                    {category}
                  </h3>
                  <Badge
                    variant="outline"
                    className="text-xs uppercase border-accent bg-background/70 text-accent  backdrop-blur-md px-2 py-1 shadow-sm"
                  >
                    {services.length} Services
                  </Badge>
                </div>

                {/* List of Services */}
                <ul className="space-y-5">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      className="border-b border-border pb-2 hover:border-accent/40 transition-colors duration-300 group tracking-tight font-mono"
                    >
                      <div className="flex justify-between items-start gap-3 flex-wrap">
                        {/* Service Name with hover underline */}
                        <h4 className="text-base md:text-md font-semibold text-foreground relative">
                          <span className="inline-block">
                            {service.name}
                            <span className="block w-0 group-hover:w-full h-[1.5px] bg-accent transition-all ease-out duration-500 mt-0" />
                          </span>
                        </h4>

                        {/* Price */}
                        <p className="text-base md:text-md font-medium text-secondary ml-auto">
                          {service.price}
                        </p>
                      </div>

                      {/* Description */}
                      {service.description && (
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {service.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        )}
      </div>

      <section className="relative w-full h-[250px] sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[420px] rounded-2xl overflow-hidden shadow-xl mt-20">
        {/* Background Banner Image */}
        <Image
          src="/models/serviceBanner.jpg"
          alt="Luxurious nail care experience"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/20 flex items-center justify-center px-6 text-center">
          <div className="max-w-3xl space-y-4 text-popover">
            <p className="text-lg md:text-xl font-light font-mono tracking-wider">
              Elevate your everyday with our signature touch of elegance.
            </p>
            <Button asChild size="lg" className="text-base tracking-wide ">
              <Link href="/booking" className="flex items-center gap-2">
                <span>Book Your Appointment</span>
                <LottieAnimation
                  src="/animation/appointment.json"
                  className="w-8 h-8"
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}
