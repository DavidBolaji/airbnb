import React from "react";
import { SwitchToggleComponent } from "./SwitchToggleComponent";

const FilterSwitchComponent: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center mt-4 mb-5">
      <div className="border flex items-center rounded-2xl justify-between w-[46vw] pr-4 pl-5 py-5">
        <div className="flex">
          <div className="text-[14px] font-bold pr-3 tracking-wide border-r">
            Display total price
          </div>
          <p className="text-[14px] pl-4 font-semibold text-slate-500 tracking-wider">
            Includes all fees, before taxes
          </p>
        </div>
        <div className="">
          <SwitchToggleComponent />
        </div>
      </div>
    </div>
  );
};

export default FilterSwitchComponent;
