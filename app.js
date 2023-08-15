const express = require("express");
require('dotenv').config();

const app = express();

const greetings = process.env.GREETINGS || "Hello World!";


app.get("/health", (req, res)=>{
    res.send(greetings);
    
});

console.log(process.env.PORT)
app.listen(process.env.PORT, ()=>{
    console.log("server listening on port", process.env.PORT);
})