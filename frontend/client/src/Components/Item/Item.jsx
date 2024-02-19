import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

export const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img src={`http://localhost:3000${props.image}`} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="">
        <div className="item-price-new">
          {props.new_price}DH
        </div>
        <div className="item-price-old">
          {props.old_price}DH
        </div>
      </div>
    </div>
  );
};

export default Item;
