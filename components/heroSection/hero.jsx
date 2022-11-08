import React from "react";
import classes from "./hero.module.css";
import Header from "../Header/header";
import { motion } from "framer-motion";
const HeroSection = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className={classes.hero}>
      <div className="blur hero_blur "></div>
      <div className={classes.left_h}>
        <Header />
        <div className={classes.the_best_ad}>
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>

        <div className={classes.hero_text}>
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              in there we will help you to shape and build your stamina also
              muscles.
            </span>
          </div>
        </div>

        {/* figures div */}
        <div className={classes.figures}>
          <div>
            <span>+140</span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members joined</span>
          </div>
          <div>
            <span>56</span>
            <span>Fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className={classes.hero_buttons}>
          <button className="btn">Get Started</button>
          <button className="btn">Learn More </button>
        </div>
      </div>
      <div className={classes.right_h}>
        <button className="btn">Join now </button>
        <motion.div
          className={classes.heart_rate}
          initial={{ right: "-1rem " }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src="/heart.png" alt="" />
          <span>heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hreo images */}
        <img
          src="/hero_image.png"
          alt="ero_image"
          className={classes.hero_image}
         
        />
        <motion.img
          src="/hero_image_back.png"
          alt="hero_image_back"
          className={classes.hero_image_back}
          initial={{ right: "11rem " }}
          whileInView={{ right: "20rem" }}
          transition={transition}
        />

        {/* calories */}
        <motion.div
          initial={{ right: "-1rem " }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className={classes.calories}
        >
          <img
            src="/calories.png"
            alt="hero_image_back"
            // className={classes.hero_image_back}
          />
          <div>
            <span>Calories burned </span>
            <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

// 22.52
