import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MiddleComponent extends Component{
    render(){
        return(
            <div>
            
                <div className="numbers">
                <h3>Why choose Nike?</h3>
                <p>Here are some facts</p>
                <div className="num_one">
                <div className="circ">
                <h4>10<span>K</span></h4>
                <p>People</p>
                  </div>
                </div>
                <div className="num_one">
                <div className="circ">
                <h4>50<span>M</span></h4>
                <p>Shoes</p>
                </div>
                </div>

                <div className="btns"></div>
                <Link to="/" className="btn_two">Need Help</Link>
                <Link to="/" className="btn_one">Learn More</Link>
                </div>
                </div>
    
            
        )

    }
    
};

export default MiddleComponent;