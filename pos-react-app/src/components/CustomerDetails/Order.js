import React from 'react';
import classes from './Order.module.css';

const Order = () => {
  return (
    <div className={classes.outer}>
      <span className={classes.number}>10</span>
      <span className={classes.foodType}>Roast Chicken</span>
      <span className={classes.price}>5000.00</span>
    </div>
  )
}

export default Order
