import WomenCategory from "@/components/WomenCategory";
import WomenComp2 from "@/components/WomenComp2";
import WomenHero from "@/components/WomenHero";
import WomenTrending from "@/components/WomenTrending";
import React from "react";

const page = () => {
  return (
    <div>
      <WomenHero />
      <WomenComp2 />
      <WomenCategory />
      <WomenTrending />
    </div>
  );
};

export default page;
