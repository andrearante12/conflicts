import React, { useState } from "react";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";

import Projects from "./Projects";
import CalendarSection from "./Calendar";
import { tasks } from "../../static/tasks";

const Recent = () => {
  const [activity, setActivity] = useState(tasks.slice(0, 4));
  const [value, onChange] = useState(new Date());

  const handleClick = (event) => {
    console.log("clicked");
    var new_activity = activity;
    new_activity[event.currentTarget.id]["completed"] =
      !new_activity[event.currentTarget.id]["completed"];
    setActivity([...new_activity]);
  };

  return (
    <main>
      <div className="wrapper_inner">
        <div className="recent">
          <h1 className="recent-title">Recent Activity</h1>
          <h3 className="all">All Tasks</h3>
        </div>
        <ul className="tasks">
          {activity.map((task) => {
            const { id, name, completed } = task;

            return (
              <li className="tasks" key={name}>
                <button id={id} className="activity-btn" onClick={handleClick}>
                  {name}
                  {completed ? (
                    <IoIosRadioButtonOn
                      style={{ color: "#fd3899" }}
                      size={35}
                    />
                  ) : (
                    <IoIosRadioButtonOff size={35} />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        <Projects />
      </div>
      <CalendarSection />
    </main>
  );
};

export default Recent;
