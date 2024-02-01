import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female","transgender"]
    },
    profilePicture:{
        type:String,
        default:""
    }
})

const User = mongoose.Model("User", userSchema);

export default User;