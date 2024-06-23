import React from "react";

function HomeSecSix() {
  return (
    <div className="w-[110%] m-auto md:w-[100%] bg-[#F5F6F8] mb-[10px]">
      <div className="w-[100%] md:m-auto">
        <div className="row grid sm:grid-cols-1 lg:grid-cols-1">
          <div className="flex flex-wrap md:flex-nowrap w-[90%] mb-[65px] md:mb-[50px] md:w-[80%] m-auto mt-[70px]">
            <div className="w-[100%] md:w-[80%] lg:w-[75%]">
              <p className="leading-[45px] text-[#222222]  lg:text-[3em] font-bold pb-[9px] md: text-[2.5em] pr-6">
                Our products, your solutions is the <br /> best online banking
                Providing.
              </p>
              <p className="text-[#222222] w-[100%] md:w-[80%] lg:w-[70%] leading-[20px] text-justify pt-[9px] pr-[40px]">
                From virtual cards to payment processing, pick your products and
                build your own frictionless, digital-first solution that you can
                adapt and innovate for maximum impact and revenue.
              </p>
              <label className="w-[80%] md:w-[initial] inline-flex items-center gap-x-[8px] bg-[#136655] py-[23.5px] px-[20px] mt-[46px] text-white border border-white text-[14px] font-bold">
                <button className="tracking-wide">Explore Our Platform</button>
                <img src="/assets/img/arrow-right.png" />
              </label>
            </div>
            <div className="relavite w-[300px] h-[300px]">
              <div className="absolute rounded-t-[20px]  w-[80%] md:w-[300px] h-[350px] overflow-hidden bg-[#C1C1C1] mr-0 mt-5 md:mt-0 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSecSix;
