import React from "react";

const FoodTypeShimmer = () => {
  return (
    <div className="dark:bg-slate-800 bg-rose-100">
      <div className="grid grid-cols-6 gap-1 px-28 animate-pulse py-10 pt-28 ">
      {Array(6)
        .fill(0)
        .map((e, index) => (
          <div className="w-48 h-48 bg-slate-200 animate-pulse rounded-lg" key={index}></div>
        ))}
    </div>
    </div>
  );
};

export default FoodTypeShimmer;
