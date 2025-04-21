
import mongoose from "mongoose";
import { Schema } from "mongoose";


const userSchema = new mongoose.Schema({
    firstName:{
        type:String, 
        require: true,
        unique:false,
        minlength:3,
    },
    lastName:{
        type:String,
        require:true,
        unique: false,
        minlength:3,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        minlength :8,
        require:true,
    },
    date:{
        type:Date,
        default: Date.now(),
    }
}, {timestamps:true});

export const User = mongoose.model("User", userSchema);