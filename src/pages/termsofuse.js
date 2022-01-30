import React from 'react';
import { Newsletter } from '../components';
import { Jumbotron, Terms } from '../components/TermsOfUse';
import Layout from '../containers/Layout'

export default function termsofuse() {
  return(
      <Layout>
          <Jumbotron/>
          <Terms/>
          <Newsletter/>
      </Layout>
  );
}
