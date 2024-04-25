import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import noteModel from './note.model.js';



const userModel = sequelize.define("user",{
    name:{
        type:DataTypes.STRING(250),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING(150),
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
},{
    timestamps:true
}
)

userModel.hasMany(noteModel ,{
   onDelete:"CASCADE",
   onUpdate:"CASCADE"
})

noteModel.belongsTo(userModel)


export default userModel