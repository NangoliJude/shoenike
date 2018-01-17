import React, { Component } from 'react';
import PlanSub from './plansub'


class PlanComponent extends Component{
    render(){

        const notes= 
            [{
              id:1,
              plan: "Personal",
               price: "$5",
               period: "Every Month",
               body: "Looking for a shoe to Wear? this package is perfect for  a personal shoe.",
               link: " Get Started",
              
              
           },
           {
            id: 2,
            plan: "Professional",
            price: "$10",
            period: "Every Month",
            body: "Looking for Shoes for ateam or new look? this package is perfect for  Teams.",
            link: " Get Started"
        },
        {   id:3,
            plan: "Bussines",
            price: "$25",
            period: "Every Month",
            body: "Looking for Shoes for ateam or new look? this package is perfect for Businnes.",
            link: " Get Started"
        }]
        return(
            <div>
                {notes.map((note)=>{
                    return <PlanSub note={note} key={note.id}/>
                })}
            </div>
        )
    }
};


export default PlanComponent;
