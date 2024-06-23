import React from "react";
import "./contact.css";
import { CallCalling, Location, Sms } from "iconsax-react";
import ContactFag from "./ContactFag";
import Slider from "../PartnerSlider/Slider";

function ContactSecOne() {
  return (
    <div>
      <div className="w-[90%] lg:w-[80%] footSecOneBg lg:h-[100vh] pt-[130px] mx-auto">
        <p className="text-[#358A7F] font-bold text-[16px]">Contact</p>
        <div className="grid grid-cols-1 lg:flex justify-between">
          <div className="w-[100%] lg:w-[50%]">
            <p className="w-[100%] lg:w-[535px] text-[45px] lg:text-[64px] font-bold leading-[50px] lg:leading-[78px]">
              Don’t hesitate to reach out to us
            </p>
            <p className="w-[80%] mt-[10px]">
              Sodales mauris quam faucibus scelerisque risus malesuada nulla.
              Cursus enim quis elementum feugiat ut. Phasellus a viverra
              facilisis eu purus.
            </p>
            <div>
              <div className="mt-[65px]">
                <div className="flex items-center mb-[20px]">
                  <div className="p-[11px] bg-[#75EADA] rounded-[24px] border-[5px] border-[#79F4E4]">
                    <Sms size="16" color="#242528" />
                  </div>
                  <p className="text-[#242528] text-[18px] ml-[11px]">
                    hello@fincatch.com
                  </p>
                </div>
                <div className="flex items-center mb-[20px]">
                  <div className="p-[11px] bg-[#75EADA] rounded-[24px] border-[5px] border-[#79F4E4]">
                    <CallCalling size="16" color="#242528" />
                  </div>
                  <p className="text-[#242528] text-[18px] ml-[11px]">
                    (239) 555-0108
                  </p>
                </div>
                <div className="flex items-center mb-[20px]">
                  <div className="p-[11px] bg-[#75EADA] rounded-[24px] border-[5px] border-[#79F4E4]">
                    <Location size="16" color="#242528" />
                  </div>
                  <p className="text-[#242528] text-[18px] ml-[11px]">
                    4140 Parker Rd. Allentown, New Mexico 31134
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex my-[40px] lg:w-[40%] z-10 rounded-[18px] bg-white border-[1px] border-[#E9E9E9]">
            <div className="w-[90%] h-[90%] m-auto flex flex-col">
              <label className="text-[18px] mb-[4px]">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="text-[#76797C] text-[16px] lg:text-[18px] py-[14px] px-[20px] rounded-[8px] border-[1px] border-[#76797C]/50  mb-[16px] outline-none"
              />
              <label className="text-[18px] mb-[4px]">Email</label>
              <input
                type="text"
                placeholder="Work Email"
                className="text-[#76797C] text-[16px] lg:text-[18px] py-[14px] px-[20px] rounded-[8px] border-[1px] border-[#76797C]/50  mb-[16px] outline-none"
              />
              <label className="text-[18px] mb-[4px]">Company</label>
              <input
                type="text"
                placeholder="Company Name"
                className="text-[#76797C] text-[16px] lg:text-[18px] py-[14px] px-[20px] rounded-[8px] border-[1px] border-[#76797C]/50  mb-[16px] outline-none"
              />
              <label className="text-[18px] mb-[4px]">Message</label>
              <textarea
                placeholder="Your Message"
                className="text-[#76797C] text-[16px] lg:text-[18px] py-[14px] px-[20px] rounded-[8px] border-[1px] border-[#76797C]/50 mb-[16px] h-[166px] outline-none resize-none"
              ></textarea>
              <button className="bg-[#78F1E1] rounded-[8px] text-[16px] font-bold py-[14px]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-[-100px] z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8133.097250880069!2d49.8541400506094!3d40.37697628340911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1710507167799!5m2!1saz!2saz"
          className="w-[100%] h-[450px] border-none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="bg-[rgb(36,37,40)] py-[130px]">
        <div className="w-[90%] lg:w-[80%] m-auto">
          <div className="lg:h-[60vh] grid grid-cols-1 lg:grid-cols-2 gap-x-[118px]">
            <div className="mb-[50px] lg:mb-[0px]">
              <p className="text-white text-[45px] lg:text-[64px] font-semibold tracking-[-1px] leading-[78px]">
                Frequently Asked Questions
              </p>
              <p className="text-[#C2C2C2] lg:w-[445px] text-[18px] mt-[10px]">
                Vestibulum in donec non sit bibendum. Id justo lorem eget
                condimentum porttitor lacus velit scelerisque.
              </p>
            </div>
            <div>
              <ContactFag />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto py-[130px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:border-r-[1px] border-[#606060]">
            <p className="text-[34px] mb-[40px] lg:mb-[0px] lg:w-[420px] font-semibold text-[#242528]">
              Loved by marketing teams worldwide
            </p>
          </div>
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default ContactSecOne;
