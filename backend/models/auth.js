const mongoose = require('mongoose')

// // create Schema
const authSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
      },
      status: {
          type: Boolean,
          required: true
        },
    
      token: {
          type: String,
          
        },
      role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Role'
      }
},
    {
        timestamps:true
    }
)
module.exports = mongoose.model('User',authSchema)

