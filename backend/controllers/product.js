const Category = require("../models/Category");
const Product = require("../models/Product");
const path = require("path");

exports.addProduct = async (req, res) => {
  const Category_id = req.body.Category_id;
  const findCategory = await Category.findById(Category_id);
  if (!findCategory) {
    res.status(404).send("Category dose Not exist");
  }

  if (
    req.body.name !== "" &&
    req.body.description !== "" &&
    req.body.price !== "" &&
    req.body.stock !== "" &&
    req.body.bestSeller !== "" &&
    req.body.promotion !== "" 
    
  ) {
    const img = [];
    req.files.forEach((filePath) => {
      const pathOne =  filePath.path.split(path.sep);
      const imgPath = "/" + pathOne[1] + "/" + pathOne[2];
      img.push(imgPath);
    });
     Product.create({
        product_name: req.body.name,
        product_description: req.body.description,
        product_price: req.body.price,
        product_stock: req.body.stock,
        product_bestSeller: req.body.bestSeller,
        product_promotion: req.body.promotion,
        product_image: img,
        product_category: findCategory._id,
    })
    .then(() => {
      res.send("New Product inserted Succefully");
    })
    .catch((err) => {
      res.json({ error: err });
    });
  } else {
    return res.status(400).json({
      erreur: "fill all the fields",
    });
  }
};

exports.getProduct = (req, res) => {
  const id = req.params.id;
  Product.findById(id).populate('product_category')
    .then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Product with id=" + id,
      });
    });
};


exports.updateProduct = async (req, res) => {
    const id = req.params.id;
  
    if (
      req.body.name !== "" &&
      req.body.description !== "" &&
      req.body.price !== "" &&
      req.body.stock !== "" &&
      req.body.bestSeller !== "" &&
      req.body.promotion !== "" &&
      req.body.Category_id !== "" &&
      req.body.images !== ""
    ) {
      const img = [];
      req.files.forEach((filePath) => {
        const pathOne = filePath.path.split(path.sep);
        const imgPath = "/" + pathOne[1] + "/" + pathOne[2];
        img.push(imgPath);
      });
  
      try {
        const updatedProduct = await Product.findOneAndUpdate(
            
          { _id: id }, // Assuming _id is the unique identifier for the product
          {
            product_name: req.body.name,
            product_description: req.body.description,
            product_price: req.body.price,
            product_stock: req.body.stock,
            product_bestSeller: req.body.bestSeller,
            product_promotion: req.body.promotion,
            product_category: req.body.Category_id,
            product_image: img,
          },
          { new: true } // Return the updated document
        ).populate('product_category');
        
        if (!updatedProduct) {
          return res.status(404).json({ message: 'Product not found' });
        }
  
        return res.status(200).json(updatedProduct);
        // Handle the updated product as needed
      } catch (error) {
        console.error('Error updating product:', error);
        return res.status(500).json({ message: 'Error updating product', error: error });

      }
    } else {
      return res.status(400).json({
        erreur: "Fill all the fields",
      });
    }
  };


exports.showAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find({}).populate('product_category')
        return res.status(200).json(allProducts);
        // Handle the retrieved products as needed
    } catch (error) {
        console.error('Error getting products:', error);
        return res.status(500).json({ message: 'Error retrieving products', error: error });
    }
};



exports.dealOfTheWeak = (req, res) => {
    // Assuming your Product model has a field named "_id"
    Product.findByIdAndDelete(req.params.id)
      .then((deletedProduct) => {
        if (!deletedProduct) {
          return res.status(404).send('Product not found');
        }
  
        res.send('Product Removed Successfully');
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      });
  };