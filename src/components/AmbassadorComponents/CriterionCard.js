import React from 'react';

export default function CriterionCard({ criterion }) {
  
  const { icon, title, subTitle } = criterion

  return(
    <div className='flex justify-start items-start gap-x-4'>
      <img src={ icon } alt='check mark'/>

      <div className='flex flex-col gap-y-2 font-matter'>
        <h4 className='font-bold text-lg md:text-lg'>{ title }</h4>
        <p className='text-cstm-grey text-sm md:text-sm'>{ subTitle }</p>
      </div> 
    </div>
  );
}
