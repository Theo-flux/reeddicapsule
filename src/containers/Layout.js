import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Navbar, Footer } from "../components";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Reeddi</title>
      </Helmet>

      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
}
