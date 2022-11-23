import { AddIcon } from '../../ressources/AddIcon'
import './MenuNavCategories.css'



export const MenuNavCategories = () => {
  return (
        <menu>
            <nav className='navCategories'>
                <ul>
                    <li style={{background:'linear-gradient(white,#E1C516)'}}>
                        Work
                    </li>
                    <li style={{background:'linear-gradient(white,#F05D75)'}}>
                        Home
                    </li>
                    <li style={{background:'linear-gradient(white, #1696E1)'}}>
                        Healthy
                    </li>
                     <li style={{background:'linear-gradient(white,#999999)'}}>
                        Custom1
                    </li>
                     <li>
                        Custom2
                    </li>
                    <li>
                        Custom3
                    </li>
                </ul>
            </nav>
            <AddIcon></AddIcon>
        </menu>
  )
}
