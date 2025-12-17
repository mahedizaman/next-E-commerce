import FeaturedBrands from "@/components/FeaturedBrands";
import Hero from "@/components/Hero";
import HeroSlider from "@/components/HeroSlider";
import HomeMotion from "@/components/HomeMotion";
import LatestTrends from "@/components/LatestTrends";
import Nightwear from "@/components/Nightwear";
import SecondVideo from "@/components/SecondVideo";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <HomeMotion />
      <HeroSlider />
      <SecondVideo />
      <Nightwear />
      <LatestTrends />
      <FeaturedBrands />
    </div>
  );
};

export default page;
