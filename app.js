const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")


app.use(expressLayouts)


app.set("layout","layouts/indexLayout")


const port = process.env.PORT||3000
require("dotenv").config()


app.set("view engine","ejs")
app.use(express.static("public"))



app.get("/",(req,res)=>{
    res.render("home",{title:"Home"})
})


app.listen(port,()=>{
console.log("server is up and running!!!")
})