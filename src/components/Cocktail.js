import React from 'react';
import './cocktail.css';

const Cocktail = ({  name, image,info }) => {
  return (
    <React.Fragment>
      <div className='main-container'>
<img src={image} alt={name}  className="cocktail-img"   />    
        <div className="card-title"><h5 >{name}</h5>
        <h6>Rs:160 <span>300 mililiter</span>  
               <span>   *{info}</span></h6>
        
        </div>
        
        <button className='btn-name'>Add</button>

      </div>
    </React.Fragment>
  );
};

export default Cocktail;
