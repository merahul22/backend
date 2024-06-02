import mongoose from "mongoose";
import { Category } from "./category.models";

const productschema=new mongoose.Schema({

description:{
    type:String,
    required:true,
},
name:{
    type:String,
    required:true
},

price:{
    type:Number,
    required:true
},

Category:{
    type:mongoose.Schema.Types.ObjectId,
    red:"Category"
},

ownership:{
    type:mongoose.Schema.Types.ObjectId
    ,ref:"User"
}

},{timestamp:true})

export const Product=mongoose.model("Product",productschema)