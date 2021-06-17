require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4001;
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const corsOptions = {
  origin: "*" 
};

app.get("/",(req,res)=>{
  res.send("Hello welcome to homepage")
})

app.post("/test",(req,res)=>{
  const myString = req.body.string_to_cut;
  let newString = ""
  for(let i =0 ;i<myString.length;i++){
    if((i+1)%3===0){
      newString += myString.charAt(i)
    }
  }
  res.send({"return_string":newString})
})

app.listen(port,()=>{console.log(`Server now running on port ${port}`)})