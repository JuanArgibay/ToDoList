import { Calendar } from "../components/Calendar/Calendar"
import { HomeDailyTasks } from "../components/HomeDailyTasks/HomeDailyTasks"
import { MenuNavCategories } from "../components/MenuNavCategories/MenuNavCategories"
import { AddNewTask } from "../components/AddNewTask/AddNewTask";
import './home.css'
import { DarkMode } from "../components/DarkMode/DarkMode";


export const Home = () => {
  return (
        <>
            <header className="home">
                <h1>ListU</h1>
                <DarkMode></DarkMode>
            </header>
            <main className="homeMain">
                <Calendar/>
                <MenuNavCategories/>
                <HomeDailyTasks></HomeDailyTasks>
            </main>
            <AddNewTask/>
        </>
  )
}
