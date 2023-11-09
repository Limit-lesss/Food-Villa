export const filterData = (restaurant, text) => {
  return restaurant?.filter((e) =>
    e?.info?.name?.toLowerCase().includes(text.toLowerCase())
  );
};

export const filterMenuList = (MenuList) => {
  return MenuList?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (e) => e?.card?.card?.title
  );
};
