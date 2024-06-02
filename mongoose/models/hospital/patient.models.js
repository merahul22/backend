import mongoose from "mongoose";

const patientschema=new mongoose.Schema({
patientname:{
    type:String,
    required:true
},
bimari:{
    type:String,
    required:true
},

age:{
    type:Number,
    required:true
},

address:{
    type:String,
    required:true
},
admittedin:{
type:mongoose.Schema.Types.ObjectId,
ref:"Hospital"

}

},{timestamps:true})

export const Patient=mongoose.model("Patient",patientschema)