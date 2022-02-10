import React from 'react';

export default function ArticleCard({ feature }) {
  return (
    <div className="flex w-full min-h-fit flex-col rounded overflow-hidden bg-[#fff] md:max-h-[500px] cstm-article-shadow mt-4">
      <div className="flex font-matter flex-col p-4 gap-y-8 h-[60%]">
        <div className="flex flex-row justify-between items-center text-xs text-cstm-grey font-medium">
          <p>{feature.source}</p>
          <p>{feature.date}</p>
        </div>

        <div className="text-lg font-matter font-medium md:text-base">
          <h4>{feature.caption}</h4>
        </div>
      </div>

      <div className="w-full">
        <img
          className="w-full"
          style={{ objectFit: `contain` }}
          src={feature.image}
          alt={feature.date}
        />
      </div>
    </div>
  );
}

