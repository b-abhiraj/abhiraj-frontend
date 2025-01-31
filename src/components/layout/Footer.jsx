import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full shadow bg-gray-900">
        <div className="md:py-8 mx-auto p-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://cdn-icons-png.freepik.com/256/1067/1067357.png?semt=ais_hybrid"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Host-Engine.in
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 text-gray-400">
              <li>
                <a href="/about" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="/policy" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center text-gray-400">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Host-Engine.in™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
