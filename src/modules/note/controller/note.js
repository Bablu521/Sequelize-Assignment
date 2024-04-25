import noteModel from "../../../../DB/model/note.model.js";
import userModel from './../../../../DB/model/user.model.js';


//getNotes//
export const getNotes = async(req,res,next)=>{
    try {
        const notes = await noteModel.findAll({
            include:{
                model:userModel,
                attributes:{exclude:["password"]}
            }
        })
        return res.json ({message:"DONE" , notes})
    } catch (error) {
        return res.json ({message:error.message})
    }
}


//addNote//
export const addNote = async(req,res,next)=>{
    try {
        const {userId , title , content} = req.body
        const user = await userModel.findOne({
            where:{
                id:userId
            }
        })
        if (!user){
            return res.json ({message:"IN-VALID USER ID"})
        }
        const note = await noteModel.create(req.body)
        return res.json ({message:"DONE" , note})
    } catch (error) {
        return res.json ({message:error.message})
    }
}

//updateNote//
export const updateNote = async(req,res,next)=>{
    try {
        const note = await noteModel.update(req.body,{
            where:{
            id:req.params.id ,
            userId:req.params.userId
        }
        })
        return note[0]?  res.json ({message:"DONE" , note}):res.json ({message:"IN-VALID ID"})
    } catch (error) {
        return res.json ({message:error.message})
    }
}


//deleteNote//
export const deleteNote = async(req,res,next)=>{
    try {
        const note = await noteModel.destroy({
            where:{
            id:req.params.id ,
            userId:req.params.userId
        }
        })
        return note?  res.json ({message:"DONE" , note}):res.json ({message:"IN-VALID ID"})
    } catch (error) {
        return res.json ({message:error.message})
    }
}