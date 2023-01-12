import { useTasks } from "../../hooks/useTasks"
import { CounterDaily } from "../CounterDaily/CounterDaily"
import './HomeDailyTasks.css'
import { takeDateTasks } from "../../helpers"
import { useEffect, useState } from "react"
import React from 'react';

export const HomeDailyTasks = ({ date }) => {
    const tasksArray = useTasks();
    const [timesTamp, setTimesTamp] = useState({
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
    });
    const dailyTasks = takeDateTasks(tasksArray, timesTamp);

    useEffect(() => {
        setTimesTamp({
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
        })
    }, [date])

    return (
        <section className="homeDailyTasks">
            <CounterDaily dailyTasks={dailyTasks} timesTamp={timesTamp} />
            <article>
                {dailyTasks ? (
                    <>
                        <ul>
                            {dailyTasks.map(dailyTask => dailyTask.comp === "0" ?
                                (<li key={dailyTask.id} className="listToDo">
                                    <div>
                                        <p>{dailyTask.icon}</p>
                                        <p>{dailyTask.title}</p>
                                    </div>
                                    <p>{dailyTask.hour}</p>
                                </li>
                                ) : null
                            )}
                        </ul>
                        <h3>Completed</h3>
                        <ul>
                            {dailyTasks.map(dailyTask => dailyTask.comp === "1" ?
                                (<li key={dailyTask.id} className="listToDo">
                                    <div>
                                        <p>{dailyTask.icon}</p>
                                        <p>{dailyTask.title}</p>
                                    </div>
                                    <p>{dailyTask.hour}</p>
                                </li>
                                ) : null
                            )}
                        </ul>
                    </>
                ) : null
                }
            </article>
        </section>
    )
}
