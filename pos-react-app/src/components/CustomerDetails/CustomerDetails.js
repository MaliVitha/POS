import React from 'react';
import classes from './CustomerDetails.module.css';
import Order from './Order';
import Bill from './Bill';

const CustomerDetails = () => {
  return (
    <div className={classes.outer}>
      <span className={classes.header}> Customer Name</span>
      <div className={classes.titleHolder}>
        <span className={classes.mainTitle}>Cashier id : </span>
        <span className={classes.subTitle}>C008</span>
      </div>
      <div>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Bill/>
      </div>
    
    </div>
  )
}

export default CustomerDetails
