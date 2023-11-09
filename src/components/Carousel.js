import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "../utils/constants";
import arrow_left from "../assets/icons8-arrow-60-left.png";
import arrow_right from "../assets/icons8-arrow-60-right.png";
import arrow_left_disable from "../assets/icons8-arrow-60-left-disable.png";
import arrow_right_disable from "../assets/icons8-arrow-60-right-disable.png";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Carousel = ({ carousel }) => {
  const [arrowDisable, setArrowDisable] = useState(true);
  const [rightArrowDisable, setRightArrowDisable] = useState(false);
  const elementRef = useRef(null);
  function handleHorizantalScroll(element, speed, distance, step) {
    let scrollAmount = 0;
    const sliderId = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(sliderId);
      }
      if (element.scrollLeft + element.clientWidth == element.clientWidth) {
        setArrowDisable(true);
      } else if (
        element.scrollLeft + element.clientWidth ==
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
    <div
      className="mt-10
    ">
      <div className="flex justify-between mr-5">
        <p className="text-3xl font-bold dark:text-slate-200 text-slate-700">
          Best offer for you
        </p>
        <div>
          <button
            disabled={arrowDisable}
            onClick={(e) =>
              handleHorizantalScroll(elementRef.current, 10, 480, -40)
            }
            className="border p-1.5 rounded-full border-slate-400 bg-gray-100 mx-2">
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
            className="border p-1.5 rounded-full border-slate-400 bg-gray-100">
            <img
              src={rightArrowDisable ? arrow_right_disable : arrow_right}
              alt=""
              className="w-6"
            />
          </button>
        </div>
      </div>
      <div className="flex mt-3 overflow-hidden w-full" ref={elementRef}>
        {carousel?.map((e) => (
          <Link  to={"/restaurant/" + e?.entityId} key={e?.id}>
            <div className="w-96 mr-5">
              <img src={IMG_CDN_URL + e?.imageId} className=" w-96 h-60" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
