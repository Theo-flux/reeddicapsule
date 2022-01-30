import React from 'react';
import { Link } from 'gatsby';


export default function Contact() {
  return(
    <section className='w-11/12 m-auto my-20'>
        <div className='bg-cover bg-center rounded-md bg-clip' style={{ backgroundImage:`url(/bg-cta.svg)` }}>
            <div className='flex flex-col gap-y-4 py-4 md:py-20 justify-center items-center gap-y-8'>
                <div className='max-w-[450px] w-[80%]  flex flex-col gap-y-2 justify-center items-center md:gap-y-4'>
                    <p className='text-3xl text-center font-medium text-[#fff] md:text-5xl md:text-left'>Got Any Question?</p>
                    <p className='text-center text-xs text-[#fff] w-4/5 max-w-[350px]'>We are always on standby to answer all your questions. Reach out to us to ask any questions</p>
                </div>
                <Link to='./' className='text-reedditeal bg-[#fff] text-sm font-medium px-1.5 py-2 rounded'>Contact us</Link>
            </div>
        </div>
    </section>
  );
}


