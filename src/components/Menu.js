import React from 'react';
function MenuList({category}){
    return(
        <>
        <div style={{
  
  height:"40px",
  width:"100%",
  fontStyle:"bold"
  
  
}}>
            <li className='row-md-4'>{category}</li>
            
        </div>    
        </>
    );
}
export default MenuList;