import React from "react";
import { LuPlus } from "react-icons/lu";

function AboutCards() {
  return (
    <>
      <div>
        <div className="h-[300px] bg-[#6BEEDD] rounded-[16px]"></div>
        <div className="flex justify-between items-center my-[10px]">
          <div className="text-center">
            <p className="text-[24px] font-semibold">Aaron Hyde</p>
            <p className="text-[12px] text-[#242528]">Co-founder and CEO</p>
          </div>
          <div className="p-[12px] bg-[#F1F3F3] rounded-[26px] cursor-pointer">
            <LuPlus className="text-[20px]" />
          </div>
        </div>
      </div>
      <div>
        <div className="h-[300px] bg-[#6BEEDD] rounded-[16px]"></div>
        <div className="flex justify-between items-center my-[10px]">
          <div className="text-center">
            <p className="text-[24px] font-semibold">Aaron Hyde</p>
            <p className="text-[12px] text-[#242528]">Co-founder and CEO</p>
          </div>
          <div className="p-[12px] bg-[#F1F3F3] rounded-[26px] cursor-pointer">
            <LuPlus className="text-[20px]" />
          </div>
        </div>
      </div>
      <div>
        <div className="h-[300px] bg-[#3B6D6D] rounded-[16px]"></div>
        <div className="flex justify-between items-center my-[10px]">
          <div className="text-center">
            <p className="text-[24px] font-semibold">Aaron Hyde</p>
            <p className="text-[12px] text-[#242528]">Co-founder and CEO</p>
          </div>
          <div className="p-[12px] bg-[#F1F3F3] rounded-[26px] cursor-pointer">
            <LuPlus className="text-[20px]" />
          </div>
        </div>
      </div>
      <div>
        <div className="h-[300px] bg-[#E6E0CE] rounded-[16px]"></div>
        <div className="flex justify-between items-center my-[10px]">
          <div className="text-center">
            <p className="text-[24px] font-semibold">Aaron Hyde</p>
            <p className="text-[12px] text-[#242528]">Co-founder and CEO</p>
          </div>
          <div className="p-[12px] bg-[#F1F3F3] rounded-[26px] cursor-pointer">
            <LuPlus className="text-[20px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCards;
