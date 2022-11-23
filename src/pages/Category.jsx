import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useInfo } from "../hooks/useInfo";
import './category.css'

export const Category = () => {

    const { id: idCategory } = useParams();
    const [category, setCategory] = useState({});
    const {totalInfo} = useInfo();
    

    useEffect(()=> {
        setCategory({});
        console.log(totalInfo);
        if(totalInfo.length > 0) {
            setCategory (totalInfo.filter(info => info.category.id === parseInt(idCategory)));
        }
    }, [idCategory, totalInfo]);

    console.log(category);

    return (
    <>
        { category.length > 0 ? (
            <section>
                <h1 
                    style={{backgroundColor: category[0].category.color}}
                    className='category-title'
                >
                    <div className='category-icon'>{category[0].category.icon}</div>
                    {category[0].category.name}
                </h1>
                <ul>
                    <li>
                        <p></p>
                    </li>
                </ul>
            </section>
        ):( 
            <h2>Category not found</h2>
        )}
    </>
    
  )
}
