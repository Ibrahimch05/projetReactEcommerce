import React from 'react'
import './Offers.css'
import exclusive_image from '../Assests/exclusive_image.png'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusif</h1>
            <h1>Offres Pour vous</h1>
            <p>UNIQUEMENT SUR LES PRODUITS LES PLUS VENDUS</p>
            <button>Vérifie Maintenant</button>

        </div>
        <div className="offers-right">
            <img src= {exclusive_image} alt="" />

        </div>
    </div>
  )
}
