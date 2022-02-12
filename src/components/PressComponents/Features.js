import React from 'react';
import ArticleCard from './ArticleCard';
import { features } from '../../utils/constants'

export default function Features(){
  return(
      <section>
        <div className='w-11/12 mx-auto my-16 flex flex-col gap-y-16 max-w-7xl'>
          <div className='grid auto-cols-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 gap-8'>
            {
              features.map((feature) => {
                return(
                  <ArticleCard key={feature.id} feature={feature} />
                )
              })
            }
          </div>
        </div>
      </section>
  );
}
