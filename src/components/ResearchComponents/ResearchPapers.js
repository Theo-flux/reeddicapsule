import React from 'react';
import Cards from './Cards';
import { papers } from './papers';

export default function researchPapers() {
  return( 
      <section className='bg-[#fff]'>
        <div className='w-11/12 mx-auto my-16 flex flex-col gap-y-16'>
          
        <div className='flex flex-col justify-start font-matter items-start gap-y-4'>
          <h1 className='text-3xl text-center font-bold  md:text-4xl md:text-left'>Our Top Research Papers</h1>
          <p className='text-cstm-grey text-center text-base md:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis egestas.</p>
        </div>
        
        <div className='w-full flex flex-col gap-y-24'>
          {papers.map((paper) => {
            return(
              <Cards key={paper.id} paper={paper}/>
            )
          })}
        </div>
        
        </div>
      </section>
    );
}
