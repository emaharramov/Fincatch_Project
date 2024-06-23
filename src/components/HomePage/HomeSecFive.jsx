import React from "react";
import "./HomeSecFive.css";
import FinancialTech from "../UI/FinancialTech";

function HomeSecFive() {
  return (
    <div className="w-[110%] md:w-[100%] mb-[10px] mx-auto  bg-black">
      <div className="w-[90%] md:m-auto homeSecFiveBg pb-[170px]">
        <div className="row grid sm:grid-cols-1 lg:grid-cols-1">
          <div className="w-[90%] md:w-[60%] m-auto my-[70px]">
            <div className="flex justify-center items-center">
              <div className="w-[12px] h-[12px] bg-[#E1FFA0] rounded-[50%]"></div>
              <div className="text-[#E1FFA0] px-4 font-bold text-[1em]">
                FINANCIAL TECHNOLOGY
              </div>
            </div>
            <div className="text-white text-center text-[3em] font-semibold mt-[20px] mb-[70px]">
              Fincatch at a glance.
            </div>
            <div>
              <FinancialTech />
              <FinancialTech />
              <FinancialTech />
              <FinancialTech />
              <FinancialTech />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSecFive;
