require("dotenv").config();
const bcrypt = require("bcrypt");


const { PostModel } = require("../Models/post.model");
async function AddPost(req, res) {
    const payload  = req.body;
    console.log(payload,"why")
    try {
        const post = new PostModel(payload);

        await post.save();

        res.status(201).json({ status: 200, message: "Post saved success"})
    } catch (error) {
        // console.log('error: ', error);
        res.send({message:"Something went wrong",error})
    }
}


async function GetPost(req,res){
   
    try{
         let posts=await PostModel.find();
         res.status(201).send({ status: 200, message: "Fetched Success",posts})
    }catch(error){
        res.status(400).send({message:error.message})
    }
}



module.exports = {
    AddPost,
    GetPost
    
}