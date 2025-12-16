"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MenuData } from "@/data/MenuData";
import Image from "next/image";

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            className="fixed top-0 left-0 h-full w-72 bg-white z-50 px-6 py-8"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Link href={"/"}>
              <Image
                width={120}
                height={120}
                src="https://www.next.co.uk/static-content/icons/header/next/v2/revision/new-next-logo-gold.svg"
                alt="Next Logo"
                className="h-6 w-auto mb-8"
              />
            </Link>

            <ul className="space-y-5">
              {MenuData.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-sm uppercase font-medium"
                >
                  <Link href={item.href} onClick={onClose} className="block">
                    {item.heading}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
