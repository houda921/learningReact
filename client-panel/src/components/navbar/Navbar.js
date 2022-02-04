//import { getByTitle } from '@testing-library/react';
import React from 'react';  
import './navbar.css';
import PropTypes from 'prop-types';

const Navbar=(props)=> { 

    const {title}= props ;
  return (
          
          <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">{title}</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID" aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              
              <div className="collapse navbar-collapse" id="navbarID">
                  <div className="navbar-nav">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>

                  </div>
              </div>
          </div>
      </nav>
              <h1>
                  {title}
              </h1>
          </div> )
}
Navbar.defaultProps={ 
    title :"MY TITLE"
}  

//nhebou napplikiw 3la title le systemm de validation
Navbar.propTypes=
{ 
    title:PropTypes.string.isRequired
} 

export default Navbar;
