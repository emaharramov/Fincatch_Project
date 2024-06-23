import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function AboutFag() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="py-[100px]">
      <Accordion
        className="mb-[40px] border-[#323438] border-b-[1px]"
        open={open === 1}
        icon={
          <img
            className="p-[16px] bg-[#ffffff16] rounded-[50%]"
            id={1}
            open={open}
            src="/assets/img/arrowDown.png"
          />
        }
      >
        <AccordionHeader
          onClick={() => {
            handleOpen(1);
          }}
          className="text-[#EEEEEE] text-[25px] md:text-[40px] border-none"
        >
          Teamwork
        </AccordionHeader>
        <AccordionBody className="text-[#EEEEEE] text-left text-[16px] md:text-[18px] max-w-[848px] my-[20px]">
          We know that time is of the essence when it comes to securing a
          mortgage, which is why we’ve made our application process as quick and
          easy as possible.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-[40px] border-[#323438] border-b-[1px]"
        open={open === 2}
        icon={
          <img
            className="p-[16px] bg-[#ffffff16] rounded-[50%]"
            id={2}
            open={open}
            src="/assets/img/arrowDown.png"
          />
        }
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="text-[#EEEEEE] text-[25px] md:text-[40px] border-none"
        >
          Innovation
        </AccordionHeader>
        <AccordionBody className="text-[#EEEEEE] text-left text-[16px] md:text-[18px] max-w-[848px] my-[20px]">
          We know that time is of the essence when it comes to securing a
          mortgage, which is why we’ve made our application process as quick and
          easy as possible.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-[40px] border-[#323438] border-b-[1px]"
        open={open === 3}
        icon={
          <img
            className="p-[16px] bg-[#ffffff16] rounded-[50%]"
            id={3}
            open={open}
            src="/assets/img/arrowDown.png"
          />
        }
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="text-[#EEEEEE] text-[25px] md:text-[40px] border-none"
        >
          Freedom
        </AccordionHeader>
        <AccordionBody className="text-[#EEEEEE] text-left text-[16px] md:text-[18px] max-w-[848px] my-[20px]">
          We know that time is of the essence when it comes to securing a
          mortgage, which is why we’ve made our application process as quick and
          easy as possible.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-[40px] border-[#323438] border-b-[1px]"
        open={open === 4}
        icon={
          <img
            className="p-[16px] bg-[#ffffff16] rounded-[50%]"
            id={4}
            open={open}
            src="/assets/img/arrowDown.png"
          />
        }
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="text-[#EEEEEE] text-[25px] md:text-[40px] border-none"
        >
          Integrity
        </AccordionHeader>
        <AccordionBody className="text-[#EEEEEE] text-left text-[16px] md:text-[18px] max-w-[848px] my-[20px]">
          We know that time is of the essence when it comes to securing a
          mortgage, which is why we’ve made our application process as quick and
          easy as possible.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-[40px] border-[#323438] border-b-[1px]"
        open={open === 5}
        icon={
          <img
            className="p-[16px] bg-[#ffffff16] rounded-[50%]"
            id={5}
            open={open}
            src="/assets/img/arrowDown.png"
          />
        }
      >
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="text-[#EEEEEE] text-[25px] md:text-[40px] border-none"
        >
          Ambition
        </AccordionHeader>
        <AccordionBody className="text-[#EEEEEE] text-left text-[16px] md:text-[18px] max-w-[848px] my-[20px]">
          We know that time is of the essence when it comes to securing a
          mortgage, which is why we’ve made our application process as quick and
          easy as possible.
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default AboutFag;
