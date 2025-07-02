let mongodb = require("mongodb");
let cors =  require('cors')
let body_parser = require('body-parser')
let mongoclient = mongodb.MongoClient;
let url = "mongodb://127.0.0.1:27017";
let express = require('express')
let database="app_sample"
let app=express()
app.use(cors())
app.use(body_parser.json())
app.post('/User',(req,res)=>{
    mongoclient.connect(url,(err,conn)=>{
    if(err){
        console.log("Connection to the database Failed: ",err)
    }
    else{
        console.log("Connection to the database was successful!");
        let db = conn.db(database)
        db.collection('user_signups').findOne({email: req.body.email, password: req.body.password},(e,user)=>{
        if(e){
            console.log("Could not fetch the datas")
        }
        else{
            if(user){
                res.json({message:'Login successful', user:user, status:true})
            }
            else{
                res.json({message:'User not found', status:false})
            }
        }
        res.end();
        conn.close();
    })
    }
});
})

app.listen(4001,()=>{
    console.log("Successfullyserver is running in the backend(login)....");
})
