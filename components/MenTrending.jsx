"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = ["/Men/image28.jpg", "/Men/image29.jpg", "/Men/image30.jpg"];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
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

const MenTrending = () => {
  return (
    <div className="px-4 w-full mx-auto py-10">
      <h3 className="uppercase text-gray-600 font-semibold text-lg md:text-2xl text-center md:text-left mb-6">
        trending now
      </h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={item}
            className="
              relative w-full
              aspect-[3/4] md:aspect-[4/5]
              overflow-hidden rounded
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

export default MenTrending;
