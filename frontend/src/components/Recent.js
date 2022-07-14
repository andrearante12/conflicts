import React, { useState, useEffect } from "react";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";

import Projects from "./Projects";
import CalendarSection from "./Calendar";

const Recent = () => {
  const [completedArr, setCompleted] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("completed"));
    console.log(`loading saved ${saved}`);
    return saved || [];
  });

  const [activity, setActivity] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("activity"));
    return saved || [];
  });

  const handleClick = (event) => {
    var new_activity = activity;
    new_activity[event.currentTarget.id]["completed"] =
      !new_activity[event.currentTarget.id]["completed"];
    setActivity([...new_activity]);

    const copy = [...completedArr];
    copy[event.currentTarget.id] = !completedArr[event.currentTarget.id];
    setCompleted(copy);
  };

  const forceUpdateMethod = () => {
    fetchTasks();
  };

  const fetchTasks = () => {
    fetch("/api/mytodos")
      .then((response) => response.json())
      .then((data) => {
        const clone = [...data];
        Object.keys(clone).forEach(
          (id) => (activity[id]["completed"] = completedArr[id])
        );

        setActivity(clone);
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    const clone = [...activity];
    Object.keys(clone).forEach(
      (id) => (activity[id]["completed"] = completedArr[id])
    );

    setActivity(clone);

    localStorage.setItem("completed", JSON.stringify(completedArr));
  }, [completedArr]);

  return (
    <main>
      <div className="wrapper_inner">
        <div className="recent">
          <h1 className="recent-title">My Tasks</h1>
          <h3 className="all inactive">Clear Completed Tasks</h3>
        </div>
        <div className="scroll">
          <ul className="tasks">
            {activity.map((task) => {
              let { id, name, completed, due_date } = task;
              id -= 1;
              due_date = `Due:${due_date.substring(5, 10)}`;

              const classes = completed ? "tasks inactive" : "tasks";

              return (
                <li className={classes} key={name}>
                  <button
                    id={id}
                    className={
                      completed ? "activity-btn inactive" : "activity-btn"
                    }
                    onClick={handleClick}
                  >
                    <div
                      className={completed ? "task-text inactive" : "task-text"}
                    >
                      <p>{name}</p>
                      <p className="task-due-date">{due_date}</p>
                    </div>
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
        </div>
        <Projects />
      </div>
      <CalendarSection forceUpdate={forceUpdateMethod} />
    </main>
  );
};

export default Recent;
