import React, { useState } from "react";
import classes from "./testimonials.module.css";
import { testimonialsData } from "../../data/testimonialsData";
function Testimonials() {
  const [selected, setSelected] = useState(0);
  const testimonialsLength = testimonialsData.length;
  console.log("testimonialsDatatestimonialsDatsdfasadsa", testimonialsData[selected]);
  return (
    <div className={classes.testimonials}>
      <div className={classes.left_t}>
        <span>testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "#f48915" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          -{testimonialsData[selected].status}
        </span>
      </div>
      <div className={classes.right_t}>
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image.src} alt="" />
        <div className={classes.arrows}>
          <img
            onClick={() => {
              selected === 0
                ? setSelected(testimonialsLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src="/leftArrow.png"
            alt=""
          />
          <img
            onClick={() => {
              selected === testimonialsLength-1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src="/rightArrow.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
