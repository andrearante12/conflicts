import React, { useState } from "react";

const Add = (props) => {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        due_date: dueDate,
        completed: false,
      }),
    };
    fetch("api/createtodo", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="addtasks">
      <h2>Create Task</h2>

      <input
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="datetime-local"
        onChange={(e) => {
          setDueDate(e.target.value);
        }}
      />

      <button
        onClick={() => {
          handleAddButtonPressed();
          props.forceUpdate();
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default Add;
