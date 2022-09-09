import React from 'react';
import Menu from './Menu';
import './menulist.css';
import { useGlobalContext } from '../context';

const MenuList = () => {
  const { cocktails } = useGlobalContext();

  
  if (cocktails.length < 1) {
    return (
      <h2 className="text-center">No cocktails matched your search criteria</h2>
    );
  }

  return (
    <div className="container">
      <h2 className="">Menu</h2>
      <div className=" menu-list-container">
        {cocktails.map((cocktail) => {
          return <Menu key={cocktail.category} {...cocktail} />;
        })}
      </div>
    </div>
  );
};

export default MenuList;