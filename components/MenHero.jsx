import React from "react";
import { Button } from "./ui/button";

const MenHero = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
      <video
        src="/video/Men.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full text-center px-4 md:px-8 mt-20 md:mt-60">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 uppercase">
          understated elegance
        </h1>
        <Button className="text-gray-900 bg-white  text-sm md:text-lg max-w-xl">
          shop now
        </Button>
      </div>
    </section>
  );
};

export default MenHero;
