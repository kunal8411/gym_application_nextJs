import React from "react";
import classes from "./footer.module.css";
function Footer() {
  return (
    <div className={classes.footer_container}>
      <hr />
      <div className={classes.footer}>
        <div className={classes.social_links}>
          <img src="/github.png" />
          <img src="/instagram.png" />
          <img src="/linkedin.png" />
        </div>
        <div className={classes.logo_f}>
          <img src="/logo.png" />
        </div>
      </div>
      <div className="blur blur_f_1"></div>
      <div className="blur blur_f_2"></div>
    </div>
  );
}

export default Footer;
