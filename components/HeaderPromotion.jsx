"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const messages = [
  "Welcome",
  "Less than 1 week to go for delivery in time for Christmas. Order now for next day delivery. T&Cs apply.",
  "Your invite to skip the sale queue – sign up to nextpay.",
  "Split the cost with pay in 3.",
];

export default function PromoHeader() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
  };

  const stopAnimation = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAnimation();
    return () => stopAnimation();
  }, []);

  return (
    <div
      className="overflow-hidden bg-black text-gray-300 text-xs sm:text-sm py-2"
      onMouseEnter={stopAnimation}
      onMouseLeave={startAnimation}
    >
      <div className="relative min-h-4 text-[7px] md:text-xs font-semibold flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute whitespace-nowrap px-4 text-center"
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
