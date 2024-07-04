import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const Layout = ({ children, description, title, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "100%" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Host-Engine",
  description: "website hosting project",
  keywords:
    "mern , react, node, mongodb, docker, kafka, redis, clickhouse, aws",
  author: "Abhiraj",
};

export default Layout;
