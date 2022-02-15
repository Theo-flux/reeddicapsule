import React, { useEffect } from "react";
import useWindowSize from "../../utils/useWindowSize";

const supportedByMap = [
  {
    name: "Earthshot Prize",
    link: "https://earthshotprize.org/finalists/reeddi-capsules/",
    logo: "/home/awardLogos/Earthshot logo.svg",
  },
  {
    name: "Third Derivative",
    link: "",
    logo: "/home/awardLogos/ThirdDerivative.svg",
  },
  { name: "All on", link: "", logo: "/home/awardLogos/all_on_logo 1.svg" },
  {
    name: "U of T",
    link: "https://entrepreneurs.utoronto.ca/announcing-the-2020-rbc-prize-for-innovation-entrepreneurship-winners/",
    logo: "/home/awardLogos/U of T.svg",
  },
  {
    name: "MIT",
    link: "https://cep.mit.edu/",
    logo: "/home/awardLogos/mit_logo.svg",
  },
  {
    name: "Cisco",
    link: "https://blogs.cisco.com/news/announcing-the-2019-cisco-global-problem-solver-challenge-winners",
    logo: "/home/awardLogos/cisco-2 2.svg",
  },
  {
    name: "ASME",
    link: "https://thisishardware.org/competition/2020/usa",
    logo: "/home/awardLogos/Asme.svg",
  },
  {
    name: "IEEE",
    link: "https://empowerabillionlives.org/winners/",
    logo: "/home/awardLogos/ieee-1 1.svg",
  },
];

export default function SupportedBy() {
  const size = useWindowSize();

  return (
    <div className="flex flex-col w-11/12 mx-auto md:items-center py-8 md:py-12">
      <p className="text-cstm-green pb-4 md:pb-10 font-medium text-lg">Supported By</p>
      {size.width > 768 ? (
        <div className="w-11/12 max-w-7xl flex justify-between ">
          {supportedByMap.map((e) => (
            <a key={e.name} href={e.link} className="flex justify-center">
              <img alt={e.name} src={e.logo} className="w-14 lg:w-20" />
            </a>
          ))}
        </div>
      ) : (
        <>
          <div className="w-11/12 flex my-3 justify-between ">
            {supportedByMap.slice(0,4).map((e) => (
              <a key={e.name} href={e.link} className="flex justify-center">
                <img alt={e.name} src={e.logo} className="w-14 lg:w-20" />
              </a>
            ))}
          </div>
          <div className="w-11/12 flex my-3 justify-between ">
            {supportedByMap.slice(4,8).map((e) => (
              <a key={e.name} href={e.link} className="flex justify-center items-center">
                <img alt={e.name} src={e.logo} className="w-14 lg:w-20" />
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
