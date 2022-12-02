import './calendar.css'
import { Datepicker } from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";

export const Calendar = ({setDate}) => {

 const handleChange = (e) => {
  setDate(e[0])
 }

  return (
    <div className='calendar'>
      <Datepicker
        onChange={handleChange}
        locale={enUS}
      />
    </div>
   
  );
};