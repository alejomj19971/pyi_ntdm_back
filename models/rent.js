import mongoose from "mongoose";


const rentSchema=mongoose.Schema({
    rentnumber:{
        type:Number,
        requiered:true
    
    },
    username:{
        type:String,
        required:true
    },
    platenumber:{
        type:String,
        required:true
    },

    initialdate:{
        type:Date,
        requiered:true,
        default:Date.now()
        
    },
    finaldate:{
        type:Date,
        requiered:true,
        default:Date.now()
        
    },
    status:{
        type:Boolean,
        requiered:true
      
    }


  
    
});

const Rent=mongoose.model('Rent',rentSchema);
export default Rent;