"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroImage } from "../data/HeroImage";

const HeroSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-[#636B2F] py-16">
      <motion.div
        className="flex gap-10"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "max-content" }}
      >
        {[...heroImage, ...heroImage].map((item, index) => {
          const isFocus =
            index % heroImage.length === 1 || index % heroImage.length === 4;

          return (
            <motion.div
              key={index}
              className="shrink-0"
              animate={{ scale: isFocus ? 1.15 : 0.85 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative w-55 h-80 md:w-75 md:h-105 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.heading}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-4 text-center text-white text-sm tracking-wide font-medium md:font-semibold">
                {item.heading}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default HeroSlider;
