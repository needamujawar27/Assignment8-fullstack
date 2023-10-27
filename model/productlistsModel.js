const mongoose=require('mongoose');
const productlistsModel=mongoose.model("productlists",{
    img:{type:String},
    title:{type:String},
    price:{type:String},
    rate:{type:String},
    des:{type:String},
    cat:{type:String}
});
module.exports=productlistsModel;