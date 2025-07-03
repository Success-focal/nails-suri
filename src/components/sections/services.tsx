import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { serviceData } from "@/lib/data/datapool";
import Link from "next/link";
import { Button } from "../ui/button";
import Appointment from "../animation/Appointment";

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
          <p className="text-muted-foreground text-lg font-mono">
            Discover the elegance of nail perfection and pampering rituals. Each
            treatment is crafted with love, care, and high-quality vegan
            products to enhance your natural beauty.
          </p>
        </div>
      </div>

      <div className="space-y-24 max-w-6xl mx-auto">
        {Object.entries(serviceData).map(
          ([category, { id, image, services }]) => (
            <div
              key={category}
              id={id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start scroll-mt-28"
            >
              {/* Left: Image */}
              <div className="w-full relative rounded-2xl overflow-hidden shadow-md h-[300px] md:h-[500px]">
                <Image
                  src={image}
                  alt={category}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-ceneter rounded-2xl"
                  priority={id === "manicure"}
                />
              </div>

              {/* Right: Service List */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-semibold text-accent">
                    {category}
                  </h3>
                  <Badge variant="outline" className="text-xs uppercase">
                    {services.length} Services
                  </Badge>
                </div>

                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index} className="border-b pb-4">
                      <div className="flex justify-between items-start flex-wrap">
                        <h4 className="text-lg font-semibold text-foreground">
                          {service.name}
                        </h4>
                        <p className="text-base font-medium text-primary ml-auto">
                          {service.price}
                        </p>
                      </div>
                      {service.description && (
                        <p className="text-sm text-muted-foreground mt-1">
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

      <section className="relative w-full h-[250px] sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[420px] rounded-2xl overflow-hidden shadow-xl my-20">
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
            <p className="text-lg md:text-xl font-light tracking-wide font-mono">
              Elevate your everyday with our signature touch of elegance.
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
    </section>
  );
}
