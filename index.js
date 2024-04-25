import express from 'express'
import bootstrap from './src/modules/index.router.js'
const app = express()
const port = 5000 

bootstrap (app , express)


app.listen(port, () => console.log(`SERVER IS RUNNING ON PORT ${port}`))