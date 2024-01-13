import { useFormik, Field } from "formik";
import { Link } from "react-router-dom";
import Bg from "../assets/ordering-food.png";
const SignInPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      toggle: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="flex justify-between p-20 pt-40 dark:bg-slate-800 bg-rose-100">
      <div className="flex flex-col p-2 px-14 w-5/12 rounded-lg  shadow-2xl text-black dark:bg-slate-500 bg-rose-100">
        <h2 className="text-center font-semibold text-2xl mt-4 text-slate-700 dark:text-gray-200">
          Food is ready for you...
        </h2>
        <form onSubmit={formik.handleSubmit} className="mt-6 ">
          <button
            className=" py-2 w-full my-3 rounded-md bg-sky-200 hover:bg-sky-300 
            dark:bg-slate-800 hover:dark:bg-slate-700 dark:text-slate-300 font-semibold text-lg text-slate-900"
            type="button">
            Login with Google
          </button>
          <p className="text-center relative before:absolute before:w-32 before:h-px before:bg-slate-400 dark:before:bg-slate-100 before:top-3 before:right-0 after:absolute after:w-32 after:h-px after:bg-slate-400 dark:after:bg-slate-100 after:top-3 after:left-0 my-4 mb-6 text-base font-semibold text-cyan-900 dark:text-slate-200">
            Or Login with Email
          </p>
          <label htmlFor="username" className="block py-0 text-lg font-medium dark:text-slate-50 ">
            Username
          </label>
          <input
            placeholder="Username"
            type="text"
            name="username"
            id="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            className="block border py-2 w-full pl-3 rounded-md placeholder:text-slate-400 placeholder:italic"
          />
          <label
            htmlFor="password"
            className="block py-0 mt-3 text-lg font-medium dark:text-slate-100">
            Password
          </label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="block border py-2 w-full rounded-md pl-3 placeholder:text-slate-400 placeholder:italic"
          />
          <div className="flex justify-between items-center my-4">
            <label id="checkbox" className="cursor-pointer text-lg dark:text-slate-200">
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
          <button
            type="submit"
            className=" py-2 w-full my-4 rounded-md mb-8 bg-sky-200 hover:bg-sky-300 
            dark:text-slate-200 dark:bg-slate-800 hover:dark:bg-slate-700 font-semibold text-lg">
            Login
          </button>
        </form>
      </div>
      <div className="mr-20">
        <img src={Bg} className="rounded-3xl pt-4 px-3 dark:bg-gradient-to-r dark:from-slate-300 dark:to-slate-500 bg-gradient-to-r from-rose-200/60 to-rose-300 shadow-2xl" />
      </div>
    </div>
  );
};
export default SignInPage;
