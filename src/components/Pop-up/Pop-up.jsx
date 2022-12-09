import './pop-up.css'
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AddIcon } from '../../ressources/AddIcon';

export const PopUp = (args, task) => {
  const [modal, setModal] = useState(false);
  const icons = ['🌍','👩‍👩‍👦','💪','🏘️','🔖','🚖','📺','📼'];
  const [name, setName] = useState('');
  const [color, setColor] = useState('transparent');
  const [icon, setIcon] = useState(icons[0]);
 

  const toggle = () => setModal(!modal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    toggle();
    console.log(icon);
    console.log(name);
    console.log(color);
  }

  return (
    <div>
        <Button onClick={toggle}>
          <AddIcon></AddIcon>
        </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Add new category</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <fieldset> 
              <label htmlFor='name'>Whrite a name</label>
              <input type='text' name='name' onChange={(e) => setName(e.target.value)}></input>
            </fieldset>
            <fieldset>
              <label htmlFor='icon'>Select an icon</label>
              <select name='icon' onChange={(e) => setIcon(e.target.value)}>
              {icons.map((icon, index) => <option key={index}>{icon}</option>)}
              </select>
            </fieldset>
            <fieldset> 
              <label htmlFor='color'>Whrite the color</label>
              <input type='text' name='color' placeholder= 'Example: E1C516' onChange={(e) => setColor(e.target.value)}></input>
            </fieldset>
              <Button color="primary">
              Submit
              </Button>{' '}
              <Button color="secondary" onClick={() => toggle}>
                Cancel
              </Button>
          </form>
          
        </ModalBody>
        <ModalFooter>
         
        </ModalFooter>
      </Modal>
    </div>
  );
}

