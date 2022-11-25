import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const PopUp = (args, task) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  console.log(task);

  return (
    <div>
        <label htmlFor='category'></label>
       <li name='category' onClick={toggle}  className='category-task-container'>
            <h3>titulo</h3>
            <p>fecha</p>
        </li>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          This is a text for the Pop-up
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

