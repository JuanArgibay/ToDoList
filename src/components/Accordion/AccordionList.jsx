import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

export const AccordionList =({tasks}, props) => {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen('');
    } else {
      setOpen(id);
    }
  };

  console.log(open);

  return (
    <div>
      <Accordion flush open={open} toggle={toggle}>
        {tasks.length > 0 ? (
        <AccordionItem>
          {tasks.map(task =>
          <li key={task.id}>
            <AccordionHeader targetId={task.id}>{task.title}</AccordionHeader>
            <AccordionBody accordionId={task.id}>
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



