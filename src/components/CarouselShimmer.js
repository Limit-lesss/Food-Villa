const CarouselShimmer = () => {
  return (
    <div className="dark:bg-slate-800 bg-rose-100">
      <div className="grid grid-cols-4 gap-2 px-28 animate-pulse  pt-36 " data-testid="shimmer">
      {Array(4)
        .fill(0)
        .map((e, index) => (
          <div className="w-72 rounded-3xl h-60  bg-gray-300" key={index}></div>
        ))}
    </div>
    </div>
  );
};

export default CarouselShimmer;
