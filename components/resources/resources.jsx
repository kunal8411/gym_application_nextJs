import React from "react";
import classes from "./resources.module.css";
function Resources() {
  return (
    <div className={classes.reasons} id="reasons">
      <div className={classes.left_r}>
        <img src="/image1.png" alt="" />
        <img src="/image2.png" alt="" />
        <img src="/image3.png" alt="" />
        <img src="/image4.png" alt="" />
      </div>
      <div className={classes.right_r}>
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span>choose us</span>
        </div>
        <div className={classes.details_r}>
          <div>
            <img src="/tick.png" alt="" />
            <span>Over 140+ expert coaches</span>
          </div>
          <div>
            <img src="/tick.png" alt="" />
            <span>Train smarter and faster than before</span>
          </div>
          <div>
            <img src="/tick.png" alt="" />
            <span>1 Free profram for first member</span>
          </div>
          <div>
            <img src="/tick.png" alt="" />
            <span>reliable partners</span>
          </div>
        </div>
        <span style={{ color: "", fontWeight: "normal" }}>OUR PARTNERS</span>
        <div className={classes.partners}>
          <img src="/nb.png" alt="" />
          <img src="/adidas.png" alt="" />
          <img src="/nike.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Resources;
