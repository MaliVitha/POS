import React from 'react';
import classes from './SearchBar.module.css';
import searchIcon from '../../../Assets/search.png';

const SearchBar = () => {
  return (
    <div>
        <img src={searchIcon}   alt=''/>       
        <input type='text' placeholder='Seacrh'/>
    </div>
  )
}

export default SearchBar
