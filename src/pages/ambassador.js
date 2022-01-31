import React from 'react';
import { Newsletter } from '../components';
import { Jumbotron } from '../components/AmbassadorComponents'
import Layout from '../containers/Layout'

export default function Ambassador() {
  return(
      <Layout>
        <Jumbotron/>
        <Newsletter/>
      </Layout>
  );
}
