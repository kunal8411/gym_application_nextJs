import React from "react";
import classes from "./programs.module.css";
import { programsData } from "../../data/programsData";
function Programs() {
  return (
    <div className={classes.programs} id={classes.programs}>
      {/* header */}
      <div className={classes.programs_header}>
        <span className="stroke-text">Explore our </span>
        <span>programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className={classes.programs_categories}>
        {programsData.map((program, index) => (
          <div className={classes.category} key={index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className={classes.join_now}>
              <span>join now</span>
              <img src="/rightArrow.png" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
