import WomenBrandMotion from "@/components/BrandMotion";
import WomenByTrend from "@/components/WomenByTrend";
import WomenCategory from "@/components/WomenCategory";
import WomenHero from "@/components/WomenHero";
import WomenLastComp from "@/components/WomenLastComp";
import WomenSplitCost from "@/components/WomenSplitCost";
import WomenTrending from "@/components/WomenTrending";
import React from "react";
import GiftCard from "@/components/GiftCard";
import BrandMotion from "@/components/BrandMotion";

const page = () => {
  return (
    <div>
      <WomenHero />
      <GiftCard/>
      <WomenCategory />
      <WomenByTrend />
      <WomenSplitCost />
      <WomenTrending />
      <BrandMotion/>
      <WomenLastComp />
    </div>
  );
};

export default page;
