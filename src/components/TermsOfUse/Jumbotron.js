import React from 'react';

export default function Jumbotron() {
  return(
    <main className='h-screen md:pt-20 h-[80%] bg-cover bg-center' style={{ backgroundImage:`url(/terms/bg-terms.svg)` }}>
      <div className='w-11/12 m-auto py-16'>
        <div className='w-full flex flex-col justify-center items-center gap-y-2 md:gap-y-4'>
            <span className='text-sm rounded text-reeddilemon font-medium py-2 px-2' style={{ boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px`, background: `linear-gradient(112.47deg, #F8FCFA -17.2%, rgba(206, 236, 222, 0) 114.3%)`}}>Terms</span>
            <h1 className='text-3xl font-bold leading-tight md:text-3xl max-w-[550px] lg:text-5xl'>Terms of Use</h1>
            <p className='text-md max-w-[450px] md:text-sm lg:text-base'>Here are the terms of use for Reeddi</p>
        </div>
      </div>
    </main>
  );
}

