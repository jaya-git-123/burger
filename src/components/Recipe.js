import React from 'react'
import burger2 from '../Assets/recipe-burger.png';
import bread from '../Assets/recipe-bread.png';
import cheese from '../Assets/recipe-cheese.png';
import meat from '../Assets/recipe-meat.png';
import vegetables from '../Assets/recipe-vegetable.png';
import sauces from '../Assets/recipe-sauces.png';

const Recipe = () => {
  return (
    <div id='recipe'>
      <h1 className='secret-rec'>Our Secret Recipe</h1>
      <div className='flex2'>
      <div className='lf-img'>
        <img src={burger2} alt='burger' className='burger2' />
      </div>
      <div className='rt-img'>
        <div className='card'>
          <div className='lt'>
            <img src={bread} alt='bread' className='img-align'/>
          </div>
          <div className='rt'>
            <div className='flex3'>
            <h2>Bread</h2>
            <p>Fresh Bread baked to perfection</p>
          </div>
        </div>      
      </div>
      <div className='card'>
          <div className='lt'>
            <img src={cheese} alt='cheese' className='img-align'/>
          </div>
          <div className='rt'>
            <div className='flex3'>
            <h2>Cheese</h2>
            <p> Cheese for a fantastic and healthy future</p>
          </div>
        </div>      
      </div>
      <div className='card'>
          <div className='lt'>
            <img src={meat} alt='meat' className='img-align'/>
          </div>
          <div className='rt'>
            <div className='flex3'>
            <h2>Meat</h2>
            <p>100% Pure beef, big and meaty.</p>
          </div>
        </div>      
      </div>
      <div className='card'>
          <div className='lt'>
            <img src={vegetables} alt='vegetables' className='img-align'/>
          </div>
          <div className='rt'>
            <div className='flex3'>
            <h2>Vegetables</h2>
            <p>Vegetables full of the essence of nature and organic.</p>
          </div>
        </div>      
      </div>
      <div className='card'>
          <div className='lt'>
            <img src={sauces} alt='sauces' className='img-align'/>
          </div>
          <div className='rt'>
            <div className='flex3'>
            <h2>Sauces</h2>
            <p>Fresh sauces, delicious for the palate.</p>
          </div>
        </div>      
      </div>
      </div>
      </div>
    </div>
  )
}

export default Recipe;