import React from 'react';

export default function Jumbotron() {
  return(
    <main className='h-screen bg-cstm-green md:pt-20 h-[80%] bg-cover bg-center' style={{ backgroundImage:`url(/bg-shapes.png)` }}>
        <div className='w-11/12 m-auto py-16'>
        <div className='w-full flex flex-col gap-y-8 md:flex-row justify-between items-center'>
            <div className='w-full flex flex-col justify-start items-start gap-y-4 font-matter md:w-[45%] md:gap-y-8'>
                <span className='text-sm rounded text-reeddilemon font-medium py-2 px-2' style={{ boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px`, background: `linear-gradient(112.47deg, #F8FCFA -17.2%, rgba(206, 236, 222, 0) 114.3%)`}}>Reeddi capsule</span>
                <h1 className='text-3xl font-bold leading-tight md:text-3xl max-w-[550px] lg:text-4xl'>Our Local Ambassadors drive our Innovation Adoption.</h1>
                <p className='text-md max-w-[450px] md:text-sm lg:text-base'>
                    Our ambassadors are individual entrepreneurs, traders, and SMEs operating in our target markets.
                </p>
                <button className='text-xs font-medium py-2 px-4 rounded bg-cstm-green text-[#fff] border-2 border-cstm-green ease-in duration-300 hover:bg-transparent hover:text-cstm-green'>Become an ambassador</button>
            </div>

            <div className='w-full md:w-[45%]'>
                <img className='w-fit' src='/ambassador/ambassador.png' alt='research' />
            </div>
        </div>
        </div>
    </main>
  );
}
