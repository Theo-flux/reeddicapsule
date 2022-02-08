import React from 'react'
import StepCard from './StepCard'

const steps = [
    {
        id: '1',
        icon: '/ambassador/step1.svg',
        title: '😉 Get Started ',
        subTitle: 'By filling an application form here. This is to show your commitment and get important information about you. '
    },

    {
        id: '2',
        icon: '/ambassador/step2.svg',
        title: '👋 Get Verified ',
        subTitle: 'Wait for your application to be verified. A representative from the Reeddi team will reach out on the status of your application.'
    },

    {
        id: '3',
        icon: '/ambassador/step3.svg',
        title: '🚀 Become an Ambassador',
        subTitle: 'Voila! You are now a Reeddi Ambassador.'
    }
]




export default function Steps(){
    return(
        <section className='bg-cstm-green md:bg-transparent' style={{backgroundImage: `url(/ambassador/bg-steps.png)`}}>
            <div className='w-11/12 mx-auto my-16 max-w-7xl'>
                <div className='flex flex-col gap-y-4 py-8'>
                    <span className='text-sm w-fit rounded text-cstm-green font-medium py-2 px-2' style={{ boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px`, background: `linear-gradient(112.47deg, #F8FCFA -17.2%, rgba(206, 236, 222, 0) 114.3%)`}}>3 simple steps</span>
                    <div className='flex flex-col gap-y-16 sm:flex-row md:flex-row justify-between items-start'>
                        
                        <div className='font-matter flex flex-col gap-y-4 sm:w-[50%] md:w-[40%]'>
                            
                            <h2 className='font-bold text-3xl md:text-4xl'>How to become a Reeddi Ambassador.</h2>
                        </div>

                        <div className='flex flex-col gap-y-8 sm:w-[45%] md:max-w-[40%]'>
                            {
                                steps.map((step) => {
                                    return(
                                        <StepCard key={step.id} step={step} />
                                    )
                                })    
                            }
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}