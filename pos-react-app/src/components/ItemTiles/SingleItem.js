import React from 'react';
import classes from './SingleItem.module.css';

const SingleItem = () => {
  return (
    <div className={classes.outer}>
      <span className={classes.time}>15 minutes</span>
      <div className={classes.titleHolder}>
        <span className={classes.mainTitle}>Roast Chicken</span>
        <span className={classes.subTitle}>Rs. 500.00</span>
      </div>
      <div className={classes.barHolder}>
        <span className={classes.addBar}> + </span>
        <span className={classes.number}> 2 </span>
        <span className={classes.addBar}> - </span>
      </div>
    </div>
  )
};


export default SingleItem
