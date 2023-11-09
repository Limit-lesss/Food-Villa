import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";


const RestaurantCard = ({
  name,
  cuisines,
  areaName,
  avgRating,
  cloudinaryImageId,
  id,
}) => {
  return (
    <div className="w-[260px]  shadow-lg rounded-md mt-5 overflow-hidden flex flex-col justify-normal bg-pink-50 dark:bg-slate-700 hover:scale-95 hover:transition-all hover:duration-200">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt=".."
        className="h-44 w-full"
      />
      <h2 className="font-semibold  text-xl px-2 my-1 text-black dark:text-white">
        {name.length > 15 ? name.slice(0, 18) + " &..." : name}
      </h2>
      <h3 className=" text-gray-500 dark:text-gray-300 font-normal px-2 mb-1 overflow-hidden w-80">
        {cuisines.length >= 3
          ? cuisines.slice(0, 3).join(", ") + " &..."
          : cuisines.join(", ")}
      </h3>
      <h3 className=" text-gray-600 dark:text-gray-400 font-medium px-2 mb-1">
        {areaName}
      </h3>
      <h4
        className={
          avgRating >= 4
            ? "text-green-600  font-semibold  px-2 mb-1"
            : "text-red-400  font-semibold  px-2 my-2"
        }>
        {avgRating} ✮
      </h4>
    </div>
  );
};
export default RestaurantCard;
