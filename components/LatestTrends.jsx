import Image from "next/image";

const LatestTrends = () => {
  return (
    <div className="bg-[#fffef1]">
      <div className="flex items-center justify-between flex-col md:flex-row">
        <p className="text-xl uppercase font-medium text-gray-700">
          The Latest trends.
        </p>
        <h2 className="text-7xl uppercase font-semibold text-gray-700">
          styled.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-1 px-4 gap-6">
          {[
            "/image/bows-data.jpg",
            "/image/checks-argyle-v2-data.jpg",
            "/image/knitwear-v2-data.jpg",
          ].map((src) => (
            <div
              key={src}
              className="relative w-full h-[20vh] md:h-[50vh] my-4 md:my-0"
            >
              <Image
                src={src}
                alt="trend"
                fill
                className="object-contain"
                quality={90}
                sizes="33vw"
              />
            </div>
          ))}
        </div>

        <div className="flex-1 px-4">
          <div className="relative w-full h-[30vh] md:h-[50vh] mb-8 md:mb-0">
            <Image
              src="/image/party-tops-data.jpg"
              alt="party tops"
              fill
              className="object-contain"
              quality={90}
              sizes="33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestTrends;
