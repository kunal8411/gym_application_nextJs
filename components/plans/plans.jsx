import React from "react";
import classes from "./plans.module.css";
import {plansData} from "../../data/plansData"
function Plans() {
  return (
    <div className={classes.plans_container}>
      <div className="blur plan_blur_1" ></div>
      <div className="blur plan_blur_2" ></div>

      {/* <div  style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span> YOUR JOURNEY </span>
        <span className="stroke-text">WITH US</span>
      </div> */}
      <div className={classes.plans_header} >
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">WITH US</span>
      </div>
      {/* plans card */}
      <div className={classes.plans}>
        {plansData.map((plan, i) => (
          <div className={classes.plan} key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price}</span>
            <div className={classes.features}>
              {plan.features.map((feature, i) => (
                <div className={classes.feature} key={i}>
                  <img src="/whiteTick.png" alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
                <span>see more benefits</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
