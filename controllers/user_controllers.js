const { User } = require("../models");
const CryptoJS = require("crypto-js");
require("dotenv").config();
const {generateAccessToken} = require("../middleware/jwt_generate");
// const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const {registrSchema, loginSchema} = require('../validation');




exports.register = async (req,res) => {
    console.log(User)
    
    try{
      const {error} = registrSchema.validate(req.body);
      if(error){
          return res.status(400).json({error: error.details[0].message});
      }
        const {role,userName,firstName,lastName,email,password} = req.body;
        const hashed_password = CryptoJS.SHA256(password).toString();
        const emailExists = await User.findOne({where: {email}});
            if(emailExists){
                return res.status(400).json({message: "Account with this email already exists"});
            }
        await User.create({userName,firstName,lastName,email,password:hashed_password})
       const token = generateAccessToken(role,email)
        // send_mail(email,token)
        res.status(201).json({message: "User created",token:token})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
  }

  exports.verified = async (req,res) => {
    try{
     const {id} = req.params;
     const token = req.params.token
     const decoded= jwt.verify(id,token,SECRET)
     await User.update({is_Verified:1},{where:{email:decoded.email}})
     res.status(200).json({message:"Verified"}) 
    }
     catch(err){
         res.status(500).json({error: err.message}) 
     }
 }
 
 exports.getVerifiedUsers = async (req,res) => {
     try{
         const data = await User.findAll()
         res.status(200).json({message:"You are welcomed",data:data,role:data.role})
     }
     catch(err){
         res.status(500).json({message:"Not verified"})
     }
 } 
 
  exports.login= async (req,res) => {
    try{ 
const {error} = loginSchema.validate(req.body);
        if(error){
            return res.status(400).json({error: error.details[0].message});
        }
    const {email,password} = req.body;
    const hashed_password = CryptoJS.SHA256(password).toString();
    const data = await User.findOne({where: {email:email}})
    if(data.email === email && data.password===hashed_password  ){
        const token = generateAccessToken(data.id, data.role,email);
        res.status(200).json({message:"Logged in!",token:token,role:data.role})
      }
      }  
      catch(err){
          res.status(403).json({error: "Login credentials are incorrect!"})
      }
  }

   exports.updateUser = async (req,res) => {
    try{
        const {id} = req.params;
        const {role} = req.body;
        await User.update({role},{where:{id}})
        res.status(200).json({message:"User updated"}) 
    }
    catch(err){
        res.status(500).json({error: err.message}) 
    }
  }
  
  exports.deleteUser = async (req,res) => {
    try{
        const {id} = req.params;
        await User.destroy({where:{id}})
        res.status(204).json({message:"User deleted"}) 
    }
    catch(err){
        res.status(500).json({error: err.message}) 
    }
  }