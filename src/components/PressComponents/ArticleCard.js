import React from 'react';

export default function ArticleCard({ feature }) {
  return(
    <div className='flex w-full min-h-fit flex-col rounded overflow-hidden bg-[#fff] md:max-h-[500px]' style={{boxShadow: `0px 2px 5px 0px rgba(8, 160, 92, 0.15)`}}>

      <div className='flex flex-col p-4 gap-y-8 h-[60%]'>
        <div className='flex flex-row justify-between items-center text-xs text-cstm-grey font-medium'>
          <p>{ feature.source }</p>
          <p>{ feature.date }</p>
        </div>

        <div className='text-lg font-bold md:text-base'>
          <h4>{ feature.caption }</h4>
        </div>
      </div>

      <div className='w-full h-[40%]'>
        <img className='w-full' style={{ objectFit: `contain`}} src={ feature.image } alt={feature.date}/>
      </div>

    </div>
  );
}

