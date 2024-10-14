const mongoose = require("mongoose");
 const express = require("express");
 const cors = require("cors");
 
 const app = express();
 app.use(cors());

 app.get("/lists",async(req,res)=>{
 
    let countriesList = await Employee.find().distinct("country");

    let departmentsList = await Employee.find().distinct("department");

    let gendersList = await Employee.find().distinct("genders");

    let listsObj={
        countries:countriesList,
        department:departmentsList,
        genders:gendersList,
    }

    res.json(listsObj);

 })

 

 app.get("/getEmployees",async(req,res)=>{

  let employeesData = await Employee.find();
  //distinct("country");
   // {country:"China"},
    //{gender:"Male"},
   //{age: {$gte: 18, $lte:40}},
    
  
  //.countDocuments();

  res.json(employeesData);

 })

 app.listen(6763 ,()=>{
    console.log("Listening to port 6763");
 })

 
let employeeSchema = new mongoose.Schema
({
    id:Number,
    firstName:String,
     lastName:String,
     email:String,
    gender:String,
     age:Number,
    country:String,
    department:String,
    profilePic:String,
    
})

let Employee = new mongoose.model("employee",employeeSchema);





let connectToMDB = async ()=>{

try {
    mongoose.connect
    ("mongodb+srv://teddy888:butterfly888@cluster0.w3kth.mongodb.net/Delo?retryWrites=true&w=majority&appName=Cluster0");

     console.log("Succesfully connected to MDB");
     
} catch (error) {
    console.log("Unable to connect to MDB");
}
}
connectToMDB();
   