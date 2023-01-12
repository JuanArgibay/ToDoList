import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { AccordionList } from "../components/Accordion/AccordionList";
import { DarkMode } from "../components/DarkMode/DarkMode";
import { useInfo } from "../hooks/useInfo";
import { HomeIcon } from "../ressources/HomeIcon";
import './category.css'

export const Category = () => {

    const { id: idCategory } = useParams();
    const [category, setCategory] = useState({});
    const { totalInfo } = useInfo();
    const [tasks, setTasks] = useState([]);
    console.log(totalInfo);

    useEffect(() => {
        if (totalInfo.length > 0) {
            const [data] = (totalInfo.filter(info => `${info.category.id}` === idCategory));
            if (data) {
                const { category } = data;
                const { tasks } = category;
                setCategory(category);
                setTasks(tasks);
            }
        }
    }, [idCategory, totalInfo]);

    return (
        <>
            {Object.entries(category).length !== 0 ? (
                <>
                    <section
                        style={{ backgroundColor: category.color }}
                        className="category-header"
                    >
                        <div className="category-header-icons">
                            <Link to='/' className="home-icon">
                                <HomeIcon />
                            </Link>
                            <DarkMode></DarkMode>
                        </div>
                        <div className='category-title'>
                            <div className='category-icon'>
                                {category.icon}
                            </div>
                            <h1>
                                {category.name}
                            </h1>
                        </div>
                    </section>
                    <AccordionList className="category-tasks-list" tasks={tasks} />
                </>
            ) : (
                <h2>Category not found</h2>
            )}
        </>

    )
}
