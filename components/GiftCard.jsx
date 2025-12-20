import Image from "next/image";

const GiftCard = () => {
  return (
    <div className="py-6 bg-[#faecec]">
      <div className="relative w-full h-[120px]  bg-[#9b8236]">
        <Image
          src="/banner.jpg"
          alt="womenBanner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex  flex-col justify-center items-center mx-auto w-full ">
          <p className="text-lg font-semibold text-[#eec447e0] uppercase">
            GIVE THEM THE GIFT OF CHOICE
          </p>
          <p className="uppercase hover:no-underline cursor-pointer underline font-medium duration-300 text-xs text-[#eec447e0]">
            shop gift card
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
