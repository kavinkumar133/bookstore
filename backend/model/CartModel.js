const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
   userId:{
    type:String,
   },
   products:[
       {
           productId:{
               type:String,
           },
           quantity:{
               type:Number
           }
       }
   ]
});

module.exports = mongoose.model('Cart', cartSchema);
