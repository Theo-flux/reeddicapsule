import React from 'react';
import { Newsletter, Contact } from '../components'
import { ReeddiGoals, Jumbotron, Awards, Info } from '../components/ImpactAndAwards';
import Layout from '../containers/Layout'

export default function ImpactAndAwards() {
  return(
      <Layout>
        <Jumbotron/>
        <Info/>
        <ReeddiGoals/>
        <Awards/>
        <Newsletter/>
        <Contact/>
      </Layout>
  );
}



