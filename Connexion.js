const dotenv=require("dotenv")
const { default: mongoose } = require("mongoose")
dotenv.config()
const DB=process.env.DB
mongoose.connect(DB)
mongoose.connection.on("connected",()=>{
    console.log("db connected")
})