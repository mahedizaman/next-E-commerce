import { womenByTrend } from "@/data/WomenByTrend";
import Image from "next/image";


const WomenByTrend = () => {
  return (
    <section className="w-full px-4 md:px-10 py-10">
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold">Women By Trend</h2>
        <p className="text-gray-500 mt-2">Explore the latest fashion trends</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {womenByTrend.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer overflow-hidden  bg-gray-100"
          >
            <div className="relative h-120 sm:h-48 md:h-86 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.heading}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="p-3 text-center">
              <h3 className="text-sm md:text-base font-medium capitalize">
                {item.heading}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WomenByTrend;
