import React from 'react';

const statistics = [
    {
        id: '1',
        caption: '400+',
        subTitle: 'Homes and businesses powered'
    },

    {
        id: '2',
        caption: '600%',
        subTitle: 'Green house emissions prevented'
    },

    {
        id: '3',
        caption: '10k',
        subTitle: 'Lives impacted and Jobs created'
    },

    {
        id: '4',
        caption: '200+',
        subTitle: '5-star reviews across our major innovations'
    }    
]


export default function Stats() {
  return(
      <section className='bg-[#F7FCFA] px-8 py-4 shadow-md'>
          <div className='grid gap-16 sm:grid-cols-2 grid-8 md:grid-cols-2 grid-8 lg:grid-cols-4 gap-x-16'>
              {
                  statistics.map((stat) => {
                      return(
                          <div key={ stat.id } className='flex flex-col gap-y-4 font-matter'>
                              <h2 className='text-center font-bold text-cstm-green text-5xl md:text-left'>{ stat.caption }</h2>
                              <p className='text-center font-medium text-lg md:text-left'>{ stat.subTitle }</p>
                          </div>
                      )
                  })
              }
          </div>
      </section>
  );
}
