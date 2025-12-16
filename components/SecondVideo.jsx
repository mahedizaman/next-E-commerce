

const SecondVideo = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
      <video
        src="/video/G99_KIDS.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 mt-20 md:mt-80 top-16 md:top-0 ">
        <h2 className="text-white text-sm md:text-2xl font-medium mb-4">
          READY,SET,PARTY
        </h2>
       
      </div>
    </section>
  );
}

export default SecondVideo