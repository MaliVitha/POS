import React from 'react';
import classes from './SearchBar.module.css';
import searchIcon from '../../../Assets/search.png';

const SearchBar = () => {
  return (
    <div className={classes.outer}>
        <img className={classes.image} src={searchIcon}   alt=''/>       
        <input className={classes.input} type='text' placeholder='Seacrh'/>
    </div>
  )
}

export default SearchBar
