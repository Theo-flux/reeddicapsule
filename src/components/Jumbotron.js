import React from 'react';
import Tag from './Tag';

export default function Jumbotron({btn, title, subTitle}) {
  return(
    <main className='h-screen md:pt-20 md:h-[80%] bg-cover bg-center' style={{ backgroundImage:`url(/terms/bg-terms.svg)` }}>
      <div className='w-11/12 m-auto py-16 max-w-7xl'>
        <div className='w-full font-matter flex flex-col justify-center items-center gap-y-2 md:gap-y-4'>
            <Tag text={ btn } />
            <h1 className='text-3xl font-bold text-center leading-tight md:text-3xl max-w-[650px] lg:text-4xl'>{title}</h1>
            <p className='text-md max-w-[450px] md:text-sm lg:text-base'>{subTitle}</p>
        </div>
      </div>
    </main>
  );
}