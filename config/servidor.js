const express =require('express')
const app = express()

//configurar a porta local
const porta = process.env.PORT || 3000
const consign = require('consign')
consigne().include('./routes').into(app)
app.use(express.static('./src/'))
module.exports = {app,porta}