import React from "react";
import Layout from "../layout/Layout";

const About = () => {
  return (
    <Layout title={"About Host Engine"}>
      <div className="bg-gray-100 text-gray-900 min-h-screen dark:bg-gray-900 dark:text-white p-20">
      <div className="w-full dark:bg-gray-700 text-center dark:text-gray-400 ">
        <h1 className="lg:p-10 lg:font-bold">We're currently facing downtime with our backend system and we are working on it & will get back soon !!!</h1>
      </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 dark:text-white ">
              At CloudHost, our mission is to empower developers and businesses
              by providing reliable, scalable, and secure cloud hosting
              solutions. We believe in making advanced cloud technologies
              accessible to everyone, fostering innovation, and driving success.
            </p>
          </section>
          <section className="mb-12 ">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 hover:scale-110 transition-all dark:bg-gray-700 dark:text-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">High Performance</h3>
                <p className="text-gray-700 dark:text-white">
                  Our infrastructure is designed to deliver high performance and
                  reliability, ensuring your applications run smoothly and
                  efficiently.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg hover:scale-110 transition-all dark:bg-gray-700 dark:text-white shadow-lg">
                <h3 className="text-xl font-bold mb-2">Scalability</h3>
                <p className="text-gray-700 dark:text-white ">
                  Easily scale your resources up or down to meet the changing
                  demands of your business without any downtime.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg hover:scale-110 transition-all shadow-lg dark:bg-gray-700 dark:text-white">
                <h3 className="text-xl font-bold mb-2 dark:text-white ">
                  Security
                </h3>
                <p className="text-gray-700 dark:text-white ">
                  Our top-notch security measures ensure that your data is
                  protected and your applications are secure from threats.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg hover:scale-110 transition-all shadow-lg dark:bg-gray-700 dark:text-white">
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-700 dark:text-white ">
                  Our dedicated support team is available 24/7 to assist you
                  with any issues or questions you may have.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg hover:scale-110 transition-all shadow-lg dark:bg-gray-700 dark:text-white">
                <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
                <p className="text-gray-700 dark:text-white ">
                  We offer flexible pricing plans that cater to businesses of
                  all sizes, ensuring you get the best value for your money.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg hover:scale-110 transition-all dark:bg-gray-700 dark:text-white shadow-lg">
                <h3 className="text-xl font-bold mb-2">
                  User-Friendly Interface
                </h3>
                <p className="text-gray-700 dark:text-white ">
                  Our platform is designed with ease of use in mind, allowing
                  you to manage your resources effortlessly.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 dark:text-white p-6 rounded-lg shadow-lg text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">Jane Doe</h3>
                <p className="text-gray-700">CEO</p>
              </div>
              <div className="bg-white p-6 dark:bg-gray-700 dark:text-white rounded-lg shadow-lg text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">John Smith</h3>
                <p className="text-gray-700">CTO</p>
              </div>
              <div className="bg-white p-6  dark:bg-gray-700 dark:text-white rounded-lg shadow-lg text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">Alice Johnson</h3>
                <p className="text-gray-700">COO</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <p className="text-lg dark:text-white  text-gray-700">
              We believe in transparency, integrity, and innovation. Our team is
              dedicated to providing the best possible service and constantly
              improving our platform to meet the evolving needs of our
              customers.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
