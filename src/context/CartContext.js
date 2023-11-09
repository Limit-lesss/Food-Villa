// import { createContext, useContext, useState } from "react";

// const CartContext = createContext(null);

// export const useCart = () => {
//   return useContext(CartContext);
// };

// export const CartProvider = (props) => {
//   const [count, setCount] = useState(0);
//   const [item, setItem] = useState([]);
//   const [addedFood, setAddedFood] = useState([]);
//   const [purchasedItemPrice, setPurchasedItemPrice] = useState(0);
//   const [restaurantId, setRestaurantId] = useState("");
//   return (
//     <CartContext.Provider
//       value={{
//         count,
//         setCount,
//         item,
//         setItem,
//         addedFood,
//         setAddedFood,
//         purchasedItemPrice,
//         setPurchasedItemPrice,
//         restaurantId,
//         setRestaurantId,
//       }}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };
