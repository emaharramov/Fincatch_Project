import AboutFag from "./AboutFag";

function AboutSecFour() {
  return (
    <div className="w-[100%] lg:h-[120vh] m-auto bg-[#242528]">
      <div className="w-[90%] text-center mx-auto aboutSecFour text-white">
        <div className="w-[80%] m-auto">
          <p className="text-[#D9F6EF] text-[13px] font-medium pt-[120px]">
            Our values
          </p>
          <p className="text-[#EEEEEE] text-[32px] font-semibold">
            What we stand for
          </p>
          <AboutFag />
        </div>
      </div>
    </div>
  );
}

export default AboutSecFour;
