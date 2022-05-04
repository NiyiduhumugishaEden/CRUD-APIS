const express = require("express");
const { getUsers,setUsers,putUsers,deleteUsers } = require("../Controllers/userControllers");
const router=express.Router()



router.route('/' , getUsers)

router.post('/' , setUsers)

router.put('/:id' ,putUsers)

router.delete('/:id' ,deleteUsers)



module.exports =router
