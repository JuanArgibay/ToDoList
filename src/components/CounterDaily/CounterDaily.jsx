import { useEffect, useState } from "react";
import { oneDigit } from "../../helpers"
import React from "react";

export const CounterDaily = ({ timesTamp, dailyTasks }) => {

  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    let counter = 0;
    dailyTasks.map(task => task.comp === "1" ?
      counter += 1
      : null);
    setCompleted(counter);
  }, [dailyTasks])

  return (
    <>
      <h2>{completed} finished tasks</h2>
      <p>{oneDigit(timesTamp.day)} / {oneDigit(timesTamp.month)} / {timesTamp.year} </p>
    </>
  )
}
