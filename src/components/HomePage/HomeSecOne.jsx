import React from "react";
import "./MainSecOne.css";
import { LuArrowUpRight } from "react-icons/lu";

const HomeSecOne = () => {
  return (
    <div className="bg-[#f2f4f8] pb-[140px] mt-4">
      <div className="flex items-center justify-center pt-[100px] pb-[20px]">
        <p className="dot"></p>
        <p className="text-[#136655] font-semibold font-['Plus+Jakarta+Sans'] text-[16px] px-[8px]">
          CORE FEATURES
        </p>
      </div>
      <div className="text-center mb-[60px] font-semibold text-[48px] font-['Plus+Jakarta+Sans']">
        Great things together!
      </div>
      <div className="md:w-[80%] grid-container flex flex-col">
        <div className="row grid sm:grid-cols-1 lg:grid-cols-3">
          <div className="bg-white col cards border-none rounded-2xl">
            <img
              className="bg-[#24B277] p-[14px] rounded-[28px]"
              src="/assets/img/card-pos.png"
            />
            <p className="font-['Plus+Jakarta+Sans'] mt-[80px] mb-[89px] font-semibold text-[2em]">
              Digital & <br /> NeoBanking{" "}
            </p>
            <div className="flex items-center">
              <span className="w-[35px] h-[35px] rounded-[50%] border-solid border-[##22222227] border-[2px] flex justify-center items-center">
                <LuArrowUpRight className="text-[32px]" />
              </span>
              <p className="ml-[15px]">
                <a href="#" className="text-[14px]">
                  Read More
                </a>
              </p>
            </div>
          </div>
          <div className="bg-white col cards border-none rounded-2xl">
            <img
              className="bg-[#0072FF] p-[14px] rounded-[28px]"
              src="/assets/img/iconsec.svg"
            />
            <p className="font-['Plus+Jakarta+Sans'] mt-[80px] mb-[89px] font-semibold text-[2em]">
              B2B Business <br /> Payments System{" "}
            </p>
            <div className="flex items-center">
              <span className="w-[35px] h-[35px] rounded-[50%] border-solid border-[##22222227] border-[2px] flex justify-center items-center">
                <LuArrowUpRight className="text-[32px]" />
              </span>
              <p className="ml-[15px]">
                <a href="#" className="text-[14px]">
                  Read More
                </a>
              </p>
            </div>
          </div>
          <div className="bg-white col cards border-none rounded-2xl">
            <img
              className="bg-[#F3B12E] p-[14px] rounded-[28px]"
              src="/assets/img/chart-square.png"
            />
            <p className="font-['Plus+Jakarta+Sans'] mt-[80px] mb-[89px] font-semibold text-[2em]">
              Digital & <br /> Investing{" "}
            </p>
            <div className="flex items-center">
              <span className="w-[35px] h-[35px] rounded-[50%] border-solid border-[##22222227] border-[2px] flex justify-center items-center">
                <LuArrowUpRight className="text-[32px]" />
              </span>
              <p className="ml-[15px]">
                <a href="#" className="text-[14px]">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row grid sm:grid-cols-1 lg:grid-cols-2">
          <div className="bg-white  md:w-[initial] py-[60px] px-[40px] cards border-none rounded-2xl">
            <img
              className="bg-[#F3B12E] p-[14px] rounded-[28px]"
              src="/assets/img/chart-square.png"
            />
            <div className="flex justify-between items-center flex-wrap">
              <p className="w-[200px]  text-[2em] font-semibold font-[Plus+Jakarta+Sans] leading-10 my-14  inline-block">
                Cryptocurrency <br /> payments{" "}
              </p>
              <img
                className="w-[130px] h-[130px]"
                src="/assets/img/image637.png"
              />
            </div>
            <div className="flex items-center sm: mt-6">
              <span className="w-[35px] h-[35px] rounded-[50%] border-solid border-[##22222227] border-[2px] flex justify-center items-center">
                <LuArrowUpRight className="text-[32px]" />
              </span>
              <p className="ml-[15px]">
                <a href="#" className="text-[14px]">
                  Read More
                </a>
              </p>
            </div>
          </div>
          <div className="bg-white md:w-[initial] py-[60px] px-[40px] cards border-none rounded-2xl">
            <img
              className="bg-[#99D320] p-[14px] rounded-[28px]"
              src="/assets/img/flash-circle.png"
            />
            <div className="flex justify-between items-center flex-wrap">
              <p className="w-[200px] text-[2em] font-semibold font-[Plus+Jakarta+Sans] leading-10 my-14  inline-block">
                Quick Growth & <br /> Activation{" "}
              </p>
              <img
                className="w-[130px] h-[130px]"
                src="/assets/img/image637.png"
              />
            </div>
            <div className="flex items-center sm: mt-6">
              <span className="w-[35px] h-[35px] rounded-[50%] border-solid border-[##22222227] border-[2px] flex justify-center items-center">
                <LuArrowUpRight className="text-[32px]" />
              </span>
              <p className="ml-[15px]">
                <a href="#" className="text-[14px]">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSecOne;
