import { useFormik, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Bg from "../assets/4874940.jpg";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../utils/loginSlice";

const SignInPage = () => {
  const [type, setType] = useState("password");
  const [message, setMessage] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (value) => {
      try {
        // Make a POST request to the login endpoint
        const data = await axios.post("http://localhost:5000/api/login", {
          email: value.email,
          password: value.password,
        });
        if (data?.data) {
          dispatch(toggleLogin(true));
          navigate("/Food-Villa");
        } else {
          setMessage(false);
          formik.resetForm();
        }
      } catch (error) {
        setMessage(false);
        formik.resetForm();
      }
    },
  });
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <div className="flex justify-between items-center p-20 pt-32 h-screen dark:bg-slate-800 bg-rose-100">
      <div className="p-10 px-14 w-5/12 rounded-lg  shadow-2xl text-black dark:bg-slate-500 bg-white">
        <h2 className="text-center font-semibold text-2xl  text-slate-700 dark:text-gray-200">
          Welcome Back
        </h2>
        <form onSubmit={formik.handleSubmit} className="mt-6 ">
          <button
            className=" py-2 w-full my-2 rounded-md bg-sky-200 hover:bg-sky-300 
            dark:bg-slate-800 hover:dark:bg-slate-700 dark:text-slate-300 font-semibold text-lg text-slate-900"
            type="button">
            Login with Google
          </button>
          <p className="text-center relative before:absolute before:w-24 before:h-px before:bg-slate-400 dark:before:bg-slate-100 before:top-3 before:right-0 after:absolute after:w-24 after:h-px after:bg-slate-400 dark:after:bg-slate-100 after:top-3 after:left-0 my-4 mb-6 text-base font-semibold text-cyan-900 dark:text-slate-200">
            Or use your email password
          </p>
          {/* <label
            htmlFor="username"
            className="block py-0 text-lg font-medium dark:text-slate-50 ">
            Email
          </label> */}
          <input
            placeholder="Email"
            type="text"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="block border py-2 w-full pl-3 rounded-md placeholder:text-slate-400 placeholder:italic my-6 mt-8"
            required
          />
          {/* <label
            htmlFor="password"
            className="block py-0 mt-3 text-lg font-medium dark:text-slate-100">
            Password
          </label> */}
          <div className="relative">
            <input
              placeholder="Password"
              type={type}
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="block border py-2 w-full pl-3 rounded-md placeholder:text-slate-400 placeholder:italic my-6 mt-8"
              required
            />
            <img
              width="16"
              src={
                type === "password"
                  ? "https://img.icons8.com/ios-glyphs/30/hide.png"
                  : "https://img.icons8.com/ios-glyphs/30/visible--v1.png"
              }
              alt="hide"
              className="absolute right-3 bottom-3 cursor-pointer"
              onClick={handleToggle}
            />
          </div>
          <div className="flex justify-between items-center my-4">
            <label
              id="checkbox"
              className="cursor-pointer text-lg dark:text-slate-200">
              <input
                type="checkbox"
                name="toggle"
                className="h-4 w-4 rounded-full shadow-md  dark:shadow-slate-700 mr-1.5"
              />
              Remember me
            </label>
            <Link>
              <span className="text-purple-950 text-base dark:text-slate-800  pb-1 font-semibold relative after:absolute after:w-0 after:h-px after:bg-black after:bottom-0 after:left-0 hover:after:w-32 after:transition-all after:duration-500">
                Forgot Password?
              </span>
            </Link>
          </div>
          {!message && (
            <p className="text-red-700 my-5 font-medium">
              *Email or Password is incorrect
            </p>
          )}
          <button
            type="submit"
            className={
              message
                ? " py-2 w-full my-4 rounded-md  bg-sky-200 hover:bg-sky-300  dark:text-slate-200 dark:bg-slate-800 hover:dark:bg-slate-700 font-semibold text-lg"
                : " py-2 w-full rounded-md  bg-sky-200 hover:bg-sky-300  dark:text-slate-200 dark:bg-slate-800 hover:dark:bg-slate-700 font-semibold text-lg"
            }>
            Login
          </button>
        </form>
      </div>
      <div className="mr-16 ">
        <img src={Bg} />
      </div>
    </div>
  );
};
export default SignInPage;
