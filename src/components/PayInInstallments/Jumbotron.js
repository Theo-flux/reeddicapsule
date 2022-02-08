import React from 'react';
import { Link } from 'gatsby'
import Tag from '../Tag';

export default function Jumbotron() {
  return(
    <main className='h-screen md:pt-20 h-[80%] bg-cover bg-center'>
      <div className='w-11/12 m-auto py-16 max-w-7xl'>
        <div className='w-full font-matter flex flex-col justify-center items-center gap-y-4 md:gap-y-8'>
            <Tag text='Pay in Installments' />
            <h1 className='text-2xl font-bold text-center leading-tight md:text-3xl max-w-[650px] lg:text-4xl'>Pay in installments through our partners at <span className='text-cstm-green'>Zero%</span> Interest</h1>
            <p className='text-center text-sm max-w-[450px] md:text-sm lg:text-base'>Pay for your Reeddi capsule in installments using these 3 simple step  🚀</p>
            <Link to='./' className='text-xs font-medium py-2.5 px-4 rounded bg-cstm-green text-[#fff] border-2 border-cstm-green ease-in duration-300 hover:bg-transparent hover:text-cstm-green'>Pay now</Link>
        </div>
      </div>
    </main>
  );
}

