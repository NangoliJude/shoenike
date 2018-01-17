import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class PlanSub extends Component{
    render(){
        const { note} = this.props;
        return(
            <div className="option" >
                       <h3>{note.plan}</h3>
                       <h2>{note.price}</h2>
                       <p className="small">{note.period}</p>
                       <p className="desc">{note.body}</p>
                       <Link to="/" className="btn_one">{note.link}</Link>
            </div>
        )
    }
}

export default PlanSub;


