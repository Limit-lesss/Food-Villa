import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerEffect";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import NoInternet from "./NoInternet";
import useRestaurant from "../utils/useRestaurant";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import CarouselShimmer from "./CarouselShimmer";
import { updatedRestaurant } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleCart } from "../utils/cartSlice";
const Body = () => {
  const [text, setText] = useState("");
  const [restaurant, noRestaurant, locationUnserviceable, carousel] =
    useRestaurant();
  const online = useOnline();
  const [showUpdatedRes, setShowUpdatedRes] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleCart(true))
  }, []);
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
  if (locationUnserviceable) {
    return (
      <div className="noRestaurant-sec">
        <img src={noRestaurant.imageLink} alt="no restaurant" />
        <h2>Location Unserviceable</h2>
        <p>We don’t have any services here till now. Try changing location.</p>
      </div>
    );
  }
  return restaurant?.length === 0 ? (
    <>
      <CarouselShimmer />
      <Shimmer show={true} />
    </>
  ) : (
    <div className="px-28 pt-20 dark:bg-slate-800 min-h-screen">
      <Carousel carousel={carousel} />
      <div className="py-3 pt-10 w-fit">
        <input
          type="search"
          placeholder="Search ...."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-pink-100 dark:bg-slate-200 placeholder:text-slate-500 h-11 pr-5 pl-6 text-lg rounded-full w-[340px] placeholder:italic outline-none"
        />
        <button
          // onClick={() =>
          //   setRestaurant(
          //     restaurantList.filter((e) =>
          //       e.info.name.toLowerCase().includes(text.toLowerCase())
          //     )
          //   )}
          className="rounded-full text-gray-700 dark:bg-slate-600 dark:text-slate-100 p-2 pr-6 pl-6
          bg-pink-200 font-semibold ml-4">
          Search
        </button>
      </div>
      {/* //!  conditional rendering  */}

      <div className="grid grid-cols-4 gap-4 py-5 min-h-screen">
        {filterData(restaurant, text)?.map((e) => (
          <Link to={"/restaurant/" + e?.info?.id} key={e?.info?.id}>
            <RestaurantCard {...e?.info} />
          </Link>
        ))}

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

        {filterData(restaurant, text)?.length ? (
          <></>
        ) : (
          <h2 className="text-xl font-semibold dark:text-slate-200 -mt-3 ">
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
