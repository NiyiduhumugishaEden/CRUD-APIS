const jwt=require('jsonwebtoken')
const Users =require('../Model/userSchema')


const getUsers=async(req,res)=>{
 
const newUser= new Users({
   firstName:req.body.firstName,
   email:req.body.email,
   password:req.body.password,
   Token:getToken()
})
newUser.save()
.then((result)=>{
res.status(200).json({message: 'user added'})
})
.catch((error)=>{
   console.log(error)
})

   }
   const getToken=(id)=>{
      return jwt.sign({id },process.env.Secrete, {expiresIn:'30d'})
   }

module.exports ={
getUsers,
// setUsers,
// putUsers,
// deleteUsers
}


