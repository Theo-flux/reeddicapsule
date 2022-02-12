import React from 'react';

export default function ClimateTech() {
  return (
    <div className="flex flex-col md:flex-row w-11/12 max-w-7xl font-semibold mx-auto py-16 md:py-32">
      <div className="w-full md:w-1/2 flex flex-col justify-center md:mr-6  xl:mr-20">
        <div className="flex flex-col justify-center md:w-11/12">
          <h2 className="font-matter text-xl md:text-3xl xl:text-4xl">
            We are a Climate-
            <br className='hidden md:block' />
            Technology Company on a<br className=" hidden 2xl:block" /> mission
            to <span className="text-cstm-green">make the future</span>.
          </h2>
          <p className="font-matter font-normal text-cstm-grey text-base pt-10 md:w-9/12">
            Reeddi bridges the accessibility gap through sustainable, limitless
            innovation. Our proprietary innovations are designed as an
            energy-as-a-service solution (Hardware) coupled with an integrated
            digital infrastructure for rental distribution.
          </p>
        </div>

        <a className="text-cstm-green pt-6 lg:pt-10">Learn more</a>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
        <img
          src="/home/smiling-man.png"
          className="rounded-md h-64 md:h-80 xl:h-[480px]  mr-6 lg:mr-10"
        />
        <img
          src="/home/idea.png"
          className="rounded-md h-64 md:h-80 xl:h-[480px]  mt-16"
        />
      </div>
    </div>
  );
}
