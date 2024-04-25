import { Sequelize } from "sequelize";

export const sequelize = new Sequelize ("seqdb" , "root" , "" , {
    host:"localhost",
    dialect:"mysql"
})

export const connectDB = async ()=>{
   return await sequelize.sync ({alter:false , force:false})
    .then(result=>{
        console.log(`DB CONNECTED`)
        console.log(result.model)
    }).catch(err=>{
        console.log(`Fail to connect DB .. ${err}`)
    })
}
