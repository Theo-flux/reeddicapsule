import React from 'react';

export default function Jumbotron() {
  return(
    <main className='h-screen bg-cstm-green md:pt-20 h-[80%] bg-cover bg-center' style={{ backgroundImage:`url(/bg-shapes.png)` }}>
        <div className='w-11/12 m-auto py-16'>
        <div className='w-full flex flex-col gap-y-8 md:flex-row justify-between items-center'>
            <div className='w-full flex flex-col justify-start items-start gap-y-2 md:w-[45%] md:gap-y-4'>
                <span className='text-sm rounded text-reeddilemon font-medium py-2 px-2' style={{ boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px`, background: `linear-gradient(112.47deg, #F8FCFA -17.2%, rgba(206, 236, 222, 0) 114.3%)`}}>Research</span>
                <h1 className='text-3xl font-medium leading-tight md:text-3xl max-w-[550px] lg:text-5xl'>Our Top-Notch Research Papers Help Enlighten the World.</h1>
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
