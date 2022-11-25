import { Calendar } from "../components/Calendar/Calendar"
import { HomeDailyTasks } from "../components/HomeDailyTasks/HomeDailyTasks"
import { MenuNavCategories } from "../components/MenuNavCategories/MenuNavCategories"
import { AddNewTask } from "../components/AddNewTask/AddNewTask";
import './home.css'
import { DarkMode } from "../components/DarkMode/DarkMode";
import { useState } from "react";


export const Home = () => {

    const [date, setDate] = useState(new Date());
      console.log(date);

  return (
        <>
            <header className="home">
                <h1>ListU</h1>
                <DarkMode></DarkMode>
            </header>
            <main className="homeMain">
                <Calendar date={date} setDate={setDate}/>
                <MenuNavCategories/>
                <HomeDailyTasks date={date}></HomeDailyTasks>
            </main>
            <AddNewTask/>
        </>
  )
}
