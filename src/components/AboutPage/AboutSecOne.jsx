import React from "react";

function AboutSecOne() {
  return (
    <div className="w-[100%] my-[70px] lg:my-[130px] mx-auto">
      <h3 className="text-center text-[34px] leading-[38px] w-[80%] m-auto md:leading-[78px] font-medium">
        Your go to financial department.Your go to financial department.
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] md:w-[80%] mx-auto mt-[60px] lg:mt-[110px] gap-x-20">
        <div className="bg-gradient-to-b from-white to-[#76797C]/50 rounded-[39px]">
          <div className="flex justify-center items-center h-[35vh] lg:h-[100%]">
            <img
              src="/assets/img/playVector.png"
              className="p-[20px] bg-[#79F4E4] rounded-[50%]"
            />
          </div>
        </div>
        <div>
          <p className="text-[18px] text-[#76797C] mt-20 lg:mt-0">
            Sodales mauris quam faucibus scelerisque risus malesuada nulla.
            Cursus enim quis elementum feugiat ut. Phasellus a viverra facilisis
            eu purus. Et risus magna dis nisl nulla sed diam.
          </p>
          <div className="grid mt-[50px] gap-6">
            <div className="row md:grid-cols-2">
              <div className="col p-0 pt-[20px] pb-[56px] text-center rounded-[16px]">
                <div className="text-[56px]">2018</div>
                <div className="text-[18px]">Year founded</div>
              </div>
              <div className="col p-0 pt-[20px] pb-[56px] text-center rounded-[16px]">
                <div className="text-[56px]">30M</div>
                <div className="text-[18px]">Monthly users</div>
              </div>
            </div>
            <div className="col p-0 pt-8 pb-[56px] text-center rounded-[16px]">
              <div className="text-[56px]">99.9%</div>
              <div className="text-[18px]">Successful transactions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSecOne;
