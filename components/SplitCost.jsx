import React from "react";
import Container from "./Container";
import Image from "next/image";
import { Button } from "./ui/button";

const SplitCost = () => {
  return (
    <div className="bg-[#F7F6F3] py-0 md:py-12 mb-12">
      <div className="bg-pink-50">
        <Container
          className={`flex flex-col items-center justify-between gap-6 md:flex-row`}
        >
          <div>
            <Image
              src={"/Womens/image48.jpg"}
              alt="payIn"
              width={120}
              height={120}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-gray-600 text-xl">Split the cost</h3>
            <p className="text-xs text-gray-600">
              29.9% Representative APR variable. Credit Subject to Status.
            </p>
          </div>
          <div>
            <Button className={`uppercase text-md`}>FIND OUT MORE</Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SplitCost;
