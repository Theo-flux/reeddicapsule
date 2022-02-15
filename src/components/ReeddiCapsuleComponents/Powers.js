import React from 'react'

const powerMap = [
  {
    id: '1',
    icon: '/reeddicapsule/check.png',
    title: 'Highly durable 💪',
    text: 'We believe in quality over quantity and this guides us.'
  },

  {
    id: '2',
    icon: '/reeddicapsule/check.png',
    title: 'Clean energy ⚡',
    text: 'We believe in quality over quantity and this guides us.'
  },

  {
    id: '3',
    icon: '/reeddicapsule/check.png',
    title: 'High precision level 💯',
    text: 'We believe in quality over quantity and this guides us.'
  },

  {
    id: '4',
    icon: '/reeddicapsule/check.png',
    title: 'Charges with solar & electricity 🔋',
    text: 'We believe in quality over quantity and this guides us.'
  }
]


function PowerCard({ powerFeature }){
  const { icon, title, text } = powerFeature
  return(
    <div className='flex justify-between items-start gap-x-4 max-w-[300px]'>
        <img src={icon} alt='icon'/>
        <div className='flex flex-col gap-y-2'>
            <h4 className='font-bold text-lg'>{ title }</h4>
            <p className='text-sm text-cstm-grey'>{ text }</p>
        </div>
    </div>
  )
}

export default function Powers() {
  return (
    <section>
      <div className='w-11/12 m-auto py-16 max-w-7xl'>
        <div className='flex flex-col gap-y-8 md:flex-row justify-between items-center gap-x-16'>
          <div className='w-full sm:w-[40%]'>
            <img 
              className='w-full sm:w-fit'
              alt='girl-with-capsule'
              srcset="/reeddicapsule/girl-with-capsule.png 800w, 
              /reeddicapsule/capsule-quality.png 480w"
              sizes="(max-width: 600px) 480px,800px"
              src='/reeddicapsule/girl-with-capsule.png' 
            />
          </div>

          <div className='font-matter w-full flex flex-col gap-y-8 md:w-[40%]'>
            <div className='flex flex-col gap-y-4'>
              <h3 className='text-3xl font-bold md:text-4xl lg:text-5xl'>How we stand out?</h3>
              <p className='text-left text-cstm-grey text-sm'>We believe in quality over quantity and this guides how we do xyz and abc over the years.</p>
            </div>

            <div className='grid auto-cols-fr grid-cols-1 gap-8  md:grid-cols-1 lg:grid-cols-2'>
              {
                powerMap.map((feature) => {
                  return(
                    <PowerCard key={feature.id} powerFeature={feature} />
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
