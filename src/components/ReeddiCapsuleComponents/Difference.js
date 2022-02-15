import React from 'react'

export default function Diff(){
    return(
        <section className='bg-[#F7FCFA]'>
            <div className='w-11/12 m-auto py-16 max-w-7xl'>
                <div className='flex flex-col justify-center items-center lg: gap-y-16'>
                    <div className='font-matter flex flex-col gap-y-4 max-w-[600px]'>
                        <small className='text-left text-cstm-green text-sm text md:text-center'>The First and Only...</small>
                        <h3 className='text-left text-3xl md:text-center font-bold md:text-4xl lg:text-5xl'>Built for difference</h3>
                        <p className='text-left text-cstm-grey text-sm md:text-center'>Reeddi capsules are manufactured at a high precision level, making them durable, noiseless, portable, environmentally friendly, and long-lasting.</p>
                    </div>

                    <div className='w-full md:w-[60%] self-center'>
                        <img className='w-fit' src='/reeddicapsule/difference.png' alt='difference'/>
                    </div>
                </div>
            </div>
        </section>
    )
}



