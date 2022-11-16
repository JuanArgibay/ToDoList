import { AddIcon } from '../../resourcess/AddIcon'
import './MenuNavCategories.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    Custom1: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    Work: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    Home: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    Healthy: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export const MenuNavCategories = () => {
  return (
        <menu>
            <Carousel responsive={responsive}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            </Carousel>
            <nav>
                <ul>
                    <li>
                        Work
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Healthy
                    </li>
                     <li>
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
