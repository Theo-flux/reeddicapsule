import React from "react";

const supportedByMap = [
  {
    name: "Earthshot Prize",
    link: "https://earthshotprize.org/finalists/reeddi-capsules/",
    logo: "/home/awardLogos/Earthshot logo.png",
  },
  {
    name: "Third Derivative",
    link: "",
    logo: "/home/awardLogos/ThirdDerivative.png",
  },
  { name: "All on", link: "", logo: "/home/awardLogos/all_on_logo 1.png" },
  {
    name: "U of T",
    link: "https://entrepreneurs.utoronto.ca/announcing-the-2020-rbc-prize-for-innovation-entrepreneurship-winners/",
    logo: "/home/awardLogos/U of T.png",
  },
  {
    name: "MIT",
    link: "https://cep.mit.edu/",
    logo: "/home/awardLogos/mit_logo 1.png",
  },
  {
    name: "Cisco",
    link: "https://blogs.cisco.com/news/announcing-the-2019-cisco-global-problem-solver-challenge-winners",
    logo: "/home/awardLogos/cisco-2 2.png",
  },
  {
    name: "ASME",
    link: "https://thisishardware.org/competition/2020/usa",
    logo: "/home/awardLogos/Asme.png",
  },
  {
    name: "IEEE",
    link: "https://empowerabillionlives.org/winners/",
    logo: "/home/awardLogos/ieee-1 1.png",
  },
];

export default function SupportedBy() {
  return (
    <div className="flex flex-col items-center py-12">
      <p className="text-cstm-green pb-10 text-lg">Supported By</p>
      <div className="w-11/12 max-w-7xl flex justify-between ">
        {supportedByMap.map((e) => (
          <a key={e.name} href={e.link}>
            <img alt={e.name} src={e.logo} className="w-14 lg:w-20 h-7" />
          </a>
        ))}
      </div>
    </div>
  );
}
