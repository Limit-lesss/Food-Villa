import useRestaurant from "../utils/useRestaurant";
import Carousel from "./Carousel";
import CarouselShimmer from "./CarouselShimmer";

const Contact = () => {
    const [,,,carousel]= useRestaurant();
    return(
        <div className="py-32 px-32">
            <Carousel carousel={carousel}/>
        </div>
    );
}
export default Contact ;