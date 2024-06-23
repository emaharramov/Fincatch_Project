import React from "react";

function PricingComponent() {
  return (
    <div className="flex justify-between flex-wrap py-0 md:py-20">
      <div className="text-[#242528] w-full md:w-[30%] flex flex-col justify-center items-center bg-white  py-[60px] rounded-[16px]">
        <p className="text-[#358A7F] text-[12px] tracking-[1px] inline border-[2px] py-[10px] px-[16px] border-[#358A7F] rounded-[20px]">
          Free
        </p>
        <div className="mt-[30px] flex justify-center">
          <p className="text-[72px] font-bold tracking-[1px]">$0</p>
          <p className="text-[#76797C] mt-[25px] ml-[4px] text-[14px] font-['Poppins'] font-normal">
            / MO
          </p>
        </div>
        <div className="mt-[30px]">
          <span className="flex items-center mb-[1px]">
            <img src="/assets/img/Solid.png" />
            <p className="text-[17px] lg:text-[20px] font-medium ml-[16px]">
              100MB Cloud storage
            </p>
          </span>
          <span className="flex items-center mb-[1px]">
            <img src="/assets/img/Solid.png" />
            <p className="text-[17px] lg:text-[20px] font-medium ml-[16px]">
              100+ prompt templates
            </p>
          </span>
          <span className="flex items-center mb-[1px]">
            <img src="/assets/img/Solid.png" />
            <p className="text-[17px] lg:text-[20px] font-medium ml-[16px]">
              5 projects
            </p>
          </span>
          <span className="flex items-center mb-[1px]">
            <img src="/assets/img/Solid.png" />
            <p className="text-[17px] lg:text-[20px] font-medium ml-[16px]">
              24/7 support
            </p>
          </span>
          <div className="flex justify-center">
            <button className="shadow-yeni text-center text-[16px] font-bold text-white mt-[74px] py-[27px] px-[47px] bg-[#242528] inline border-[2px] border-[#27CBF9] rounded-[16px]">
                Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="text-[#242528] w-full md:w-[30%] flex flex-col justify-center items-center bg-[#79F4E4]  py-[60px] rounded-[16px]">
        <p className="text-[#358A7F] text-[12px] tracking-[1px] inline border-[2px] py-[10px] px-[16px] border-[#358A7F] rounded-[20px]">
          Pro
        </p>
        <div className="mt-[30px] flex justify-center">
          <p className="text-[72px] font-bold tracking-[1px]">$50</p>
          <p className="text-[#76797C] mt-[25px] ml-[4px] text-[14px] font-['Poppins'] font-normal">
            / MO
          </p>
        </div>
        <div className="mt-[30px]">
          <span className="flex items-center mb-[1px]">
            <img src="/assets/img/Solid.png" />
            <p className="text-[17px] lg:text-[20px] font-medium ml-[16px]">
              100MB Cloud storage
            </p>
          </span>
          <span className="flex items-center mb-[1px]">
            <img src="/assets/img/Solid.png" />
            <p className="text-[17px] lg:text-[20px] font-medium ml-[16px]">
              100+ prompt templates
            </p>
          </span>
          <span className="flex items-center mb-[1px]">
            <img src="/assets/img/Solid.png" />
            <p className="text-[17px] lg:text-[20px] font-medium ml-[16px]">
              5 projects
            </p>
          </span>
          <span className="flex items-center mb-[1px]">
            <img src="/assets/img/Solid.png" />
            <p className="text-[17px] lg:text-[20px] font-medium ml-[16px]">
              24/7 support
            </p>
          </span>
          <div className="flex justify-center">
            <button className="shadow-yeni text-center text-[16px] font-bold text-white mt-[74px] py-[27px] px-[47px] bg-[#242528] inline border-[2px] border-[#27CBF9] rounded-[16px]">
                Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="text-[#242528] w-full md:w-[30%] flex flex-col justify-center items-center bg-white  py-[60px] rounded-[16px]">
        <p className="text-[#358A7F] text-[12px] tracking-[1px] inline border-[2px] py-[10px] px-[16px] border-[#358A7F] rounded-[20px]">
          Pro +
        </p>
        <div className="mt-[30px] flex justify-center">
          <p className="text-[72px] font-bold tracking-[1px]">$60</p>
          <p className="text-[#76797C] mt-[25px] ml-[4px] text-[14px] font-['Poppins'] font-normal">
            / MO
          </p>
        </div>
        <div className="mt-[30px]">
          <span className="flex items-center mb-[1px]">
            <img src="/assets/img/Solid.png" />
            <p className="text-[17px] lg:text-[20px] font-medium ml-[16px]">
              100MB Cloud storage
            </p>
          </span>
          <span className="flex items-center mb-[1px]">
            <img src="/assets/img/Solid.png" />
            <p className="text-[17px] lg:text-[20px] font-medium ml-[16px]">
              100+ prompt templates
            </p>
          </span>
          <span className="flex items-center mb-[1px]">
            <img src="/assets/img/Solid.png" />
            <p className="text-[17px] lg:text-[20px] font-medium ml-[16px]">
              5 projects
            </p>
          </span>
          <span className="flex items-center mb-[1px]">
            <img src="/assets/img/Solid.png" />
            <p className="text-[17px] lg:text-[20px] font-medium ml-[16px]">
              24/7 support
            </p>
          </span>
          <div className="flex justify-center">
            <button className="shadow-yeni text-center text-[16px] font-bold text-white mt-[74px] py-[27px] px-[47px] bg-[#242528] inline border-[2px] border-[#27CBF9] rounded-[16px]">
                Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingComponent;
