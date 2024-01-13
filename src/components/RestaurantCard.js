import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  name,
  cuisines,
  areaName,
  avgRating,
  cloudinaryImageId,
  id,
  aggregatedDiscountInfoV3,
  sla,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-[260px]  shadow-lg rounded-md  overflow-hidden flex flex-col justify-normal bg-pink-50 dark:bg-slate-700 hover:scale-95 hover:cursor-pointer hover:transition-all hover:duration-200 relative mb-5"
      onClick={() => navigate("/Food-Villa/restaurant/" + id)}>
      <div className="relative">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt=".."
          className="h-44 w-full"
        />
        {aggregatedDiscountInfoV3?.header && (
          <div className="p-2 rounded-md absolute top-2  bg-gradient-to-r from-orange-400 to-yellow-300   text-lg font-bold text-slate-800">
            {aggregatedDiscountInfoV3?.subHeader &&
              aggregatedDiscountInfoV3?.header +
                " " +
                aggregatedDiscountInfoV3?.subHeader}
          </div>
        )}
      </div>
      <h2 className="font-semibold  text-xl px-2 my-1 text-black dark:text-white truncate">
        {name}
      </h2>
      <h3 className=" text-gray-500 dark:text-gray-300 font-normal px-2 mb-1 truncate w-64">
        {cuisines?.join(", ")}
      </h3>
      <h3 className=" text-gray-600 dark:text-gray-400 font-medium px-2 mb-1">
        {areaName}
      </h3>
      <h4 className="flex font-bold px-3 py-1 items-center dark:text-slate-200">
        {avgRating}
        <svg
          className="mx-1"
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
        <div className="font-semibold border-l-2 border-slate-600 px-2 mx-2">
          {sla?.slaString}
        </div>
      </h4>
    </div>
  );
};
export default RestaurantCard;
