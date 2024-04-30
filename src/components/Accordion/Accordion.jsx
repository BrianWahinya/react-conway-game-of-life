import {
  UncontrolledAccordion as ReactAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

import "./css/accordion.css";

const generateAccordItems = (items) =>
  items.map((item) => {
    const { id, header, content } = item;
    return (
      <AccordionItem key={id}>
        <AccordionHeader targetId={id}>{header}</AccordionHeader>
        <AccordionBody accordionId={id}>{content}</AccordionBody>
      </AccordionItem>
    );
  });

const Accordion = ({ accordItems }) => {
  if (accordItems.length < 1) {
    return <></>;
  }

  return (
    <ReactAccordion defaultOpen={accordItems[0].id}>
      {generateAccordItems(accordItems)}
    </ReactAccordion>
  );
};

export default Accordion;
