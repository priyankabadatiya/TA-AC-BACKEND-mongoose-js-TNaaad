var express = require("express")
var logger =require("morgan")
var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/sample",(err)=>{
    console.log(err?err:"connected to database")
})

var app = express();
app.use(logger('dev'))

app.listen(5000,()=>{
    console.log("server is listening at port 5k")
})