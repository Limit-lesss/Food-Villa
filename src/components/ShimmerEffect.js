export const CallShimmer = () => {
  return (
    <div className=" w-64 bg-gray-400 mr-5 mb-5 rounded-md overflow-hidden">
      <div className="h-40 w-full bg-gray-300"></div>
      <h1 className="w-48 h-4 bg-gray-300 my-5 mx-2 rounded-md"></h1>
      <h2 className="w-40 h-4 bg-gray-300 my-5 mx-2 rounded-md"></h2>
      <h3 className="w-32 h-4 bg-gray-300 my-5 mx-2 rounded-md"></h3>
    </div>
  );
};
const Shimmer = ({ show = false }) => {
  return show ? (
    <div className=" dark:bg-slate-800">
      <div className="flex px-28 animate-pulse pt-10">
        <div className="w-80 bg-gray-300 h-10 mr-4 rounded-full"></div>
        <div className="p-2 px-12 bg-gray-300 h-10 rounded-full"></div>
      </div>
      <div className="grid grid-cols-4 gap-4 mx-28 animate-pulse mt-10">
        {Array(8)
          .fill(0)
          .map((e, index) => (
            <CallShimmer key={index} />
          ))}
      </div>
    </div>
  ) : (
    <div className="dark:bg-slate-800 h-[200vh]">
      <div className="grid grid-cols-3 gap-2 mx-48 animate-pulse pt-60 ">
      {Array(3)
        .fill(0)
        .map((e, index) => (
          <CallShimmer key={index} />
        ))}
    </div>
    </div>
  );
};
export default Shimmer;
