import React from 'react'
import './Popular.css'
import data_product from '../Assests/data'
import Item from '../Item/Item'


export const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAIRE CHEZ LES FEMMES</h1>
        <hr />
        <div className="popular-item">
           {console.log('data_product',data_product)}
            { 
            data_product.map((item,i)=>{
                return   <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}
export default Popular