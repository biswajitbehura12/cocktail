import React from 'react';
import "./navbar.css"


const Navbar = () => {
  return (
    <div className='navbar'>
     
      <div class="text-center">
                        <img className="navbar-img" src="https://d1uxq5uu95as1y.cloudfront.net/covers/3bd8570f2d74094c_Screen-Shot-2021-03-10-at-3.08.11-PM.png" alt="Le Cafe" />
                        <div className="description">
                            <p style={{color:"white"}}>Available</p>
                        </div>
                    </div>
                    <div className="restaurant-detailed-header">
                        <div className="container">
                            <div class="row d-flex align-items-end">
                                <div class="col-md-8">
                                    <div class="restaurant-detailed-header-left">
                                        <img class="img-fluid mr-3 float-left" src="https://d1uxq5uu95as1y.cloudfront.net/logos/655b1a2a825e03d2_lecafelogo.png?width=300" alt="Le Cafe" />
                                        <h2 class="text-white">
                                            Le Cafe
                                        </h2>
                                        <p class="text-white mb-1">
                                           
                                            78 Sazz Street, India
                                             
                                        </p>
                                    </div>
                                </div>    
    </div>
    </div>
    </div>
    </div>
  )
};

export default Navbar;
