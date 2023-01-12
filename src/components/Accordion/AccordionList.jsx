import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import React from "react";

export const AccordionList = ({ tasks }) => {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen('');
    } else {
      setOpen(id);
    }
  };
  return (
    <div>
      <Accordion flush open={open} toggle={toggle}>
        {tasks.length > 0 ? (
          <AccordionItem>
            {tasks.map(task =>
              <li key={task.id}>
                <AccordionHeader targetId={(task.id).toString()}>{task.title}</AccordionHeader>
                <AccordionBody accordionId={(task.id).toString()}>
                  <ul>
                    <li>{task.description}</li>
                    <li>{task.hour}</li>
                    <li>{task.date}</li>
                    <button>Edit</button>
                  </ul>
                </AccordionBody>
              </li>
            )}
          </AccordionItem>
        ) : <p>Tasks not found</p>}
      </Accordion>
    </div>
  );
} 
