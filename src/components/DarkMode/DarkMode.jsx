import './darkMode.css'
import {ToggleButtonFalse} from '../../ressources/TogglebuttonFalse'
import {ToggleButtonTrue} from '../../ressources/TogglebuttonTrue'

import { useState } from 'react'

export const DarkMode = () => {

  const [mode, setMode] = useState(false);
  const handleClick = () => {
    setMode(!mode);
  }

  return (
    <button 
      className='darkMode'
      onClick={handleClick}
      >
        {mode === false ? <ToggleButtonFalse/> : <ToggleButtonTrue/> }
    </button>
  )
}
