import { useState, useEffect } from "react";
import LightLogo from "../assets/light-foodvilla-logo.png";
import DarkLogo from "../assets/dark-foodvilla-logo.png";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Sun from "../assets/icons8-sun-24.png";
import Moon from "../assets/icons8-moon-25.png";
import DarkCart from "../assets/dark-icons8-plate-64.png";
import LightCart from "../assets/light-icons8-plate-64.png";
import { useCart } from "../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import Veg from "../assets/veg.png";
import NonVeg from "../assets/non-veg.png";
import { toggleCart } from "../utils/cartSlice";
const Title = () => {
  const { darkMode } = useTheme();
  return (
    <Link to={"/Food-Villa"}>
      <div className="flex items-center">
        <img
          src={darkMode ? DarkLogo : LightLogo}
          alt="food villa"
          className="w-36 h-14 ml-16  scale-125 "
          data-testid="logo"
        />
        {/* <span className=" text-xl font-semibold text-cyan-900 dark:text-yellow-500  font-sens -skew-y-6 shadow-slate-400 p-3 py-1">
          Food Villa
        </span> */}
      </div>
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const theme = useTheme();
  // const { count } = useCart();
  const cartItems = useSelector((store) => store.cart.item);
  const resInfo = useSelector((store) => store.cart.resDetail);
  const showCart = useSelector((store) => store.cart.showCart);
  // const dispatch = useDispatch();
  // const handleShowCart = () => {
  //   // dispatch(toggleCart(false));
  // };
  return (
    <div
      className="flex items-center justify-between bg-rose-100 dark:bg-slate-700 py-4 
    fixed w-full top-0 z-40 ">
      <Title />
      <div className=" w-1/2">
        <ul className="flex w-full justify-around  text-slate-600 dark:text-slate-300">
          <Link to="/Food-Villa/">
            <li className=" w-32 text-center py-1.5 rounded-full text-lg font-medium relative after:absolute after:w-0 after:h-0.5 after:bg-pink-900 after:dark:bg-slate-400 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 shadow-lg overflow-hidden dark:bg-slate-800 ">
              Home
            </li>
          </Link>
          <Link to="/Food-Villa/SearchPage">
            <li className="w-32 py-1.5 rounded-full text-lg font-medium relative after:absolute after:w-0 after:h-0.5 after:bg-pink-900 after:dark:bg-slate-400 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 shadow-lg overflow-hidden dark:bg-slate-800 flex items-center justify-center">
              <svg
                viewBox="5 -1 12 25"
                height="18"
                width="18"
                className="mr-2 fill-green-600">
                <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
              </svg>
              Search
            </li>
          </Link>
          {/* <Link to="/contact">
            <li className=" w-32 text-center py-1.5 rounded-full text-lg font-medium relative after:absolute after:w-0 after:h-0.5 after:bg-pink-900 after:dark:bg-slate-400 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 shadow-lg overflow-hidden dark:bg-slate-800 ">
              Contact
            </li>
          </Link> */}
          {/* <Link to="/instamart">
            <li className="w-32 text-center py-1.5 rounded-full text-lg font-medium relative after:absolute after:w-0 after:h-0.5 after:bg-pink-900 after:dark:bg-slate-400 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 shadow-lg overflow-hidden dark:bg-slate-800 ">
              Instamart
            </li>
          </Link> */}
        </ul>
      </div>
      <div
        onClick={(e) => theme.setDarkMode(!theme.darkMode)}
        after={theme?.darkMode ? "Switch to Light" : "Switch to Dark"}
        className={` p-2 cursor-pointer relative after:absolute hover:after:content-[attr(after)] after:font-medium after:text-slate-700 after:text-lg  after:w-40 hover:after:text-center hover:after:p-1 transform after:-translate-x-16 after:translate-y-1 hover:after:translate-y-2   hover:after:rounded-full dark:after:bg-slate-200 after:bg-pink-200 hover:after:transition transition-opacity  hover:after:duration-700`}>
        <img
          src={theme?.darkMode ? Sun : Moon}
          alt="light"
          className="rounded-full shadow-lg dark:bg-slate-400 p-2.5 "
        />
      </div>

      {showCart && (
        <div className="relative  flex items-center group  pb-1 z-20 ">
          <div
            className="absolute top-20 -right-14  w-96 bg-white shadow-xl shadow-slate-700  border-t-4 border-orange-500 rounded invisible group-hover:visible transition-transform transform  
            -translate-y-3 ease-in-out duration-700 group-hover:-translate-y-2 ">
            {/* //! special design */}
            <p className="absolute w-6 h-6 bg-white -top-3.5 rounded right-28 border-t-4 border-l-4 rotate-45 border-orange-500"></p>
            {!cartItems.length ? (
              <div className="px-14 py-12">
                <p className="text-3xl font-semibold text-slate-600 pb-3">
                  Cart Empty
                </p>
                <p className="text-slate-500 text-lg">
                  Good food is always cooking! Go ahead, order some yummy items
                  from the menu.
                </p>
              </div>
            ) : (
              <div className="px-8 py-6">
                <div className="flex items-center border-b-2 pb-5">
                  <img
                    src={IMG_CDN_URL + resInfo[0]?.cloudinaryImageId}
                    alt=""
                    className="w-24 h-20"
                  />
                  <div>
                    <p className="pl-4 font-semibold text-lg text-slate-600">
                      {resInfo[0]?.name.length > 18
                        ? resInfo[0]?.name.slice(0, 18) + "..."
                        : resInfo[0]?.name}{" "}
                    </p>
                    <p className="pl-4 text-slate-400 text-sm">
                      {resInfo[0]?.areaName}{" "}
                    </p>
                  </div>
                </div>
                <div className="border-b-2 border-dashed py-3">
                  {Array.from(new Set(cartItems)).map((e, index) => (
                    <div
                      key={index}
                      className="flex justify-between py-2 items-center">
                      <div className="flex items-center">
                        <img
                          src={
                            e.itemAttribute?.vegClassifier === "VEG"
                              ? Veg
                              : NonVeg
                          }
                          alt=""
                          className="w-4 h-4 mr-3"
                        />
                        <p className="text-sm font-medium w-52">
                          {e.name} x{" "}
                          {cartItems.filter((event) => event.id === e.id).length}
                        </p>
                      </div>
                      <p className="text-slate-400 text-sm">
                        ₹ {((e.price || e.defaultPrice) / 100).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between pt-5 font-semibold">
                  <p>Sub Total</p>
                  <p>
                    ₹{" "}
                    {cartItems
                      .reduce(
                        (a, c) => a + (c.price || c.defaultPrice) / 100,
                        0
                      )
                      .toFixed(2)}
                  </p>
                </div>
                <p className="text-slate-400 text-sm">
                  Extra charges may apply
                </p>
                <Link to={"/Food-Villa/cart"}>
                  <p className="w-full bg-orange-500 py-3 text-center rounded mt-4 font-bold text-white hover:shadow-lg hover:shadow-slate-400">
                    CHECKOUT
                  </p>
                </Link>
              </div>
            )}
          </div>
          <Link to={"/Food-Villa/cart"}>
            <div className="flex items-center">
              {
                <img
                  src={theme?.darkMode ? DarkCart : LightCart}
                  alt="cart"
                  className="h-14 w-14"
                />
              }
              <span
                className="absolute top-3.5 left-2.5 font-medium text-lg w-9 text-center text-orange-700 dark:text-yellow-400 "
                data-testid="item-size">
                {cartItems.length}
              </span>
              <span className="ml-1 dark:text-slate-200 text-slate-600 group-hover:text-orange-400 text-lg font-medium">
                Cart
              </span>
            </div>
          </Link>
        </div>
      )}

      <div className="mr-10">
        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="rounded-full text-slate-600 dark:text-slate-900 p-2 w-28 text-lg bg-pink-300 dark:bg-slate-400 font-semibold shadow-lg hover:dark:shadow-slate-500 hover:dark:shadow-lg">
            Logout
          </button>
        ) : (
          <Link to={"/Food-Villa/login"}>
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="rounded-full text-slate-600 dark:text-slate-900 p-2 w-28 text-lg bg-pink-200 dark:bg-slate-400 font-semibold shadow-lg hover:dark:shadow-slate-500 hover:dark:shadow-lg">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
