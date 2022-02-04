import React from 'react';
import { Newsletter, Jumbotron } from '../components';
import { Terms } from '../components/TermsOfUse';
import Layout from '../containers/Layout'

export default function Termsofuse() {
  return(
      <Layout>
          <Jumbotron btn='Terms' title='Terms of Use' subTitle='Here are the terms of use for Reeddi'/>
          <Terms/>
          <Newsletter/>
      </Layout>
  );
}


