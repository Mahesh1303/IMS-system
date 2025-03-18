const express = require('express')
const { HandleUserRegister, HandleUserLogin, HandleUserLogout } = require('../controller/UserControl')
const { VerifyCookie } = require('../middlewares/UserAuth')

const UserRoute = express.Router()

UserRoute.post('/register' , HandleUserRegister)
UserRoute.post('/login' , HandleUserLogin)
UserRoute.post('/logout' , VerifyCookie,HandleUserLogout)



module.exports={UserRoute}