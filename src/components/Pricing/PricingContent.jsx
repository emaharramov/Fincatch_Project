import React from "react";
import "./pricing.css";
import PricingComponent from "./PricingComponent";

function PricingContent() {
  return (
    <>
      <div className="bg-[#242528] py-[65px] md:py-[130px]">
        <div className="md:w-[80%] m-auto text-center">
          <p className="text-[#358A7F] font-bold text-[16px]">Pricing</p>
          <p className="text-white text-[32px] md:text-[64px] font-semibold">
            Plans and Pricing
          </p>
          <p className="text-[#76797C] text-[16px] md:text-[18px] w-[90%] lg:w-[483px] mx-auto">
            Sodales mauris quam faucibus scelerisque risus <br /> malesuada
            nulla. Cursus enim quis elementum feugiat ut.
          </p>
        </div>
        <div className="w-[90%] md:w-[90%] mx-auto mt-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
            <PricingComponent />
          </div>
        </div>
      </div>
      <div className="my-[130px] w-[90%] md:w-[80%] m-auto border-[20px] rounded-[16px] pt-[40px] pb-[55px] flex flex-col justify-center items-center">
        <p className="text-[#242528] text-center text-[32px] lg:text-[64px] font-bold">
          Interested to join our team?
        </p>
        <p className="text-[#919293] text-[20px] mt-[10px] mb-[30px] w-[90%] text-justify md:w-[50%]">
          Natoque tellus aliquam aenean justo consequat semper adipiscing.
          Facilisis vestibulum pretium ut viverra malesuada.
        </p>
        <label className="rounded-[5px] font-['Plus+Jakarta+Sans'] w-m-[285px] font-semibold text-[14px] bg-[#242528] py-[20px] px-[20px] flex justify-evenly">
          <button className="text-[#FFFFFF] mr-2">View Open Positions</button>
          <img src="/assets/img/arrow-right.png" alt="arrow" />
        </label>
      </div>
    </>
  );
}

export default PricingContent;
