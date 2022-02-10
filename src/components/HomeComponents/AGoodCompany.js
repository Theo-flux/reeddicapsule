import React from "react";

export default function AGoodCompany() {
  return (
    <>
      {/* top */}
      <div className="flex w-11/12 flex-col md:flex-row mx-auto pt-10 md:pt-20">
        <div className="w-full md:w-1/2 flex flex-col justify-center ">
          <div className="flex flex-col justify-center md:w-11/12">
            <h2 className="font-matter font-semibold text-4xl xl:text-5xl">
              What is a company that does good?
            </h2>
            <p className="font-matter text-cstm-grey text-base pt-3 md:w-9/12">
              The idea of making a positive impact with every innovation is what
              drives us. That's why we only create innovations that promote
              environmental and socially responsible products, practices, and
              values.
            </p>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex w-11/12 flex-col md:flex-row mx-auto py-16 md:py-32">
        <div className="w-full cstm-good-company-gradient rounded-lg px-20 xl:px-36 flex justify-between">
          <div className="flex flex-col">
            <p className="text-sm xl:text-base text-cstm-grey mt-14">
              Across our innovations, our activities, till date, have offset
            </p>
            <p className="font-bold text-8xl">1004+</p>
            <p className="text-sm xl:text-base text-cstm-grey mt-2">kgCO2 gas emission </p>
            <img src="/home/ReeddixTempown.png" className="w-40 mt-32 mb-6" />
          </div>
          <img
            src="/home/rotatingEarthxPhone.gif"
            className="w-96 self-center"
          />
        </div>
      </div>
    </>
  );
}
