import React from 'react';
import CriterionCard from './CriterionCard'

const criteria = [
    {
        id: '1',
        icon: '/ambassador/check.svg',
        title: 'Evidence of having a Storefront ',
        subTitle: 'To be an ambassador for Reeddi, you must show evidence that you own a store, shop or a sturdy place where you generate a good amount of revenue from providing goods or services. '
    },

    {
        id: '2',
        icon: '/ambassador/check.svg',
        title: 'Eligibility & Verification',
        subTitle: 'Prospective ambassadors will need to provide Bank Grade KYC documents as well as a guarantor to prove authenticity and verify identity. '
    },

    {
        id: '3',
        icon: '/ambassador/check.svg',
        title: 'Enthusiasm for Generating Revenue ',
        subTitle: 'It is required that each of our ambassadors generate sales for the company.'
    }
]

export default function Criteria() {
  return(
      <section>
        <div className='w-11/12 mx-auto my-16'>
            <div className='flex flex-row-reverse justify-between items-start'>
                <div className='flex flex-col gap-y-8 md:max-w-[40%]'>
                    {criteria.map((criterion) => {
                        return(
                            <CriterionCard key={criterion.id} criterion={criterion}/>
                        )
                    })}
                </div>

                <div className='hidden md:flex flex-col justify-center items-center w-[50%] overflow-hodden' style={{ backgroundImage:`url(/ambassador/md-criteria.png)` }}>
                    <h2 className='text-[#fff] font-medium font-matter text-center text-3xl py-4 px-32'>Criteria for becoming a Reeddi ambassador</h2>

                    <div className='w-[50%]'>
                        <img className='w-full' src='/ambassador/woman.png' alt='woman'/>
                    </div>
                </div>
            </div>
        </div>
      </section>
  );

}

