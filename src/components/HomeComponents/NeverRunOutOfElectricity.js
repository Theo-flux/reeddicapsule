import React from 'react';

export default function NeverRunOutOfElectricity() {
  return (
    <div className="flex flex-col md:flex-row w-11/12 mx-auto py-16 md:py-32">
      <div className="w-full md:w-1/2 flex flex-col justify-center md:mr-6  xl:mr-20">
        <div className="flex flex-col justify-center md:w-11/12">
          <h2 className="font-matter text-4xl xl:text-5xl">
            Never run out of electricity!
          </h2>
          <p className="font-matter text-base pt-10 md:w-9/12">
            Reeddi is a climate company that seeks to bridge the gap of
            accessibility through sustainable and limitless innovation. Our
            propriety innovations are
          </p>
        </div>

        <a className="text-cstm-green pt-6 lg:pt-10">Get the Reeddi capsule</a>
      </div>
      <div className="w-full mt-10 md:mt-0 md:w-1/2 flex items-center justify-center md:justify-center">
        <img
          src="/home/personWithLaptop.png"
          className="rounded-md h-80 xl:h-[480px]  mr-6 lg:mr-10 border-t-4 border-r-8 rounded-tl-xl rounded-br-2xl rounded-tr-[3.6em] border-cstm-green"
        />
      </div>
    </div>
  );
}
