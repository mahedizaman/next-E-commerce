import WomenBrandMotion from "@/components/WomenBrandMotion";
import WomenByTrend from "@/components/WomenByTrend";
import WomenCategory from "@/components/WomenCategory";
import WomenComp2 from "@/components/WomenComp2";
import WomenHero from "@/components/WomenHero";
import WomenLastComp from "@/components/WomenLastComp";
import WomenSplitCost from "@/components/WomenSplitCost";
import WomenTrending from "@/components/WomenTrending";
import React from "react";

const page = () => {
  return (
    <div>
      <WomenHero />
      <WomenComp2 />
      <WomenCategory />
      <WomenByTrend />
      <WomenSplitCost />
      <WomenTrending />
      <WomenBrandMotion />
      <WomenLastComp />
    </div>
  );
};

export default page;
