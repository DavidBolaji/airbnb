import React, { useState } from "react";

const CaretComponent: React.FC<{ icon: any }> = ({ icon }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`${
        hover
          ? "w-7 h-7 opacity-90 bg-white rounded-full flex items-center justify-center border scale-[1.2]"
          : "w-7 h-7 opacity-90 bg-white rounded-full flex items-center justify-center border"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`${hover ? " scale-[0.7]" : ""}`}>{icon}</div>
    </div>
  );
};

export default CaretComponent;
