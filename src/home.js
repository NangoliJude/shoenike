import React, { Component } from 'react';
import PlanComponent from './PlanComponent';
import { Link } from 'react-router-dom';
import Manage from './Manage';
import MiddleComponent from './MiddleComponent';




class Home extends Component{

    render(){

        return(
        <section>
            <article>
                <header>
                    <div className="price">
                     <h1>Pricing</h1>
                      <p>All Shoes are billed monthly starting on the first of each month.</p>
                      <Link style={{textDecoration: "none", color: "black"}}to="/">Learn More</Link>
                    </div>
                    </header>

                     
                     <div className="select">
                        <PlanComponent/>
                       </div>
                       <br/>
                       <Manage/>

                       <div className="BackPic">
                         <MiddleComponent/>
                        </div>
                       </article>
         </section>
            )
       }
   };

export default Home;