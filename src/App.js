import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
//! default export :- you don't need to use curly braces {} around the import statement. Instead, you can give it any name you want during the import, making it more convenient to use.
// import Title from './components/Header';

// named export :- we have to use "{ component_name }", You need to wrap the items you want to import in curly braces {} and use the exact names you used during the export.
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import SignInPage from "./components/SignInPage";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/ShimmerEffect";
import useOnline from "./utils/useOnline";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import { Provider, useDispatch } from "react-redux";
import store from "./utils/store";
import SearchPage from "./components/SearchPage";
import RestaurantCollection from "./components/RestaurantCollection";
import FoodItemResCol from "./components/FoodItemResCol";

// let uuid = self.crypto.randomUUID();
// console.log(uuid);
const Instamart = lazy(() => import("./components/Instamart"));

function AppLayout() {
  const online = useOnline();
  const mode = useTheme();
  const [user, setUser] = useState({
    name: "Genius",
    email: "genius@gmail.com",
  });
  // useEffect(() => {
  //   dispatch(toggleCart(true))
  // }, []);
  return (
    <div
      style={
        !online
          ? { filter: "grayscale(100%)", pointerEvents: "none", cursor: "none" }
          : {}
      }
      className={mode.darkMode ? "dark" : ""}>
      {/* //! ScrollRestoration */}
      {/* <UserContext.Provider value={{ user: user }}> */}

      <Provider store={store}>
        <ScrollRestoration
          getKey={(location) => {
            return location.pathname;
          }}
        />
        <Header />
        <Outlet />
        <Footer />
      </Provider>

      {/* </UserContext.Provider> */}
    </div>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/Food-Villa",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/Food-Villa",
        element: <Body />,
      },
      {
        path: "/Food-Villa/SearchPage",
        element: <SearchPage />,
      },
      {
        path: "/Food-Villa/contact",
        element: <Contact />,
      },
      {
        path: "/Food-Villa/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/Food-Villa/login",
        element: <SignInPage />,
      },
      {
        path: "/Food-Villa/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/Food-Villa/cart",
        element: <Cart />,
      },
      {
        path: "/Food-Villa/restaurantCollection/:entityId",
        element: <RestaurantCollection />,
      },
      {
        path: "/Food-Villa/foodItemRestaurantCollection/:entityId",
        element: <FoodItemResCol />,
      },
    ],
  },
]);

export default AppLayout;
