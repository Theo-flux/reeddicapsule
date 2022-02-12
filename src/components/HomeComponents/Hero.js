import React, { useEffect, useRef, useState } from "react";
import Pin from "./Pin";

export default function Hero() {
  const image = useRef();
  const [imageLoad, setimageLoad] = useState(false);
  useEffect(() => {
    if (image.current.complete) setimageLoad(true);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center cstm-bg-green-gradient pt-28">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col items-center ">
        <div className="py-0 md:py-14 max-w-4xl">
          <h1 className="text-2xl lg:text-5xl md:text-center font-semibold leading-tight">
            Bridging the Accessibility Gap Through Sustainable Infrastructure
          </h1>
          <p className="text-sm md:text-center text-cstm-grey mt-10 px-0 md:px-16 lg:px-24">
            Reeddi innovatively provides clean energy and allied innovations at
            a price point that individuals and businesses operating in
            energy-poor regions of the world can afford.
          </p>
        </div>
        <div className="py-12 md:py-24 relative">
          <img
            ref={image}
            className="w-full"
            alt=""
            src="home/map1.jpg"
            onLoad={() => setimageLoad(true)}
          />
          {imageLoad && (
            <>
              <div className="absolute top-[31.5%] left-[21%]">
                <Pin
                  bg="bg-cstm-olive"
                  text="Reducing Greenhouse gas emissions from the usage of rented items and equipment. "
                />
              </div>
              <div className="absolute bottom-[50%] left-[43%]">
                <Pin
                  bg="bg-cstm-green"
                  text="Providing clean energy for homes and business in Africa"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
