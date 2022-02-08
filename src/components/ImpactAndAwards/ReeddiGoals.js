import React from 'react';
import GoalCard from './GoalCard';

const goals = [
    {
      id: '1',
      icon: '/iaa/idea-icon.svg',
      title: 'Affordable, Clean Energy',
      subTitle: 'Reeddi’s goal in Africa is to make sustainable energy available and affordable for every African irrespective of income level. ',
      badge: '/iaa/energy.png' 
    },

    {
      id: '2',
      icon: '/iaa/business-icon.svg',
      title: 'Business Creation',
      subTitle: 'Reeddi creates small and medium scale (SMEs) energy-based businesses.',
      badge: '/iaa/business.png' 
    },

    {
      id: '3',
      icon: '/iaa/innovation-icon.svg',
      title: 'Energy-Allied Innovation',
      subTitle: 'Data harvested from the systems will be leveraged to build other energy-allied innovations.',
      badge: '/iaa/innovation.png' 
    },

    {
      id: '4',
      icon: '/iaa/action-icon.svg',
      title: 'Climate Action',
      subTitle: 'A capsule (one of our innovations) can offset 160Kg CO2 from fuel-based energy systems.',
      badge: '/iaa/climate.png' 
    }
]

export default function ReeddiGoals() {
    return(
      <section className='bg-[#F7FCFA]'>
        <div  className='w-11/12 mx-auto my-16 max-w-7xl'>
          <div className='py-20 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
            {
              goals.map((goal) => {
                return(
                  <GoalCard key={goal.id} goal={goal} />
                )
              })
            }
          </div>
        </div>
      </section>
    );

}



