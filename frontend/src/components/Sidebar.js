import React from "react";

import { AiOutlineHome, AiOutlineBell } from "react-icons/ai";
import { CgGoogleTasks } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="wrapper">
      <aside>
        <ul className="sidebar">
          <li className="sidebar">
            <AiOutlineHome size={30} /> Home
          </li>
          <li className="sidebar">
            <AiOutlineBell size={30} /> Tasks
          </li>
          <li className="sidebar">
            <CgGoogleTasks size={30} /> Inbox
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
