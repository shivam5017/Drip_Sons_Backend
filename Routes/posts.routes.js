const express = require("express");
const PostRouter = express.Router();
const post_controller = require("../Controllers/post.controller")



PostRouter.post("/add", post_controller.AddPost);
PostRouter.get("/get",post_controller.GetPost)

module.exports = PostRouter;