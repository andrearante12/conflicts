import React, { useState } from "react";
import Calendar from "react-calendar";

const CalendarSection = () => {
  const [value, setValue] = useState(new Date());

  const onChange = (date) => {
    setValue(date);
  };

  return (
    <div className="calendar">
      <Calendar value={value} onChange={onChange} />
      {console.log(value)}
    </div>
  );
};

export default CalendarSection;
