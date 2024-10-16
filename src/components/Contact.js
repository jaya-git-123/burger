import React from 'react'
import Man from '../Assets/contact-man.png';
import Soda from '../Assets/sticker-soda.svg';
import fb from '../Assets/facebook (1).svg';
import whatsapp from '../Assets/whatsapp.svg';
import telegram from '../Assets/telegram.svg';

const Contact = () => {
  return (
    <div id='contact'>
      <div className='bg'>
      <h1 className='center'> Contact Now</h1>
      <div className='flex6'>
        <div className='img-sty'>
          <img src={Man} alt='contact man' className='man' />
        </div>
        <div className='rt-style'>
          <div className='new'>
          <div className='st2'>
            <div className='st-l'>
              <h2>Write us</h2> 
            </div>
            <div className='social'>
              <div>
                <img src={whatsapp} alt='whatsapp' width={30} height={30} className='st-social' />
              </div>
              <div>
                <img src={fb} alt='fb' height={30} width={30} className='st-social' />
              </div>
              <div>
                <img src={telegram} alt='telegram' width={30} height={30} className='st-social' />
              </div>
            </div>
            <div className='st-r'>
              <h2>Find us here</h2>
              <p>Lima - Sun City - Peru</p>
              <p>Av.Moon #4321</p>
            </div>
          </div>
          <div className='style3'>
            <div >
              <h2>Call Us and Order</h2>
              <p>+00-987-7654-321</p>
              <p>+11-012345</p>
            </div>
            <div>
              <img src={Soda} alt='soda' className='soda' />
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact