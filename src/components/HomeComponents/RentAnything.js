import React from "react";

export default function RentAnything() {
  return (
    <div className="flex flex-col md:flex-row w-full py-16 md:py-32">
      <div className="w-full mt-10 md:mt-0 md:w-1/2 flex justify-start">
        <div className="flex w-11/12 justify-center cstm-tempown-gradient">
          <img
            src="/home/tempown.png"
            className="h-[440px] xl:h-[480px]  my-10"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center ">
        <div className="flex flex-col justify-center md:w-11/12">
          <h2 className="font-matter font-semibold text-4xl xl:text-5xl">
            Rent Anything! <br />
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
