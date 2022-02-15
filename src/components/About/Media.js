import React from 'react';
import ArticleCard from '../PressComponents/ArticleCard';
import { media } from './MediaList'

export default function Media(){
  return(
      <section className='bg-[#F7FCFA]'>
        <div className='w-11/12 mx-auto my-16 flex flex-col gap-y-16 max-w-7xl'>

        <div className='flex flex-col justify-center gap-y-8'>

            <div className='font-matter flex flex-col gap-y-4 max-w-[450px]'>
                <h3 className='text-left text-3xl font-bold md:text-4xl lg:text-5xl'>Reeddi in the Media </h3>
                <p className='text-left text-cstm-grey text-sm'>Our shared values keep us connected and guide us as one team.</p>
            </div>
            <div className='grid auto-cols-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 gap-8'>
                {
                media.map((element) => {
                    return(
                    <ArticleCard key={element.id} feature={element} />
                    )
                })
                }
            </div>
        </div>
        </div>
      </section>
  );
}


