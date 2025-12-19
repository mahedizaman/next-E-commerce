"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const images = [
  "/Womens/image5.jpg",
  "/Womens/image23.jpg",
  "/Womens/image24.jpg",
];

// animation container
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// single item animation
const item = {
  hidden: {
    opacity: 0,
    y: 60, // নিচে থাকবে
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const WomenTrending = () => {
  return (
    <div className="px-4 w-full mx-auto py-10">
      <h3 className="uppercase text-gray-600 font-semibold text-lg md:text-2xl mb-6">
        trending now
      </h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // scroll করলে trigger
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={item}
            className="
              relative w-full
              aspect-[3/4] md:aspect-[4/5]
              overflow-hidden rounded-md
              bg-gray-50
              group cursor-pointer
            "
          >
            <Image
              src={image}
              alt="trending women"
              fill
              className="
                object-contain
                transition duration-300
                group-hover:scale-105
              "
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WomenTrending;
