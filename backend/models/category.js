const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    category_id: {
        type:String,
        autoIncrement: true,
        primaryKey: true
    },
    category_name: {
        type:String,
        required: true,
        
    }
    ,
    category_image: {
        type: String,
    }
},
   
)
module.exports = mongoose.model('Category',CategorySchema)