import Image from "next/image";

const Nightwear = () => {
  return (
    <div className="bg-[#f1f0eb]">
      <div className="text-[#b99400] uppercase flex items-center flex-col md:flex-row justify-between px-6 py-16">
        <h2 className="text-5xl md:text-6xl font-bold tracking-wide leading-none">
          nightwear
        </h2>

        <p className="font-semibold text-lg tracking-widest mt-4 md:mt-0">
          the perfect gift
        </p>
      </div>

      <div className="relative w-full h-[50vh]">
        <Image
          src="/image/nightwear.jpg"
          alt="nightwear"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative w-full h-[50vh]">
        <Image
          src="/image/bed-sets.jpg"
          alt="bed-sets"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Nightwear;
