import React from "react";
import "./HomeSecFour.css";

function HomeSecFour() {
  return (
    <div className=" bg-[#136655] mb-[10px]">
      <div className="homeSecFourBg">
        <div className="row grid sm:grid-cols-1 lg:grid-cols-1">
          <div className="w-[90%] md:w-[80%] m-auto my-[70px]">
            <div className="flex justify-between items-center flex-wrap">
              <p className="w-[95%] leading-[45px] text-[#FFF] lg:w-[57%] lg:text-[3em] font-bold pb-[9px] md: text-[2.3em]">
                How today’s financial leaders are betting on baas.
              </p>
            </div>
            <p className="text-[#FFF] w-[70%] lg:w-[50%] leading-[20px] text-left md:text-justify pt-[9px] pr-[40px]">
              Galileo is an open and connected financial technology platform
              operating on a large scale throughout North and South America and
              supporting transactions globally.
            </p>
            <label className="inline-flex items-center gap-x-[8px] bg-[#E1FFA0] py-[23.5px] px-[20px] mt-[46px] text-black text-[14px]">
              <button>Download the Report</button>
              <img src="/assets/img/Icon.png" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSecFour;
