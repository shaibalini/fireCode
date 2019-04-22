const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const mobileSchema=new Schema({
   image:{
       type:String,
       required:[true]
   }
})
const mobiles=mongoose.model('mobiles',mobileSchema);
module.exports=mobiles;




