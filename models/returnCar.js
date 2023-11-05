import mongoose from "mongoose";


const returnSchema=mongoose.Schema({
    returnnumber:{
        type:Number,
        requiered:true
      
    },
    rentnumber:{
        type:Number,
        required:true
    },
    returndate:{
        type:Date,
        required:true
      
    }
  
    
});

const Return=mongoose.model('Return',returnSchema);
export default Return;