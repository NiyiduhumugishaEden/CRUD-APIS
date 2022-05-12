
const  express=require('express')
const bodyParse=require('body-parser')
const dotenv=require('dotenv').config()
const mongoose=require('mongoose')
const  app=express()
const Port=process.env.PORT || 3000


   const url="mongodb+srv://Eden:eden@nodejs.fikz1.mongodb.net/myUser?retryWrites=true&w=majority";

      mongoose.connect(url).then(()=>{
         console.log('database connected')
      }).catch(err=>{console.log(err)})

app.use(express.json())
app.use(bodyParse.urlencoded({extended: false}))
app.use('/home' , require('./Router/userRouters'))
// app.get('/home' , (req,res)=>{
//    res.status(200).json({message: " This is the get request"})
// })
app.listen(Port , (req,res)=>{
   console.log(`The server is running  at port ${Port}`)
})