
const mongoose=require('mongoose');

const TodoSchema=new mongoose.Schema({
    Todo_activity:{
        type:String,
        required:["true"]
    }
});

const ToDo=mongoose.model("TodoSchema",TodoSchema);
module.exports=ToDo;
