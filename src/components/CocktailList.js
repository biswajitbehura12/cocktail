import React from 'react';
import Cocktail from './Cocktail';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { cocktails } = useGlobalContext();

  
  if (cocktails.length < 1) {
    return (
      <h2 className="text-center">No cocktails matched your search criteria</h2>
    );
  }

  return (
    <div className="container">
      <h2 className="">cocktails</h2>
      <div className="column">
      {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.id} {...cocktail} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
