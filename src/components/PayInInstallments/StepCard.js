import React from 'react';


export default function StepCard({ step }) {
  
  const { id, caption, image, steps } = step
  const direction = parseInt(id) % 2 === 0 ? 'row-reverse' : 'row'
  

  return(
    <div className={`flex flex-col gap-y-8 items-center md:flex-${direction} justify-between items-center`}>
      <div className='flex flex-col p-4 gap-y-2 bg-[#fff] rounded-md shadow-lg md:w-[45%]'>
        <span className='w-fit bg-[#53CD8B] text-[#fff] text-sm rounded py-1 px-2.5 font-medium'>{id}</span>
        <h4 className='text-lg font-bold'>{caption}</h4>

        <ul className='flex flex-col gap-y-4 list-disc list-inside font-normal text-sm text-cstm-black indent-px'>
          {
            steps.map((item) => {
              return(
                <>{item}</>
              )
            })
          }
        </ul>
      </div>

      <div className=' md:w-[35%]'>
        <img className='w-full' src={image} alt={`step-${id}`}/>
      </div>

    </div>
  );
}


