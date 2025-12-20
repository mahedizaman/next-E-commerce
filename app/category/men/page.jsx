import GiftCard from "@/components/GiftCard";
import GlobalDescription from "@/components/GlobalDescription";
import MenBrandMotion from "@/components/MenBrendMotion";
import MenByTrend from "@/components/MenByTrend";
import MenCategory from "@/components/MenCategory";
import MenClothMotion from "@/components/MenClothMotion";
import MenHero from "@/components/MenHero";
import MenLuxuryStyle from "@/components/MenLuxuryStyle";
import MenTrending from "@/components/MenTrending";
import MenWhatToWear from "@/components/MenWhatToWear";
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
      <MenWhatToWear/>
      <MenBrandMotion/>
      <GlobalDescription/>
    </div>
  );
};

export default page;
