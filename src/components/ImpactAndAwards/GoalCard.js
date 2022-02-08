import React from 'react';

export default function GoalCard({ goal }) {

    const { icon, title, subTitle, badge } = goal

    return(
        <div className='bg-[#fff] cursor-pointer rounded shadow-md hover:shadow-xl'>
            <div className='p-4 flex flex-col gap-y-8 sm:flex-row justify-between items-start'>
                <div className='font-matter flex flex-col justify-between w-full sm:w-[40%] md:w-[60%] gap-y-4'>
                    <img className='w-[30px] sm:w-[30px] md:w-[40px]' src={icon} alt='icon' />
                    <div className=''>
                        <h4 className='font-bold sm:text-base md:text-lg'>{ title }</h4>
                        <p className=' text-cstm-grey text-xs md:text-sm'>{ subTitle }</p>
                    </div>
                </div>

                <div className='self-center'>
                    <img className='' src={ badge } alt='badge' />
                </div>
            </div>
        </div>
    );
}


// style={{ boxShadow: `0px 14.4821px 33.5034px rgba(7, 65, 39, 0.08)` }}