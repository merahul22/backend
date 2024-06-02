import mongoose from "mongoose";

const hospitalschema=new mongoose.Schema({
name:{
    type:String,
    required:true
},


established:{
    type:Number,
    required:true
}
,
address:{
    type:String,
    required:true
}

},{timestamps:true})

export const Hospital=mongoose.model("Hospital",patientschema)