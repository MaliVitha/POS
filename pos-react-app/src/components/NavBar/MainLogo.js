import React from 'react';
import classes from './MainLogo.module.css';
import logo from '../../Assets/mainLogo.png';

const MainLogo = () => {
  return (
    <div className={classes.outer}>
      <img className={classes.image} src={logo} alt=''/>
    </div>
  )
}

export default MainLogo;
