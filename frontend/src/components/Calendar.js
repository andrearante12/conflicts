import React, { useState } from "react";
import Calendar from "react-calendar";

import Add from "./Add";

const CalendarSection = (props) => {
  const [value, setValue] = useState(new Date());

  const onChange = (date) => {
    setValue(date);
  };

  return (
    <div className="calendar">
      <Calendar value={value} onChange={onChange} />
      <hr
        style={{
          color: "#f3f5f9",
          backgroundColor: "#f3f5f9",
          borderColor: "#f3f5f9",
          padding: "1px 175px",
        }}
      />
      <Add forceUpdate={props.forceUpdate} />
    </div>
  );
};

export default CalendarSection;
