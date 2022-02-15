import React from "react";

export default function ArticleCard({ feature }) {
  return (
    <div className="flex w-full min-h-fit flex-col rounded-lg overflow-hidden bg-[#fff] md:max-h-[500px] cstm-article-shadow mt-4 hover:border-2 border-cstm-green">
      <div className="flex font-matter flex-col p-4 gap-y-8 h-40">
        <div className="flex flex-row justify-between items-center text-xs text-cstm-grey font-medium">
          <p>{feature.source}</p>
          <p>{feature.date}</p>
        </div>

        <div className="text-lg font-matter font-medium md:text-base">
          <h4 className="three-line-clip">{feature.caption}</h4>
        </div>
      </div>

      <div className="w-full">
        <img
          className="w-full object-contain"
          src={feature.image}
          alt={feature.date}
        />
      </div>
    </div>
  );
}
