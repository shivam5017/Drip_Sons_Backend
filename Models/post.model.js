const mongoose=require("mongoose")
require("dotenv").config()


const postSchema=mongoose.Schema({
   value:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true,
   },
    points:{
        type:Number,
        required:true,
    },
    xlink:{
        type:String,
        require:true,
    },

})



const PostModel=mongoose.model('post',postSchema)

module.exports={PostModel}