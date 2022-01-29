import React from "react";
import Pin from "./Pin";


export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center cstm-bg-green-gradient pt-28">
      <div className="w-11/12 mx-auto flex flex-col items-center ">
        <div className="py-14 max-w-4xl">
          <h1 className="text-5xl text-center font-semibold leading-tight">
            Bridging the accessibility gap through limitless & sustainable
            Innovation
          </h1>
          <p className="text-base text-center mt-10 px-24">
            Reeddi innovatively provides clean energy and allied innovations at
            a price point that individuals and businesses operating in
            energy-poor regions of the world can afford.
          </p>
        </div>
        <div className="py-24 relative">
          <img className="w-full" alt="" src="home/map1.png" />
          <div className="absolute top-1/3 left-56">
            <Pin
              bg="bg-cstm-olive"
              text="Reducing Greenhouse gas emissions from the usage of rented items and equipment. "
            />
          </div>
          <div className="absolute bottom-1/3 right-1/2">
            <Pin
              bg="bg-cstm-green"
              text="Providing clean energy for homes and business in Africa"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
