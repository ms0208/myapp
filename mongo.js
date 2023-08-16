const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/Sustain-DB")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("Sustain-collection",newSchema)

module.exports=collection
