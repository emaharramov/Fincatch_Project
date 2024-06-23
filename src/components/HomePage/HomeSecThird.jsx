import React, { useState } from "react";

function HomeSecThird() {
  const [buttonClicked, setButtonClicked] = useState("Cards Deposits");

  const handleButtonClick = (buttonName) => {
    setButtonClicked(buttonName);
  };

  return (
    <div className="w-[110%] md:w-[98%] m-auto  bg-[#F5F6F8] mb-[10px]">
      <div>
        <div className="row grid sm:grid-cols-1 lg:grid-cols-1">
          <div className="w-[90%] mb-[65px] md:mb-[50px] md:w-[80%] m-auto mt-[70px]">
            <div className="mb-[50px] border-b-[0px] md:border-b-[1px] border-black inline-flex justify-start flex-wrap md:justify-evenly">
              <div>
                <button
                  className={`shadow-lg  md:shadow-none duration-[.3s] text-[14px] px-[23px] py-[13px] md:px-[33px] md:py-[23px] ${
                    buttonClicked === "Cards Deposits"
                      ? "bg-[#136655] text-white"
                      : ""
                  }`}
                  onClick={() => handleButtonClick("Cards Deposits")}
                >
                  Cards Deposits
                </button>
              </div>
              <div>
                <button
                  className={`duration-[.3s] text-[14px] px-[23px] py-[13px] md:px-[33px] md:py-[23px] shadow-lg  md:shadow-none ${
                    buttonClicked === "Payments & Transfers"
                      ? "bg-[#136655] text-white"
                      : ""
                  }`}
                  onClick={() => handleButtonClick("Payments & Transfers")}
                >
                  Payments & Transfers
                </button>
              </div>
              <div>
                <button
                  className={`duration-[.3s] text-[14px] px-[23px] py-[13px] md:px-[33px] md:py-[23px] shadow-lg  md:shadow-none ${
                    buttonClicked === "Credit & Lending"
                      ? "bg-[#136655] text-white"
                      : ""
                  }`}
                  onClick={() => handleButtonClick("Credit & Lending")}
                >
                  Credit & Lending
                </button>
              </div>
              <div>
                <button
                  className={`duration-[.3s] text-[14px] px-[23px] py-[13px] md:px-[33px] md:py-[23px] shadow-lg  md:shadow-none ${
                    buttonClicked === "Data & Analytics"
                      ? "bg-[#136655] text-white"
                      : ""
                  }`}
                  onClick={() => handleButtonClick("Data & Analytics")}
                >
                  Data & Analytics
                </button>
              </div>
              <div>
                <button
                  className={`duration-[.3s] text-[14px] px-[23px] py-[13px] md:px-[33px] md:py-[23px] shadow-lg  md:shadow-none ${
                    buttonClicked === "Risk & Compliance"
                      ? "bg-[#136655] text-white"
                      : ""
                  }`}
                  onClick={() => handleButtonClick("Risk & Compliance")}
                >
                  Risk & Compliance
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center flex-wrap">
              <p className="pr-2 md:w-[80%] md:pr-0 leading-[45px] text-[#222222] lg:w-[77%] lg:text-[3em] font-bold pb-[9px] md: text-[2.5em]">
                Our products, your solutions is the best online banking
                Providing.
              </p>
            </div>
            <div>
              <div>
                <p className="text-[#222222] md:w-[80%] lg:w-[70%] leading-[20px] text-justify pt-[9px] pr-[40px]">
                  From virtual cards to payment processing, pick your products
                  and build your own frictionless, digital-first solution that
                  you can adapt and innovate for maximum impact and revenue.
                </p>
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between w-[100%]">
                  <div className="flex flex-wrap items-center justify-between w-[70%] mr-4">
                    <label className="inline-flex items-center gap-x-[8px] bg-[#136655] py-[23.5px] px-[20px] mt-[46px] text-white border border-white text-[14px] font-bold">
                      <button className="tracking-wide">
                        Explore Our Platform
                      </button>
                      <img src="/assets/img/arrow-right.png" />
                    </label>
                    <p className="inline-flex flex-col w-[80%] mt-5 lg:w-[40%] ">
                      Seamless and secure transactional experiences are the
                      baseline for payment processing and money.
                      <p className="flex items-center pt-11 font-semibold">
                        Explore Payments & Transfers
                        <img
                          className="h-[10px] ml-4"
                          src="/assets/img/Icon (1).png"
                        />
                      </p>
                    </p>
                  </div>
                  <div className="relavite w-[300px] h-[300px]">
                    <div className="absolute rounded-t-[20px]  w-[80%] md:w-[300px] h-[350px] overflow-hidden bg-[#C1C1C1] mr-0 mt-5 md:mt-0 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSecThird;
