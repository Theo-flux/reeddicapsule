import React from "react";

export default function WorldClassCard({ title, text, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${
        selected ? "shadow-cstm-2xl" : "shadow-sm"
      } max-w-[400px] lg:max-w-[520px] py-6 lg:py-8 px-4 lg:px-8 bg-[white] rounded-lg my-16 md:my-20 cursor-pointer`}
    >
      <div>
        <h2 className="text-xl lg:text-3xl font-semibold">{title}</h2>
        <p className="mt-4 block text-sm lg:text-base text-gray-600">{text}</p>
      </div>
      <a className="text-cstm-green font-bold mt-4 block">Learn more</a>
    </div>
  );
}
