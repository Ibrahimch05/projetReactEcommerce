const Category = require('../models/Category')
const path = require('path')

const createCategory = (req, res) => {
    if(req.body.name !== '') {
        const img = [];
        req.files.forEach((filePath) => {
          const pathOne = filePath.path.split(path.sep);
          const imgPath = "/" + pathOne[1] + "/" + pathOne[2];
          img.push(imgPath);
        });
        Category.create({
            category_name: req.body.name, 
            category_image: img[0]
        }).then(() => {
            res.send('New category inserted Succefully')
        }).catch((err) => {
            res.send(err.message)
        })
    } else {
        return res.status(400).json({
            erreur: 'fill all the fields'
        })
    }
}

const updateCategory = (req, res) => {
    if (req.body.name !== '') {
        const img = [];
        req.files.forEach((filePath) => {
            const pathOne = filePath.path.split(path.sep);
            const imgPath = "/" + pathOne[1] + "/" + pathOne[2];
            img.push(imgPath);
        });

        Category.updateOne(
            { _id: req.category._id },
            {
                category_name: req.body.name,
                category_image: img[0]
            }
        ).then(() => {
            res.send('Category updated successfully');
        }).catch((err) => {
            res.send(err.message);
        });

    } else {
        return res.status(400).json({
            erreur: 'Fill all the fields'
        });
    }
};

const removeCategory = async (req, res) => {
   
    await Category.deleteOne( { where: { category_id: req.category?._id }})
    .then(() => {
        res.send('Category Removed Succefully')
    }).catch((err) => {
        res.send(err.message)
    })
}

const getCategory = (req, res) => {
    res.send(req.category)  
}

const getCategories = (req, res) => {
    Category.find()
        .then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(400).json({
                error: err.message
            })
        })
}

module.exports = {
    createCategory,
    updateCategory,
    removeCategory,
    getCategory,
    getCategories,
}