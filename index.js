const express=require("express")
const app=express();
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")
const tempelatePath=path.join(__dirname,'../tempelates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))


app.get("/home",(req,res)=>{
    res.render("home")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async(req,res)=>{
    const data={
        name:req.body.name,
        lname:req.body.lname,
        fname:req.body.fname,
        mname:req.body.mname,
        gender:req.body.gender,
        date:req.body.date,
        mail:req.body.mail,
        password:req.body.password,
        file:req.body.file,
        address:req.body.address
    }

    await collection.insertMany([data])

    res.render("home")

})

app.post("/login",async(req,res)=>{
     
    try{
    const check=await collection.findOne({mail:req.body.mail})
    if(check.password===req.body.password){

        res.render("home")
    }
    else{
        res.send("wrong password")
    }
    }
    catch{
  res.send("wrong details")
    }

})

app.listen(3000,()=>{
    console.log("port connected");
})