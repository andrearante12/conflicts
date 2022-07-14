import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiFillPlusCircle } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";

import Popup from "./Popup";
import { roadmaps } from "../../static/roadmaps";

const Roadmap = () => {
  const defaultRoadmap = 1;

  const [numStages, setNumStages] = useState(3);
  const [roadmap, setRoadmap] = useState(roadmaps);

  const [title, setTitle] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("title"));
    return saved || "My Roadmap";
  });

  const [editing, setEditing] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [editingId, setEditingId] = useState(0);

  useEffect(() => {
    // storing roadmap title
    localStorage.setItem("title", JSON.stringify(title));
  }, [title]);

  const generateDescriptions = (key, todo) => {
    return (
      <>
        {roadmap[key]["descriptions"][todo].map((description) => (
          <li>{description}</li>
        ))}
        <button className="resources-btn">Resources</button>
      </>
    );
  };

  const generateStage = (num, key) => {
    const classes = `stage ${num}`;

    return (
      <div className={classes}>
        <div className="stage-header">
          <h3>{roadmap[key]["stage"]}</h3>
          <button id={key} className="edit-button" onClick={handleEditStage}>
            <AiOutlineEdit size={35} />
          </button>
        </div>
        {roadmap[key]["todos"].map((todo) => {
          return (
            <div className="todo-outer-div">
              <h3>{todo}</h3>
              <ul>{generateDescriptions(key, todo)}</ul>
            </div>
          );
        })}
      </div>
    );
  };

  const generateStages = () => {
    if (numStages == 1) return [generateStage("one", 0)];

    if (numStages == 2) {
      return [generateStage("one", 0), generateStage("two", 1)];
    }
    if (numStages == 3) {
      return [
        generateStage("one", 0),
        generateStage("two", 1),
        generateStage("three", 2),
      ];
    }
    if (numStages == 4) {
      return [
        generateStage("one", 0),
        generateStage("two", 1),
        generateStage("three", 2),
        generateStage("four", 3),
      ];
    }
  };

  const handleEditClicked = () => {
    setEditing(!editing);
  };

  const handleEditStage = (e) => {
    setEditingId(e.currentTarget.id);
    setButtonPopup(true);
  };

  const handleTitleChanged = (e) => {
    setTitle(e.target.value);
  };

  var button;
  if (editing) button = <GiConfirmed size={35} />;
  else button = <AiOutlineEdit size={35} />;

  return (
    <main className="roadmap-container">
      <Popup
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        id={editingId}
        stage={roadmap[editingId]["stage"]}
        roadmap={roadmap}
        updateRoadmap={setRoadmap}
      />
      <div className="roadmap-title">
        {editing ? (
          <input
            autofocus="autofocus"
            className="roadmap-title-edit"
            type="text"
            value={title}
            onChange={handleTitleChanged}
          />
        ) : (
          <h2>{title}</h2>
        )}
        <button className="edit-button" onClick={handleEditClicked}>
          {button}
        </button>
      </div>

      <div className="roadmap">
        {generateStages(numStages).map((stage) => (
          <>{stage}</>
        ))}
        {numStages < 4 && (
          <div className="stage add-button">
            <button
              className="edit-button"
              onClick={() => setNumStages(numStages + 1)}
            >
              <AiFillPlusCircle color="#fd3899" size={100} />
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Roadmap;
