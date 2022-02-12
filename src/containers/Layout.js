import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Navbar, Footer } from "../components";

export default function Layout({ children }) {

  return (
    <div className="scroll-smooth">
      <Helmet>
        <title>Reeddi</title>
      </Helmet>

      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
