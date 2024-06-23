import "./Footer.css";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <footer className="w-[100%] m-auto md:w-[100%] bg-[#014444] mb-[10px] pb-[65px] pt-[70px]">
        <div className="w-[90%] lg:w-[80%] m-auto flex  flex-wrap justify-between items-center">
          <p className=" leading-[45px] text-[#fff]  lg:text-[3em] font-bold pb-[9px] md: text-[2.5em]">
            Let's simplify fintech.
          </p>
          <div className="flex justify-start flex-wrap">
            <label className="inline-flex items-center gap-x-[8px] bg-[#E1FFA0] py-[17.5px] mr-2 mb-[20px] md:mb[0px] mt-[20px] md:mt[0px] px-[20px] text-black text-[14px]">
              <button>Download the Report</button>
              <img src="/assets/img/Icon.png" />
            </label>
            <label className="inline-flex items-center gap-x-[8px]  bg-[#136655] py-[17.5px] mb-[20px] md:mb[0px] mt-[20px] md:mt[0px] px-[20px] text-black text-[14px]">
              <button className="text-white">Contact Sales</button>
              <img src="/assets/img/arrow-right.png" />
            </label>
          </div>
        </div>
        <div className="w-[90%] lg:w-[80%] mt-[70px] py-[60px] border-y-[1px] border-[#0c6c6c] footMenu mx-auto row  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col">
            <div className="flex">
              <img className="mr-9 w-7 h-7" src="/assets/img/Vector.png" />
              <p className="text-white text-[18px]">FINCATCH</p>
            </div>

            <div>
              <p className="text-white text-[20px] mt-[19px]">
                Financial Technologies, LLC 2023
              </p>
              <p className="text-[#95C2C2] text-[16px] mt-[30px]">
                Galileo Financial Technologies, LLC is a technology company, not
                a bank. provide bankin
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-white text-[16px] font-semibold">Solutions</p>
            <span>
              <a href="#">Customer Service</a>
            </span>
            <span>
              <a href="#">Program Management</a>
            </span>
            <span>
              <a href="#">Customer Service</a>
            </span>
            <span>
              <a href="#">Disputes Operations</a>
            </span>
            <span>
              <a href="#">Fraud Operations</a>
            </span>
            <span>
              <a href="#">Career of 2023</a>
            </span>
            <span>
              <a href="#">Banking Code</a>
            </span>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-white text-[16px] font-semibold">Products</p>
            <span>
              <a href="#">Customer Service</a>
            </span>
            <span>
              <a href="#">Program Management</a>
            </span>
            <span>
              <a href="#">Customer Service</a>
            </span>
            <span>
              <a href="#">Disputes Operations</a>
            </span>
            <span>
              <a href="#">Fraud Operations</a>
            </span>
            <span>
              <a href="#">Career of 2023</a>
            </span>
            <span>
              <a href="#">Banking Code</a>
            </span>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-white text-[16px] font-semibold">Platform</p>
            <span>
              <a href="#">Customer Service</a>
            </span>
            <span>
              <a href="#">Program Management</a>
            </span>
            <span>
              <a href="#">Customer Service</a>
            </span>
            <span>
              <a href="#">Disputes Operations</a>
            </span>
            <span>
              <a href="#">Fraud Operations</a>
            </span>
            <span>
              <a href="#">Career of 2023</a>
            </span>
            <span>
              <a href="#">Banking Code</a>
            </span>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-white text-[16px] font-semibold">Services</p>
            <span>
              <a href="#">Customer Service</a>
            </span>
            <span>
              <a href="#">Program Management</a>
            </span>
            <span>
              <a href="#">Customer Service</a>
            </span>
            <span>
              <a href="#">Disputes Operations</a>
            </span>
            <span>
              <a href="#">Fraud Operations</a>
            </span>
            <span>
              <a href="#">Career of 2023</a>
            </span>
            <span>
              <a href="#">Banking Code</a>
            </span>
          </div>
        </div>
        <div className="w-[90%] lg:w-[80%] m-auto">
          <div className="my-[30px] grid grid-cols-1 md:flex justify-between">
            <div>
              <p className="text-[14px] text-white">FOLLOW US</p>
              <div className="flex items-center icons mt-[30px]">
                <div className="p-2 bg-[#024F4F] rounded-[24px]">
                  <CiFacebook className="text-[30px]" />
                </div>
                <div className="p-2 bg-[#024F4F] rounded-[24px] mx-2">
                  <CiTwitter className="text-[30px]" />
                </div>
                <div className="p-2 bg-[#024F4F] rounded-[24px]">
                  <CiInstagram className="text-[30px]" />
                </div>
              </div>
            </div>
            <div className="mt-[15px] md:mt-[0]">
              <p className="text-[14px] text-white">CONTACT</p>
              <div className="flex items-center icons mt-[30px]">
                <label className="inline-flex items-center gap-x-[8px] bg-[#136655] py-[17.5px] mb-[20px] px-[20px] text-[#E1FFA0] text-[18px]">
                  <img src="/assets/img/gGroup.png" />
                  <button>800 398-3535</button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-[90%] lg:w-[80%] mb-3 mx-auto flex justify-between flex-wrap">
        <div>
          <p className="text-[14px] text-[#222]">
            Copyright © 2023 all right reserved
          </p>
        </div>
        <div>
          <p className="text-[14px] text-[#222]">Coding by Emil M.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
