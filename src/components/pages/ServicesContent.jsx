import React from "react";
import Layout from "./../layout/Layout";
const ServicesContent = () => {
  return (
    <Layout title={'Services by Host-Engine'}>
      <main className="flex-1 bg-gray-900 text-white pt-40 p-20 text-center">
      <div className="w-full bg-gray-700 text-center text-gray-400">
        <h1 className="lg:p-10 lg:font-bold">
          We're currently facing downtime with our backend system and we are
          working on it & will get back soon !!!
        </h1>
      </div>
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-lg mb-4">
          We offer a range of cloud hosting services designed to meet the needs
          of businesses of all sizes.
        </p>
        <div className="list-disc grid lg:grid-cols-2 lg:gap-3 list-inside">
          <div className="mb-2 p-4 bg-gray-700 text-white rounded-lg shadow-lg">
            <span className="font-bold">High-Speed Servers:</span> Enjoy fast
            and reliable performance.
          </div>
          <div className="mb-2 p-4 bg-gray-700 text-white rounded-lg shadow-lg">
            <span className="font-bold">Scalability:</span> Easily scale your
            resources up or down as needed.
          </div>
          <div className="mb-2 p-4 bg-gray-700 text-white rounded-lg shadow-lg">
            <span className="font-bold">Robust Security:</span> Protect your
            data with advanced security measures.
          </div>
          <div className="mb-2 p-4 bg-gray-700 text-white rounded-lg shadow-lg">
            <span className="font-bold">24/7 Support:</span> Get help whenever
            you need it with our round-the-clock support team.
          </div>
          <div className="mb-2 p-4 bg-gray-700 text-white rounded-lg shadow-lg">
            <span className="font-bold">Free For Beginners</span> 
            We want to make sure more and more developers come ahead and experience the hosting and experiment
          </div>
          <div className="mb-2 p-4 bg-gray-700 text-white rounded-lg shadow-lg">
            <span className="font-bold">Ad Based Free Model</span> 
            We use an Ad based model so that we could give access of our resources to the beginners
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ServicesContent;
