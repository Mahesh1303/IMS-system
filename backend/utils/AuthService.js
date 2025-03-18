const jwt = require('jsonwebtoken')
const { JWT_SECRETE } = require('../constant')

const secretkey = JWT_SECRETE

const setSessionToken = (user)=>{
    return jwt.sign({
        _id: user._id,
        email: user.email
    } , secretkey)
}


const getUserFromToken = (token)=>{
    if(!token){
        return null
    }

    return jwt.verify(token,secretkey)
}

module.exports= {
    setSessionToken,
    getUserFromToken
}