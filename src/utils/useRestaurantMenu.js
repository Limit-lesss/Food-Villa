import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "./constants";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  // console.log(restaurant);
  const [menuList, setMenuList] = useState(null);
  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card);
    setMenuList(json?.data?.cards[2]);
  }

  return [restaurant, menuList];
};

export default useRestaurantMenu;
