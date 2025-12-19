import Image from "next/image";

const WomenComp2 = () => {
  return (
    <div className="py-6 bg-[#faecec]">
      <div className="relative w-full h-[120px]  bg-[#9b8236]">
        <Image
          src="/image/womenbanner.jpg"
          alt="womenBanner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex  flex-col justify-center items-center mx-auto w-full ">
          <p className="text-lg font-semibold text-[#ffff] uppercase">
            GIVE THEM THE GIFT OF CHOICE
          </p>
          <p className="uppercase hover:no-underline cursor-pointer underline font-medium duration-300 text-xs text-[#ffff]">
            shop gift card
          </p>
        </div>
      </div>
    </div>
  );
};

export default WomenComp2;
