import React from "react";

export default function RentAnything() {
  return (
    <div className="flex flex-col-reverse md:flex-row w-11/12 max-w-7xl mx-auto md:w-full py-16 lg:py-32">
      <div className="w-full mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <div className="flex justify-center cstm-tempown-gradient rounded md:rounded-tl-3xl md:rounded-br-3xl">
          <img
            src="/home/tempown.png"
            className="w-full md:w-auto md:h-64 lg:h-[300px] my-10 mx-7"
          />
        </div>
      </div>
      <div className="w-11/12 mx-auto md:w-1/2 flex flex-col justify-center ">
        <div className="flex flex-col justify-center md:w-11/12">
          <h2 className="font-matter font-semibold text-2xl md:text-4xl xl:text-5xl">
            Rent Anything! <br className="hidden md:block" />
            <span className="leading-tight">Anytime!</span>
          </h2>
          <p className="font-matter text-cstm-grey text-base pt-3 md:w-9/12">
            Reeddi is a climate company that seeks to bridge the gap of
            accessibility through sustainable and limitless innovation. Our
            propriety innovations are
          </p>
        </div>

        <a className="text-cstm-green font-bold pt-6 lg:pt-10">Visit TempOwn</a>
      </div>
    </div>
  );
}
