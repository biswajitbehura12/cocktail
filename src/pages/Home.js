import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import MenuList from '../components/MenuList';


const Home = () => {
  return (
    <div className="container">
          <div class="row">
          <SearchForm/>
          <div class="col-3"> <MenuList /></div>
            <div class="col-9"><CocktailList /></div>
      </div>
    </div>
  );
};

export default Home;
