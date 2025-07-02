let mongodb = require("mongodb");
let mongoclient = mongodb.MongoClient;
let url = "mongodb://127.0.0.1:27017";
let express = require('express')
let database="app_pp"
let app=express()
let cors = require('cors')
app.use(cors())

app.get('/kurti',(req,res)=>{
    mongoclient.connect(url,(err,conn)=>{
    if(err){
        res.json({message: "Fetching the datas was failed"})
        ("Connection to the database Failed: ",err)
    }
    console.log("Connection to the database was success!");
    let db = conn.db(database)
    db.collection('kurti').find().toArray((e,data)=>{
        if(e){
            console.log("Could not fetch the datas")
        }
        res.json(data)
    })
});
})

app.get('/kurta-set',(req,res)=>{
    mongoclient.connect(url,(err,conn)=>{
    if(err){
        res.json({message: "Fetching the datas was failed"})
        ("Connection to the database Failed: ",err)
    }
    console.log("Connection to the database was success!");
    let db = conn.db(database)
    db.collection('kurtaset').find().toArray((e,data)=>{
        if(e){
            console.log("Could not fetch the datas")
        }
        res.json(data)
    })
});
})

app.get('/sarees',(req,res)=>{
     mongoclient.connect(url,(err,conn)=>{
    if(err){
        res.json({message: "Fetching the datas was failed"})
        ("Connection to the database Failed: ",err)
    }
    console.log("Connection to the database was success!");
    let db = conn.db(database)
    db.collection('saree').find().toArray((e,data)=>{
        if(e){
            console.log("Could not fetch the datas:",err)
        }
        res.json(data)
    })
});
})

app.get('/dresses',(req,res)=>{
     mongoclient.connect(url,(err,conn)=>{
    if(err){
        res.json({message: "Fetching the datas was failed"})
        ("Connection to the database Failed: ",err)
    }
    console.log("Connection to the database was success!");
    let db = conn.db(database)
    db.collection('dress').find().toArray((e,data)=>{
        if(e){
            console.log("Could not fetch the datas:",err)
        }
        res.json(data)
    })
});
})

app.listen(4000,()=>{
    console.log("Successfullyserver is running in the backend....");
})