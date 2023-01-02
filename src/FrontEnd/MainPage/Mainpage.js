import React from 'react'
import './Mainpage.css'
import img from '../../images/nathan-dumlao-6VhPY27jdps-unsplash.jpg'
import coffee_cup from "../../images/coffee-cup.svg"
import Typewriter from 'typewriter-effect';

function Mainpage() {
  return (
    <div className='main-page'>
        <div className='row'>
            <div className='col-md-6'>
            <img src={coffee_cup} alt="" className='Coffee_cup'></img>
              <h1 className='Headline'>

                <Typewriter
                options = {{
                  strings:["Welcome to CoffeeDay!","Today’s good mood is sponsored by coffee :)"],
                  autoStart:true,
                  deleteSpeed:1,
                  delay:100,
                  loop:true
                }} />
              </h1>
              
            </div>
            
            <div className='col-md-6'>
            <img src={img} alt = "" className='image-half'/>
            </div>
        </div>

        <div className=''>

        </div>
        
    </div>
  )
}

export default Mainpage