// import axios from "axios";
import React from "react";

const Banner = async () => {
  // const message = await axios.get('')

  return (
    <>
      <div className="w-full dark:bg-gray-700 text-center dark:text-gray-400">
        <h1 className="lg:p-10 lg:font-bold">
          We're currently facing downtime with our backend system and we are
          working on it & will get back soon !!!
        </h1>
      </div>
    </>
  );
};

export default Banner;
