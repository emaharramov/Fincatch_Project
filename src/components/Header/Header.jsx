import React, { useState } from "react";
import "./Header.css";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HomeHead from "../HomePage/HomeHead";
import AboutHead from "../AboutPage/AboutHead";
import PrincgHead from "../Pricing/PrincgHead";
import BlogHead from "../BlogPage/BlogHead";
import ContactHead from "../ContactPage/ContactHead";

const Header = (props) => {
  const { className, classNameTx, menuTxt, hidden, page } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setShowMenu(!showMenu);
  };

  return (
    <div className="font-bold">
      <div className="headerF w-[89%] text-center xs:w-full flex items-center justify-between flex-col md:flex-row">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center py-2">
            <FaEnvelopeOpen />
            <p className="ml-[10.67px] w-[171px]">NEEDHELP@COMPANY.COM</p>
          </div>
          <div className="flex items-center py-2 mx-10">
            <FaPhone />
            <p className="ml-[10.67px] w-[111px]">+ 1 (307) 776-0608</p>
          </div>
        </div>
        <div>
          <div>Reinventing how people connect with their money.</div>
        </div>
      </div>
      <div className={`m-auto pb-36 ${className}`}>
        <div>
          <div className="headerF flex justify-between pt-8 px-8 lg:px-0">
            <div className={`flex  items-center ${classNameTx}`}>
              <img
                className="vector ml-[-9px] w-7 h-7 mr-9"
                src="/assets/img/Vector.png"
              />
              FINCATCH
            </div>
            <div>
              <div>
                <ul className={`menu ${menuTxt} hidden lg:flex`}>
                  <li>
                    <Link to="/">Home Page</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog & Article</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact us</Link>
                  </li>
                </ul>
              </div>
              <div
                className={`absolute z-10 h-[100vh] text-black w-full top-[0px] left-0 lg:hidden ${
                  showMenu ? "bg-[#00000089] flex showMenuOp" : "bg-[initial] hidden showMenuOp"
                }`}
                onClick={handleClick}
              >
                <div
                  className={`absolute showMenuOp rounded-r-[10px] z-10 h-[50vh] text-black w-[70%] top-[90px] left-0 lg:hidden ${
                    showMenu ? "bg-[#fff] showMenuOp" : "bg-[initial] showMenuOp"
                  }`}
                >
                  <ul
                    className={`menu text-black flex-col ${
                      showMenu ? "menuGoster" : "menuGosterme"
                    }`}
                  >
                    <div className="h-[50vh] flex flex-col justify-evenly">
                      <li
                        className="text-[13px] cursor-pointer hover:shadow-[#33333370] border-b-[1px] shadow-xl shadow-[#33333341]"
                      >
                        <Link to="/">Home Page</Link>
                      </li>
                      <li
                        className="text-[13px] cursor-pointer hover:shadow-[#33333370] border-b-[1px] shadow-xl shadow-[#33333341]"
                      >
                        <Link to="/about">About Us</Link>
                      </li>
                      <li
                        className="text-[13px] cursor-pointer hover:shadow-[#33333370] border-b-[1px] shadow-xl shadow-[#33333341]"
                      >
                        <Link to="/pricing">Pricing</Link>
                      </li>
                      <li
                        className="text-[13px] cursor-pointer hover:shadow-[#33333370] border-b-[1px] shadow-xl shadow-[#33333341]"
                      >
                        <Link to="/blog">Blog & Article</Link>
                      </li>
                      <li
                        className="text-[13px] cursor-pointer hover:shadow-[#33333370] border-b-[1px] shadow-xl shadow-[#33333341]"
                      >
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-white">
              <button
                className={`hamburger hamburger--collapse ${
                  isActive ? "is-active" : ""
                } lg:hidden`}
                type="button"
                onClick={handleClick}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner is_active"></span>
                </span>
              </button>

              <img
                className={`${hidden} hidden lg:flex`}
                style={{ width: "25px", height: "25px", padding: "3px" }}
                src="/assets/img/category.png"
              />
            </div>
          </div>

          {page === "home" ? (
            <HomeHead />
          ) : page === "aboutus" ? (
            <AboutHead />
          ) : page === "pricing" ? (
            <PrincgHead />
          ) : page === "blog" ? (
            <BlogHead />
          ) : page === "contact" ? (
            <ContactHead />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
