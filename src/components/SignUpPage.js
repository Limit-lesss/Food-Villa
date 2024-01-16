import { useFormik, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Bg from "../assets/4874941.jpg";
import { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const [type, setType] = useState("password");
  const [message, setMessage] = useState(true);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (value) => {
      try {
        // Make a POST request to the server
        await axios
          .post("http://localhost:5000/api/data", value)
          .then((message) => {
            if (message === false) {
              setMessage(message.data);
              formik.resetForm();
            } else {
              navigate("/Food-Villa/sign-in");
            }
          });

        // Reset the state or perform other actions on success
      } catch (error) {
        console.error("Error sending data:", error);
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
      <div className="p-10 px-14 w-5/12 rounded-lg  shadow-2xl text-black dark:bg-slate-500 bg-white ">
        <h2 className="text-center font-semibold text-2xl  text-slate-700 dark:text-gray-200">
          Create Account
        </h2>
        <form onSubmit={formik.handleSubmit} className="mt-6 ">
          <button
            className=" py-2 w-full my-3 rounded-md bg-sky-200 hover:bg-sky-300 
            dark:bg-slate-800 hover:dark:bg-slate-700 dark:text-slate-300 font-semibold text-lg text-slate-900"
            type="button">
            Sign Up with Google
          </button>
          <p className="text-center relative before:absolute before:w-44 before:h-px before:bg-slate-400 dark:before:bg-slate-100 before:top-3 before:right-0 after:absolute after:w-44 after:h-px after:bg-slate-400 dark:after:bg-slate-100 after:top-3 after:left-0 my-4 mb-6 text-base font-semibold text-cyan-900 dark:text-slate-200">
            Or
          </p>
          <input
            placeholder="Full Name"
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="border-b border-b-slate-400 py-2 w-full pl-3 mb-3 "
            required
          />
          <input
            placeholder="Email"
            type="text"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="border-b border-b-slate-400 py-2 w-full pl-3 mb-3 "
            required
          />
          <div className="relative">
            <input
              placeholder="Password"
              type={type}
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="border-b border-b-slate-400 py-2 w-full pl-3 "
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
          {!message && (
            <p className="text-red-700 my-5 font-medium">
              *Email already exist
            </p>
          )}
          <button
            type="submit"
            className={
              message
                ? "py-2 w-full mt-10 rounded-md mb-6 bg-sky-200 hover:bg-sky-300  dark:text-slate-200 dark:bg-slate-800 hover:dark:bg-slate-700 font-semibold text-lg"
                : "py-2 w-full mt-0 rounded-md mb-6 bg-sky-200 hover:bg-sky-300  dark:text-slate-200 dark:bg-slate-800 hover:dark:bg-slate-700 font-semibold text-lg"
            }>
            Create Account
          </button>

          <p className="text-center text-lg">
            Already have an account ?{" "}
            <Link to={"/Food-Villa/sign-in"}>
              <span className="text-sky-500">Login</span>
            </Link>
          </p>
        </form>
      </div>
      <div className="mr-16 ">
        <img src={Bg} />
      </div>
    </div>
  );
};
export default SignUpPage;
