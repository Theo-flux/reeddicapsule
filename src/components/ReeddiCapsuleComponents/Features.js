import React from 'react'

const featuresMap = [
    {
        id: '1',
        icon: '/reeddicapsule/battery.png',
        title: 'Lasts up to 24 hours',
        subtitle: 'We believe in quality over quantity and this guides us. We believe in quality over quantity and this guides us.'
    },

    {
        id: '2',
        icon: '/reeddicapsule/power.png',
        title: 'Powers multiple Devices',
        subtitle: 'We believe in quality over quantity and this guides us. We believe in quality over quantity and this guides us.'
    },

    {
        id: '3',
        icon: '/reeddicapsule/protection.png',
        title: 'Maximum protection',
        subtitle: 'We believe in quality over quantity and this guides us. We believe in quality over quantity and this guides us.'
    },

    {
        id: '4',
        icon: '/reeddicapsule/weight.png',
        title: 'Super light weight',
        subtitle: 'We believe in quality over quantity and this guides us. We believe in quality over quantity and this guides us.'
    },

    {
        id: '5',
        icon: '/reeddicapsule/warranty.png',
        title: '12 months warranty',
        subtitle: 'We believe in quality over quantity and this guides us. We believe in quality over quantity and this guides us.'
    }
]


function FeatureCard({ feature }){

    const {icon, title, subtitle } = feature
    
    return(
        <div className='flex justify-between items-start gap-x-4'>
            <img src={icon} alt='icon'/>
            <div className='flex flex-col gap-y-2'>
                <h4 className='font-bold text-lg'>{ title }</h4>
                <p className='text-sm text-cstm-grey'>{ subtitle }</p>
            </div>
        </div>
    )
}

export default function Features(){
    return(
        <section className=''>
            <div className='w-11/12 m-auto py-16 max-w-7xl'>
                <div className='flex flex-col gap-y-8 md:flex-row justify-between items-start gap-x-16'>
                    <div className='w-full md:w-[40%]'>
                        <img src='/reeddicapsule/capsule-features.png' alt='capsule-features'/>
                    </div>

                    <div className='font-matter w-full flex flex-col gap-y-8 md:w-[40%]'>
                        <div className='flex flex-col gap-y-4'>
                            <small className='text-cstm-green text-sm'>Features</small>
                            <h3 className='text-3xl font-bold md:text-4xl lg:text-5xl'>Power in your hands</h3>
                        </div>

                        <div className='flex flex-col gap-y-8'>
                            {featuresMap.map((feature) => {
                                return(
                                    <FeatureCard key={feature.id} feature={feature}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

