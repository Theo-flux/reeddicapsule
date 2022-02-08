import React from 'react';
import Tag from '../Tag';
import Stats from './Stats';

export default function Jumbotron() {
  return(
    <main className='h-screen md:pt-20 h-[80%] bg-cover bg-center' style={{ backgroundImage:`url(/iaa/bg-image.png)` }}>
        <div className='w-11/12 m-auto py-16 max-w-7xl flex flex-col gap-y-16'>
        
        <div className='w-full flex flex-col gap-y-8 md:flex-row-reverse justify-between items-start'>
            <div className='w-full flex flex-col justify-start items-start gap-y-4 font-matter md:w-[45%] md:gap-y-8'>
                <Tag text='Impact' />
                <h1 className='text-3xl font-bold leading-tight md:text-3xl max-w-[550px] lg:text-4xl'>Our impact  is a world-wide felt one.</h1>
                <p className='text-md max-w-[450px] md:text-sm lg:text-base'>
                    Over 1.2 billion people presently live without access to electricity in the world. 
                    Reeddi sustainably provides clean energy at a price point that individuals and 
                    businesses operating in energy poor regions of the world can afford.
                </p>
            </div>

            <div className='w-full md:w-[40%]'>
                <img className='w-fit' src='/iaa/jumbotron-image.png' alt='iaa' />
            </div>
        </div>
        <Stats/>

        </div>
        
    </main>
  );
}
