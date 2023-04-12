const express = require("express");
const mongoose = require("mongoose")
const app = express();

const connectDB = () =>{

    mongoose.connect('mongodb://localhost:27017:CRUD')
    const userSchema = new mongoose.Schema({});
    const User = mongoose.model("User",userSchema);
    const data = User.find();
    console.warn(data)
}
connectDB();

app.get("/",(req,res)=>{
    res.send("app is working...")
})

connectDB();
app.listen(5000);