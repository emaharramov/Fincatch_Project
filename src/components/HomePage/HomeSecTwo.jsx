import React from "react";
import "./HomeSecTwo.css";

const HomeSecTwo = () => {
  return (
    <div className="w-[110%] m-auto md:w-[100%] mainSecForBgImg  my-[10px] bg-[#24D0A7] py-[100px] pt-[110]">
      <div className="md:w-[80%] grid-container flex flex-col">
        <div className="row grid sm:grid-cols-1 lg:grid-cols-2">
          <div className="border-none py-[20px]">
            <div className="flex items-center">
              <div className="w-[12px] h-[12px] bg-[#00584E] rounded-[50%]"></div>
              <div className="text-[#00584E] px-4 font-bold text-[1em]">
                FINANCIAL TECHNOLOGY
              </div>
            </div>
            <div>
              <p className="text-[3em] leading-[40px] pt-10 pb-[9px]">
                One platform but <br /> endless solutions.
              </p>
              <p className="w-max-[350px] leading-[20px] text-justify pt-[9px] pr-[40px]">
                Invent, build, launch and scale your own unique financial
                services with our proven platform that's secure and compliant
                from the ground up. Create a custom, multi-product solution
                including card issuing. <br />
                <br /> payments, checking, savings, deposits, lending and future
                products—all surfaced through industry-leading APIs.
              </p>
              <label className="inline-flex items-center gap-x-[8px] bg-[#136655] py-[23.5px] px-[20px] mt-[46px] text-white text-[14px] font-bold">
                <button>Explore Our Platform</button>
                <img src="/assets/img/arrow-right.png" />
              </label>
            </div>
          </div>
          <div className="bg-[#C1C1C1] w-[90%] md:w-[100%] col rounded-[20px] h-[50vh] lg:h-full"></div>
        </div>
        <div className="row grid sm:grid-cols-1 lg:grid-cols-1">
          <div className="border-none py-[20px]">
            <div className="w-[90%] md:w-full">
              <div className="flex justify-between items-center flex-wrap">
                <p className="lg:text-[3.5em] font-bold lg:leading-[50px] pt-10 pb-[9px] md: text-[2em] md:leading-[20px]">
                  Reinventing how people connect <br /> with their money.
                </p>
                <img
                  className="md: size-[80px] lg:size-[100px]"
                  src="/assets/img/sectwoVector.png"
                />
              </div>
              <p className="md:w-[60%] leading-[20px] text-justify pt-[9px] pr-[40px] sm:w-[100%]">
                Galileo is an open and connected financial technology platform
                operating on a large scale throughout North and South America
                and supporting transactions globally.
              </p>
            </div>
            <div className="bg-[#C1C1C1] w-[90%] md:w-[100%] mt-[60px] h-[50vh] rounded-[20px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSecTwo;
