import './MenuNavCategories.css'
import { useInfo } from '../../hooks/useInfo'
import { Link } from 'react-router-dom';
import { PopUp } from '../Pop-up/Pop-up';
import { postTask } from '../../services';

export const MenuNavCategories = () => {
    const { totalInfo } = useInfo();

    const id = 2;
    const task = {
        "id": 50,
        "title": "esto es una prueba",
        "description": "a ver que tal",
        "hour": "11:00",
        "date": "10/01/2023",
        "comp": "0"
    }

    const test = async () => {
        await postTask(task, id);

    }


    return (
        <menu>
            <nav className='navCategories'>
                {(totalInfo.length > 1) ? (
                    <ul>
                        {totalInfo.map(info =>
                            <Link key={info.category.id} to={`/category/${info.category.id}`}>
                                <li style={{ background: `linear-gradient(white,${info.category.color})` }}>
                                    {info.category.name}
                                </li>
                            </Link>
                        )}
                    </ul>
                ) : (

                    <p>No Categories found</p>
                )}

            </nav>
            <PopUp />
            <button onClick={test}>Test</button>
        </menu>
    )
}
