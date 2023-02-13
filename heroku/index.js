const express = require('express')
const bollyRouter = require('./route/Bollywood')
const hollyRouter = require('./route/Hollywood')
const techRouter = require('./route/Technology')
const fitRouter = require('./route/Fitness')
const foodRouter = require('./route/Food')
const homeRouter = require('./route/Home')
const cors = require("cors")
const app = express()
const mongoose = require('mongoose')
const homepage = require('./homePage')

app.use(cors())
app.use("/api",bollyRouter)
app.use("/api",hollyRouter)
app.use("/api",techRouter)
app.use("/api",fitRouter)
app.use("/api",foodRouter)
app.use("/api",homeRouter)
const BollyRoutes = express.Router();


const DB = "mongodb+srv://jyoti007:Jyoti%400987@cluster0.xvxkiaa.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://jyoti007:Jyoti%400987@cluster0.xvxkiaa.mongodb.net/?retryWrites=true&w=majority" , { useNewUrlParser: true })
const connection = mongoose.connection;

connection.once('open', function() {
  console.log('Connection to MongoDB established succesfully!');
})
mongoose.connect(DB, 
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
          
    }).then(()=>{

    console.log("Connection Successfully")
}).catch((err)=>

    console.log("Something problem...",err));

require("./homePage");

const User = mongoose.model("user");
// const ObjectId = require("mongodb").ObjectId;

app.get("/", async(req, res)=>{
    try {
        const alluser = await User.find({});
        console.log("Data Fetched");
        res.send({alluser});
    }
    catch(err){
        console.log("error", err)
    }
})

  
  
 







app.listen(process.env.PORT||5000,()=>{
    console.log("app is running in 5000");
})