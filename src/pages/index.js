import React from "react";
import Hero from "../components/HomeComponents/Hero";
import SupportedBy from "../components/HomeComponents/SupportedBy";
import Layout from "../containers/Layout"

function Home(){
  return(
    <Layout>
      <Hero />
      <SupportedBy />
    </Layout>
  )
}

export default Home
