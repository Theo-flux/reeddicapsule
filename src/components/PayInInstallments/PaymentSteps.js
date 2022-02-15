import React from 'react';
import StepCard from './StepCard'

const paymentSteps = [
  {
    id:'1',
    image: '/pii/male.png',
    caption: 'What you need to know',
    steps: [
      <li>You can get the capsule at <strong className="text-cstm-green">3months to 6months</strong> financing plan at Zero% interest.</li>,
      <li>This plan involves an upfront payment of <strong className="text-cstm-green">25%</strong> of the cost of the capsule while 75% of the value of the capsule is financed and payable in equal instalments over 3-6 months as you desire.</li>
    ]
  },

  {
    id:'2',
    image: '/pii/phone.png',
    caption: 'Grab a Carbon Zero account',
    steps: [
      <li>Have a <strong className="text-cstm-green">Carbon account</strong>. (Download the <a href="#" className="text-cstm-green"><strong>Carbon app</strong></a> and <strong className="text-cstm-green">register</strong> to get this if you currently do not have one).</li>,
      <li>Ensure your account has been upgraded to KYC level 2. <a href="#" className="text-cstm-green font-bold\"><strong>Click here</strong></a> to find out how to do so.</li>,
      <li>Do not have any active or outstanding loans with Carbon.</li>
    ]
  },

  {
    id:'3',
    image: '/pii/female.png',
    caption: 'Make your request',
    steps: [
      <li>Visit <a href="zero.getcarbon.co" className="text-cstm-green font-bold">zero.getcarbon.co</a> and click on <strong className="text-cstm-green">‘Shop Now’</strong> or follow the link z</li>,
      <li>Provide your Carbon account number, select Reeddi, the item you want to buy (Reeddi Capsule), pick your location, choose a payment plan, and input your email address. If your location is not in the dropdown, kindly contact us on either of the phone-numbers below.</li>,
      <li>You would receive an email from the Carbon Zero team asking to share your bank statement.</li>,
      <li>Once your statement has been shared, the Carbon Zero team will get back to you on a decision. This can take between 1 - 24 hours to get feedback.</li>,
      <li>If successful, ensure your Carbon account is funded with the down payment required plus the management fee stated in the approval email</li>
    ]
  },

  {
    id:'4',
    image: '/pii/reeddi-box.png',
    caption: 'Get Your Capsule',
    steps: [
      <li>You would receive an email from the Carbon Zero team asking to share your bank statement.</li>,
      <li>Once your statement has been shared, the Carbon Zero team will get back to you on a decision. This can take between 1 - 24 hours to get feedback.</li>,
      <li>If successful, ensure your Carbon account is funded with the down payment required plus the management fee stated in the approval email.</li>,
    ]
  }
]

export default function PaymentSteps() {
  return(
    <section className="w-11/12 m-auto py-16 max-w-screen-lg bg-none md:bg-cover bg-center bg-cover md:bg-[url('/pii/bg-arrows.png')]">
      <div className='flex flex-col gap-y-16 md:gap-y-24'>
        {
          paymentSteps.map((step) => {
            return(
              <StepCard key={step.id} step={step}/>
            )
          })
        }
      </div>
    </section>
  );
}
