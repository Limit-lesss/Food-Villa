import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { FETCH_FOODTYPE_RES_COL, IMG_CDN_URL } from "../utils/constants";
import Shimmer from "./ShimmerEffect";

const FoodItemResCol = () => {
  const [resColData, setResColData] = useState([]);
  const { entityId } = useParams();
  //   console.log(entityId);
  useEffect(() => {
    getResCol();
  }, []);
  async function getResCol() {
    try {
      const response = await fetch(FETCH_FOODTYPE_RES_COL + entityId);
      const data = await response.json();
      data?.data?.cards && setResColData(data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }
  return resColData?.length === 0 ? (
    <Shimmer show={true} />
  ) : (
    <div className="pt-28 px-20 pb-20 dark:bg-slate-800 bg-rose-100">
      {
        <div className="relative">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              resColData[0]?.card?.card?.imageId
            }
            className="h-96 w-full rounded-lg"
            alt=""
          />
          <div className="absolute bottom-10 left-4 z-10 text-white">
            <div className="text-8xl font-semibold font-serif  flex items-center ">
              {resColData[0]?.card?.card?.title}
            </div>
            <div className="text-lg font-medium my-3">
              {resColData[0]?.card?.card?.description}
            </div>
          </div>
        </div>
      }
      {
        <div className="text-slate-950 dark:text-white text-3xl font-semibold my-3">
          {resColData[2]?.card?.card?.gridElements?.infoWithStyle?.text}
        </div>
      }
      <div className="grid grid-cols-4 gap-10 ">
        {resColData?.slice(3)?.map((e) => (
          <Link
            to={"/Food-Villa/restaurant/" + e?.card?.card?.info?.id}
            key={e?.card?.card?.info?.id}>
            <RestaurantCard {...e?.card?.card?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default FoodItemResCol;
