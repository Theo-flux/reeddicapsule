import React from "react";
import ClimateTech from "../components/HomeComponents/ClimateTech";
import Hero from "../components/HomeComponents/Hero";
import NeverRunOutOfElectricity from "../components/HomeComponents/NeverRunOutOfElectricity";
import RentAnything from "../components/HomeComponents/RentAnything";
import SupportedBy from "../components/HomeComponents/SupportedBy";
import TimeMagComponent from "../components/HomeComponents/TimeMagComponent";
import WorldClassInnovation from "../components/HomeComponents/WorldClassInnovation";
import Layout from "../containers/Layout"

export default function Home(){
  return(
    <Layout>
      <Hero />
      <SupportedBy />
      <ClimateTech />
      <WorldClassInnovation />
      <TimeMagComponent />
      <NeverRunOutOfElectricity />
      <RentAnything />
     </Layout>
  )
}
