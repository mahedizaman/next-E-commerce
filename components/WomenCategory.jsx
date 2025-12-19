"use client";

import { womenCategory } from "@/data/WomenCategory";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const WomenCategory = () => {
  return (
    <div className="py-6 px-4 sm:px-8 bg-gray-50">
      <h3 className="uppercase text-gray-600 font-semibold text-lg md:text-2xl mb-6 ">
        shop by category
      </h3>

      {/* Wrapper */}
      <motion.div
        className="overflow-x-auto md:overflow-x-hidden scrollbar-hide"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <div
          className="
            flex gap-4
            flex-nowrap md:flex-wrap
            justify-start md:justify-center
            mx-auto px-2
          "
        >
          {womenCategory.map((itemData) => (
            <motion.div
              key={itemData.id}
              variants={item}
              className="
                group cursor-pointer text-center
                flex-shrink-0 md:flex-shrink
                w-[90px] sm:w-[100px] md:w-[120px]
              "
            >
              <div className="flex flex-col items-center">
                <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] overflow-hidden rounded-full">
                  <Image
                    src={itemData.image}
                    alt={itemData.heading || "women category"}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <p className="mt-3 text-[10px] sm:text-xs md:text-sm font-medium uppercase text-gray-600 tracking-wide">
                  {itemData.heading}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WomenCategory;
