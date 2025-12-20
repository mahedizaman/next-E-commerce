"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { menWhatToWear } from "@/data/MenWhatToWear";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const MenWhatToWear = () => {
  return (
    <div>
      <h3 className="uppercase text-gray-600 font-semibold text-lg md:text-2xl text-center md:text-left px-6">
        trending now
      </h3>
      <motion.div
        className="w-full flex flex-col md:flex-row md:flex-wrap justify-center gap-4 py-10 "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {menWhatToWear.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col items-center w-full sm:w-[48%] md:w-[30%] cursor-pointer"
            variants={itemVariants}
          >
            <div className="relative w-full h-[350px] md:h-[400px] overflow-hidden shadow-lg group">
              <Image
                src={item.image}
                alt={item.heading}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-b-sm"
              />
            </div>
            <div className="mt-4 text-center md:text-left">
              <h2 className="text-md font-bold">{item.heading}</h2>
              <p className="text-gray-700 mt-2 text-xs">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MenWhatToWear;
