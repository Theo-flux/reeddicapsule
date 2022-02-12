import React, { useState } from 'react';
import ContactForm from './ContactForm';


export default function Contact() {
  const [open, setOpen] = useState(false)

  const handleOpen = (val) => setOpen(val)
  return (
    <section id="contact" className="w-11/12 m-auto mt-20 mb-32 max-w-7xl">
      <div className="bg-none md:bg-[url('/bg-cta.svg')] bg-cover bg-center rounded-md bg-clip ">
        <div className="flex flex-col gap-y-4 py-4 font-matter md:py-20 justify-center items-center md:gap-y-8">
          <div className="max-w-[450px] w-[80%]  flex flex-col gap-y-2 justify-center items-center md:gap-y-4">
            <p className="text-2xl text-[#000] text-center font-medium md:text-[#fff] md:text-5xl md:text-left">
              Got Any Question?
            </p>
            <p className="text-center text-xs text-[#000] w-4/5 max-w-[350px] md:text-[#fff] ">
              We are always on standby to answer all your questions. Reach out
              to us to ask any questions
            </p>
          </div>
          <button
            onClick={() => handleOpen(true)}
            className="text-[#fff] bg-cstm-green text-sm font-medium px-4 py-2 rounded hover:shadow-lg md:bg-[#fff] md:text-cstm-green"
          >
            Contact us
          </button>
        </div>
      </div>
      <ContactForm open={open} handleOpen={handleOpen} />
    </section>
  );
}


