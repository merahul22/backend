import mongoose from "mongoose";

const doctorschema=new mongoose.Schema({
doctorname:{
type:String,
required:true,
},

degree:{
    type:String,
    required:true
},
age:{
    type:Number,
    required:true
}




},{timestamps:true})