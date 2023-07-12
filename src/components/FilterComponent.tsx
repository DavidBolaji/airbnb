import React, { useState, useEffect } from "react";
import {
  PiCaretRightBold,
  PiCaretLeftBold,
  // PiFadersHorizontal,
} from "react-icons/pi";
import CaretComponent from "./CaretComponent";
import { data } from "../data";
import { IFilterButtons } from "../models/filtermodel";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { filterProduct } from "../actions/productAction";

const FilterComponent: React.FC = () => {
  const [current, setCurrent] = useState("room");
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);
  const [height, setHeight] = useState(window.scrollY);
  const dispatch: Dispatch<any> = useDispatch();

  const handleScroll = () => {
    setHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLeft = () => {
    const decre = 500;

    const menuCont = document.getElementById("menu");

    menuCont!.scrollLeft -= decre;

    const time = setTimeout(() => {
      if (menuCont!.scrollLeft - decre <= 0) {
        setLeft(false);
      }
      // @ts-ignore
      if (menuCont!.scrollLeft - decre < menuCont!.scrollLeftMax!) {
        setRight(true);
      }
      clearInterval(time);
    }, 400);
  };

  const handleRight = () => {
    const incre = 500;
    const menuCont = document.getElementById("menu");
    menuCont!.scrollLeft += incre;

    const time = setTimeout(() => {
      if (menuCont!.scrollLeft + incre > 0) {
        setLeft(true);
      }
      // @ts-ignore
      // console.log(menuCont!.scrollLeft);
      // @ts-ignore
      if (menuCont!.scrollLeft + incre >= menuCont!.scrollLeftMax!) {
        setRight(false);
      }
      clearTimeout(time);
    }, 400);

    // scrollLeftMax
  };
  const renderFilters = data.filters.map((item: IFilterButtons) => {
    return (
      <div
        key={item.key}
        className={`${
          current === item.key
            ? "flex flex-col items-center whitespace-nowrap mx-4 md:mx-6 p-0 py-3 cursor-pointer border-b-2 border-b-black"
            : "flex flex-col whitespace-nowrap items-center mx-4 md:mx-6 p-0 py-3 cursor-pointer border-b-2 border-transparent text-[#949597]"
        }`}
        onClick={() => {
          if (item.key !== current) {
            setCurrent(item.key);

            dispatch(filterProduct("room"));
          }
        }}
      >
        <div>
          <img
            src={item.icon}
            alt={item.icon}
            className={`${
              current === item.key ? "w-6 text-black" : "w-6 grayscale"
            }`}
          />
        </div>
        <div>
          <span className="text-[12px] font-semibold">{item.label}</span>
        </div>
      </div>
    );
  });

  return (
    <div
      className={`${
        height > 5
          ? "drop-shadow-md z-40 mt-[24px] w-full md:px-15 px-4 flex h-[75px] items-center bg-white"
          : "z-40 mt-[24px] w-full md:px-15 px-4 flex h-[75px] items-center bg-white"
      }`}
    >
      <div className="relative w-full h-full items-center">
        {left && (
          <div
            onClick={handleLeft}
            className="absolute hidden bg-white bg-gradient-to-r rounded-full to-transparent blur-[1] z-10 left-0 cursor-pointer md:flex items-center justify-center w-16 h-full bg-blue"
          >
            <CaretComponent icon={<PiCaretLeftBold size={14} />} />
          </div>
        )}
        <div
          id="menu"
          className="flex items-center md:w-[85vw] w-[100vw] overflow-scroll pr-5 h-full scroll-smooth snap-mandatory snap-x"
        >
          {renderFilters}
        </div>
        <div className="absolute hidden sm:flex bg-white z-10 h-full md:flex items-center w-54 justify-center bottom-0 right-0 ">
          {right && (
            <div className="mr-6 cursor-pointer" onClick={handleRight}>
              <CaretComponent icon={<PiCaretRightBold size={14} />} />
            </div>
          )}
          <button className="mr-16 ml-2 whitespace-nowrap cursor-pointer rounded-lg px-4 py-3 flex items-center justify-center border ">
            <span className="inline-block mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="filter"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              </svg>
            </span>
            <span className="text-[12px] font-semibold">Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
