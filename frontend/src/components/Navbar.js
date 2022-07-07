import React, { useState } from "react";

import { GiCrossedSwords } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <GiCrossedSwords />
        Conflicts
      </div>
      <div className="greeting">
        <p>Hi, Andre</p>
        <p className="message">Keep up the good work!</p>
      </div>
      <div className="search">
        <form action="./" method="get">
          <div className="searchbar">
            <input
              type="text"
              className="searchbar-input"
              name="search"
              placeholder="Find tasks, projects, etc..."
            ></input>
          </div>
        </form>
      </div>
      <div className="profile-pic">
        <CgProfile size={50} />
      </div>
      <div className="information">
        <p>Andre Arante</p>
        <p className="message">ニート</p>
      </div>
    </nav>
  );
};

export default Navbar;
