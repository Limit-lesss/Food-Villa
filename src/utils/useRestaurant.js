import { useState, useEffect } from "react";

const useRestaurant = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [noRestaurant, setNoRestaurant] = useState([]);
  const [locationUnserviceable, setLocationUnserviceable] = useState(false);
  useEffect(() => {
    getRestaurant();
  }, []);
  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);

    if (json.data?.cards[0]?.card?.card?.title === "Location Unserviceable") {
      setNoRestaurant(json.data?.cards[0]?.card?.card);
      setLocationUnserviceable(true);
    }
  }
  return [restaurant, noRestaurant, locationUnserviceable, carousel];
};
export default useRestaurant;
