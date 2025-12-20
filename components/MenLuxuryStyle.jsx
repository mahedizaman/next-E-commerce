import Image from "next/image";

const MenLuxuryStyle = () => {
  return (
    <section
      className="bg-cover bg-center py-0"
      style={{ backgroundImage: "url('/Men/image39.jpg')" }}
    >
      <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-[60%_40%] overflow-hidden bg-opacity-50">
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/Men/image41.jpg"
            alt="Luxury men style"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="px-10 flex flex-col justify-center mb-12 text-gray-700">
          <p className="uppercase tracking-widest text-sm mb-4">Seasons</p>

          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            Luxury Style For Every <br /> Season
          </h2>

          <button className="uppercase text-sm underline underline-offset-4 w-fit hover:opacity-70 transition">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenLuxuryStyle;
