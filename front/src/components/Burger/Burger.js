import './Burger.css';
import React from 'react';
import Scrollspy from 'react-scrollspy';

const Burger = (props) =>{
    return (
        <div className="burger_blar">
             <div className="burger_close" onClick={props.click}> 
             <img alt="" src='https://a.icons8.com/cNiPeqmR/ohhse3/round--navigation.png'/>
             </div>
             <Scrollspy 
        items={ ['specialities', 'team', 'concept','tech', 'georgia', 'client','contact'] } 
        currentClassName="active"
        >
      <li onClick={props.click}><a href="#specialities">Our specialities</a></li>
            <li onClick={props.click}><a href="#team">Our team</a></li>
            <li onClick={props.click}><a href="#concept">The concept</a></li>
            <li onClick={props.click}><a href="#tech">Our Technologies</a></li>
            <li onClick={props.click}><a href="#georgia">Why Goergia?</a></li>
            <li onClick={props.click}><a href="#client">Our Clients</a></li>
            <li onClick={props.click}><a href="#contact">Contact</a></li>
  </Scrollspy>
         
            </div>
    )
}

export default Burger;