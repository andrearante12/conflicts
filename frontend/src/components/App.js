import React from "react";
import { render } from "react-dom";

import Sidebar from "./Sidebar";
import Recent from "./Recent";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="inner-container">
        <Sidebar />
        <Recent />
      </div>
    </div>
  );
};

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);
