import React from 'react';
import Tag from '../Tag'
import { Link } from 'gatsby'


export default function Jumbotron() {
  return(
    <main className='h-screen md:pt-20 h-[80%] bg-cover bg-center' style={{ backgroundImage:`url(/reeddicapsule/Hero.png)` }}>
        <div className='w-11/12 m-auto py-16 max-w-7xl'>
        <div className='w-full m-auto md:w-full lg:w-11/12'>
            <div className='w-full flex flex-col gap-y-8 md:flex-row justify-between items-center'>
                <div className='w-full flex flex-col justify-start items-start gap-y-8 font-matter md:w-[45%] md:gap-y-8'>
                    <Tag text='Reeddi Capsule' />
                    <h1 className='text-3xl font-bold leading-tight md:text-3xl max-w-[550px] lg:text-4xl'>Access clean and reliable electricity. Anytime and Anywhere!</h1>
                    <p className='text-md text-cstm-grey max-w-[450px] md:text-sm lg:text-base'>
                        Reeddi capsule is a clean source of energy that can be used to power different appliances and gadgets such as smartphones, digital cameras, tablets, fans, LED TV, and many more.
                    </p>

                    <div className='flex justify-between items-center w-[250px] font-matter'>
                        <button className='flex justify-between items-center w-[130px] rounded text-base text-[#fff] py-2 px-4 border-2 border-cstm-green bg-cstm-green hover:shadow-lg'>Buy Now <span><img src='/reeddicapsule/white-arrow.png' alt='green-arrow'/></span></button>
                        <button className='flex justify-between items-center w-[100px] rounded text-base text-cstm-green py-2 px-4 border-2 border-cstm-green hover:shadow-lg'>Rent <span><img src='/reeddicapsule/green-arrow.png' alt='green-arrow'/></span></button>
                    </div>

                    <Link className='flex justify-between items-center gap-x-4' to='/'>
                        <img src='/reeddicapsule/play-icon.png' alt='play-button'/> <p className='text-cstm-grey text-xs sm:text-sm hover:text-cstm-green hover:underline'>Watch James Bodunrin talk about the Reeddi capsule</p>
                    </Link>
                </div>

                <div className='w-full md:w-fit'>
                    <img className='w-fit' src='/reeddicapsule/capsule.png' alt='reeddicapsule'/>
                </div>
            </div>
        </div>
        </div>
    </main>
  );
}
