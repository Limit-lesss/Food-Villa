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
  // id,
  // resImg,
  // resName,
  // areaName,
  // resId,
}) => {
  // const {
  //   count,
  //   setCount,
  //   setItem,
  //   item,
  //   setAddedFood,
  //   addedFood,
  //   purchasedItemPrice,
  //   setPurchasedItemPrice,
  //   setRestaurantId,
  //   restaurantId,
  // } = useCart();
  // const [showAlert, setShowAlert] = useState(false);
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
    if (resDet[0]?.id != resInfo?.id) {
      dispatch(clearCart());
      handleAddItem(foodInfo);
    }
    dispatch(addResDetail(resInfo));
  };

  return (
    show && (
      <div
        className="flex my-4 px-4 border-blue-100 dark:border-slate-600 border-t 
      py-4 items-center relative">
        <div className="w-3/4">
          <div className="flex items-center">
            {itemAttribute?.vegClassifier == "VEG" ? (
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
          <p className="my-1 text-gray-400"> {description}</p>
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
          {cartItem.filter((e) => e.id == foodInfo.id).length ? (
            <div className="shadow-2xl w-20 py-1.5 bg-slate-700 dark:bg-slate-800  dark:text-slate-300 hover:dark:bg-slate-900 text-white rounded hover:bg-slate-900 flex cursor-pointer">
              <span
                className="w-1/3  text-center"
                onClick={(e) => handleRemoveItem(foodInfo.id)}>
                -
              </span>
              <span className="w-1/3  text-center text-green-200">
                {cartItem.filter((e) => e.id == foodInfo.id).length}
              </span>
              <span
                className="w-1/3  text-center "
                onClick={(e) => handleAddItem(foodInfo)}>
                +
              </span>
            </div>
          ) : (
            <button
              className="shadow-2xl w-20 py-1.5 bg-slate-700 dark:bg-slate-800  dark:text-slate-300 hover:dark:bg-slate-900 text-white rounded hover:bg-slate-900 "
              onClick={() => {
                handleAddItem(foodInfo);
                handleResInfo(resInfo);
              }}>
              Add
            </button>
          )}
        </div>
      </div>
    )
  );
};

const MenuList = ({
  itemCards,
  title,
  carousel,
  categories,
  // resImg,
  // resName,
  // areaName,
  // resId,
  resInfo,
}) => {
  const [show, setShow] = useState(true);
  const mode = useTheme();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(toggleCart(true))
  // }, []);
  // console.log(resInfo)
  return (
    <div className="flex flex-col mb-6  bg-neutral-50 rounded-lg dark:bg-slate-700">
      <h2
        onClick={(e) => setShow(!show)}
        className="font-semibold text-gray-600 dark:text-slate-200 text-2xl p-3 py-4 rounded relative cursor-pointer">
        {title} ({itemCards?.length || carousel?.length || categories?.length})
        {mode.darkMode ? (
          show ? (
            <img
              src={WhiteAngleUp}
              alt=".."
              className="absolute right-4 bottom-3"
            />
          ) : (
            <img
              src={WhiteAngleDown}
              alt=".."
              className="absolute right-4 bottom-3"
            />
          )
        ) : show ? (
          <img src={AngleUp} alt=".." className="absolute right-4 bottom-3 " />
        ) : (
          <img
            src={AngleDown}
            alt=".."
            className="absolute right-4 bottom-3 "
          />
        )}
      </h2>

      {itemCards?.map((e) => (
        <Menu
          {...e?.card?.info}
          key={e?.card?.info?.id}
          show={show}
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
