import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Met à jour la largeur de la fenêtre lors du redimensionnement
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Attache l'événement de redimensionnement lors du montage du composant
    window.addEventListener('resize', handleResize);

    // Nettoie l'événement de redimensionnement lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Le tableau vide assure que l'effet n'est exécuté qu'une seule fois lors du montage du composant

  // Définir une classe dynamique en fonction de la largeur de l'écran
  const navbarClass = windowWidth < 768 ? 'navbar-small-screen' : 'navbar-large-screen';

  return (
    <div className={`navbar ${navbarClass}`}>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p className='zip'>TOP MODELS</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Boutique</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("mens") }}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Hommes</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("womens") }}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Femmes</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Enfants</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Se connecter </button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
