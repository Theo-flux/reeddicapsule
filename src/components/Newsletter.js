import React from 'react';
import Signup from './Signup';

export default function Newsletter() {
  return(
      <section style={{ background: `linear-gradient(112.47deg, #F8FCFA -17.2%, rgba(224, 255, 227, 0.02) 114.3%)`}}>
        <div className='w-11/12 mx-auto my-16'>
          <div className='w-full flex flex-col justify-center items-center py-20 gap-y-16 max-w-[700px] mx-auto'>
              <div className='flex flex-col justify-content items-center gap-y-4 font-matter'>
                <h1 className='text-3xl text-center font-bold  md:text-4xl md:text-left'>Sign up for our newsletter</h1>
                <p className='text-cstm-grey text-center text-base md:text-xs'>Be the first to know about releases, industry news and insights.</p>
              </div>

              <Signup/>
          </div>
        </div>
      </section>
  );
}
