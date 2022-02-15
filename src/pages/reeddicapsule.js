import React from 'react';
import Layout from '../containers/Layout'
import { Contact } from '../components'
import { Jumbotron, Diff, Mobility, Features, Powers } from '../components/ReeddiCapsuleComponents';
import { Cta } from '../components/AmbassadorComponents'
import SupportedBy from '../components/HomeComponents/SupportedBy'

export default function Reeddicapsule() {
  return(
      <Layout>
        <Jumbotron/>
        <SupportedBy/>
        <Diff/>
        <Mobility/>
        <Features/>
        <Powers/>
        <Cta/>
        <Contact/>
      </Layout>
  );
}





