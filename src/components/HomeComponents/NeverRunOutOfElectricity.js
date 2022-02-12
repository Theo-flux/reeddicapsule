import React from "react";
import Star from "../Star";

export default function NeverRunOutOfElectricity() {
  return (
    <div className="flex flex-col md:flex-row w-11/12 max-w-7xl mx-auto py-10 pb-24 md:py-16 lg:py-32">
      <div className="w-full md:w-2/6 lg:w-1/2 flex flex-col justify-center ">
        <div className="flex flex-col justify-center md:w-11/12">
          <h2 className="font-matter font-semibold text-2xl md:text-4xl xl:text-5xl">
            Never run out of electricity!
          </h2>
          <p className="font-matter text-cstm-grey text-base pt-10 md:w-9/12">
            Reeddi is a climate company that seeks to bridge the gap of
            accessibility through sustainable and limitless innovation. Our
            propriety innovations are
          </p>
        </div>

        <a className="text-cstm-green pt-6 font-bold lg:pt-10">
          Get the Reeddi capsule
        </a>
      </div>
      <div className="w-full md:w-4/6 lg:w-1/2 mt-10 md:mt-0  flex items-center justify-center md:justify-start">
        <img
          src="/home/timeMag2021.png"
          className="hidden md:block w-32 mr-16 my-8 self-end"
        />
        <div className="relative">
          <img
            src="/home/personWithLaptop.png"
            className="rounded-md h-80 xl:h-[480px]  mr-6 lg:mr-10 md:border-t-4 md:border-r-8 rounded-tl-xl rounded-br-2xl rounded-tr-[3.6em] border-cstm-green"
          />
          <div className="absolute mb-2 md:mb-0 md:-left-12 -bottom-24 md:bottom-4 z-20">
            <div className="flex justify-evenly max-w-max bg-[white] shadow-cstm-2xl rounded-md my-4 md:my-10">
              <p className="py-4 mx-6 text-xs">
                Save <span className="text-cstm-green font-semibold">40%</span>{" "}
                of your electricity bill
              </p>
            </div>
            <div className="flex justify-evenly max-w-sm ml-4 md:ml-0 py-3 md:py-6 px-3 md:px-6 bg-[white] shadow-cstm-2xl rounded-md my-2">
              <div className="flex flex-col mx-3">
                <p className="font-matter font-semibold">450+</p>
                <p className="font-matter text-sm text-[#757575]">Homes</p>
                <p className="font-matter text-sm text-[#757575]">powered</p>
              </div>
              <div className="flex flex-col mx-3">
                <p className="font-matter font-semibold">300+</p>
                <p className="font-matter text-sm text-[#757575]">Businesses</p>
                <p className="font-matter text-sm text-[#757575]">impacted</p>
              </div>
              <div className="flex flex-col mx-3">
                <p className="font-matter flex font-semibold">
                  5
                  <span className="self-center ml-1">
                    <Star />
                  </span>
                </p>
                <p className="font-matter text-sm text-[#757575]">Ratings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
