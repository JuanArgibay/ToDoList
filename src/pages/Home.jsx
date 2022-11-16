import { Calendar } from "../components/Calendar/Calendar"
import { HomeDailyTasks } from "../components/HomeDailyTasks/HomeDailyTasks"
import { MenuNavCategories } from "../components/MenuNavCategories/MenuNavCategories"
import { AddNewTask } from "../components/AddNewTask/AddNewTask";
import './home.css'


export const Home = () => {
  return (
        <>
            <header>
                <h1>Listéate</h1>
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
