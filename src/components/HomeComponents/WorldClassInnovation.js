import React from "react";
import Star from "../Star";

export default function WorldClassInnovation() {
  return (
    // pb-8 md:pb-0 added for the absolute below with -bottom
    <div className="flex flex-col items-center justify-center cstm-bg-green-gradient pt-16 pb-8 md:pb-0">
      <h3 className="font-matter font-medium text-2xl md:text-4xl mt-10">
        World-Class Innovation
      </h3>
      <div className="w-11/12 max-w-7xl flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <div className="max-w-[400px] lg:max-w-[520px] py-6 lg:py-8 px-4 lg:px-8 shadow-cstm-2xl bg-[white] rounded-lg my-20">
            <div>
              <h2 className="text-xl lg:text-3xl font-semibold">
                Energy On The Go!
              </h2>
              <p className="mt-4 block text-sm lg:text-base text-gray-600">
                A clean, affordable, and portable source of electricity that can
                be used to power homes and businesses appliances and gadgets
                such as smartphones, MP3 players, digital cameras, e-readers,
                tablets, laptops, quadcopter drones, CPAP, fans, display
                monitors, TV etc.
              </p>
            </div>
            <a className="text-cstm-green font-bold mt-4 block">Learn more</a>
          </div>
          <div className="hidden md:block max-w-[400px] lg:max-w-[520px] py-6 lg:py-8 px-4 lg:px-8 bg-[white] shadow-sm rounded-lg my-20">
            <div>
              <h2 className="text-xl lg:text-3xl font-semibold">
                Rental Marketplace
              </h2>
              <p className="mt-4 block text-sm lg:text-base text-gray-600">
                A secured and insured digital rental marketplace for accessing
                essential items and equipment for homes, projects, and
                businesses.
              </p>
            </div>
            <a className="text-cstm-green mt-4 block">Learn more</a>
          </div>
        </div>
        <div className="md:w-1/2 relative flex justify-end lg:justify-center items-center">
          <div className="flex">
            <img
              src="/home/reeddiHand.jpg"
              className="rounded-md h-64 md:h-72 lg:h-96 xl:h-[480px] mt-8 -mr-16 z-10"
            />
            <div className="rounded-md flex items-end bg-[#9efad1] pt- pl-10 pr-5">
              <img
                src="/home/girlBagReeddi.jpg"
                className="h-64 md:h-72 lg:h-96  xl:h-[480px]"
              />
            </div>
            <div className="absolute left-0 md:left-5 xl:left-0 -bottom-4 md:bottom-5 lg:bottom-3 z-20 max-w-[280px] md:max-w-[300px] lg:max-w-sm py-3 lg:py-6 px-4 lg:px-8 bg-[white] shadow-cstm-2xl rounded-lg my-0 md:my-20">
              <div>
                <div className="flex items-center">
                  <img src="/home/check.png" className="h-10 lg:h-14 mr-4" />
                  <div>
                    <p className="text-base lg:text-lg font-medium">
                      Built for difference
                    </p>
                    <div className="flex ml-0.5">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </div>
                </div>
                <p className="mt-4 block text-sm lg:text-base text-gray-600">
                  Energy capacity: 154Wh (3.7V/41600mAh); Lithium-ion cell
                </p>
              </div>
              <div className="absolute -top-3 md:-top-5 -right-3 md:-right-5 rounded-lg bg-[white] shadow-md p-2">
                <div className="rounded-lg bg-[#CEE7D8]">
                  <img
                    src="/home/wowEyes.png"
                    className="h-12 md:h-16 w-12 md:w-16 rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
