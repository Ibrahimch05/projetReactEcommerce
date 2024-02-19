import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assests/star_icon.png';
import star_dull_icon from '../Assests/star_dull_icon.png';

export const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          {[1, 2, 3, 4].map((index) => (
            <img key={index} src={product.image} alt={`Product ${index}`} />
          ))}
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt='Main Product' />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          {[1, 2, 3, 4, 5].map((index) => (
            <img key={index} src={index <= product.rating ? star_icon : star_dull_icon} alt={`Star ${index}`} />
          ))}
          <p>({product.reviews}) </p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>
            DH${product.old_price}
            <div className='productdisplay-right-price-new'>
              DH$ {product.new_price}
            </div>
            <div className='productdisplay-right-desctription'>
              {product.description}
            </div>
          </div>
        </div>
      </div>
      <div className="productdisplay-right-size">
        <h1>sélectionnez la taille</h1>
        <div className="productdisplay-right-sizes">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
      </div>
      <button className='kip'>Ajouter au panier</button>
      <p className='productdisplay-review'><span>Catégorie :</span>Femme , T-Shirt , CROP TOP</p>
      <p className='productdisplay-review'><span>Mots clés :</span>Dernière Modern </p>
    </div>
  );
};
