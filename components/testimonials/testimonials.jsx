import React, { useState } from "react";
import classes from "./testimonials.module.css";
import { testimonialsData } from "../../data/testimonialsData";
import { motion } from "framer-motion";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const testimonialsLength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };

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
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div> 
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
              selected === testimonialsLength - 1
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
