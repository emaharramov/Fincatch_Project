import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function HomeHead() {
  return (
    <>
      <div className={`flex flex-col items-center homeHead`}>
        <div className="text-white mt-[70px] text-center text-[32px] font-['Plus+Jakarta+Sans'] sm:text-[2em] md:text-[4em] md:w-[50%]">
          Experience the Convenience of Online Banking
        </div>
        <div className="flex flex-wrap gap-4 justify-center my-12">
          <span className="flex items-center text-white text-lg">
            <FaCheckCircle className="bg-white rounded-[50%] border-none mx-2 text-lg" />
            Account Management
          </span>
          <span className="flex items-center text-white text-lg">
            <FaCheckCircle className="bg-white rounded-[50%] border-none mx-2 text-lg" />
            Fund Transfer
          </span>
          <span className="flex items-center text-white text-lg">
            <FaCheckCircle className="bg-white rounded-[50%] border-none mx-2 text-lg" />
            Security & Trusted
          </span>
        </div>
        <label className="font-['Plus+Jakarta+Sans'] mt-[40px] font-semibold text-[14px] bg-[#E1FFA0]  py-6 px-10 flex">
          <button className="text-[#032622] mr-2">Start Your Free Trial</button>
          <img src="/assets/img/arrowrightHead.png" />
        </label>
      </div>
    </>
  );
}

export default HomeHead;
