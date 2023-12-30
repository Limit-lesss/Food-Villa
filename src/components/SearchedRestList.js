import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const SearchedRestList = ({ info }) => {
  return (
    <div className=" bg-rose-50 dark:bg-slate-50 rounded-2xl p-5 flex relative">
      {info?.adTrackingId && (
        <div className="absolute top-7 left-3 z-10 bg-slate-900/60 text-white px-2 rounded-md font-semibold">
          Ad
        </div>
      )}
      <div className="w-1/3 col-span-2 relative h-40 ">
        {info?.cloudinaryImageId && (
          <img
            src={IMG_CDN_URL + info?.cloudinaryImageId}
            alt=""
            className="w-36 h-32 rounded-lg"
          />
        )}
        {info?.aggregatedDiscountInfoV3?.header && (
          <div className="absolute bottom-2 left-5 w-28  bg-white text-lg shadow-lg flex flex-col items-center rounded-lg font-bold py-0.5 text-orange-600">
            <p>{info?.aggregatedDiscountInfoV3?.header}</p>
            {info?.aggregatedDiscountInfoV3?.subHeader && (
              <p className="text-xs text-orange-500">
                &#x2022; {info?.aggregatedDiscountInfoV3?.subHeader} &#x2022;
              </p>
            )}
          </div>
        )}
      </div>
      <div className="py-2 w-2/3 mt-5 pl-2">
        <p className="text-base font-semibold text-slate-800 truncate">
          {info?.name}
        </p>
        <div className="flex items-center text-slate-500 text-sm font-medium">
          <p className=" my-1">&#9733; {info?.avgRating}</p>
          <p className=" mx-2 flex items-center">&#x2022;</p>
          <p>{info?.sla?.slaString}</p>
          <p className=" mx-2 flex items-center">&#x2022;</p>
          <p>{info?.costForTwoMessage || info?.costForTwo}</p>
        </div>
        <p className="truncate py-1 text-slate-500 text-sm">
          {info?.cuisines?.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default SearchedRestList;
