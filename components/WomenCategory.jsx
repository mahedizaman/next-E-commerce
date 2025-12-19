"use client";
import { womenCategory } from "@/data/WomenCategory";
import Image from "next/image";
import React from "react";

const WomenCategory = () => {
  return (
    <div className="py-6 px-8">
      <h3 className="uppercase font-semibold text-2xl mb-6">
        shop by category
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {womenCategory.map((item) => (
          <div key={item.id} className="group cursor-pointer text-center">
            <div className="relative w-full h-[220px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.heading || "women category"}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <p className="mt-3 text-sm font-medium uppercase">{item.heading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenCategory;
