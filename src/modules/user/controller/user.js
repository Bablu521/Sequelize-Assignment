import userModel from "../../../../DB/model/user.model.js"
import noteModel from "../../../../DB/model/note.model.js"
import { Op } from "sequelize"


//getUsers//
export const getUsers = async(req,res,next)=>{
    try {
        const users = await userModel.findAll({
            include:{
                model:noteModel
            }
        })
        return res.json ({message:"DONE" , users})
    } catch (error) {
        return res.json ({message:error.message})
    }
}


//signup//
export const signup = async(req,res,next)=>{
    try {
        const {email , name , password , age } = req.body
        const checkUser = await userModel.findOne({
            where:{
                email
            }
        })
        if (checkUser){
            return res.json ({message:"EMAIL EXIST"})  
        }
        const user = await userModel.create({email,name , password , age})
        return res.json ({message:"DONE" , user})
    } catch (error) {
        return res.json ({message:error.message})
    }
}


//signin//
export const signin = async(req,res,next)=>{
    try {
        const {email , password} = req.body
        const user = await userModel.findAll({
            where:{
                email , password
            }
        })
        return user.length ? res.json({message:"DONE" , user}): res.json({message:"IN-CORRECT EMAIL OR PASSWORD"})
             
    } catch (error) {
        return res.json ({message:error.message})
    }
}


//updateUser//
export const updateUser = async (req,res,next)=>{
    try {
        const {email , name , age} = req.body
        const user = await userModel.update({name , age },{
            where:{
                email:email
            }
        })
        return user[0]? res.json ({message:"DONE", user}):res.json ({message:"IN-VALID EMAIL"})
    } catch (error) {
        return res.json ({message:error.message})
    }
}


//deleteUser//
export const deleteUser = async (req,res,next)=>{
    try {
        const {id} = req.params
        const user = await userModel.destroy({
            where:{
                id
            }
        })
        return user? res.json ({message:"DONE", user}):res.json ({message:"IN-VALID ID"})
    } catch (error) {
        return res.json ({message:error.message})
    }
}


//search start with a & age less 30//
export const searchUserWithLetter = async (req,res,next)=>{
    try {
        const {letter , age} = req.query
        const user = await userModel.findAll({
            where:{
                name:{ [Op.like]: `${letter}%`},
                age :{ [Op.lt] : age}
            }
        })
        console.log (user)
        return user.length? res.json ({message:"DONE", user}):res.json ({message:"No USER EXIST"})
    } catch (error) {
        return res.json ({message:error.message})
    }
}


//search age between 20 - 30//
export const searchUserAgeBetween = async (req,res,next)=>{
    try {
        const {age1 , age2} = req.query
        const user = await userModel.findAll({
            where:{
                age:{[Op.between]:[age1,age2]}
            }
        })
        console.log (user)
        return user.length? res.json ({message:"DONE", user}):res.json ({message:"No USER EXIST"})
    } catch (error) {
        return res.json ({message:error.message})
    }
}


//oldest 3 users//
export const searchOldestUsers = async (req,res,next)=>{
    try {
        
        const user = await userModel.findAll({
                order:[["age", "DESC"]],
                limit:3
            
        })
        console.log (user)
        return user.length? res.json ({message:"DONE", user}):res.json ({message:"No USER EXIST"})
    } catch (error) {
        return res.json ({message:error.message})
    }
}


//searchUserbyUsingIN//
export const searchUserbyUsingIN = async (req,res,next)=>{
    try {
        const {id}=req.query
        const user = await userModel.findAll({
                where:{
                    id:{[Op.in]:id}
                }
            
        })
        console.log (user)
        return user.length? res.json ({message:"DONE", user}):res.json ({message:"No USER EXIST"})
    } catch (error) {
        return res.json ({message:error.message})
    }
}