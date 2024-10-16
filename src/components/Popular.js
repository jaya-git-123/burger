import React from 'react'
import chicken from '../Assets/popular-burger-chicken.png';
import grill from '../Assets/popular-burger-grill.png';
import classic from '../Assets/popular-burger-classic.png';
import meat from '../Assets/popular-burger-meat.png';
import big from '../Assets/popular-burger-big.png';
import bag from '../Assets/bag.svg';

const Popular = () => {
  return (
    <div id='popular' className='popular'>
      <h1 className='h-center'>Most Devoured <br/>Burgers</h1>
      <div className='flex-st'>
      <div className='grid'>
        <div className='img4'>
          <img src={chicken} alt='chicken' className='chickenburger' />
          <h2>Chicken Burger</h2>
          <div className='dollar'>
            <div>
          <h2>$6</h2>
          </div>
          <div>
            <img src={bag} alt='cart' className='bag' />
          </div>
          </div>
        </div>
      </div>
      <div className='grid'>
        <div className='img4'>
          <img src={meat} alt='meat' className='chickenburger' />
          <h2>Meat Burger</h2>
          <div className='dollar'>
            <div>
          <h2>$10</h2>
          </div>
          <div>
            <img src={bag} alt='cart' className='bag' />
          </div>
          </div>
        </div>
      </div>
      <div className='grid'>
        <div className='img4'>
          <img src={grill} alt='grill' className='chickenburger' />
          <h2>Grill Burger</h2>
          <div className='dollar'>
            <div>
          <h2>$12</h2>
          </div>
          <div>
            <img src={bag} alt='cart' className='bag' />
          </div>
          </div>
        </div>
      </div>
      <div className='grid'>
        <div className='img4'>
          <img src={classic} alt='burger' className='chickenburger' />
          <h2>Classic Burger</h2>
          <div className='dollar'>
            <div>
          <h2>$8</h2>
          </div>
          <div>
            <img src={bag} alt='cart' className='bag' />
          </div>
          </div>
        </div>
      </div>
      <div className='grid'>
        <div className='img4'>
          <img src={big} alt='burger' className='chickenburger' />
          <h2>Big Burger</h2>
          <div className='dollar'>
            <div>
          <h2>$15</h2>
          </div>
          <div>
            <img src={bag} alt='cart' className='bag' />
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Popular;