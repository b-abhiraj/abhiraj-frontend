import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="bg-gray-900 pt-40 lg:p-20">
      <div className="w-full bg-gray-700 text-center text-gray-400">
        <h1 className="lg:p-10 lg:font-bold">We're currently facing downtime with our backend system and we are working on it & will get back soon !!!</h1>
      </div>
        <main className="flex-1 p-4 lg:p-10 ">
          <div className="">
            <section id="features" className="mb-8 lg:space-y-8">
              <h2 className="sm:text-lg lg:text-8xl md:text-5xl font-Kanit md:font-extrabold pb-6 text-center text-white lg:py-20  ">
                Unleash the Power of the Cloud!
              </h2>
              <div className=" text-center">
                <button
                  onClick={() => navigate("/register")}
                  className="text-center bg-gray-800 p-4 px-8 rounded-xl hover:bg-[#1949d2] hover:border-gray-400 hover:border-4 hover:border-spacing-5 border-4 border-[#1949d2]  text-white"
                >
                  Get Started
                </button>
              </div>
              <p className="font-Roboto text-white text-lg  text-center pt-5">
                Explore the powerful features of our cloud hosting platform,
                including high-speed servers , easy scalability, and robust
                security measures.
              </p>
              <p className="mt-2 text-lg text-white font-Roboto text-center pt-5">
                Our platform is designed to meet all your needs, whether you're
                a small business or a large enterprise.Experience the future of
                hosting today!
              </p>
            </section>
          </div>
          <section id="pricing" className="mb-8 pt-16">
            <div className="border border-rose-500 shadow-rose-500 shadow-lg">
              <h2 className="text-3xl mb-2 text-white font-Roboto_mono text-center p-10">
                Choose Your Perfect Plan
              </h2>
              <div className="flex flex-wrap justify-around mt-4">
                <div className=" text-gray-300 bg-primary p-6 rounded-lg shadow-lg w-80 text-center mb-4">
                  <h3 className="text-4xl font-semibold">Free Tier</h3>
                  <ul className="list-disc list-inside mt-4 mb-6 text-left font-bold text-xl">
                    <li>1GB Storage</li>
                    <li>1TB Bandwidth</li>
                    <li>Community Support</li>
                  </ul>
                  <button className="bg-indigo-500 py-2 px-4 text-gray-300  rounded hover:bg-indigo-600">
                    $0 /month
                  </button>
                  <p className="mt-2 text-sm  text-gray-300">
                    Enjoy our services for free with ads.
                  </p>
                </div>
                <div className="p-6 text-gray-300 bg-primary rounded-lg shadow-lg w-80 text-center mb-4">
                  <h3 className="text-4xl font-semibold">Premium Tier</h3>
                  <ul className="list-disc list-inside font-bold text-xl mt-4 mb-6 text-left">
                    <li>100GB Storage</li>
                    <li>Unlimited Bandwidth</li>
                    <li>24/7 Support</li>
                  </ul>
                  <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
                    Coming Soon!
                  </button>
                  <p className="mt-2 text-sm text-gray-300">
                    Upgrade for an ad-free experience and premium support.
                  </p>
                </div>
                <div className="p-6 text-gray-300 bg-primary rounded-lg shadow-lg w-80 text-center mb-4">
                  <h3 className="text-4xl font-semibold">Enterprise Tier</h3>
                  <ul className="list-disc list-inside font-bold text-xl mt-4 mb-6 text-left">
                    <li>Unlimited Storage</li>
                    <li>Unlimited Bandwidth</li>
                    <li>24/7 Support</li>
                  </ul>
                  <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
                    Coming Soon!
                  </button>
                  <p className="mt-2 text-sm text-gray-300">
                    Upgrade for an ad-free experience and premium support.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="">
            <h2 className="text-3xl font-bold mb-2 text-white">
              Get in Touch!
            </h2>
            <p className="text-lg text-white">
              If you have any questions or need support, feel free to reach out
              to us. We're here to help you succeed.
            </p>
            <div className="pt-9 sm:w-full lg: text-center">
              <form className="">
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    className="w-72 px-3 py-2 border rounded bg-gray-900"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    className="w-72 px-3 py-2 border rounded bg-gray-900"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    className="w-72 px-3 py-2 border rounded bg-gray-900"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 w-72 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Send
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default Homepage;
