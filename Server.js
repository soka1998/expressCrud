const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const Post = require("./Postmodel")
const app = express()

const PORT = process.env.PORT

require("./Connexion")
app.use(express.json)

app.get("/",async(req,res)=>{
    const data = await Post.find()
    res.json(data)
})
app.post("/",async(req,res)=>{
   await Post.create(req.body)
})
app.get("/:id",async(req,res)=>{
   const info= await Post.findById(req.params.id)
    res.json(info)
})
app.put("/:id",async(req,res)=>{
    await Post.findByIdAndUpdate(req.params.id,req.body)
    res.json("updated succeessfully")
}) 
app.delete("/:id",async(req,res)=>{
    await Post.findByIdAndDelete(req.params.id)
})



app.listen(PORT,()=>{
    console.log("object")
})