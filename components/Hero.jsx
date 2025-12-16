import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
      <video
        src="/video/Christmas_NEXT.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 mt-20 md:mt-60">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          Celebrate Christmas with NEXT.
        </h1>
        <p className="text-gray-200 text-sm md:text-lg max-w-xl">
          Find the perfect gifts for your loved ones and make this Christmas
          special
        </p>
      </div>
    </section>
  );
};

export default Hero;
