import React from 'react';

export default function AwardCard({ award }) {
  return(
    <div className='grid grid-rows-[.5fr_.5fr] overflow-hidden rounded gap-y-4 shadow-md'>

      <div className=''>
        <img className='w-full' src={ award.image } alt={award.date}/>
      </div>

      <div className='w-11/12 m-auto font-matter justify-items-start flex flex-col gap-y-8'>
        
        <div className='font-matter flex flex-col gap-y-4'>
          <div className='text-xs text-cstm-grey font-medium flex justify-between w-full'>
            <p>{ award.company }</p>
            <p>{ award.date }</p>
          </div>

          <h4 className='text-base font-matter font-bold md:text-xl'>{ award.caption }</h4>
        </div>

        <button className='w-full text-base rounded font-medium py-2 px-4 text-cstm-green border-2 border-cstm-green ease-in duration-300 hover:bg-cstm-green hover:text-[#fff]'>Read more</button>

      </div>

    </div>
  );
}
