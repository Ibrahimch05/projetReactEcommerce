import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assests/upload_area.svg'
const AddProduct = () => {
    const [image,setImage]= useState(false);
    const [productDetails,setProductDetails] = useState ({
        name:"", 
        image:"",
        category:"",
        new_price:"",
        old_price:"",
    })
    const imageHandler = (e)=>{
        setImage(e.target.files[0])
    }
    const changeHandler = (e) =>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const Add_Product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;
    
        let formData = new FormData();
        formData.append('product', image);
    
        await fetch('http://localhost:5000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        })
        .then((resp) => resp.json())
        .then((data) => {
            responseData = data;
        });
    
        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:5000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
        }
    }
    
  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Titre Du Produit</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Écrivez ici' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Prix</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Écrivez ici' />
            </div>
            <div className="addproduct-itemfield">
                <p>Prix ​​De L'offre</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Écrivez ici' />
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Catégorie De Produit</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                <option value="hommes">Hommes</option>
                <option value="femmes">Femmes</option>
                <option value="enfants">Enfants</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src= {image?URL.createObjectURL(image):upload_area} className='addproduct-thumail-img' alt="" />
            </label>
            <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
        </div>
        <button onChange={()=>{Add_Product()}} className='addproduct-btn'>Ajouter</button>
      
    </div>
  )
}

export default AddProduct
