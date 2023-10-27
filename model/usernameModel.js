const mongoose=require("mongoose");

const usernameModel=mongoose.model("users",{
    user:{type:String}
});
module.exports=usernameModel;