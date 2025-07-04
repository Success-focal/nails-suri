"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Keyboard, A11y } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { imagesGallery } from "@/lib/data/datapool";

const GallerySwiper = () => {
  return (
    <section
      className="w-full px-4 py-16 bg-background text-foreground"
      aria-label="Photo gallery carousel"
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          initialSlide={1}
          keyboard={{ enabled: true }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          a11y={{
            enabled: true,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
          }}
          modules={[EffectCoverflow, Navigation, Keyboard, A11y]}
          className="w-full max-w-5xl"
        >
          {imagesGallery.map((img, index) => (
            <SwiperSlide
              key={index}
              className="!w-[260px] !h-[400px]"
              role="group"
              aria-label={`Image ${index + 1} of ${imagesGallery.length}`}
            >
              <div
                className="relative w-full h-full overflow-hidden group cursor-pointer"
                tabIndex={0}
              >
                <Image
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 260px, 260px"
                  loading={index < 3 ? "eager" : "lazy"}
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySwiper;
