import React from 'react';
import '../assets/css/reeddi.css'

export default function Footer() {

  return(
    <footer className='px-4 py-12 md:px-8'>
      <div className='flex flex-col flex-wrap gap-10 md:flex-row gap-x-28'>
        
        <div className='bg-white flex flex-col gap-y-4 max-w-[350px] lg:gap-y-4'>
          <div>
            <img src='/Reeddi.png' alt='reeddi' />
          </div>

          <div className='flex flex-col gap-y-8'>
            <p className='text-sm text-reeddigrey'>
              Earth is the third planet from the Sun and the only astronomical object known to harbor life. 
              According to radiometric.
            </p>

            <div className='text-sm text-reeddigrey'>
              <p className='m-b-2'><b>Email us:</b> hello@reeddi.com </p>
              <p ><b>Investment relations:</b> investment@reeddi.com</p>
            </div>
          </div>

        </div>

        <div className='flex flex-col gap-y-4 min-w-fit'>
          <p><b>Products</b></p>
          <div className='text-sm text-reeddigrey '>
            <p>Reeddi capsule</p>
            <p>TempOwn</p>
          </div>
        </div>

        <div className='flex flex-col gap-y-4 min-w-fit'>
          <p><b>The Company</b></p>
          <div className='text-sm text-reeddigrey '>
            <p>About</p>
            <p>Awards & Impact</p>
          </div>
        </div>

        <div className='flex flex-col gap-y-4 min-w-fit'>
          <p><b>Learn</b></p>
          <div className='text-sm text-reeddigrey '>
            <p>How it works</p>
            <p>Research</p>
          </div>
        </div>

        <div className='flex flex-col gap-y-4 min-w-fit'>
          <p><b>Contact</b></p>

          <div className='flex flex-col gap-y-8'>
            <div className='text-sm  '>
              <p className='text-black'><b>&#127464; Toronto, Canada.</b></p>
              <p className='text-reeddigrey'>100 College St Suite 150</p>
              <p className='text-reeddigrey'>Toronto, ON M5G 1L5 Canada.</p>
              <p className='text-reeddigrey'>Tel: +16474554327</p>
            </div>

            <div className='text-sm'>
              <p className='text-black'><b>🇳🇬 Lagos, Nigeria.</b></p>
              <p className='text-reeddigrey'>Shell Workspace,</p>
              <p className='text-reeddigrey'>44 Bourdillon Road, Ikoyi, Lagos.</p>
              <p className='text-reeddigrey'>Tel: +2348122888967</p>
            </div>
          </div>
        </div>

      </div>

    </footer>
  );
}