import React from 'react';
import classes from './RecentOrders.module.css';

const RecentOrders = () => {
  return (
    <div className={classes.outer}>
     <p className={classes.orderId}>#O-1026</p>
     <p className={classes.state}>In-Progress</p>
    </div>
  )
}

export default RecentOrders;
