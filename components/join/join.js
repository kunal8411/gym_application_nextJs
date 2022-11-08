import React from "react";
import classes from "./join.module.css";
function Join() {
  return (
    <div className={classes.join} id="joins">
      <div className={classes.left_j}>
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className={classes.right_j}>
        <form action="" className={classes.email_container}>
          <input type="email" name="user_email"  placeholder="ENnter your email id to join "/>
        </form>
        <button className={classes.btn_j} >Join NOW </button>
      </div>
    </div>
  );
}

export default Join;
