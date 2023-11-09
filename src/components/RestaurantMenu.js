import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./ShimmerEffect";
import { IMG_CDN_URL } from "../utils/constants";
import MenuList from "./MenuList";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { filterMenuList } from "../utils/helper";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, menuList] = useRestaurantMenu(id); //! custom hook
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="pt-20 dark:bg-slate-800">
      <div className="mx-44 py-10 px-10">
        <div className="flex mb-10 justify-between mx-20">
          <div className="flex flex-col justify-center ">
            <h2 className="text-4xl font-semibold text-cyan-900 dark:text-slate-300">
              {restaurant?.info?.name}
            </h2>
            <p className="my-2 text-lg font-medium dark:text-slate-400">
              {restaurant?.info?.cuisines.join(",")}
            </p>
            <p
              className={
                restaurant?.info?.avgRating >= 4
                  ? "font-bold text-lg text-green-600 dark:text-green-700"
                  : "font-bold text-lg text-red-600 dark:text-red-700"
              }>
              {restaurant?.info?.avgRating} ✮
            </p>
          </div>
          <div>
            <img
              src={IMG_CDN_URL + restaurant?.info?.cloudinaryImageId}
              alt=""
              className="w-56 h-40 rounded-md mt-5"
            />
          </div>
        </div>

        {filterMenuList(menuList)?.map((e, index) => (
          <MenuList
            key={index}
            {...e?.card?.card}
            // resImg={restaurant?.info?.cloudinaryImageId}
            // resName={restaurant?.info?.name}
            // areaName={restaurant?.info?.areaName}
            // resId={id}
            resInfo = {restaurant?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
