import GiftCard from "@/components/GiftCard";
import MenByTrend from "@/components/MenByTrend";
import MenCategory from "@/components/MenCategory";
import MenClothMotion from "@/components/MenClothMotion";
import MenHero from "@/components/MenHero";
import MenLuxuryStyle from "@/components/MenLuxuryStyle";
import MenTrending from "@/components/MenTrending";
import SplitCost from "@/components/SplitCost";
import React from "react";

const page = () => {
  return (
    <div>
      <MenHero />
      <GiftCard />
      <MenCategory />
      <MenByTrend />
      <MenTrending />
      <MenClothMotion />
      <MenLuxuryStyle />
      <SplitCost />
    </div>
  );
};

export default page;
