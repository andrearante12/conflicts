import React, { useState } from "react";
import { FaRegSmile } from "react-icons/fa";
import { BiBasketball } from "react-icons/bi";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import { projects } from "../../static/projects";

const Projects = () => {
  const [projectsList, setProjectsList] = useState(projects.slice(0, 4));
  const generateStyles = (bcolor, color) => {
    return {
      margin: "0.5rem 1rem 1rem 1rem",
      border: `5px solid ${bcolor}`,
      borderRadius: "25px",
      color: color, //#474190
      background: "bcolor", //#cdcaff
    };
  };

  const [icons, setIcons] = useState([
    {
      icon: (
        <FaRegSmile size={30} style={generateStyles("#cdcaff", "#474190")} />
      ),
      color: "purple",
    },
    {
      icon: (
        <BiBasketball size={30} style={generateStyles("#f9b6dc", "#df589c")} />
      ),
      color: "pink",
    },
    {
      icon: (
        <BsHouseDoor size={30} style={generateStyles("#c2f0fe", "#56d1f8")} />
      ),
      color: "blue",
    },
    {
      icon: (
        <AiOutlineExclamationCircle
          size={30}
          style={generateStyles("#fddfa3", "#fdc656")}
        />
      ),
      color: "yellow",
    },
  ]);

  const generateProjectItem = (project) => {
    const { id, name, completion, dueDate, people } = project;
    const { icon, color } = icons[id];

    return (
      <li key={id} className={`project-item ${color}`}>
        <div>{icon}</div>
        <div>
          <p className="name">{name}</p>
          <p className="date">{dueDate}</p>
        </div>
      </li>
    );
  };

  return (
    <div className="projects">
      <h1 className="project-title">Ongoing Projects</h1>
      <ul className="project-row">
        {projectsList
          .slice(0, 2)
          .map((project) => generateProjectItem(project))}
      </ul>
      <ul className="project-row">
        {projectsList
          .slice(2, 4)
          .map((project) => generateProjectItem(project))}
      </ul>
    </div>
  );
};

export default Projects;
