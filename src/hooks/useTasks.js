import { useEffect, useState } from "react"
import { getDaily } from "../services";


export const useTasks = () => {
    
    const [tasksArray, setTasksArray] = useState();
console.log(tasksArray);
    useEffect(() => {
        const getTasks = async () => {
            const dataTask = await getDaily();

            setTasksArray(dataTask.map(data => {
                let completeTask = {};
                completeTask = data.category.tasks;
                completeTask.icon = data.category.icon;
                return completeTask;
            }));
        }
        getTasks();
    }, [])

    return tasksArray;
}