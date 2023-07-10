import React from 'react';
import classes from './FoodTypeTile.module.css';
import breakfast_image from '../../Assets/breakfast.png';

const FoodTypeTile = () => {

   const mouseEnterHandler = () => {
    console.log("Mouse entered");
   };

   const mouseLeaveHandler = () => {
    console.log("Mouse Leaved");
   };

  return (
    <div className = {classes.outer} 
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    >
      <img className={classes.image} src= {breakfast_image} alt=''/>
     <div className={classes.titleHolder}>
     <span className={classes.mainTitle} >Breakfast </span>
      <span className={classes.subTitle}>13 items</span>
     </div>
      </div>
  );
}

export default FoodTypeTile;
 