import React, { useState, useEffect } from "react";

import { AiOutlineHome } from "react-icons/ai";
import { CgGoogleTasks } from "react-icons/cg";
import { BsMap } from "react-icons/bs";

const Sidebar = (props) => {
  const [classes, setClasses] = useState([
    "sidebar active",
    "sidebar",
    "sidebar",
  ]);

  const updateCurrentPage = (page) => {
    if (page == "home") {
      setClasses(["sidebar active", "sidebar", "sidebar"]);
    } else if (page == "roadmaps") {
      setClasses(["sidebar", "sidebar active", "sidebar"]);
    }
  };

  return (
    <div className="wrapper">
      <aside>
        <ul className="sidebar">
          <li className={classes[0]}>
            <button
              onClick={() => {
                props.handlePageChange("home");
                updateCurrentPage("home");
              }}
            >
              <AiOutlineHome size={30} /> Home
            </button>
          </li>

          <li className={classes[1]}>
            <button
              onClick={() => {
                props.handlePageChange("roadmaps");
                updateCurrentPage("roadmaps");
              }}
            >
              <BsMap size={30} /> Roadmaps
            </button>
          </li>
          <li className={classes[2]}>
            <CgGoogleTasks size={30} /> Inbox
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
