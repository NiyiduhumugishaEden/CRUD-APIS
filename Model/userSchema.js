const mongoose=require('mongoose')
const bcrypt=require('bcrypt')


const UserSchema=  mongoose.Schema({
   firstName:{
      id:1,
      type:String,
      max:50,
      min:5,
      unique:true,
      require:[true , 'Please enter your firstName'],
     
   },

   email:{
      type:String,
      unique:true,
      require:[true , 'Please enter your Email']
   },
   password:{
      type:String,
      max:20,
      min:5,
      unique:true,
      require:[true , 'Please enter your password']
   }
} , {
   timestamps: true 
});

UserSchema.pre('save', async function(next){
   const salt=await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
   next()

   
})



module.exports = mongoose.model('Users' , UserSchema)