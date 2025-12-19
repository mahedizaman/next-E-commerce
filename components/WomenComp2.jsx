import Image from "next/image";

const WomenComp2 = () => {
  return (
    <div className="relative w-full h-25">
      <Image
        src="/image/womenbanner.jpg"
        alt="womenBanner"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute flex flex-col justify-center items-center mx-auto w-full mt-6">
        <p className="text-lg font-semibold text-[#ffff] uppercase">
          GIVE THEM THE GIFT OF CHOICE
        </p>
        <p className="uppercase hover:no-underline cursor-pointer underline font-medium duration-300 text-xs text-[#ffff]">
          shop gift card
        </p>
      </div>
    </div>
  );
};

export default WomenComp2;
