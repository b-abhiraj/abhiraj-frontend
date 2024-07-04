import React, { useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "./../context/auth";
import toast from "react-hot-toast";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [auth, setAuth] = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const res = await axios.post(`login`, {
        email,
        password,
      });
      if (res && res.data.success) {
        // toast.success(res.data.message);
        // setAuth({
        //   ...auth,
        //   user: res.data.user,
        //   token: res.data.token,
        // });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      // toast.error("Something Went Wrong");
    }
  };
  return (
    <Layout title={"Login to Host Engine"}>
      <div className="pt-20">
      </div>
      <div className="w-full dark:bg-gray-700 text-center dark:text-gray-400">
        <h1 className="lg:p-10 lg:font-bold">
          We're currently facing downtime with our backend system and we are
          working on it & will get back soon !!!
        </h1>
      </div>
      <div className="flex flex-col min-h-screen items-center  pt-10 dark:bg-gray-900 justify-center bg-gray-100 text-gray-900">
        <div className="bg-white max-w-[525px] p-8 rounded-lg shadow-lg w-96  dark:bg-gray-800 dark:text-white">
          <div className="mb-3 text-center md:mb-10">
            <a href="/" className="mx-auto inline-block max-w-[160px]">
              <img
                src="https://cdn-icons-png.freepik.com/256/1067/1067357.png?semt=ais_hybrid"
                alt="logo"
                className="h-14"
              />
            </a>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Login to Host-Engine.in
          </h2>
          <form>
            <div className="mb-5">
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
              />
            </div>
            <div className="mb-5">
              <input
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-primary text-white py-2 px-4 rounded w-full hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-500 my-4">or</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white dark:bg-inherit dark:border-hidden border border-gray-300 p-2 rounded-full hover:bg-gray-50">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
                className="w-6 h-6"
              />
            </button>
            <button className="bg-white dark:bg-inherit dark:border-hidden border border-gray-300 p-2 rounded-full hover:bg-gray-50">
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </button>
            <button className="bg-white dark:bg-inherit dark:border-hidden border border-gray-300 p-2 rounded-full hover:bg-gray-50">
              <img
                src="https://img.icons8.com/color/48/000000/twitter.png"
                alt="Twitter"
                className="w-6 h-6"
              />
            </button>
          </div>
          <p className="text-center text-gray-500 mt-4">
            Don't have a account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
