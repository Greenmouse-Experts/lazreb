import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function Faq() {
  const [open, setOpen] = useState(false);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="text-lg border px-4 lg:px-8 text-primary">
          How can I rent a car?
        </AccordionHeader>
        <AccordionBody className="fw-500 lg:text-lg px-6">
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="text-lg border px-4 lg:px-8 text-primary mt-4">
          Is there refund for failed delivery?
        </AccordionHeader>
        <AccordionBody className="fw-500 lg:text-lg px-6">
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="text-lg border px-4 lg:px-8 text-primary mt-4">
          Can I lease my personal vehicle?
        </AccordionHeader>
        <AccordionBody className="fw-500 lg:text-lg px-6">
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)} className="text-lg border px-4 lg:px-8 text-primary mt-4">
          How long does delivery take?
        </AccordionHeader>
        <AccordionBody className="fw-500 lg:text-lg px-6">
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)} className="text-lg border px-4 lg:px-8 text-primary mt-4">
          What is the maximum amount for finance leasing?
        </AccordionHeader>
        <AccordionBody className="fw-500 lg:text-lg px-6">
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}