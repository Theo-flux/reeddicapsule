import React from "react";
import { ArticleCard, Newsletter } from "..";
import { features } from "../../utils/constants";


const featuresSlice = features.slice(0, 6);
export default function () {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-center justify-center cstm-bg-green-gradient pt-8 lg:pt-16">
        <h3 className="font-matter text-center md:text-left font-medium text-2xl md:text-4xl mt-10">
          Reeddi in the Media
        </h3>
        <p className="mt-4 mx-2 md:mx-0 text-center md:text-left text-cstm-grey">
          Our shared values keep us connected and guide us as one team.
        </p>
        <div className="w-11/12 mx-auto my-16 flex flex-col gap-y-16 max-w-7xl">
          <div className="grid auto-cols-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-8">
            {featuresSlice.map((feature) => {
              return <ArticleCard key={feature.id} feature={feature} />;
            })}
          </div>
        </div>
      </div>
      <Newsletter />
    </section>
  );
}
