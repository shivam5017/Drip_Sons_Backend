const express = require("express");
const connection = require("./config/db")
const app = express();
const cors = require("cors");
const UserRouter = require("./Routes/user.routes");
const authentication = require("./middleware/authenticate.middleware");
const PostRouter = require('./Routes/posts.routes')

const port = process.env.PORT || 8001
app.listen(port, async () => {
    try {
        await connection;
        console.log("connected to mongoDb");
    } catch (error) {
        console.log(error);
    }
    console.log(`server is running at port: ${port}`);
})
require("dotenv").config();

app.use(cors())

app.use(express.json());

app.use("/user", UserRouter);

app.use('/post',PostRouter)


app.get("*", (req, res) => {
    res.status(404).json("not found")
})

