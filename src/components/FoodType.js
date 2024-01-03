import React, { useEffect, useRef, useState } from "react";
import useRestaurant from "../utils/useRestaurant";
import arrow_left from "../assets/icons8-arrow-60-left.png";
import arrow_right from "../assets/icons8-arrow-60-right.png";
import arrow_left_disable from "../assets/icons8-arrow-60-left-disable.png";
import arrow_right_disable from "../assets/icons8-arrow-60-right-disable.png";
import { IMG_CDN_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";

const FoodType = ({ foodType }) => {
  const [arrowDisable, setArrowDisable] = useState(true);
  const [rightArrowDisable, setRightArrowDisable] = useState(false);
  const elementRef = useRef(null);
  const navigate = useNavigate();
  // console.log(foodType);
  useEffect(() => {
    const handleElementScroll = () => {
      if (
        elementRef.current.scrollLeft + elementRef.current.clientWidth ===
        elementRef.current.clientWidth
      ) {
        setArrowDisable(true);
      } else if (
        elementRef.current.scrollLeft + elementRef.current.clientWidth ===
        elementRef.current.scrollWidth
      ) {
        setRightArrowDisable(true);
      } else {
        setArrowDisable(false);
        setRightArrowDisable(false);
      }
    };
    elementRef.current?.addEventListener("scroll", handleElementScroll);
    return () => {
      elementRef.current?.removeEventListener("scroll", handleElementScroll);
    };
  }, []);
  function handleHorizantalScroll(element, speed, distance, step) {
    let scrollAmount = 0;
    const timer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(timer);
      }
      if (element.scrollLeft + element.clientWidth === element.clientWidth) {
        setArrowDisable(true);
      } else if (
        element.scrollLeft + element.clientWidth ===
        element.scrollWidth
      ) {
        setRightArrowDisable(true);
      } else {
        setArrowDisable(false);
        setRightArrowDisable(false);
      }
    }, speed);
  }
  return (
    <div className="mt-14">
      <div className="text-3xl font-bold dark:text-slate-200 text-slate-700 flex justify-between">
        What's on your mind?
        <div className="mr-5">
          <button
            disabled={arrowDisable}
            onClick={(e) =>
              handleHorizantalScroll(elementRef.current, 10, 480, -40)
            }
            className=" p-1.5 rounded-full bg-white mx-2">
            <img
              src={arrowDisable ? arrow_left_disable : arrow_left}
              alt=""
              className="w-6"
            />
          </button>
          <button
            disabled={rightArrowDisable}
            onClick={(e) =>
              handleHorizantalScroll(elementRef.current, 10, 480, 40)
            }
            className=" p-1.5 rounded-full  bg-white">
            <img
              src={rightArrowDisable ? arrow_right_disable : arrow_right}
              alt=""
              className="w-6"
            />
          </button>
        </div>
      </div>
      <div
        className="flex w-full overflow-x-scroll no-scrollbar mt-5"
        ref={elementRef}>
        {foodType?.map((e) => (
          <div key={e?.id}>
            <div className="w-48 mr-14">
              <img
                src={IMG_CDN_URL + e.imageId}
                alt=""
                className="rounded-lg w-48 h-56  border border-red-300 hover:cursor-pointer"
                key={e?.id}
                onClick={() =>
                  navigate(
                    "/Food-Villa/foodItemRestaurantCollection/" +
                      e?.entityId.slice(
                        e?.entityId?.indexOf("=") + 1,
                        e?.entityId?.indexOf("&") === -1
                          ? e?.entityId
                          : e?.entityId?.indexOf("&")
                      )
                  )
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodType;
