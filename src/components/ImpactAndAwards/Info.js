import React from 'react';

export default function Info(){
    return(
        <section className=''>
            <div className='w-11/12 m-auto py-8 max-w-7xl'>
                <div className='text-sm font-matter text-cstm-grey flex flex-col gap-y-8 md:text-base grid grid-cols-2 grid-rows-[auto] gap-8'>
                    <div className='hidden md:grid col-start-1 col-span-3'>
                        <img className='w-full' src='/iaa/goal-image.png' alt='community'/>
                    </div>

                    <p className='md:col-start-1 col-end-2'>
                        Reeddi’s goal in Africa is to make sustainable energy available and affordable for every 
                        African irrespective of income level. The energy is delivered in both AC and DC which 
                        makes the device capable of delivering valuable service in low to high energy operations 
                        to power phones, AC home electronic gadgets, AC/DC small refrigerators and household 
                        electronics owned by our target customers.
                    </p>

                    <p className='md:row-start-3 col-start-1 col-end-2'>
                        Our study reveals that more than 40% of daily expenses of businesses 
                        and individuals in Nigeria are spent on self-generated electricity; 
                        Reeddi reduces this cost to less than 10%. This improves the livelihood 
                        and earning capacity of our target market as they can now save more than 
                        30% of their energy expenses and work toward improving their standard of living.
                    </p>

                    <p className='md:col-start-2 col-end-3'>
                        Reeddi systems are designed to simply meet the different energy demands of our customers. 
                        The interface of our energy distribution unit incorporates sockets and USB outlets easily 
                        accessed by our target market. Integration of USSD customer service interface systems 
                        with existing local Mobile Money platforms in Nigeria, and the cash payment option allows 
                        customers to easily pay for energy used.
                    </p>

                </div>
            </div>
        </section>
    )
}