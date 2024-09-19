const express = require("express")
const app = express()

const PORT = 9748

app.get("/",(req,res)=>{
    res.send("welcome to express")
})

app.listen(PORT)