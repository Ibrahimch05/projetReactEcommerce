import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import hero_image from '../Assests/hero_image.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
         <h2>NOUVEAUTÉS UNIQUEMENT</h2>
          <div>
           <div className="hero-hand-icon">
            <p>
            nouveau
            </p>
            <img src={hand_icon} alt="" />
           </div>
           <p>collections</p>
           <p>pour tout le monde</p>
          </div>
          <div className="hero-latest-btn">
            <div>Dernière collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
         <div className="hero-right">
            <img className='hero-img' src={hero_image} alt="" />
         </div>
    </div>
  )
}
