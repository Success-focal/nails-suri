"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data/datapool";

const ServiceSection = () => {
  return (
    <section
      id="home-services"
      className="relative w-full bg-background px-6 sm:px-8 md:px-16 md:pt-20 pt-4 mt-10"
    >
      {/* Circular Decorative Image */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-primary z-10 bg-white">
        <Image
          src="/models/Model2.jpg"
          alt="Featured Service"
          width={256}
          height={256}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="text-center max-w-2xl mx-auto mt-32 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 font-sans">
          Discover Our Signature Services
        </h2>
        <p className="text-muted-foreground text-base md:text-lg font-mono tracking-wide">
          From classic manicures to luxury lash extensions, indulge in
          personalized beauty experiences crafted just for you.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <Card key={service.name} className="text-center p-6">
            <CardContent className="flex flex-col items-center justify-center space-y-4">
              <div className="w-24 h-24 relative">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 96px, 96px"
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {service.name}
              </h3>
              <Link
                href={`/services#${service.anchor}`}
                className="text-sm font-bold text-primary"
              >
                View more →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* More Services Button */}
      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link href="/services">More Services</Link>
        </Button>
      </div>
    </section>
  );
};

export default ServiceSection;
