const express = require("express")
const app = express()
const mongoose = require("mongoose")

//This project's in base path create a .env file. And create a variable DB_CONNECT that your mongodb database's connect's url in the file.
mongoose.connect(process.env.DB_CONNECT,{userNewUrlParser:true});

const TodoModel= mongoose.model("todo",{text:String})

app.get("/get-all", (req,res)=>{


  res.status(200).json({})
})

app.post("/save", (req,res)=>{

})
app.put("/update", (req,res)=>{

})
app.delete("/delete", (req,res)=>{

})

module.exports ={
  path: "/api",
  handler: app
}

