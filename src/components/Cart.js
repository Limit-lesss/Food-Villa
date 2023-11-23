import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { IMG_CDN_URL } from "../utils/constants";
import emptyCart from "../assets/emptyCart.png";
import { Link } from "react-router-dom";
import Veg from "../assets/veg.png";
import NonVeg from "../assets/non-veg.png";
import DeleteIcon from "../assets/icons8-delete-24.png";
import DeleteIconLight from "../assets/icons8-delete-24-light.png";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, removeItem, toggleCart } from "../utils/cartSlice";
import { useTheme } from "../context/ThemeContext";
import Food from "../assets/icons8-kawaii-soda-50.png";
import LocationIcon from "../assets/icons8-location-50.png";
import HomeIcon from "../assets/icons8-home-50.png";
import PaymentIcon from "../assets/icons8-wallet-50.png";

const ListProduct = ({ name, price, id, isVeg }) => {
  // const {
  //   item,
  //   count,
  //   setItem,
  //   setCount,
  //   purchasedItemPrice,
  //   setPurchasedItemPrice,
  // } = useCart();

  const cartItem = useSelector((store) => store.cart.item);

  const dispatch = useDispatch();
  const handleAddItem = (foodInfo) => {
    dispatch(addItem(foodInfo[0]));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className=" py-4 flex  justify-between  mx-6 items-center dark:text-slate-300 border-b border-b-slate-300 dark:border-b-slate-500">
      <span className="font-medium w-80  flex items-center text-slate-600">
        {isVeg ? (
          <img src={Veg} alt="" className="w-5 h-5 my-1 mr-4" />
        ) : (
          <img src={NonVeg} alt="" className="w-4 h-4 my-1 mr-4" />
        )}
        {name}
      </span>
      <p className="flex  w-20  font-semibold justify-between  items-center border shadow-md dark:border-slate-500 rounded-md  dark:shadow-slate-700">
        <span
          className=" px-3 py-0.5 text-xl cursor-pointer text-slate-400"
          onClick={(e) => {
            // item.splice(
            //   item.findIndex((e) => e == Id),
            //   1
            // );
            handleRemoveItem(id);
            // setCount(count - 1);
            // setPurchasedItemPrice(
            //   purchasedItemPrice - parseInt((price / 100).toFixed(2))
            // );
          }}>
          -
        </span>
        <span className="text-green-600">
          {cartItem.filter((e) => e.id == id).length}
        </span>
        <span
          className="px-3 py-0.5 text-xl cursor-pointer text-green-600"
          onClick={(e) => {
            // setCount(count + 1);
            // setItem([...item, Id]);
            // setPurchasedItemPrice(
            //   purchasedItemPrice + parseInt((price / 100).toFixed(2))
            // );
            handleAddItem(cartItem.filter((e) => e.id == id));
          }}>
          +
        </span>
      </p>
      <span className="font-medium  w-32 text-center text-sm">
        ₹{" "}
        {((price / 100) * cartItem.filter((e) => e.id == id).length).toFixed(2)}
      </span>
    </div>
  );
};

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.item);
  const resDet = useSelector((store) => store.cart.resDetail);
  const [show, setShow] = useState({
    order: true,
    location: true,
    payment: false,
  });
  const [showLocationSec, setShowLocationSec] = useState(false);
  const [selectPlace, setSelectPlace] = useState("");
  const [locationDet, setLocationDet] = useState({
    address: "",
    doorFlatNo: "",
    landmark: "",
    place: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `address: ${locationDet.address}, "Door/Flat No": ${locationDet.doorFlatNo}, "landmark": ${locationDet.landmark}, "place":${locationDet.place}`
    );
    setShowLocationSec(false);
  };
  function disableScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function enableScroll() {
    window.onscroll = function () {};
  }
  // console.log(showLocationSec);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    dispatch(toggleCart(false));
    return () => {
      dispatch(toggleCart(true));
    };
  }, []);
  const theme = useTheme();

  if (cartItem.length == 0) {
    return (
      <div className="pt-28 px-28  dark:bg-slate-700 h-[102vh] text-center ">
        <img src={emptyCart} alt="" className="mx-auto w-96 h-96 scale-110" />
        <p className="text-3xl font-semibold text-slate-500 dark:text-slate-300 my-2">
          Your cart is empty
        </p>
        <p className="text-lg text-slate-400">
          You can go to home page to view more restaurants
        </p>
        <Link to="/Food-Villa/">
          <button className="bg-red-200 dark:bg-slate-200 py-3 px-5 my-3 rounded-full shadow-lg font-bold text-slate-700">
            Homepage
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div
      className={
        showLocationSec
          ? "py-28  dark:bg-slate-800 flex justify-between "
          : "py-28  dark:bg-slate-800 flex justify-between "
      }>
      <div
        className={
          showLocationSec
            ? "fixed h-screen overflow-hidden w-screen top-0 bg-gray-400 bg-opacity-60 z-30"
            : "absolute transform -translate-x-20 top-0"
        }>
        <div
          className={
            showLocationSec
              ? "h-screen w-2/5 bg-white absolute left-0 top-0 z-20 pt-28 px-10 transition-transform duration-700 opa"
              : "h-screen w-2/5 bg-white absolute left-0 top-0 z-20 pt-32 px-10 transform -translate-x-full transition-transform duration-500"
          }>
          <p className="font-semibold text-xl mb-10 text-slate-600">
            <span
              className="p-2 px-3.5 border border-slate-300 rounded-full text-red-400 mr-2 cursor-pointer"
              onClick={(e) => setShowLocationSec(false)}>
              x
            </span>{" "}
            Save Delivery Address
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                required
                type="text"
                id="address"
                className="block rounded-t-lg px-3.5 pt-8 pb-2 w-full text-base text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                value={locationDet.address}
                onChange={(e) =>
                  setLocationDet({ ...locationDet, address: e.target.value })
                }
                placeholder=" "
              />
              <label
                htmlFor="address"
                className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Address
              </label>
            </div>
            <div className="relative my-2">
              <input
                required
                type="text"
                id="doorFlatNo"
                className="block rounded-t-lg px-3.5 pt-8 pb-2 w-full text-base text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={locationDet.doorFlatNo}
                onChange={(e) =>
                  setLocationDet({ ...locationDet, doorFlatNo: e.target.value })
                }
              />
              <label
                htmlFor="doorFlatNo"
                className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Door / Flat no.
              </label>
            </div>
            <div className="relative my-2">
              <input
                required
                type="text"
                id="landmark"
                className="block rounded-t-lg px-3.5 pt-8 pb-2 w-full text-base text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={locationDet.landmark}
                onChange={(e) =>
                  setLocationDet({ ...locationDet, landmark: e.target.value })
                }
              />
              <label
                htmlFor="landmark"
                className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Landmark
              </label>
            </div>
            <div className="flex w-full bg-gray-50 mt-4">
              <p
                className={
                  selectPlace == "home"
                    ? "w-1/3 border text-center py-4 text-base font-medium  cursor-pointer bg-black text-white"
                    : "w-1/3 border text-center py-4 text-base font-medium  cursor-pointer"
                }
                name="home"
                onClick={(e) => {
                  setLocationDet({ ...locationDet, place: "Home" });
                  setSelectPlace("home");
                }}>
                Home
              </p>
              <p
                className={
                  selectPlace == "work"
                    ? "w-1/3 border text-center py-4 text-base font-medium  cursor-pointer bg-black text-white"
                    : "w-1/3 border text-center py-4 text-base font-medium  cursor-pointer"
                }
                onClick={(e) => {
                  setLocationDet({ ...locationDet, place: "Work" });
                  setSelectPlace("work");
                }}>
                Work
              </p>
              <p
                className={
                  selectPlace == "office"
                    ? "w-1/3 border text-center py-4 text-base font-medium  cursor-pointer bg-black text-white"
                    : "w-1/3 border text-center py-4 text-base font-medium cursor-pointer"
                }
                onClick={(e) => {
                  setLocationDet({ ...locationDet, place: "Office" });
                  setSelectPlace("office");
                }}>
                Office
              </p>
            </div>
            <button className="w-full py-4 bg-orange-400 text-white  font-medium mt-10 hover:shadow-lg hover:shadow-slate-400 text-center rounded cursor-pointer">
              SAVE ADDRESS & PROCEED
            </button>
          </form>
        </div>
      </div>
      <div className={showLocationSec ? "w-3/4 " : "w-3/4"}>
        <div className="p-4 border mr-14 ml-20 pl-14 pb-6 relative ">
          <img
            src={Food}
            alt=""
            className="absolute -left-10 top-3 z-10 h-12 w-12 rounded border p-1 bg-orange-300 cursor-pointer"
            onClick={(e) =>
              setShow({ order: !show.order, location: false, payment: false })
            }
          />
          <h1
            className="text-xl rounded font-semibold bg-orange-400 py-2 px-4 text-white mb-5 cursor-pointer "
            onClick={(e) =>
              setShow({ order: !show.order, location: false, payment: false })
            }>
            Order summary{" "}
          </h1>
          {show.order && (
            <>
              <div className="flex items-center relative pb-3 px-16">
                <img
                  src={theme.darkMode ? DeleteIcon : DeleteIconLight}
                  alt=""
                  className="absolute top-1  right-28 rounded-full p-2 bg-pink-200 dark:bg-slate-900 w-10 h-10 cursor-pointer shadow-lg 
          shadow-slate-200 dark:shadow-slate-800"
                  onClick={(e) => handleClearCart()}
                />
                <img
                  src={IMG_CDN_URL + resDet[0]?.cloudinaryImageId}
                  alt="resImg"
                  className="w-24 h-20 rounded"
                />
                <div className="px-10">
                  <p className="font-semibold text-xl pb-1 dark:text-slate-300">
                    {resDet[0]?.name}
                  </p>
                  <p className="text-base text-slate-700 dark:text-slate-400">
                    {resDet[0]?.areaName}
                  </p>
                </div>
              </div>
              <div className={"py-3 px-12  max-h-60 overflow-y-auto"}>
                {Array.from(new Set(cartItem)).map((e, index) => (
                  <ListProduct key={index} {...e} />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="p-4 border mr-14 ml-20 pl-14 pb-6 relative mt-10">
          <img
            src={LocationIcon}
            alt=""
            className="absolute -left-10 top-3 z-10 h-12 w-12 rounded border p-1 bg-orange-300 cursor-pointer"
            onClick={(e) =>
              setShow({
                order: false,
                location: !show.location,
                payment: false,
              })
            }
          />
          <h1
            className="text-xl rounded font-semibold bg-orange-400 py-2 px-4 text-white cursor-pointer mb-5"
            onClick={(e) =>
              setShow({
                order: false,
                location: !show.location,
                payment: false,
              })
            }>
            Delivery Address{" "}
          </h1>
          {showLocationSec ? disableScroll() : enableScroll()}
          {show.location && (
            <div>
              <button
                className="w-40 py-2 rounded hover:shadow-lg text-base font-medium bg-blue-300 mt-2"
                onClick={(e) => {
                  setShowLocationSec(true);
                  setShow({ order: false, location: true, payment: false });
                }}>
                Add new address
              </button>
              {Object.values(locationDet).filter((e) => e.length != 0).length !=
                0 && (
                <div
                  className="w-80 border pl-14 py-5 mt-5 relative hover:shadow-xl cursor-pointer"
                  onClick={(e) =>
                    setShow({
                      order: false,
                      location: false,
                      payment: true,
                    })
                  }>
                  <img
                    src={HomeIcon}
                    alt=""
                    className="absolute top-3 left-2 h-10 w-10"
                  />
                  <p className="font-semibold text-lg">{locationDet.place}</p>
                  <p className="py-2 text-slate-600 ">
                    {Object.values(locationDet)
                      .slice(0, Object.values(locationDet).length - 1)
                      .filter((e) => e.length != 0)
                      .join(", ")}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="p-4 border mr-14 ml-20 pl-14 pb-6 relative mt-10">
          <img
            src={PaymentIcon}
            alt=""
            className="absolute -left-10 top-3 z-10 h-12 w-12 rounded border p-1 bg-orange-300 cursor-pointer"
            onClick={(e) =>
              setShow({
                order: false,
                location: false,
                payment: !show.payment,
              })
            }
          />
          <h1
            className="text-xl rounded font-semibold bg-orange-400 py-2 px-4 text-white cursor-pointer mb-5"
            onClick={(e) =>
              setShow({
                order: false,
                location: false,
                payment: !show.payment,
              })
            }>
            Choose payment method{" "}
          </h1>
          {show.payment && <p className="w-full py-4 text-center bg-lime-700 text-white  font-semibold rounded mt-10 cursor-pointer">PROCEED TO PAY</p>}
        </div>
      </div>
      <div
        className={
          showLocationSec
            ? "w-1/3 mr-10 border hover:shadow-2xl h-fit  px-16 pb-20 pt-5 rounded-lg dark:bg-slate-700 dark:shadow-lg dark:shadow-slate-950 opacity-100"
            : "w-1/3 mr-10 border hover:shadow-2xl h-fit  px-16 pb-20 pt-5 rounded-lg dark:bg-slate-700 dark:shadow-lg dark:shadow-slate-950"
        }>
        <p className="text-xl font-bold text-center pt-3 border-b w-fit mx-auto p-2 px-4 border-b-slate-700 dark:text-slate-200 dark:border-b-slate-200">
          Total Amount
        </p>
        <p className="h-12 flex items-center justify-center  border-dashed border-slate-400 border mt-10 text-xl font-semibold text-slate-500 hover:shadow-md cursor-pointer dark:text-slate-400 dark:border-slate-500 dark:bg-slate-900">
          Apply Coupon
        </p>
        <p className="mt-10 font-medium text-lg dark:text-slate-200">
          Bill Details
        </p>
        <div className="border-b-2 border-b-slate-900 pb-5 pt-5  dark:border-b-slate-300">
          <div className="flex justify-between  py-3 text-slate-500 dark:text-slate-400">
            <p className="font-medium">Item Total</p>
            <p>
              ₹ {cartItem.reduce((a, c) => a + c.price / 100, 0).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between  py-3 text-slate-500 dark:text-slate-400">
            <p className="font-medium">Delivery Charge</p>
            <p>₹ 40</p>
          </div>
          <div className="flex justify-between  py-3 text-slate-500 dark:text-slate-400">
            <p className="font-medium">GST & Restaurant Charges</p>
            <p>
              ₹{" "}
              {(cartItem.reduce((a, c) => a + c.price / 100, 0) * 0.18).toFixed(
                2
              )}
            </p>
          </div>
        </div>
        <div className="flex justify-between  py-3 text-slate-900 dark:text-slate-100">
          <p className="font-semibold text-lg">To Pay</p>
          <p className="font-semibold text-lg">
            ₹{" "}
            {(
              cartItem.reduce((a, c) => a + c.price / 100, 0) +
              40 +
              cartItem.reduce((a, c) => a + c.price / 100, 0) * 0.18
            ).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Cart;

// const Cart = () => {
//   const cartItem = useSelector((store) => store.cart.item);

//   return (
//     <div className="pt-28 px-28">
//       {cartItem.map((e, index) => (
//         <div key={index} className="text-slate-800 font-semibold text-xl my-3 flex border-b border-b-slate-300 w-2/4 justify-between py-3">
//           <p>{e.name}</p> <p className="text-green-600">₹ {e.price / 100}</p>
//         </div>
//       ))}

//       <p className="text-sky-600 text-xl font-semibold w-1/2 text-center pt-3">Total Amount - ₹ {cartItem.reduce((a,c) => a + c.price/100 , 0)}</p>
//     </div>
//   );
// };

// export default Cart;
