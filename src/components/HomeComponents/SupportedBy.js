import React from "react";

const supportedByMap = [
  {
    name: "Earthshot Prize",
    link: "",
    logo: "/home/awardLogos/Earthshot logo.png",
  },
  {
    name: "Third Derivative",
    link: "",
    logo: "/home/awardLogos/ThirdDerivative.png",
  },
  { name: "All on", link: "", logo: "/home/awardLogos/all_on_logo 1.png" },
  { name: "U of T", link: "", logo: "/home/awardLogos/U of T.png" },
  { name: "MIT", link: "", logo: "/home/awardLogos/mit_logo 1.png" },
  { name: "Cisco", link: "", logo: "/home/awardLogos/cisco-2 2.png" },
  { name: "ASME", link: "", logo: "/home/awardLogos/Asme.png" },
  { name: "IEEE", link: "", logo: "/home/awardLogos/ieee-1 1.png" },
];

export default function SupportedBy() {
  return (
    <div className="flex flex-col items-center py-12">
      <p className="text-cstm-green pb-10 text-lg">Supported By</p>
      <div className="w-11/12 flex justify-between ">
        {supportedByMap.map((e) => (
          <a key={e.name} href={e.link}>
            <img alt={e.name} src={e.logo} className="w-20 h-10" />
          </a>
        ))}
      </div>
    </div>
  );
}
