import React from "react";
import useWindowSize from "../../utils/useWindowSize";

export default function TimeMagComponent() {
  const size = useWindowSize();
  return (
    <div className="my-16 lg:my-28 w-11/12 max-w-7xl mx-auto">
      {size.width > 768 ? (
        <img src="/home/TimeMagAward.jpg" className="rounded-lg" />
      ) : (
        <img src="/home/TimeMagAwardMobile.png" className="rounded-lg" />
      )}
    </div>
  );
}
