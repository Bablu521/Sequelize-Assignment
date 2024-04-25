import userRouter from './user/user.router.js'
import noteRouter from './note/note.router.js'
import { connectDB } from '../../DB/connection.js'

const bootstrap = (app , express)=>{
    app.use (express.json())
    connectDB()
    app.use ('/' , (req,res,next)=>{
        return res.json ({message:"WELCOME"})
    })
    app.use ('/user' , userRouter)
    app.use ('/note' , noteRouter)
    app.use ('*' , (req,res,next)=>{
        return res.json ({message:"IN-VALID ROUTING"})
    })
}

export default bootstrap