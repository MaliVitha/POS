import React from 'react';
import classes from './SideNav.module.css';

const SideNav = () => {
  return (
    <div className={classes.outer}>
      <span className={classes.content}>Dashboard</span>
      <span className={classes.content}>Orders</span>
      <span className={classes.content}>Tables</span>
    </div>
  )
}

export default SideNav;
