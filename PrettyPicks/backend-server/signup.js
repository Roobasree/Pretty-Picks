const bodyParser = require('body-parser');
const cors = require('cors')
let express = require('express')
let app = express()
app.use(bodyParser.json())
app.use(cors())
let mongoose = require('mongoose');
let schema = mongoose.Schema;

let url= "mongodb://127.0.0.1:27017/app_sample";
mongoose.connect(url)
.then(()=>console.log('Connection to the database was successful'))
.catch((err)=>console.log('Connection to the database was not successful:',err))


let UserSchema = new schema({
    username:String,
    email:String,
    password:String
})

let User=mongoose.model('user_signups',UserSchema);

app.post('/sign-up',(req,res)=>{
    let {username, email, password}= req.body
    console.log(username)
    console.log(email)
    console.log(password)
    let user = new User({username, email, password})
    user.save()
    .then(()=>console.log("signup successful"))
    .catch((err)=>console.log("signup un successfull:",err))
        
})

app.listen(4002,()=>{
    console.log("Successfullyserver is running in the backend(sign-up)....");
})
