import React from 'react'
import homeimg from '../Assets/home-burger.png';
import plate from '../Assets/home-dish.png';
import tomato from '../Assets/home-tomato.png';
import potato from '../Assets/home-potato.png';

const Home = () => {

  return (
    <div className="page">
      <div className='flex-1'>
        <div className='left-side'>
       <h1 className='hd'>Love Every Burger</h1>
        <p className='para-st'>We serve the best burgers on the planet, paving the way for cooking and preparing hot, delicious burgers.</p>
       <button className="bite-now"> Bite Now</button>
       </div>
        <div className="right-img">
        <img src={homeimg} alt='burger' className='homeimg1' />
        <img src={plate} alt='burger' className='burgerimg' />
        <img src={tomato} alt='tomato' className='tomato' />
        <img src={tomato} alt='tomato' className='tomat' />
        <img src={potato} alt='potato' className='potato' />
        
        </div>
        </div>
        </div> 
    
  )
}
export default Home