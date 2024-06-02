import mongoose from "mongoose";

const orderItemschema=new mongoose.Schema({

    orderId:{
type:mongoose.Schema.Types.ObjectId,
ref:'Product'
    },

   quantity:{
    type:Number,
    required:true
   }
})



const orderschema=new mongoose.Schema({
orderprice:{
type:Number,
required:true
},

orderItem:{

    type:[orderItemschema]
},

address:{

    type:String,
    required:true,
},

orderstatus:{
    type:String,
    enum:["pending","ordered","cancelled","deleivered"],
    default:"pending"
}


},{timestamps:true})