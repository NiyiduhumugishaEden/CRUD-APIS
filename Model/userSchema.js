const mongoose=require('mongoose')


const DbConnection=()=>{
   const url=' mongodb://localhost:27017/Project'
      mongoose.connect(url ,(req,res)=>{
         console.log('Db successfully connected ')
      })
}

DbConnection()

const UserSchema=new mongoose.Schema(
   FirstName={
      type:String,
      max:50,
      min:5,
      require:true
   },
   LastName={
      type:String,
      max:50,
      min:5,
      require:true
   },
   UserName={
      type:String,
      max:50,
      min:5,
      require:true
   },
   Email={
      type:email,
      require:true
   },
   Password={
      type:String,
      max:50,
      min:8,
      require:true
   }
)


module.exports = mongoose.model('Users' , UserSchema)