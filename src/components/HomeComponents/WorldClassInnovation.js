import React, { useEffect, useState } from "react";
import WorldClassCard from "./WorldClassCard";
import WorldClassItemDescriptionCard from "./WorldClassItemDescriptionCard";
import WorldClassMobileSwitchCard from "./WorldClassMobileSwitchCard";

export default function WorldClassInnovation() {
  const [isCardOne, setIsCardOne] = useState(true);
  const [interval, setinterval] = useState(null);

  const setCardInterval = () => {
    clearInterval(interval);
    const intervalId = setInterval(function () {
      setIsCardOne((prev) => !prev);
    }, 5000);
    setinterval(intervalId);
  };

  const handleClick = (val) => {
    setIsCardOne(val);
    setCardInterval();
  };

  useEffect(() => {
    setCardInterval();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    // pb-8 md:pb-0 added for the absolute below with -bottom
    <div className="flex flex-col items-center justify-center cstm-bg-green-gradient pt-16 pb-16 md:pb-0">
      <h3 className="font-matter font-medium text-2xl md:text-4xl mt-10">
        World-Class Innovation
      </h3>
      <div className="md:hidden flex mt-10">
        <WorldClassMobileSwitchCard
          selected={isCardOne}
          onClick={() => handleClick(true)}
          title="Reeddi Capsule"
        />
        <WorldClassMobileSwitchCard
          selected={!isCardOne}
          onClick={() => handleClick(false)}
          title="Rental MarketPlace"
        />
      </div>
      <div className="w-11/12 max-w-7xl flex flex-col md:flex-row">
        <div className="hidden md:block w-1/2">
          <WorldClassCard
            selected={isCardOne}
            onClick={() => handleClick(true)}
            title="Energy On The Go!"
            text="A clean, affordable, and portable source of electricity that can be
          used to power homes and businesses appliances and gadgets such as
          smartphones, MP3 players, digital cameras, e-readers, tablets,
          laptops, quadcopter drones, CPAP, fans, display monitors, TV etc."
          />
          <WorldClassCard
            selected={!isCardOne}
            onClick={() => handleClick(false)}
            title="Rental Marketplace"
            text="A secured and insured digital rental marketplace for accessing
                essential items and equipment for homes, projects, and
                businesses."
          />
        </div>
        <div className="md:hidden w-11/2">
          <WorldClassCard
            selected
            title={isCardOne ? "Energy On The Go!" : "Rental Marketplace"}
            text={
              isCardOne
                ? `A clean, affordable, and portable source of electricity that can be
          used to power homes and businesses appliances and gadgets such as
          smartphones, MP3 players, digital cameras, e-readers, tablets,
          laptops, quadcopter drones, CPAP, fans, display monitors, TV etc.`
                : `A secured and insured digital rental marketplace for accessing
                essential items and equipment for homes, projects, and
                businesses.`
            }
          />
        </div>
        <div className="md:w-1/2 relative flex justify-center items-center">
          {isCardOne ? (
            <div className="flex mb-12 md:mb-0">
              <img
                src="/home/reeddiHand.jpg"
                className="rounded-md h-64 md:h-72 lg:h-96 xl:h-[480px] mt-8 -mr-8 md:-mr-16 md:z-10"
              />
              <div className="rounded-md flex items-end bg-[#9efad1] md:pl-10 pr-5">
                <img
                  src="/home/girlBagReeddi.jpg"
                  className="h-64 md:h-72 lg:h-96  xl:h-[480px]"
                />
              </div>
              <WorldClassItemDescriptionCard
                title="Built for difference"
                description="Energy capacity: 154Wh (3.7V/41600mAh); Lithium-ion cell"
                img="/home/check.png"
              />
            </div>
          ) : (
            <div className="flex mb-12 md:mb-10">
              <div className="flex flex-col -mr-16 ">
                <img
                  src="/home/camera.png"
                  className="rounded-md h-32 md:h-72 lg:h-96 xl:h-[200px] mt-6 mb-2 z-10"
                />
                <img
                  src="/home/drone.png"
                  className="rounded-md h-32 md:h-72 lg:h-96 xl:h-[200px] mt-2 mb-4 z-10"
                />
              </div>

              <div className="rounded-md flex items-end bg-[#9efad1] pt- pl-10 pr-5">
                <img
                  src="/home/forkLift.png"
                  className="h-64 md:h-72 lg:h-96  xl:h-[480px]"
                />
              </div>
              <WorldClassItemDescriptionCard
                title="Built for difference"
                description="Energy capacity: 154Wh (3.7V/41600mAh); Lithium-ion cell"
                img="/home/check.png"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
