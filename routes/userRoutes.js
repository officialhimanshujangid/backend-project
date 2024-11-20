
const express = require("express")
const router = express.Router()




const getAllUsers =(req,res)=>{
    res.status(500).json({
      status:"error",
      message:"this route is not yet defined"
    })
  }
  const getUser =(req,res)=>{
    res.status(500).json({
      status:"error",
      message:"this route is not yet defined"
    })
  }
  const createUser =(req,res)=>{
    res.status(500).json({
      status:"error",
      message:"this route is not yet defined"
    })
  }
  const updateuser =(req,res)=>{
    res.status(500).json({
      status:"error",
      message:"this route is not yet defined"
    })
  }
  const deleteUser =(req,res)=>{
    res.status(500).json({
      status:"error",
      message:"this route is not yet defined"
    })
  }


router.route("/").get(getAllUsers).post(createUser)
router.route("/:id").get(getUser).patch(updateuser).delete(deleteUser)

module.exports = router