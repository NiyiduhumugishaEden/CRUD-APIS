const  mongoose=require ('mongoose')

const Dbconnection =()=>{
try{
 const connect= mongoose.connect()
 console.log(`Mongo db connected to {connect}`)
}catch(error){
console.log(error)
}
}
module.exports =Dbconnection
