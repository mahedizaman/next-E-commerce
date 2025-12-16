"use client";

import { useState } from "react";
import HeaderMain from "./HeaderMain";
import HeaderMenu from "./HeaderMenu";
import HeaderPromotion from "./HeaderPromotion";
import SideMenu from "./SideMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#FFF5EE] relative z-30">
        <HeaderPromotion />
        <HeaderMain onMenuClick={() => setIsMenuOpen(true)} />
        <HeaderMenu />
      </header>
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
