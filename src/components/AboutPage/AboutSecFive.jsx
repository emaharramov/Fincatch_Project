import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import AboutCards from '../AboutPage/AboutCards';

function AboutSecFive() {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-[70px] md:py-[130px]">
      <div>
        <p className="text-[#242528] text-[34px] md:text-[64px] font-semibold">
          Designed to give entrepreneurs the banking experience they deserve.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[73px] md:mt-[113px]">
          <div className="bg-[#D9D9D9] w-[100%] md:w-[80%] rounded-[16px] border-[10px]"></div>
          <div>
            <div className="flex justify-between items-end border-b-[1px]">
              <div className="text-[100px] text-[#000000] font-bold">20+</div>
              <div className="text-[18px] w-[100px] pb-[35px] text-[#76797C]">
                Years of experience
              </div>
            </div>
            <div className="mt-[70px] md:mt-[150px]">
              <p className="text-[18px] text-[#76797C]">
                Etiam pulvinar vestibulum tellus nisi. Sed velit ultrices morbi
                id egestas fusce egestas lectus urna. Cras mattis cras ac amet
                purus malesuada etiam amet nec. Id ut eu non cum risus feugiat
                eu lacus.
              </p>
              <div className="flex items-center mt-[60px]">
                <span className="w-[35px] h-[35px] rounded-[50%] border-solid border-[##22222227] border-[2px] flex justify-center items-center">
                  <LuArrowUpRight className="text-[32px]" />
                </span>
                <p className="ml-[15px]">
                  <a href="#" className="text-[16px]">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[70px] md:mt-[130px]">
          <p className="text-[32px] md:text-[64px]">The founders</p>
          <p className="text-[#76797C] text-[18px] lg:w-[518px] leading-[28px]">
            Proin posuere hendrerit at magna sit condimentum aenean. Penatibus
            nibh egestas risus et metus libero. Sem odio eu.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[60px]">
            <AboutCards />
          </div>
        </div>
        <div className="mt-[130px] border-[20px] rounded-[16px] pt-[40px] pb-[55px] flex flex-col justify-center items-center">
          <p className="text-[#242528] text-[32px] lg:text-[64px] font-bold">
            Interested to join our team?
          </p>
          <p className="text-[#919293] text-[20px] mt-[10px] mb-[30px] w-[90%] text-justify md:w-[50%]">
            Natoque tellus aliquam aenean justo consequat semper adipiscing.
            Facilisis vestibulum pretium ut viverra malesuada.
          </p>
          <label className="rounded-[5px] font-['Plus+Jakarta+Sans'] w-m-[285px] font-semibold text-[14px] bg-[#242528]  py-[20px] px-[20px] flex justify-evenly">
            <button className="text-[#FFFFFF] mr-2">View Open Positions</button>
            <img src="/assets/img/arrow-right.png" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default AboutSecFive;
