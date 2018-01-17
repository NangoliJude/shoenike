import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './home';
import NavBar from './navbar'
import Footer from './footer'



class Main extends Component{
    render(){
        return(
               <div>
               <BrowserRouter>
               <div>
                   <NavBar/>
                <Route exact path="/" component={Home}/>
                <Footer/>
                </div>
               </BrowserRouter>
               </div>
        )
    }
};

export default Main;