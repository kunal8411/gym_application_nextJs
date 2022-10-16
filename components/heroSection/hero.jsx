import React from "react";
import classes from "./hero.module.css";
import Header from "../Header/header";
const HeroSection = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.left_h}>
        <Header />
        <div className={classes.the_best_ad}>
          <div></div>
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
        <div className={classes.heart_rate}>
          <img src="/heart.png" alt="" />
          <span>heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hreo images */}
        <img
          src="/hero_image.png"
          alt="ero_image"
          className={classes.hero_image}
        />
        <img
          src="/hero_image_back.png"
          alt="hero_image_back"
          className={classes.hero_image_back}
        />

        {/* calories */}
        <div className={classes.calories}>
          <img
            src="/calories.png"
            alt="hero_image_back"
            // className={classes.hero_image_back}
          />
          <div>
            <span>Calories burned </span>
            <span>220 Kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// 22.52
