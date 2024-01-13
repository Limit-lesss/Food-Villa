import useRestaurant from "../utils/useRestaurant";
import { CAROUSEL_IMG_CDN_URL } from "../utils/constants";
import arrow_left from "../assets/icons8-arrow-60-left.png";
import arrow_right from "../assets/icons8-arrow-60-right.png";
import arrow_left_disable from "../assets/icons8-arrow-60-left-disable.png";
import arrow_right_disable from "../assets/icons8-arrow-60-right-disable.png";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Carousel = ({ carousel }) => {
  const [leftArrowDisable, setLeftArrowDisable] = useState(true);
  const [rightArrowDisable, setRightArrowDisable] = useState(false);
  const elementRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleElementScroll = () => {
      if (
        elementRef.current.scrollLeft + elementRef.current.clientWidth ===
        elementRef.current.clientWidth
      ) {
        setLeftArrowDisable(true);
      } else if (
        elementRef.current.scrollLeft + elementRef.current.clientWidth ===
        elementRef.current.scrollWidth
      ) {
        setRightArrowDisable(true);
      } else {
        setLeftArrowDisable(false);
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
    const sliderId = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(sliderId);
      }
      if (element.scrollLeft + element.clientWidth === element.clientWidth) {
        setLeftArrowDisable(true);
      } else if (
        element.scrollLeft + element.clientWidth ===
        element.scrollWidth
      ) {
        setRightArrowDisable(true);
      } else {
        setLeftArrowDisable(false);
        setRightArrowDisable(false);
      }
    }, speed);
  }

  return (
    <div
      className="mt-10
    ">
      <div className="flex justify-between mr-5">
        <p className="text-3xl font-bold dark:text-slate-200 text-slate-700">
          Best offer for you
        </p>
        <div>
          <button
            disabled={leftArrowDisable}
            onClick={(e) =>
              handleHorizantalScroll(elementRef.current, 10, 480, -40)
            }
            className=" p-1.5 rounded-full  bg-white  mx-2">
            <img
              src={leftArrowDisable ? arrow_left_disable : arrow_left}
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
        className="flex mt-3 overflow-x-scroll no-scrollbar w-full"
        ref={elementRef}>
        {carousel?.map((e) => (
          <div
            onClick={() =>
              navigate(
                "/Food-Villa/restaurantCollection/" +
                  e?.entityId.slice(e?.entityId?.indexOf("=") + 1)
              )
            }
            key={e?.entityId}>
            <div className="w-96 mr-6 cursor-pointer">
              <img
                src={CAROUSEL_IMG_CDN_URL + e?.imageId}
                className=" w-96 h-60 border-none"
                alt={e?.accessibility?.altText}
                onError={(event) => {
                  event.target.src = `${CAROUSEL_IMG_CDN_URL}rng/md/carousel/production/ea4857fd3ad8869418dfa14a92e7a4fd`;
                  event.onerror = null;
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
