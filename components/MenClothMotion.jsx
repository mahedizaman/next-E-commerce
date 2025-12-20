"use client";

import { motion } from "framer-motion";
import { menClothType } from "@/data/MenClothType";

const MenClothMotion = () => {
  return (
    <section className="py-8 bg-[#fff] overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {[...menClothType, ...menClothType, ...menClothType].map(
            (brand, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="min-w-[220px] px-6 text-center font-medium tracking-wide cursor-pointer text-xs"
              >
                {brand}
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default MenClothMotion;
