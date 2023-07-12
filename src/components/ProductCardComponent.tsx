import React, { useRef, useState } from "react";
import { Iimage, Iproduct } from "../models/productmodel";
import { Carousel, Space } from "antd";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { likeProduct, toggleEnd, toggleStart } from "../actions/productAction";
import CaretComponent from "./CaretComponent";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const ProductCardComponent: React.FC<Iproduct> = ({
  id,
  images,
  host,
  name,
  date,
  like,
  cost,
  rating,
  start,
  end,
}) => {
  const dispatch: Dispatch<any> = useDispatch();
  const [hover, setHover] = useState(false);
  const carouselRef = useRef();
  const handleLike = (id: string) => {
    dispatch(likeProduct(id));
  };
  const handleLeft = () => {
    //@ts-ignore
    // console.log(carouselRef.current.innerSlider.state.currentSlide);
    //@ts-ignore
    carouselRef.current.prev();
    //@ts-ignore
    if (end && carouselRef.current.innerSlider.state.currentSlide !== 3) {
      dispatch(toggleEnd(id));
    }
    //@ts-ignore
    if (carouselRef.current.innerSlider.state.currentSlide === 1) {
      dispatch(toggleStart(id));
    }
  };

  const handleRight = () => {
    //@ts-ignore
    console.log(carouselRef.current.innerSlider.state.currentSlide);
    //@ts-ignore
    carouselRef.current.next();
    //@ts-ignore
    if (carouselRef.current.innerSlider.state.currentSlide === 3) {
      dispatch(toggleEnd(id));
    }
    //@ts-ignore
    if (start && carouselRef.current.innerSlider.state.currentSlide >= 0) {
      dispatch(toggleStart(id));
    }
  };
  return (
    <div
      // w-300px
      className="grid-item h-[420px] overflow-hidden relative cursor-pointer"
      key={id}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Carousel
        /* @ts-ignore*/
        ref={carouselRef}
        className="h-[280px] z-20 rounded-xl overflow-hidden"
      >
        {images.map((image: Iimage) => {
          return (
            <div key={image.id}>
              <div className="h-full">
                <img
                  src={image.image}
                  alt={image.image}
                  className="w-full h-[320px] object-cover"
                />
              </div>
              <div
                className="absolute top-4 cursor-pointer w-1/12 ml-2"
                onClick={() => handleLike(id)}
              >
                <div className="flex justify-end items-end">
                  {!like && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      id="love"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                    >
                      <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                    </svg>
                  )}

                  {like && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      id="active"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                    >
                      <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      {hover && (
        <div className="absolute top-20 w-full px-4 z-30">
          <div className="flex justify-between items-center mt-14">
            <div className=" cursor-pointer" onClick={handleLeft}>
              {!start && (
                <CaretComponent icon={<PiCaretLeftBold size={14} />} />
              )}
            </div>

            <div onClick={handleRight} className="cursor-pointer">
              {!end && <CaretComponent icon={<PiCaretRightBold size={14} />} />}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between mt-2 h-6">
        <div className=" overflow-hidden font-bold">{host}</div>
        <div className="w-16 overflow-hidden">
          <Space className="">
            <AiFillStar />
            <span>{rating}</span>
          </Space>
        </div>
      </div>
      <div className="h-6 font-semibold text-[#b0b0b0] text-[14px]">{name}</div>
      <div className="h-6 font-semibold text-[#b0b0b0] text-[14px] ">
        {date}
      </div>
      <div className="h-6 font-semibold text-[14px] ">
        <span className="font-bold">
          {"$ "}
          {cost}
        </span>
        {" night"}
      </div>
    </div>
  );
};

export default ProductCardComponent;
