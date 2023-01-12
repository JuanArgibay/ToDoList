import { useState } from "react";
import { postCategory } from '../../services';
import { v4 as uuidv4 } from 'uuid'
import { Link, useNavigate } from "react-router-dom";

export const TestComponent = () => {
  const icons = ['🌍','👩‍👩‍👦','💪','🏘️','🔖','🚖','📺','📼'];
  const [name, setName] = useState('');
  const [color, setColor] = useState('transparent');
  const [icon, setIcon] = useState(icons[0]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return console.log('debes escribir almenos el nombre');
    const category = {
      "color": '#'+color,
      "icon": icon,
      "id": uuidv4(),
      "name": name,
      "tasks": [],
    }
    postCategory({category})
    navigate("/");
  }

  return (
    <form >
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
                <Link onClick={handleSubmit}>
                    submit 
                </Link>
                
              
              <Link to="/">
                Cancel
              </Link>
          </form>    
  )
}
