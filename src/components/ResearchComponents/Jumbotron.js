import React from 'react';
import Tag from '../Tag'

export default function Jumbotron() {
  return(
    <main className='h-screen bg-cstm-green md:pt-20 h-[80%] bg-cover bg-center' style={{ backgroundImage:`url(/bg-shapes.png)` }}>
        <div className='w-11/12 m-auto py-16 max-w-7xl'>
        <div className='w-full flex flex-col gap-y-8 md:flex-row justify-between items-center'>
            <div className='w-full flex flex-col justify-start items-start gap-y-2 font-matter md:w-[45%] md:gap-y-4'>
                <Tag text='Research' />
                <h1 className='text-3xl font-bold leading-tight md:text-3xl max-w-[550px] lg:text-4xl'>Our Top-Notch Research Papers Help Enlighten the World.</h1>
                <p className='text-md max-w-[450px] md:text-sm lg:text-base'>Our research papers are written from the finest depth of thinking and research. 
                    We talk to people, hear their experiences, feel their experiences, look into 
                    the future and then put into writing what we discover.
                </p>
            </div>

            <div className='w-full md:w-[45%]'>
                <img className='w-fit' src='/research.png' alt='research' />
            </div>
        </div>
        </div>
    </main>
  );
}
