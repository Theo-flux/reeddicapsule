import React from "react";
import ClimateTech from "../components/HomeComponents/ClimateTech";
import Hero from "../components/HomeComponents/Hero";
import SupportedBy from "../components/HomeComponents/SupportedBy";
import Layout from "../containers/Layout"

export default function Home(){
  return(
    <Layout>
      {/* <Hero /> */}
      <SupportedBy />
      <ClimateTech />
    </Layout>
  )
}
