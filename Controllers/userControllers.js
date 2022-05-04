const getUsers=(req,res)=>{
   res.status(200).json({message: " This is the  new get request"})

}

const setUsers=(req,res)=>{
   res.status(200).json({message: " This is the  new  user created t"})

}
const putUsers=(req,res)=>{
   res.status(200).json( {message: ` The user is deleted ${req.params.id}` })

}
const deleteUsers=(req,res)=>{
   res.status(200).json({message: ` The user is deleted ${req.params.id}` })

}

module.exports ={
getUsers,
setUsers,
putUsers,
deleteUsers
}