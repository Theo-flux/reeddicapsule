import React from "react";

export default function AGoodCompany() {
  return (
    <>
      {/* top */}
      <div className="flex w-11/12 max-w-7xl flex-col md:flex-row mx-auto pt-10 md:pt-20">
        <div className="w-full md:w-1/2 flex flex-col justify-center ">
          <div className="flex flex-col justify-center md:w-11/12">
            <h2 className="font-matter font-semibold text-2xl md:text-4xl xl:text-5xl">
              What is a company that does good?
            </h2>
            <p className="font-matter text-cstm-grey text-base pt-8 md:w-9/12">
              The idea of making a positive impact with every innovation is what
              drives us. That's why we only create innovations that promote
              environmental and socially responsible products, practices, and
              values.
            </p>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex w-full md:w-11/12 max-w-7xl flex-col md:flex-row mx-auto py-10 md:py-16 lg:py-32">
        <div className="w-full cstm-good-company-gradient rounded-lg flex flex-col-reverse md:flex-row items-center md:justify-between">
          <div className="w-11/12 md:w-full flex flex-col items-center md:items-start px-5 md:px-10 lg:px-20 xl:px-36">
            <p className="text-sm xl:text-base text-center md:text-left text-cstm-grey mt-14 max-w-[250px] lg:max-w-none">
              Across our innovations, our activities, till date, have offset
            </p>
            <p className="font-bold text-5xl xl:text-8xl mt-2 md:mt-0">1004+</p>
            <p className="text-sm xl:text-base text-cstm-grey mt-2">
              kgCO<sub>2</sub> gas emission{" "}
            </p>
            <img
              src="/home/ReeddixTempown.png"
              className="w-36 xl:w-40 mt-16 md:mt-32 mb-6"
            />
          </div>
          <img
            src="/home/rotatingEarthxPhone.gif"
            className="mt-10 md:mt-0 w-full max-w-sm sm:max-w-none  sm:w-80 lg:w-96 self-center lg:px-5 xl:px-0"
          />
        </div>
      </div>
    </>
  );
}
