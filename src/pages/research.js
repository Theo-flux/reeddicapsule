import React from 'react';
import { Contact, Newsletter } from '../components';
import { Jumbotron, Magazine, ResearchPapers } from '../components/ResearchComponents';
import Layout from '../containers/Layout'

export default function ResearchPage() {
  return(
      <Layout>
          <Jumbotron/>
          <Magazine/>
          <ResearchPapers/>
          <Newsletter/>
          <Contact/>
      </Layout>
  );
}
