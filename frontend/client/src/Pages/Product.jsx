import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';
import { ShopContext } from '../Context/ShopContext';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescrptionBox } from '../Components/DescrptionBox/Descrption';

export const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescrptionBox product={product}/>
     
    </div>
  )
}
