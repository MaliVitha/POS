import React from 'react';
import classes from './ItemTileContainer.module.css';
import SingleItem from './SingleItem';

const ItemTileContainer = () => {
  return (
    <div className={classes.container}>
      <SingleItem/>
      <SingleItem/>
      <SingleItem/>
      <SingleItem/>
      <SingleItem/>
      <SingleItem/>
    </div>
  )
};


export default ItemTileContainer;
