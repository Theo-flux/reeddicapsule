import React from 'react';

export default function Cards({paper}) {
    const {title, content, image, desc} = paper

    return(
        <div className='flex flex-col gap-y-8 w-full md:flex-row justify-between items-start gap-x-8 max-w-4/5'>
            <div className=' md:max-w-[650px]'>
                <img src={image} alt={desc} />
            </div>

            <div className='flex flex-col justify-center items-center gap-y-4 md:justify-start md:items-start gap-y-8 max-w-[650px]'>
                <h4 className='font-bold text-lg md:text-xl uppercase'>{title}</h4>
                <p className='text-lg'>{content}</p>
                <button className='text-xs font-medium py-2 px-4 text-cstm-green rounded border-2 border-cstm-green ease-in duration-300 hover:bg-cstm-green hover:text-[#fff]'>Download for free</button>
            </div>
        </div>
    );

}
