import mongoose from "mongoose";


const carSchema=mongoose.Schema({
    platenumber:{
        type:String,
        requiered:true
       
    },
    brand:{
        type:String,
        required:true,
    },
    state:{
        type:Boolean,
        required:true,
        default:true
    },
    dailyvalue:{
        type:Number,
        default:0,
        
    }
  
    
});

const Car=mongoose.model('Car',carSchema);
export default Car;