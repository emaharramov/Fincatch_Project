import React from "react";

function AboutSecthird() {
  return (
    <div className="bg-[#242528] w-[100%] mx-auto border-b-[1px]">
      <div className="w-[90%] md:w-[80%] pt-[130px] pb-[120px] mx-auto border-[#323438]">
        <p className="text-left text-[#D9F6EF] text-[13px]">Our mission</p>
        <p className="text-left text-[#EEEEEE] text-[24px] md:text-[34px] lg:text-[44px] leading-[44px] lg:leading-[74px]">
          We founded Finflow to empower tech people to make better financial
          decisions so they have the freedom to focus on what matters most.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-x-[30px] mt-14">
          <div className="bg-[#2B2C30] py-24 px-12 flex flex-col items-center justify-center rounded-[30px]">
            <img
              className="bg-[#79F4E4] w-[80px] h-[80px] p-[22px] rounded-[50%]"
              src="/assets/img/aboutIcon1.png"
            />
            <p className="text-white text-center mt-[44px] text-[24px] font-medium">
              Faster business banking, for everyone
            </p>
          </div>
          <div className="bg-[#2B2C30] py-24 px-12 flex flex-col items-center justify-center rounded-[30px]">
            <img
              className="bg-[#79F4E4] w-[80px] h-[80px] p-[22px] rounded-[50%]"
              src="/assets/img/aboutIcon2.png"
            />
            <p className="text-white text-center mt-[44px] text-[24px] font-medium">
              Finance management, made easy
            </p>
          </div>
          <div className="bg-[#2B2C30] py-24 px-12 flex flex-col items-center justify-center rounded-[30px]">
            <img
              className="bg-[#79F4E4] w-[80px] h-[80px] p-[22px] rounded-[50%]"
              src="/assets/img/aboutIcon3.png"
            />
            <p className="text-white text-center mt-[44px] text-[24px] font-medium">
              Faster business banking, for everyone
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSecthird;
