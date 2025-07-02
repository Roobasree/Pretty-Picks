let mongodb = require('mongodb')
let express = require('express')
let cors = require('cors')


let mongoclient = mongodb.MongoClient
let app = express()
app.use(cors())


let url ='mongodb://127.0.0.1:27017'
let dbase = 'app_pp'


app.get('/kurti/:id',(req,res)=>{
    console.log("kurti-Id: ", req.params.id)
    mongoclient.connect(url,(error,conn)=>{
        if(error){
            console.log("Error in to the database:", error)
        }
        else{
            let db=conn.db(dbase)
            db.collection('kurti').findOne({_id: new mongodb.ObjectId(req.params.id)},(e,data)=>{
                if (e){
                    console.log("error in fetching: ",e)
                }
                else{
                    res.json(data)
                    console.log("Successfully fetched")
                }
                conn.close()
            })
        }
    })
})

app.listen(4003,()=>{
    console.log('Successfully connected to database to fetch the details')
})