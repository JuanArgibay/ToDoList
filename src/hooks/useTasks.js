import { useEffect, useState } from "react"
import { getDaily } from "../services";


export const useTasks = () => {
    
    const [tasksArray, setTasksArray] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const dataTask = await getDaily();
            let completeTask = {};
            setTasksArray(dataTask.map(data => {
                completeTask = data.category.tasks;
                completeTask.map(task => task.icon = data.category.icon);
                return completeTask;
            }));
        }
        getTasks();
    }, [])
    return tasksArray;
}