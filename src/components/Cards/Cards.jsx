// Cards.js
import React from 'react';
import boxTick from '../../assets/box-tick.png'
import greenSignal from '../../assets/green-signal.svg'
import redSignal from '../../assets/red signal.svg'
import arrowSignal from '../../assets/signal-arrow.svg'
import downSignal from '../../assets/down-signal.svg'
import rotateIcon from '../../assets/3d-rotate.png'
import cart from '../../assets/shopping-cart.png'
import coins from '../../assets/coin.png'
import '../Cards/Cards.css'

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card" id='card1'>
        <div className='card-icons'>
       <div className='eclipse'> <img src={boxTick} alt="box" id='icon'/></div>
        <img src={greenSignal} alt="signal" />
        </div>
        <p>Total Order <br /> <span className='digits'> 350</span></p>

        <div className='signal-icon'>
            <span className='signal'><img src={arrowSignal} alt="signal" />23.5%</span> VS. <span className='text'> Previous Month</span>
        </div>

      </div>

      <div className="card" id='card2'>
      <div className='card-icons'>
      <div className='eclipse'>  <img src={rotateIcon} alt="box" id='icon'/></div>
        <img src={redSignal} alt="signal" />
        </div>
        <p>Total refund <br /> <span className='digits'> 270</span></p>

        <div className='signal-icon'>
            <span className='red-signal'><img src={downSignal} alt="signal" />23.5%</span> VS. <span className='text'>  Previous Month</span>
        </div>

      </div>

      <div className="card" id='card3'>
      <div className='card-icons'>
      <div className='eclipse'> <img src={cart} alt="box" id='icon'/> </div>
        <img src={redSignal} alt="signal" />
        </div>
        <p>Average Sales <br /> <span className='digits'> 1567</span></p>

        <div className='signal-icon'>
            <span className='red-signal'><img src={downSignal} alt="signal" />23.5%</span> VS. <span className='text'> Previous Month</span>
        </div>

      </div>

      <div className="card" id='card4'>
      <div className='card-icons'>
      <div className='eclipse'> <img src={coins} alt="box" id='icon' /> </div>
        <img src={greenSignal} alt="signal" />
        </div>
        <p>Total Income <br /> <span className='digits'> $350.000</span></p>

        <div className='signal-icon'>
            <span className='signal'><img src={arrowSignal} alt="signal" />23.5%</span> VS. <span className='text'>  Previous Month</span>
        </div>

      </div>
    </div>
  );
};

export default Cards;
