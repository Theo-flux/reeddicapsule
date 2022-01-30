import React from 'react';
import { Newsletter, Jumbotron } from '../components';
import { Features } from '../components/PressComponents';
import Layout from '../containers/Layout'

export default function Press() {
  return(
      <Layout>
          <Jumbotron 
            btn='Press' 
            title='Featured On Some of the Biggest Names Out There' 
            subTitle='Read some of our features.'
          />
          <Features/>
          <Newsletter/>
      </Layout>
  );
}