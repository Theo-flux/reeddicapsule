import React from 'react';
import Tag from '../Tag';
import AwardCard from './AwardCard'


const awards = [
    {
        id: '1',
        company: 'EarthShot Prize',
        date: 'August 2021',
        caption: 'Reeddi wins EarthShot Prize 2021',
        image: '/iaa/earthshot.png'
    },

    {
        id: '2',
        company: 'ASME',
        date: 'August 2021',
        caption: '2020 ASME USA Innovation Showcase',
        image: '/iaa/asme.png'
    },

    {
        id: '3',
        company: 'RBC',
        date: 'August 2021',
        caption: '2020  RBC Prize for Innovation & Entrepreneurship',
        image: '/iaa/rbc.png'
    },

    {
        id: '4',
        company: 'EarthShot Prize',
        date: 'August 2021',
        caption: 'IEEE EBL Global Prize forBest Student Team',
        image: '/iaa/ebl.png'
    },

    {
        id: '5',
        company: 'EarthShot Prize',
        date: 'August 2021',
        caption: '2019 Cisco Global Problem Challenge Winner',
        image: '/iaa/cisco.png'
    },

    {
        id: '6',
        company: 'EarthShot Prize',
        date: 'August 2021',
        caption: '2019 MIT Clean Energy Prize Winner- Energy Delivery Track',
        image: '/iaa/mit.png'
    }
]


export default function Awards() {
  return(
    <section className='bg-[#fff]'>
        <div className='w-11/12 mx-auto my-16 flex flex-col gap-y-16 max-w-7xl'>
        
            <div className='flex flex-col justify-start font-matter items-start gap-y-4'>
                <Tag text='Awards' />
                <h1 className='text-3xl text-center font-bold  md:text-4xl md:text-left'>Some of our awards</h1>
            </div>
            
            <div className='grid auto-cols-fr justify-self-center self-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {awards.map((award) => {
                return(
                    <AwardCard key={award.id} award={award}/>
                )
                })}
            </div>
        
        </div>
    </section>
  );
}
