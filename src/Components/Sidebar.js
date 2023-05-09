import React from "react";
import "./Sidebar.css";

function Sidebar({ cohorts, onCohortSelect }) {
  const handleClick = (cohort) => {
    onCohortSelect(cohort.code);
  };

  return (
    <div className="sidebar-container">
      <h2>Choose a Class by Start Date</h2>
      <ul className="cohort-list">
        <li key="All Students">
          <button onClick={() => handleClick({ code: "All Students", name: "All Students" })}>
            All Students
          </button>
        </li>
        {cohorts &&
          cohorts.length > 0 &&
          cohorts
            .filter((cohort) => cohort.code !== "All Students")
            .map((cohort) => {
              return (
                <li key={cohort.code}>
                  <button onClick={() => handleClick(cohort)}>{cohort.name}</button>
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default Sidebar;
