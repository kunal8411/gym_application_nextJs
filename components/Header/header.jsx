import React from 'react'
import classes from './header.module.css';
const header = () => {
  return (
    <div className={classes.header}>
      <img className={classes.logo} src='/logo.png' alt='headerImage'/>

      <ul className={classes.header_menu}>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  )
}

export default header