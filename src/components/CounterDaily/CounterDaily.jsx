import { useEffect, useState } from "react";

export const CounterDaily = ({date}) => {
  
  const [timesTamp, setTimesTamp] = useState ({
    day: date.getDate(),
    month: date.getMonth()+1,
    year: date.getFullYear(),
  });

  useEffect(()=> {
    setTimesTamp({
      day: date.getDate(),
      month: date.getMonth()+1,
      year: date.getFullYear(),
    })
  }, [date])
  return (
    <>
      <h2>0 finished tasks</h2>
      <p>{timesTamp.day} / {timesTamp.month} / {timesTamp.year} </p>
    </>
  )
}
