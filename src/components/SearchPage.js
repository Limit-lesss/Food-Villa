import React, { useEffect, useState } from "react";
import {
  PRE_SEARCH_URL,
  IMG_CDN_URL,
  SEARCH_RESULT,
  SEARCH_RES_LIST,
} from "../utils/constants";
import { Link } from "react-router-dom";
import Veg from "../assets/veg.png";
import NonVeg from "../assets/non-veg.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  clearCart,
  removeItem,
  toggleCart,
  addResDetail,
} from "../utils/cartSlice";

const SearchPage = () => {
  const [preSearch, setPreSearch] = useState([]);
  const [searhData, setSearchData] = useState([]);
  const [searchResList, setSearchResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(true);
  const cartItem = useSelector((store) => store.cart.item);
  // console.log(searchText);
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
  useEffect(() => {
    getSearchResult();
  }, []);
  async function getSearchResult() {
    try {
      const response = await fetch(PRE_SEARCH_URL);
      const data = await response.json();
      data?.data?.cards && setPreSearch(data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSearchData();
  }, [searchText]);
  async function getSearchData() {
    try {
      const response = await fetch(SEARCH_RESULT + searchText);
      const data = await response.json();
      setSearchData(data?.data?.suggestions);
    } catch (error) {
      console.log(error);
    }
  }
  // useEffect(() => {
  //   getSearchRes();
  // }, [searchText]);
  async function getSearchRes(text) {
    console.log("hello")
    try {
      const response = await fetch(SEARCH_RES_LIST + searchText);
      const data = await response.json();
      if(text === "Dish"){
        setSearchResList(
        data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards
      );
      }else{
        setSearchResList(
          data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
        );
      }
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="py-36 px-56 bg-rose-100 dark:bg-slate-800 min-h-screen">
      <div className="relative border border-slate-400 rounded-lg">
        <input
          type="text"
          className="h-14 w-full px-5 text-lg rounded-lg outline-none"
          placeholder="Search for restaurants and foods"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchText.length === 0 ? (
          <svg
            viewBox="5 -1 12 25"
            height="27"
            width="27"
            fill="#686b78"
            className=" absolute right-5 top-4 hover:cursor-pointer"
            onClick={() => setSearchText(searchText)}>
            <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
          </svg>
        ) : (
          <svg
            width="27"
            height="27"
            viewBox="0 0 24 24"
            className="absolute right-5 top-4 hover:cursor-pointer"
            onClick={() => setSearchText("")}>
            <path
              d="M17.0251484,0.288798437 C17.5090218,-0.114571204 18.2292627,-0.0967643175 18.6927565,0.350826444 C19.189357,0.830387975 19.2031698,1.62172366 18.7236083,2.11832416 L18.7236083,2.11832416 L11.274,9.831 L18.7236083,17.5450054 C19.2031698,18.0416059 19.189357,18.8329416 18.6927565,19.3125031 C18.2292627,19.7600939 17.5090218,19.7779007 17.0251484,19.3745311 L16.9252588,19.2816513 L9.537,11.631 L2.14917595,19.2816513 L2.04928636,19.3745311 C1.56541292,19.7779007 0.845172034,19.7600939 0.381678232,19.3125031 C-0.114922271,18.8329416 -0.128735086,18.0416059 0.350826444,17.5450054 L0.350826444,17.5450054 L7.799,9.831 L0.350826444,2.11832416 C-0.128735086,1.62172366 -0.114922271,0.830387975 0.381678232,0.350826444 C0.845172034,-0.0967643175 1.56541292,-0.114571204 2.04928636,0.288798437 L2.14917595,0.381678232 L9.537,8.032 L16.9252588,0.381678232 Z"
              fill="#535766"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"></path>
          </svg>
        )}
      </div>
      {searchText.length !== 0 ? (
        <div className="mt-5 pt-5 ">
          {show &&
            searhData?.map((e, index) => (
              <div
                className="w-full p-3 hover:bg-white rounded-lg cursor-pointer flex items-center"
                onClick={() => {
                  setShow(!show);
                  getSearchRes(e?.subCategory);
                }}
                key={index}>
                <div className="">
                  <img
                    src={IMG_CDN_URL + e?.cloudinaryId}
                    alt=""
                    className="w-28 h-24 rounded-lg"
                  />
                </div>
                <div className="mx-5">
                  <p className="text-base font-medium text-slate-800 my-1">
                    {e?.text}
                  </p>
                  <p className="text-sm text-slate-600">{e?.subCategory}</p>
                </div>
              </div>
            ))}
          {!show && (
            <div className="grid grid-cols-2 gap-5 ">
              {searchResList?.slice(1)?.map((e) => (
                <div
                  className="w-full bg-rose-50 dark:bg-slate-50 rounded-2xl p-3"
                  key={e?.card?.card?.info?.id}>
                  <div className="py-2 border-b">
                    <p className="text-base font-medium text-slate-600">
                      By {e?.card?.card?.restaurant?.info?.name}
                    </p>
                    <div className="flex items-center text-slate-600 text-sm">
                      <p className=" my-1">
                        &#9733; {e?.card?.card?.restaurant?.info?.avgRating}
                      </p>
                      <p className=" mx-2 flex items-center">&#x2022;</p>
                      <p>{e?.card?.card?.restaurant?.info?.sla?.slaString}</p>
                    </div>
                  </div>
                  <div className="pt-5 flex items-center">
                    <div className="w-3/5">
                      {e?.card?.card?.info?.isVeg === 1 ? (
                        <img src={Veg} alt="" className="w-6 h-6" />
                      ) : (
                        <img src={NonVeg} alt="" className="w-5 h-5" />
                      )}
                      <p className="pt-1 font-medium text-slate-800 text-lg">
                        {e?.card?.card?.info?.name}
                      </p>
                      <p className="text-base font-medium text-slate-800">
                        ₹{e?.card?.card?.info?.price / 100}
                      </p>
                      <p className="mt-3 text-slate-500 text-sm">
                        {e?.card?.card?.info?.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-center w-2/5  relative h-28">
                      <div>
                        {e?.card?.card?.info?.imageId && (
                          <img
                            src={IMG_CDN_URL + e?.card?.card?.info?.imageId}
                            alt=""
                            className="w-28 h-24 rounded-lg"
                          />
                        )}
                      </div>
                      {/* <div className="bg-white border border-slate-300 text-green-700 font-semibold rounded-md w-20 h-9 flex justify-center items-center absolute bottom-0">
                        Add
                      </div> */}
                      {cartItem.filter(
                        (event) => event.id === e?.card?.card?.info?.id
                      ).length ? (
                        <div className="bg-white border border-slate-300 text-green-700 font-semibold rounded-md w-20 h-9 flex justify-center items-center absolute bottom-0 dark:bg-green-700   dark:text-white dark:border-green-700 hover:dark:bg-white hover:dark:text-green-700 hover:bg-green-700 hover:text-white hover:border-green-700 cursor-pointer">
                          <span
                            className="w-1/3  text-center"
                            onClick={() =>
                              handleRemoveItem(e?.card?.card?.info?.id)
                            }>
                            -
                          </span>
                          <span className="w-1/3  text-center hover:cursor-default">
                            {
                              cartItem?.filter(
                                (event) => event.id === e?.card?.card?.info?.id
                              ).length
                            }
                          </span>
                          <span
                            className="w-1/3  text-center "
                            onClick={(event) =>
                              handleAddItem(e?.card?.card?.info)
                            }>
                            +
                          </span>
                        </div>
                      ) : (
                        <button
                          data-testid="add-btn"
                          className="bg-white border border-slate-300 text-green-700 font-semibold rounded-md w-20 h-9 flex justify-center items-center absolute bottom-0 dark:bg-green-700   dark:text-white dark:border-green-700 hover:dark:bg-white hover:dark:text-green-700 hover:bg-green-700 hover:text-white hover:border-green-700"
                          onClick={() => {
                            resDet[0]?.id !== e?.card?.card?.restaurant?.info?.id
                              ? handleResInfo(
                                  e?.card?.card?.restaurant?.info,
                                  e?.card?.card?.info
                                )
                              : handleAddItem(e?.card?.card?.info);
                          }}>
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="mt-8 ml-5 ">
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-slate-600">
              Recent Searches
            </p>
            <p className="text-xs font-medium text-orange-500">SHOW MORE</p>
          </div>
          <div className="my-2">
            {Array(3)
              .fill(0)
              .map((e, index) => (
                <div
                  className="w-full pl-9 relative hover:cursor-pointer"
                  key={index}>
                  <svg
                    viewBox="5 -1 12 25"
                    height="20"
                    width="20"
                    fill="#686b78"
                    className=" absolute left-0 top-6">
                    <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
                  </svg>
                  <div className="border-b border-b-slate-950 h-16 flex items-center text-slate-600 font-medium">
                    Delights by INOX
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-10">
            <p className="text-2xl font-bold text-slate-600 my-5">
              Popular Cuisines
            </p>
            <div className="w-full flex overflow-x-scroll no-scrollbar">
              {preSearch[1]?.card?.card?.imageGridCards?.info?.map((e) => (
                <Link
                  key={e?.id}
                  onClick={() =>
                    setSearchText(
                      e?.entityId.slice(e?.entityId.indexOf("=") + 1)
                    )
                  }>
                  <div className="w-24 border border-red-200 mr-5">
                    <img
                      src={IMG_CDN_URL + e?.imageId}
                      alt=""
                      className="h-28 w-24"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
