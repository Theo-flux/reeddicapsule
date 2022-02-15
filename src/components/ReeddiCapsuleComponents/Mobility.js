import React from 'react'

export default function Mobility(){
    return(
        <section className=''>
            <div className='w-11/12 m-auto py-16 max-w-7xl'>
                <div className='flex flex-col justify-center items-center gap-y-16 md:flex-row justify-between items-center gap-x-16'>
                    <div className='font-matter flex flex-col gap-y-4 max-w-[450px]'>
                        <h3 className='text-left text-3xl font-bold md:text-4xl lg:text-5xl'>Built for Mobilty</h3>
                        <p className='text-left text-cstm-grey text-sm'>Due to its portability, it's easy to throw into minibags and carry anywhere without having to worry.</p>
                    </div>

                    <div className='w-full md:w-[40%]'>
                        <img className='w-full' src='/reeddicapsule/mobility.png' alt='mobility'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
