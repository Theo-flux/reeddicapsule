import React from 'react';
import { Link } from 'gatsby';

export default function Magazine() {
  return(
    <section>
        <div className='w-11/12 m-auto my-16'>
            <div className='bg-cover bg-center rounded-md bg-clip' style={{ backgroundImage:`url(/bg-magazine.png)` }}>
                <div className='flex flex-col-reverse gap-y-8 md:flex-row py-4 justify-center items-center gap-x-8'>
                    <div className=''>
                        <img src='/magazine.png' alt='magazine' />
                    </div>

                    <div className='max-w-[450px] w-[80%]  flex flex-col gap-y-4 justify-center items-center md:gap-y-8 md:justify-start md:items-start'>
                        <p className='text-2xl text-center font-medium text-[#fff] md:text-3xl md:text-left'>Awarded TIME Magazine Best Invention of the Year 2021.</p>
                        <Link to='./' className='text-sm text-[#fff]'>Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
