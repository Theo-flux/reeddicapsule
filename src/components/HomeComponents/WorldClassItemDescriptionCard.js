import React from 'react'
import Star from "../Star";

export default function WorldClassItemDescriptionCard({title, description, img}) {
  return (
    <div className="absolute left-0 md:left-5 xl:left-0 -bottom-4 md:bottom-5 lg:bottom-3 z-20 max-w-[280px] md:max-w-[300px] lg:max-w-sm py-3 lg:py-6 px-4 lg:px-8 bg-[white] shadow-cstm-2xl rounded-lg my-0 md:my-20">
      <div>
        <div className="flex items-center">
          <img src={img} className="h-10 lg:h-14 mr-4" />
          <div>
            <p className="text-base lg:text-lg font-medium">
              {title}
            </p>
            <div className="flex ml-0.5">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        </div>
        <p className="mt-4 block text-sm lg:text-base text-gray-600">
          {description}
        </p>
      </div>
      <div className="absolute -top-3 md:-top-5 -right-3 md:-right-5 rounded-lg bg-[white] shadow-md p-2">
        <div className="rounded-lg bg-[#CEE7D8]">
          <img
            src="/home/wowEyes.png"
            className="h-12 md:h-16 w-12 md:w-16 rounded-sm"
          />
        </div>
      </div>
    </div>
  );
}
