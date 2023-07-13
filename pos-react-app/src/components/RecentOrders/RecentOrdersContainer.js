import React from 'react';
import classes from './RecentOrdersContainer.module.css';
import RecentOrders from './RecentOrders';


const RecentOrdersContainer = () => {
  return (
    <div className={classes.outer}>
      <h1 className={classes.h1}>TODAY ORDERS</h1>
      <RecentOrders/>
      <hr/>
      <RecentOrders/>
      <hr/>
      <RecentOrders/>
      <hr/>
      <RecentOrders/>
      <hr/>
      <RecentOrders/>
      <hr/>
      <RecentOrders/>
      <hr/>
    </div>
  )
}

export default RecentOrdersContainer
