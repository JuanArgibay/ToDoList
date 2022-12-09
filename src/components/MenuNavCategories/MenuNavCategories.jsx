import './MenuNavCategories.css'
import {useInfo} from '../../hooks/useInfo'
import { Link } from 'react-router-dom';
import { PopUp } from '../Pop-up/Pop-up';





export const MenuNavCategories = () => {

    const {totalInfo} = useInfo();

  return (
        <menu>
            <nav className='navCategories'>
                {(totalInfo.length > 1)? (
                <ul>
                    {totalInfo.map(info => 
                        <Link key ={info.category.id} to={`/category/${info.category.id}`}>
                            <li style={{background:`linear-gradient(white,${info.category.color})`}}>
                                {info.category.name}
                            </li>
                        </Link>
                        )}
                </ul>
                ) : (
                
                <p>No Categories found</p>
                )}
                
            </nav>
            <PopUp></PopUp>
        </menu>
  )
}
