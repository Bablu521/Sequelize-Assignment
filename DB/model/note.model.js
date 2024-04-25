import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

const noteModel = sequelize.define("note" , {
    title:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    content:{
        type:DataTypes.STRING(700),
        allowNull:false
    },
})

export default noteModel