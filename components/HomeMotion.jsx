"use client";
import { motion } from "framer-motion";

const menuItems = [
  "JOULES",
  "THE SET",
  "LOVE & ROSES",
  "LIPSY",
  "FRIENDS LIKE THESE",
  "CHRISTMAS",
  "WOMEN",
  "MEN",
  "BOYS",
  "GIRLS",
  "HOME",
  "BABY",
  "BEAUTY",
  "FURNITURE",
  "BRANDS",
  "GIFT & FLOWERS",
];

const HeaderMenu = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#FFFFF0] py-8 md:py-16">
      <motion.div
        className="flex gap-10"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {menuItems.concat(menuItems).map((item, index) => (
          <div
            key={index}
            className="cursor-pointer text-xs md:text-base font-semibold"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeaderMenu;
