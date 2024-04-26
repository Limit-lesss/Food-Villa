import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "./constants";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  // console.log(restaurant);
  const [menuList, setMenuList] = useState(null);
  const [offerList, setOfferList] = useState(null);
  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setRestaurant(json?.data?.cards[2]?.card?.card);
    setOfferList(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
    setMenuList(json?.data?.cards[4]);
    // console.log(json?.data?.cards[2])
  }

  return [restaurant, menuList, offerList];
};

export default useRestaurantMenu;
