"use client";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  const data = [
    "/images/slider-1.jpeg",
    "/images/slider-2.jpeg",
    "/images/slider-3.jpeg",
    "/images/slider-4.jpeg",
    "/images/slider-5.jpeg",
    "/images/slider-6.jpeg",
  ];
  return (
    <div className="w-full h-[calc(100vh-82px)] bg-black">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        navigation={true}
        speed={500}
        modules={[Autoplay, Navigation, Pagination]}
        className="w-full h-full"
      >
        {data.map((url, i) => (
          <SwiperSlide key={i + url}>
            <div className="w-full h-full relative">
              <Image
                src={url}
                alt="cars"
                className="w-full h-full object-cover"
                fill
                priority
              />
              <div className="absolute z-[1] top-0 left-0 bottom-0 right-0 flex flex-col gap-5 justify-center text-center items-center w-full h-full container mx-auto text-white md:p-20">
                <h1 className="text-4xl md:text-6xl font-semibold">
                  Find Best Car & Car Accessories
                </h1>
                <p className="text-xl">
                  From as low as $10 per day with limited time offer discounts.
                </p>
                <Link href="/#get-started">
                  <Button
                    size="lg"
                    className="md:text-xl transition duration-300 ease-in-out bg-green-500 hover:bg-white/20"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
