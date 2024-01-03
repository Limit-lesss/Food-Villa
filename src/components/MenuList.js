import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import Veg from "../assets/veg.png";
import NonVeg from "../assets/non-veg.png";
import AngleUp from "../assets/icons8-angle-up-30.png";
import AngleDown from "../assets/icons8-angle-down-30.png";
import { useTheme } from "../context/ThemeContext";
import WhiteAngleUp from "../assets/white-icons8-chevron-up-30.png";
import WhiteAngleDown from "../assets/white-icons8-angle-down-30.png";
import { useCart } from "../context/CartContext";
import { addItem, clearCart, removeItem, toggleCart } from "../utils/cartSlice";
import { addResDetail } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Menu = ({
  name,
  description,
  price,
  defaultPrice,
  show,
  imageId,
  itemAttribute,
  isVeg,
  ribbon,
  foodInfo,
  resInfo,
}) => {
  const cartItem = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const handleAddItem = (foodInfo) => {
    dispatch(addItem(foodInfo));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  const resDet = useSelector((store) => store.cart.resDetail);
  const handleResInfo = (resInfo) => {
    if (resDet[0]?.id !== resInfo?.id) {
      dispatch(clearCart());
      handleAddItem(foodInfo);
    }
    dispatch(addResDetail(resInfo));
  };

  return (
    show && (
      <div
        className="flex my-4 px-4 border-rose-300 bg-rose-50 dark:bg-slate-700 dark:border-slate-400  border-t 
      py-4 items-center relative">
        <div className="w-3/4">
          <div className="flex items-center">
            {itemAttribute?.vegClassifier === "VEG" ? (
              <img src={Veg} alt="" className="w-6 h-6 my-1" />
            ) : (
              <img src={NonVeg} alt="" className="w-5 h-5 my-1" />
            )}
            {ribbon?.text && (
              <h1 className="ml-2 text-orange-600 dark:text-green-300 font-medium">
                ★ {ribbon?.text}
              </h1>
            )}
          </div>
          <h3 className="mt-1 text-sky-700 dark:text-slate-200 text-lg font-medium">
            {name}
          </h3>
          <p className="my-0 text-red-900 dark:text-slate-200 font-bold">
            ₹{(price || defaultPrice) / 100}
          </p>
          <p className="my-1 text-slate-500 line-clamp-2"> {description}</p>
        </div>
        {/* {showAlert && (
          <div className="fixed w-1/2 transition-all duration-300 h-56 bottom-2 left-80 bg-gray-100 shadow-2xl drop-shadow-2xl drop-shadow- shadow-black z-20 px-8 py-5 ">
            <p className="font-semibold text-xl">Items already in cart</p>
            <p className="text-lg text-slate-500 my-2">Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant? </p>
            <div className="flex justify-between mt-10">
              <button className="border-green-600 border-2 w-72 py-4 text-center font-medium text-xl">No</button>
              <button className="border-green-600 border-2 w-72 py-4 text-center text-xl font-medium">Yes, Start Afresh</button>
            </div>
          </div>
        )} */}
        <div className="mx-auto  flex flex-col justify-center w-1/4 items-center  mt-6">
          {imageId && (
            <img
              src={IMG_CDN_URL + imageId}
              alt="food"
              className="w-36 h-28 rounded"
            />
          )}
          {cartItem.filter((e) => e.id === foodInfo.id).length ? (
            <div className="bg-white border border-slate-300 text-green-700 font-semibold rounded-md w-20 h-9 flex justify-center items-center absolute bottom-0 dark:bg-green-700   dark:text-white dark:border-green-700 hover:dark:bg-white hover:dark:text-green-700 hover:bg-green-700 hover:text-white hover:border-green-700 cursor-pointer">
              <span
                className="w-1/3  text-center"
                onClick={(e) => handleRemoveItem(foodInfo.id)}>
                -
              </span>
              <span className="w-1/3  text-center hover:cursor-default">
                {cartItem.filter((e) => e.id === foodInfo.id).length}
              </span>
              <span
                className="w-1/3  text-center "
                onClick={(e) => handleAddItem(foodInfo)}>
                +
              </span>
            </div>
          ) : (
            <button
              data-testid="add-btn"
              className="bg-white border border-slate-300 text-green-700 font-semibold rounded-md w-20 h-9 flex justify-center items-center absolute bottom-0 dark:bg-green-700   dark:text-white dark:border-green-700 hover:dark:bg-white hover:dark:text-green-700 hover:bg-green-700 hover:text-white hover:border-green-700"
              onClick={() => {
                resDet[0]?.id !== resInfo.id
                  ? handleResInfo(resInfo)
                  : handleAddItem(foodInfo);
              }}>
              Add
            </button>
          )}
        </div>
      </div>
    )
  );
};

const MenuList = ({ itemCards, title, carousel, categories, resInfo }) => {
  const [isUp, setIsUp] = useState(true);
  const cartItem = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const handleAddItem = (foodInfo) => {
    dispatch(addItem(foodInfo));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  const resDet = useSelector((store) => store.cart.resDetail);
  const handleResInfo = (resInfo, foodInfo) => {
    if (resDet[0]?.id !== resInfo?.id) {
      dispatch(clearCart());
      handleAddItem(foodInfo);
    }
    dispatch(addResDetail(resInfo));
  };
  const mode = useTheme();
  return (
    <div className="flex flex-col mb-6  rounded-lg bg-rose-50 dark:bg-slate-700">
      <div
        onClick={(e) => setIsUp(!isUp)}
        className="font-semibold text-gray-600 dark:text-slate-200 text-xl p-3 py-4 rounded  cursor-pointer flex justify-between items-center">
        <div>
          {title}{" "}
          {(itemCards?.length || carousel?.length) &&
            "(" + (itemCards?.length || carousel?.length) + ")"}
        </div>
        {(itemCards?.length || carousel?.length) &&
          (mode.darkMode ? (
            <img
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/more-than.png"
              alt=".."
              className={isUp ? "w-8 -rotate-90 h-8" : "w-8 rotate-90 h-8"}
            />
          ) : (
            <img
              src="https://img.icons8.com/fluency-systems-regular/48/606262/more-than.png"
              alt=".."
              className={
                isUp ? "w-8 -rotate-90 h-8 mr-2" : "w-8 rotate-90 h-8 mr-2"
              }
            />
          ))}
      </div>
      <div className="flex w-full overflow-x-scroll no-scrollbar">
        {isUp &&
          carousel?.length &&
          carousel?.map((e) => (
            <div key={e?.bannerId}>
              <div className="px-3 w-[400px] mx-3 py-4 flex relative">
                <img src={IMG_CDN_URL + e?.creativeId} alt="" />
                <div className="absolute bottom-8 left-8 z-10 text-base font-semibold text-white bg-orange-900/90 p-2 px-4 rounded-lg ">
                  ₹{e?.dish?.info?.price / 100}
                </div>
                <div className="absolute left-40 bottom-2 z-20">
                  {cartItem.filter((event) => event.id === e?.dish?.info?.id)
                    .length ? (
                    <div className="bg-white border border-slate-300 text-green-700 font-semibold rounded-md w-20 h-9 flex justify-center items-center absolute bottom-0 dark:bg-green-700   dark:text-white dark:border-green-700 hover:dark:bg-white hover:dark:text-green-700 hover:bg-green-700 hover:text-white hover:border-green-700 cursor-pointer">
                      <span
                        className="w-1/3  text-center"
                        onClick={() => handleRemoveItem(e?.dish?.info?.id)}>
                        -
                      </span>
                      <span className="w-1/3  text-center hover:cursor-default">
                        {
                          cartItem.filter(
                            (event) => event.id === e?.dish?.info?.id
                          ).length
                        }
                      </span>
                      <span
                        className="w-1/3  text-center "
                        onClick={() => handleAddItem(e?.dish?.info)}>
                        +
                      </span>
                    </div>
                  ) : (
                    <button
                      data-testid="add-btn"
                      className="bg-white border border-slate-300 text-green-700 font-semibold rounded-md w-20 h-9 flex justify-center items-center absolute bottom-0 dark:bg-green-700   dark:text-white dark:border-green-700 hover:dark:bg-white hover:dark:text-green-700 hover:bg-green-700 hover:text-white hover:border-green-700"
                      onClick={() => {
                        resDet[0]?.id !== resInfo?.id
                          ? handleResInfo(resInfo, e?.dish?.info)
                          : handleAddItem(e?.dish?.info);
                      }}>
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
      {categories?.map((e, index) => (
        <MenuList {...e} key={index} />
      ))}
      {itemCards?.map((e) => (
        <Menu
          {...e?.card?.info}
          key={e?.card?.info?.id}
          show={isUp}
          // resImg={resImg}
          // resName={resName}
          // areaName={areaName}
          // resId={resId}
          foodInfo={e?.card?.info}
          resInfo={resInfo}
        />
      ))}
    </div>
  );
};
export default MenuList;
