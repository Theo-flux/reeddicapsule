import React, { Fragment } from 'react'
import { Link } from 'gatsby'

export default function Research(){
    return(
        <Fragment>
            <main className='h-screen pt-4 pb-10 md:pt-20 h-[80%] bg-cover bg-center' style={{ backgroundImage:`url(/bg-shapes.png)` }}>
                <section className='w-11/12 m-auto flex flex-col gap-y-8 md:flex-row justify-around items-center'>
                    <div className='w-full flex flex-col justify-start items-start gap-y-2 md:w-[45%] md:gap-y-4'>
                        <span className='text-xs rounded text-reeddilemon font-medium py-2 px-2' style={{ boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px`, background: `linear-gradient(112.47deg, #F8FCFA -17.2%, rgba(206, 236, 222, 0) 114.3%)`}}>Research</span>
                        <h1 className='text-3xl font-medium leading-tight md:text-3xl max-w-[550px] lg:text-5xl'>Our Top-Notch Research Papers Help Enlighten the World.</h1>
                        <p className='text-md max-w-[450px] md:text-xs lg:text-base'>Our research papers are written from the finest depth of thinking and research. 
                            We talk to people, hear their experiences, feel their experiences, look into 
                            the future and then put into writing what we discover.
                        </p>
                    </div>

                    <div className='w-full md:w-[40%]'>
                        <img className='w-fit' src='/research.png' alt='research' />
                    </div>
                </section>
            </main>

            <section className='w-11/12 m-auto my-20'>
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
            </section>
        </Fragment>
    )
}

