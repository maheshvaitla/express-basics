const express = require("express");
const users = require("./users.json");

const app = express();

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("welocme to home page");
})

app.listen(3456, ()=>{
    console.log("port is running 3456");
})



