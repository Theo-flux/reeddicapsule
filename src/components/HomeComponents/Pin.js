import React from 'react';

export default function Pin ({ bg, text }) {
  return (
    <>
      <span className="flex justify-center items-center h-3 w-3">
        <span
          className={`absolute inline-flex h-7 w-7 rounded-full ${bg} opacity-30`}
        ></span>
        <span
          className={`relative inline-flex rounded-full h-3 w-3 ${bg}`}
        ></span>
      </span>
      <p className="max-w-[300px] absolute top-1 left-3.5 text-sm bg-[white] px-3 py-3 w-96 drop-shadow-lg rounded-md">
        {text}
      </p>
    </>
  );
}

