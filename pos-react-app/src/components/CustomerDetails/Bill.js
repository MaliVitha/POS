import React from 'react';
import classes from './Bill.module.css';

const Bill = (props) => {
  return (
    <div className={classes.outer}>
      <div className={classes.heading}>
        <span>
            Sub Total
        </span>
        <span>
            Rs.7895.36
        </span>
      </div>
      <hr className={classes.hr}></hr>
      <div className={classes.heading}>
        <span>
            Tax 10%
        </span>
        <span>
            Rs.789.00
        </span>
      </div>
      <hr className={classes.hr}></hr>
      <div className={classes.titleHolder}>
        <span className={classes.mainTitle}>Total Payment</span>
        <button className={classes.subTitle} type={props.type}>Rs.8684.00</button>
      </div>
    </div>
  )
}

export default Bill;
