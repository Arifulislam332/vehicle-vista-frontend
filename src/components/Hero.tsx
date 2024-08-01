"use client";

import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
              <SearchBar />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
