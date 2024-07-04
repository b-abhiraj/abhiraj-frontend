import React from "react";
import Layout from "../layout/Layout";

const PricingContent = () => {
  return (
    <Layout title={"Pricing ? Don't Worry !"}>
      <main className="flex-1 p-8 bg-gray-900 pt-20">
      <div className="w-full dark:bg-gray-700 text-center dark:text-gray-400">
        <h1 className="lg:p-10 lg:font-bold">
          We're currently facing downtime with our backend system and we are
          working on it & will get back soon !!!
        </h1>
      </div>
        <h2 className="text-4xl font-bold text-center mb-8 dark:text-white">
          Only pay for what you use.
        </h2>
        <p className="text-center text-lg mb-8 dark:text-white">
          Pricing scales up and down with your usage. Match cost and value.
        </p>
        <div className="flex flex-wrap justify-around ">
          <PricingCard
            title="Usage Based"
            price=""
            period=""
            description="Only pay for what you use and link value to cost."
            features={["All of Free Forever", "App Environments", "Upgrade"]}
            buttonText="Get Started"
            buttonLink="#"
          />
          <PricingCard
            title="Usage Based"
            price="$3"
            period="/ app environment / month"
            description="Only pay for what you use and link value to cost."
            features={["All of Free Forever", "App Environments", "Upgrade"]}
            buttonText="Coming Soon!"
            buttonLink="#"
          />
          <PricingCard
            title="Team"
            price="$29"
            period="/ team member / month"
            description="Unlock additional developer productivity features."
            features={[
              "Unlimited Apps",
              "Personal, Private & Organization Repositories",
              "Team Management",
            ]}
            buttonText="Coming Soon!"
            buttonLink="#"
          />
          <PricingCard
            title="Enterprise Scale"
            price="Contact Us"
            period=""
            description="Specialized data governance, security, compliance and auditing handled."
            features={[
              "Configurable data retention",
              "Log drains",
              "Multi-region Active-Active",
              "BYO Cloud Account",
            ]}
            buttonText="Coming Soon!"
            buttonLink="#"
          />
        </div>
      </main>
    </Layout>
  );
};

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 text-center mb-4  dark:text-white hover:border hover:border-white">
      <h3 className="text-2xl font-bold">{title}</h3>
      
      <p className="text-4xl font-bold pb-10">
        {price}
        <span className="text-lg">{period}</span>
      </p>
      <a
        href={buttonLink}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        {buttonText}
      </a>
      <p className="text-lg mt-4">{description}</p>
      <ul className="list-disc list-inside mt-4 mb-6 text-left">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default PricingContent;
