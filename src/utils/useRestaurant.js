import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_URL } from "./constants";

const useRestaurant = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [foodType, setFoodType] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [noRestaurant, setNoRestaurant] = useState([]);
  const [locationUnserviceable, setLocationUnserviceable] = useState(false);
  useEffect(() => {
    getRestaurant();
  }, []);
  async function getRestaurant() {
    const data = await fetch(FETCH_RESTAURANT_URL);
    const json = await data.json();

    setRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFoodType(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
    setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);

    // if (json.data?.cards[0]?.card?.card?.title === "Location Unserviceable") {
    //   setNoRestaurant(json.data?.cards[0]?.card?.card);
    //   setLocationUnserviceable(true);
    // }
  }
  return [restaurant, noRestaurant, locationUnserviceable, carousel, foodType];
};
export default useRestaurant;
