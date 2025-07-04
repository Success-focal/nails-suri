"use client";

import React from "react";
import GallerySwiper from "../ui/custom/carousel";
import { Button } from "../ui/button";
import Link from "next/link";

const PhotoGallery = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-20 space-y-16 bg-background text-foreground">
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-40 blur-md animate-pulse bg-[oklch(85%_0.09_15)]" />
          <div className="absolute top-40 right-20 w-16 h-16 rounded-full opacity-50 blur-md animate-bounce bg-[oklch(80%_0.11_60)]" />
          <div className="absolute bottom-20 left-1/4 w-14 h-14 rounded-full opacity-35 blur-md animate-pulse bg-[oklch(78%_0.12_345)]" />
        </div>
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold tracking-wide text-foreground font-sans">
            Our Captured Moments
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-mono">
            Dive into a visual journey through our studio’s finest work. From
            glamorous nail designs to elegant makeovers, every photo tells a
            story of style, care, and creativity.
          </p>
        </div>
      </div>

      <GallerySwiper />
      <div className="text-center">
        <p className="text-md text-muted-foreground">
          Have any questions?{" "}
          <Button variant="link" className="text-accent">
            <Link href="/contact">Contact us →</Link>
          </Button>
        </p>
      </div>
    </section>
  );
};

export default PhotoGallery;
