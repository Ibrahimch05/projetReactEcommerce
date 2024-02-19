import React from 'react'
import './NewLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Recevez Des Offres Exclusives Sur Votre E-mail</h1>
        <p>Abonnez-vous à notre newsletter et restez informé</p>
        <div>
            <input type='email' placeholder='Votre identifiant de messagerie' />
            <button>S'abonner</button>
        </div>
    </div>
  )
}
