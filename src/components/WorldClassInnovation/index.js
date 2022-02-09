import React from "react";

export default function WorldClassInnovation() {
  const Star = () => <img src="/home/star.svg" className="h-3.5 w-3.5 mr-1" />;
  return (
    <div className="flex flex-col items-center justify-center cstm-bg-green-gradient pt-16">
      <h3 className="font-matter font-medium text-4xl mt-10">
        World-Class Innovations
      </h3>
      <div className="w-11/12 flex">
        <div className="w-1/2">
          <div className="max-w-[520px] py-8 px-8 shadow-cstm-2xl bg-[white] rounded-lg my-20">
            <div>
              <h2 className="text-3xl font-semibold">Energy On The Go!</h2>
              <p className="mt-4 block text-gray-600">
                A clean, affordable, and portable source of electricity that can
                be used to power homes and businesses appliances and gadgets
                such as smartphones, MP3 players, digital cameras, e-readers,
                tablets, laptops, quadcopter drones, CPAP, fans, display
                monitors, TV etc.
              </p>
            </div>
            <a className="text-cstm-green mt-4 block">Learn more</a>
          </div>
          <div className="max-w-[520px] py-8 px-8 bg-[white] shadow-sm rounded-lg my-20">
            <div>
              <h2 className="text-3xl font-semibold">Rental Marketplace</h2>
              <p className="mt-4 block text-gray-600">
                A secured and insured digital rental marketplace for accessing
                essential items and equipment for homes, projects, and
                businesses.
              </p>
            </div>
            <a className="text-cstm-green mt-4 block">Learn more</a>
          </div>
        </div>
        <div className="w-1/2 relative flex justify-center items-center">
          <div className="flex">
            <img
              src="/home/reeddiHand.png"
              className="rounded-md h-80 xl:h-[480px] mt-8 -mr-16 z-10"
            />
            <div className="rounded-md flex items-end bg-[#9efad1] pt- pl-10 pr-5">
              <img
                src="/home/girlBagReeddi.png"
                className="h-80 xl:h-[480px]"
              />
            </div>
            <div className="absolute left-0 bottom-0 z-20 max-w-sm py-6 px-8 bg-[white] shadow-cstm-2xl rounded-lg my-20">
              <div>
                <div className="flex items-center">
                  <img src="/home/check.png" className="h-14 mr-4" />
                  <div>
                    <p className="text-lg font-medium">Built for difference</p>
                    <div className="flex ml-0.5">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </div>
                </div>
                <p className="mt-4 block text-gray-600">
                  Energy capacity: 154Wh (3.7V/41600mAh); Lithium-ion cell
                </p>
              </div>
              <div className="absolute -top-5 -right-5 rounded-lg bg-[white] shadow-md p-2">
                <div className="rounded-lg bg-[#CEE7D8]">
                  <img
                    src="/home/wowEyes.png"
                    className="h-16 w-16 rounded-sm"
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
