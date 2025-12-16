import Hero from "@/components/Hero";
import HeroSlider from "@/components/HeroSlider";
import HomeMotion from "@/components/HomeMotion";
import SecondVideo from "@/components/SecondVideo";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <HomeMotion />
      <HeroSlider />
      <SecondVideo />
    </div>
  );
};

export default page;
