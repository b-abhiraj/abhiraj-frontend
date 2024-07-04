import React from "react";
import Layout from "../layout/Layout";

const Contact = () => {
  return (
    <Layout title={"Get in touch with us !!!"}>
      <main className=" text-white flex-1 p-20 bg-gray-900">
        <div className="w-full bg-gray-700 text-center text-gray-400">
          <h1 className="lg:p-10 lg:font-bold">
            We're currently facing downtime with our backend system and we are
            working on it & will get back soon !!!
          </h1>
        </div>
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">
          If you have any questions or need support, feel free to reach out to
          us. We're here to help you succeed.
        </p>
        <form className="mt-4 text-black">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              className="w-64 px-3 py-2 border rounded"
              placeholder="Name:"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Email:"
              type="email"
              name="email"
              className="w-64 px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message:"
              name="message"
              className="w-64 px-3 py-2 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </main>
    </Layout>
  );
};

export default Contact;
