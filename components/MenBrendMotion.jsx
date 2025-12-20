"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { menBrandData } from "@/data/MenBrendData";

const MenBrendMotion = () => {
  return (
    <div className="w-full overflow-hidden py-10 bg-white">
      <motion.div
        className="flex gap-16 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }}
      >
        {/* duplicate data for seamless loop */}
        {[...menBrandData, ...menBrandData].map((item, index) => (
          <div
            key={index}
            className="relative w-[120px] md:w-[160px] h-[60px] md:h-[80px] flex items-center justify-center grayscale hover:grayscale-0 transition duration-300"
          >
            <Image
              src={item.image}
              alt="Brand Logo"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MenBrendMotion;
