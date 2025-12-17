import Image from "next/image";
import React from "react";

const FeaturedBrands = () => {
  const brands = [
    "/image/w1.jpg",
    "/image/w2.jpg",
    "/image/w3.jpg",
    "/image/w4.jpg",
    "/image/w5.jpg",
    "/image/w6.jpg",
    "/image/w7.jpg",
    "/image/w8.jpg",
  ];

  return (
    <div className="bg-white">
      <div className="text-center md:text-start py-8 px-4">
        <h2 className="text-3xl text-gray-700 md:text-4xl font-bold  mb-2">
          Featured Brands
        </h2>
        
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {brands.map((src, index) => (
            <div
              key={src}
              className="
                relative 
                aspect-square 
                w-full 
                group 
                overflow-hidden 
                rounded-lg 
                shadow-sm 
                hover:shadow-xl 
                transition-all 
                duration-300 
                hover:-translate-y-1
                bg-white
                p-2
              "
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`brand-${index + 1}`}
                  fill
                  className="
                    object-contain 
                    p-2
                    group-hover:scale-105 
                    transition-transform 
                    duration-300
                  "
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 12.5vw"
                  quality={85}
                />
              </div>

              <div
                className="
                absolute 
                inset-0 
                bg-linear-to-t 
                from-black/10 
                via-transparent 
                to-transparent 
                opacity-0 
                group-hover:opacity-100 
                transition-opacity 
                duration-300
              "
              />
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default FeaturedBrands;
