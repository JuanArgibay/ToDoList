import './calendar.css'
import {useState} from 'react';
import { Datepicker } from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";

export const Calendar = () => {
  const [date, setDate] = useState(new Date())
  

  return (
    <div className='calendar'>
      <Datepicker
        onChange={(e) => setDate(e.target.value)}
        locale={enUS}
        startValue={date.startValue}
        endValue={date.endValue}
      />
    </div>
   
  );
};