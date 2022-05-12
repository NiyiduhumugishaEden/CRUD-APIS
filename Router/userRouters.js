const express = require("express");
const { getUsers } = require("../Controllers/userControllers");
const router=express.Router()



router.post('/' , getUsers)

// router.post('/' ,setUsers)

// router.put('/:id' ,putUsers)

// router.delete('/:id' ,deleteUsers)



module.exports =router
