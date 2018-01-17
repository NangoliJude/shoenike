import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(
            <header>
              <nav>
                  <div className="main_nav">
                  <h3>Nike</h3>
                  <NavLink className="nav" to="/">
                   <div></div>
                   <div></div>
                   <div></div>
                   </NavLink>
                   </div>
                   </nav>
            </header>
        )
    }
};

export default NavBar