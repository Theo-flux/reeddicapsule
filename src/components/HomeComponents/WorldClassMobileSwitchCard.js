import React from "react";

export default function WorldClassMobileSwitchCard({ title, selected, onClick }) {
  return (
    <p
      onClick={onClick}
      className={`${
        selected ? "font-semibold shadow-cstm-2xl" : "opacity-80"
      } px-3.5 py-2 bg-[white] rounded-lg mx-3 text-sm`}
    >
      {title}
    </p>
  );
}
