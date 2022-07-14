import React, { useState } from "react";
import { render } from "react-dom";

import Sidebar from "./Sidebar";
import Recent from "./Recent";
import Navbar from "./Navbar";
import Roadmap from "./Roadmap";

const App = () => {
  const [page, setPage] = useState("home");

  const handlePageChange = (page) => {
    setPage(page);
  };

  const choosePage = () => {
    if (page == "roadmaps") return <Roadmap />;
    else return <Recent />;
  };

  return (
    <div className="container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="inner-container">
        <Sidebar handlePageChange={handlePageChange} currentPage={page} />

        {choosePage()}
      </div>
    </div>
  );
};

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);
