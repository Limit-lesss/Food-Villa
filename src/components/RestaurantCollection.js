import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { FETCH_RES_COL } from "../utils/constants";
import Shimmer from "./ShimmerEffect";

const RestaurantCollection = () => {
  const [resColData, setResColData] = useState([]);
  const { entityId } = useParams();
  const navigate = useNavigate();
  // console.log(entityId);
  useEffect(() => {
    getResCol();
  }, []);
  async function getResCol() {
    try {
      const response = await fetch(FETCH_RES_COL + entityId);
      const data = await response.json();
      data?.data?.cards && setResColData(data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }
  return resColData?.length === 0 ? (
    <Shimmer show={true} />
  ) : (
    <div className="pt-28 px-20 pb-20 dark:bg-slate-800 bg-rose-100">
      {
        <div className="text-5xl font-semibold pb-10 text-slate-600">
          {resColData[0]?.card?.card?.title}
        </div>
      }
      <div className="grid grid-cols-4 gap-10 ">
        {resColData?.slice(2)?.map((e) => (
          <div
            onClick={() =>
              navigate("/Food-Villa/restaurant/" + e?.card?.card?.info?.id)
            }
            key={e?.card?.card?.info?.id}
            className="hover:cursor-pointer w-fit">
            <RestaurantCard {...e?.card?.card?.info} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCollection;
