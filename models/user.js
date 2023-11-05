import mongoose from "mongoose";


const userSchema=mongoose.Schema({
    username:{
        type:String,
        requiered:true
       
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
     
        
    },
    role:{
        type:Number,
        default:2
        
    },
    reservedword:{
        type:String,
        required:true

    }

  
    
});

const User=mongoose.model('User',userSchema);
export default User;