import React from 'react'
import delivery from '../Assets/delivery-burger.png';

const Delivery = () => {
  return (
    <div id='delivery'>
      <div className='delivery'>
        <div className='del-flex'>
          <h1>Fast Delivery</h1>
          <p>Place your order for your favorite burger and we will deliver it to your door in minutes, gey in touch and don't leave hugry.</p>
          <button className='bt-st'>Contact Now</button>
        </div>
        <div className='rt-pic'>
          <img src={delivery} alt='delivery burger' className='burger5' />
        </div>
      </div>
    </div>
  )
}

export default Delivery