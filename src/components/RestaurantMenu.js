import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./ShimmerEffect";
import { IMG_CDN_URL } from "../utils/constants";
import MenuList from "./MenuList";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { filterMenuList } from "../utils/helper";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, menuList, offerList] = useRestaurantMenu(id); //! custom hook
  console.log(menuList)
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="pt-20 dark:bg-slate-800 bg-rose-100">
      <div className="mx-48 py-10 px-10">
        <div className="">
          <div className="flex pb-8 justify-between items-center border-b border-dashed border-slate-400 ">
            <div className="">
              <h2 className="text-6xl pb-2 font-semibold text-cyan-900 dark:text-slate-300">
                {restaurant?.info?.name}
              </h2>
              <p className="my-1 text-base font-medium dark:text-slate-400 text-slate-500">
                {restaurant?.info?.cuisines.join(", ")}
              </p>
              <p className="mb-2 text-base font-medium dark:text-slate-400 text-slate-500">
                {restaurant?.info?.areaName}
              </p>
              <div className="border border-slate-400 rounded-lg w-28 px-2 bg-rose-50 dark:bg-slate-200">
                <div
                  className={
                    "font-semibold text-lg dark:text-green-700 flex items-center   text-green-700 justify-center py-2 border-b border-slate-400"
                  }>
                  <svg
                    className="mr-1"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    role="img"
                    aria-hidden="true">
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                    <path
                      d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                      fill="white"></path>
                    <defs>
                      <linearGradient
                        id="StoreRating20_svg__paint0_linear_32982_71567"
                        x1="10"
                        y1="1"
                        x2="10"
                        y2="19"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#21973B"></stop>
                        <stop offset="1" stopColor="#128540"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  {restaurant?.info?.avgRating}
                </div>
                <div className="flex justify-center py-2 text-sm text-slate-600 dark:text-slate-700">
                  {restaurant?.info?.totalRatingsString}
                </div>
              </div>
            </div>
            <div>
              <img
                src={IMG_CDN_URL + restaurant?.info?.cloudinaryImageId}
                alt=""
                className="w-96 h-72 rounded-md mt-5"
              />
            </div>
          </div>
          <div className="py-6 pb-3 border-b border-dashed border-slate-400 mb-8">
            <div className="flex items-center">
              <div className="flex items-center text-slate-600 dark:text-slate-300 font-semibold text-xl">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 dark:fill-slate-300"
                  fill="none">
                  <circle
                    r="8.35"
                    transform="matrix(-1 0 0 1 9 9)"
                    stroke="#505151"
                    strokeWidth="1.3"></circle>
                  <path
                    d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                    fill="#505151"></path>
                </svg>
                {restaurant?.info?.sla?.slaString}
              </div>
              <div className="flex items-center text-slate-600 dark:text-slate-300 font-semibold text-xl">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 18 18"
                  className="ml-8 mr-2 dark:fill-slate-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none">
                  <circle
                    cx="9"
                    cy="9"
                    r="8.25"
                    stroke="#505151"
                    strokeWidth="1.5"></circle>
                  <path
                    d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                    fill="#505151"></path>
                </svg>
                {restaurant?.info?.costForTwoMessage}
              </div>
            </div>
            <div className="py-10 flex overflow-x-scroll scrollbar">
              {offerList?.map((e) => (
                <div key={e?.info?.offerIds}>
                  <div className="w-80 h-28 mr-5 rounded-lg border border-rose-500 flex py-2 bg-rose-50 ">
                    {e?.info?.offerTag && (
                      <div className="w-10 flex items-center justify-center border-r border-slate-400">
                        <span className="-rotate-90 whitespace-nowrap text-sm font-semibold text-orange-500">
                          {e?.info?.offerTag}
                        </span>
                      </div>
                    )}
                    <div className="flex flex-col  w-full items-center justify-center px-2">
                      <p className=" my-1 text-base dark:text-slate-700 font-bold flex items-center">
                        <img
                          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart"
                          alt=""
                          className="mr-2"
                        />
                        {e?.info?.header}
                      </p>
                      <div className="flex">
                        <p className=" border-slate-800 text-slate-600 dark:text-slate-400 font-semibold text-sm border-r px-2">
                          {e?.info?.couponCode}
                        </p>
                        <p className="text-sm px-2 text-slate-600 dark:text-slate-400 font-semibold">
                          {e?.info?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {menuList?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.slice(1)
          ?.map((e, index) => (
            <MenuList
              key={index}
              {...e?.card?.card}
              // resImg={restaurant?.info?.cloudinaryImageId}
              // resName={restaurant?.info?.name}
              // areaName={restaurant?.info?.areaName}
              // resId={id}
              resInfo={restaurant?.info}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
