import React from 'react'
import { Link } from 'gatsby'

export default function Cta(){
    return(
        <section className=''>
            <div className='w-11/12 mx-auto my-16 rounded-md overflow-hidden h-auto bg-no-repeat max-w-7xl' style={{ backgroundImage:`url(/ambassador/bg-cta.png)` }}>
                <div className='flex flex-col justify-center items-center md:flex-row justify-around items-center'>

                    <div className='font-matter flex flex-col justify-center items-center gap-y-4 py-4 md:justify-start md:items-start gap-y-8 sm:w-[35%] md:w-[40%] '>
                        <div className='flex flex-col gap-y-2 md:gap-y-4'>
                            <h2 className='font-bold  text-[#fff] text-3xl text-center md:text-left md:text-5xl'>Become a Reeddi Ambassador.</h2>
                            <p className='text-[#fff] text-xs text-center md:text-left md:text-base'>Sign up to be a reeddi ambassador</p>
                        </div>
                        <Link to='./' className='py-2 px-4 w-fit bg-[#fff] text-cstm-green rounded hover:shadow-lg'>sign up</Link>
                    </div>

                    <div className='overflow-hidden min-h-auto sm:w-[60%] md:w-[45%]'>
                        <img className='w-full object-cover' src='/ambassador/models.png' alt='models'/>
                    </div>

                </div>
            </div>
        </section>
    )
}