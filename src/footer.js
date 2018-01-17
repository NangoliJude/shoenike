import React, { Component } from 'react';


class Footer extends Component{
    constructor(props){
        super(props)
        this.state ={year: new Date().getFullYear()}
    }
    render(){
        return(
            <footer className="footer-distributed">

<div className="footer-left">

    <h3><em>Nike</em><span></span></h3>

    <p className="footer-links">
        <p>Home</p>
    
    </p>

    <p className="footer-company-name">&copy;{this.state.year} {" "}<a style={{textDecoration: "none"}}href="https://twitter.com/Jude_Li_Eric">Follow Me At Twitter</a></p>
</div>

<div className="footer-center">

    <div>
        <i className="fa fa-map-marker"></i>
        <p><span>Paddock Street </span> Lose Angeles , California</p>
    </div>

    <div>
        <i className="fa fa-phone"></i>
        <p>+18184506078</p>
    </div>

    <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:support@nike.com">support@nike.com</a></p>
    </div>

</div>

<div className="footer-right">

    <p className="footer-company-about">
        <span>About the company</span>
       Nike is the best brand for sports we are allover the world
    </p>



</div>

</footer>
      
        )
    }
};

export default Footer;



