import WomenBrandMotion from "@/components/BrandMotion";
import WomenByTrend from "@/components/WomenByTrend";
import WomenCategory from "@/components/WomenCategory";
import WomenHero from "@/components/WomenHero";
import WomenLastComp from "@/components/WomenLastComp";
import WomenSplitCost from "@/components/SplitCost";
import WomenTrending from "@/components/WomenTrending";
import React from "react";
import GiftCard from "@/components/GiftCard";
import BrandMotion from "@/components/BrandMotion";
import SplitCost from "@/components/SplitCost";

const page = () => {
  return (
    <div>
      <WomenHero />
      <GiftCard/>
      <WomenCategory />
      <WomenByTrend />
      <SplitCost/>
      <WomenTrending />
      <BrandMotion/>
      <WomenLastComp />
    </div>
  );
};

export default page;
