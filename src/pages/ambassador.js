import React from 'react';
import { Newsletter } from '../components';
import { Jumbotron, Criteria, Cta, Steps } from '../components/AmbassadorComponents'
import Layout from '../containers/Layout'

export default function Ambassador(){
  return(
      <Layout>
        <Jumbotron/>
        <Criteria/>
        <Steps/>
        <Cta/>
        <Newsletter/>
      </Layout>
  );
}




