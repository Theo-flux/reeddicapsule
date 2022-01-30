import React from 'react';

export default function Signup() {
  return(
      <form className='w-full md:w-96 '>
        <div className='w-full flex flex-col gap-y-8 justify-center items-center md:flex-row justify-start items-start'>
          <input 
            type="email" 
            placeholder="Enter your mail" 
            className='text-sm outline-none py-4 px-4 w-full rounded md:w-64 text-xs rounded-none'
            style={{ boxShadow: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`}}

          />
          <button className='bg-cstm-green text-[#fff] text-sm py-4 font-medium w-full rounded md:w-[40%] text-xs py-4 px-8 md:rounded-none'>Sign me up</button>
        </div>
      </form>
    );
}
