"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { womenBrandData } from "@/data/WomenBrandData";

const BrandMotion = () => {
  const trackWidth = womenBrandData.length * 180;

  return (
    <div className="overflow-hidden w-full py-12 bg-gray-50">
      <motion.div
        className="flex"
        animate={{ x: [`0`, `-${trackWidth}px`] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: womenBrandData.length * 2,
          },
        }}
      >
        {[...Array(5)].map((_, copyIndex) =>
          womenBrandData.map((item) => (
            <div
              key={`${copyIndex}-${item.id}`}
              className="flex-shrink-0 w-[160px] mx-[10px]"
            >
              <Image
                src={item.image}
                alt={`Brand ${item.id}`}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default BrandMotion;
