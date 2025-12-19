import React from "react";
import WomenDescription from "./WomenDescription";

const WomenLastComp = () => {
  return (
    <div className="py-6">
      <div className="flex flex-col  px-6 py-14 bg-[#fffff0]  gap-3 md:flex-row items-center justify-between">
        <div>
          <h2 className="text-7xl md:text-9xl uppercase">styled.</h2>
        </div>
        <div>
          <p className="uppercase font-mono text-xs md:text-sm">
            your destination for key pieces & how to wear them
          </p>
        </div>
      </div>
      <WomenDescription />
    </div>
  );
};

export default WomenLastComp;
