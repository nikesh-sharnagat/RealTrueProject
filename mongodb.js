const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/loginsystem")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect")
})


const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    fname:{
        type:String,
        require:true
    },
    mname:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    mail:{
        type:String,
        require:true 
    },
    password:{
        type:String,
        require:true 
    },
    file:{
        type:String,
        require:true 
    },
    address:{
        type:String,
        require:true 
    }

})

const collection=new mongoose.model("collection1",logInSchema)

module.exports=collection