import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerEffect";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import NoInternet from "./NoInternet";
import useRestaurant from "../utils/useRestaurant";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import CarouselShimmer from "./CarouselShimmer";
import { updatedRestaurant } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleCart } from "../utils/cartSlice";
import FoodType from "./FoodType";
import FoodTypeShimmer from "./FoodTypeShimmer";
const Body = () => {
  const [text, setText] = useState("");
  const [restaurant, noRestaurant, locationUnserviceable, carousel, foodType] =
    useRestaurant();
  const [resData, setResData] = useState([]);
  // const online = useOnline();
  // const [showUpdatedRes, setShowUpdatedRes] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   dispatch(toggleCart(true));
  // }, []);
  useEffect(() => {
    setResData(restaurant);
  }, [restaurant]);
  const handleSearch = () => {
    setResData(filterData(restaurant, text));
  };
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     if (window.scrollY > 700) {
  //       setShowUpdatedRes(true);
  //       window.scrollBy(0, 710);
  //     }
  //     if (window.scrollY > 720) {
  //       clearInterval(id);
  //     }
  //   });
  //   // return () => {
  //   //   clearInterval(id);
  //   // };
  // }, []);

  //! early return
  // if (locationUnserviceable) {
  //   return (
  //     <div className="noRestaurant-sec">
  //       <img src={noRestaurant.imageLink} alt="no restaurant" />
  //       <h2>Location Unserviceable</h2>
  //       <p>We don’t have any services here till now. Try changing location.</p>
  //     </div>
  //   );
  // }
  return restaurant?.length === 0 ? (
    <>
      {carousel && <CarouselShimmer />}
      <FoodTypeShimmer />
      <Shimmer show={true} />
    </>
  ) : (
    <div className="px-28 pt-20 sm:max-lg:pt-10 sm:max-lg:px-5  dark:bg-slate-800 min-h-screen bg-red-100 w-full">
      {carousel && <Carousel carousel={carousel} />}
      <FoodType foodType={foodType} />
      <div className="py-14 sm:max-lg:py-2 w-fit sm:max-lg:flex sm:max-lg:flex-col">
        <input
          data-testid="search-input"
          type="search"
          placeholder="Search ...."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-white dark:bg-slate-200 placeholder:text-slate-500 h-11 sm:max-lg:h-10 pr-5 sm:max-lg:pr-0 sm:max-lg:pl-4 pl-6 text-lg rounded-full w-[340px] sm:max-lg:w-72 placeholder:italic outline-none"
        />
        <button
          onClick={() => handleSearch()}
          data-testid="search-btn"
          className="rounded-full text-gray-700 dark:bg-slate-600 dark:text-slate-100 px-6 sm:max-lg:px-0 sm:max-lg:py-1.5 py-2.5 bg-sky-200 font-semibold ml-4 sm:max-lg:ml-0 sm:max-lg:mt-2 sm:max-lg:w-24">
          Search
        </button>
      </div>
      {/* //!  conditional rendering  */}

      <div
        className="grid grid-cols-4 gap-8 py-5  sm:max-lg:flex sm:max-lg:flex-col"
        data-testid="restaurant">
        {filterData(restaurant, text)?.map((e) => (
          <RestaurantCard {...e?.info} key={e?.info?.id} />
        ))}
        {/* {resData?.map((e) => (
          <Link to={"/restaurant/" + e?.info?.id} key={e?.info?.id}>
            <RestaurantCard {...e?.info} />
          </Link>
        ))} */}

        {/* //! updated restaurant list */}

        {/* {showUpdatedRes &&
          filterData(
            updatedRestaurant[0]?.cards[0]?.card?.card?.gridElements
              ?.infoWithStyle?.restaurants,
            text
          ).map((e) => (
            <Link to={"/restaurant/" + e?.info?.id} key={e?.info?.id}>
              <RestaurantCard {...e.info} key={e?.info?.id} />
            </Link>
          ))} */}

        {/* //! updated restaurant list */}

        {resData?.length ? (
          <></>
        ) : (
          <h2 className="text-xl font-semibold dark:text-slate-200 -mt-3 sm:max-lg:hidden">
            No match found
          </h2>
        )}
      </div>

      {/* <div className="body-sec">
        {restaurant.map((e) => (
          <RestaurantCard {...e.info} key={e.info.id} />
        ))}
      </div> */}
    </div>
  );
};

export default Body;
