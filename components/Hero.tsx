/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  {
    src: "/1.jpg",
    text: "Reliable and Fast Shipping",
    desc: "We pride ourselves on providing reliable and fast shipping to ensure your orders reach you on time, every time. With a streamlined process and a commitment to efficiency, we guarantee a hassle-free delivery experience.",
  },
  {
    src: "/2.jpg",
    text: "Track Your Packages in Real Time",
    desc: "Stay in control with our real-time package tracking feature. From the moment your order is dispatched to its arrival at your doorstep, you can monitor its progress effortlessly, ensuring complete transparency and peace of mind.",
  },
  {
    src: "/3.jpg",
    text: "Seamless Logistics Solutions",
    desc: "Our seamless logistics solutions are designed to simplify the delivery process. By leveraging advanced technology and a robust network, we ensure smooth operations, timely deliveries, and exceptional service for every customer.",
  },
  {
    src: "/4.jpg",
    text: "Fast and Secure Delivery",
    desc: "Experience the convenience of fast and secure delivery with us. We prioritize the safety of your packages while ensuring they reach you as quickly as possible, so you can enjoy your purchases without delay or worry.",
  },
];

const Hero = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  return (
    <section className="relative w-full lg:h-screen h-full overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 md:px-10">
                  <div className="text-center max-w-3xl transform translate-y-[-10%] md:translate-y-[-50%]">
                    <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">
                      {image.text}
                    </h2>
                    <p className="text-white text-sm md:text-lg mt-3 md:mt-4">
                      {image.desc}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Hero;
