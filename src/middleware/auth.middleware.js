const jwt = require('jsonwebtoken')
const errorType = require('../constants/error-type')
const service = require('../service/user.service')
const md5password = require('../utils/md5')
const {PUBLIC_KEY} = require('../app/config')

const verifyLogin = async (ctx, next) => {
    const {name, password} = ctx.request.body
    if(!name || !password) {
        let error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error', error,ctx)
    }

    const ret = await service.getUserByName(name)
    const user = ret[0];
    if(!user) {
        const error = new Error(errorType.USER_ALREADY_EXISTS);
        return ctx.app.emit('error',error,ctx)
    }
   
    // password verify 
    if(md5password(password) !== user.password) {
        const error = new Error(errorType.PASSWORD_ERROR);
        return ctx.app.emit('error',error,ctx)
    }
    
    ctx.user = user;
    await next()
}

const verifyAuth = async (ctx, next) => {
    const authorization = ctx.headers.authorization;
    if(!authorization) {
        const error = new Error(errorType.UNAUTHORIZATION);
        return ctx.app.emit('error',error,ctx)
    }
    const token = authorization.replace('Bearer ','')

    try {
        const result = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256']
        })
        ctx.user = result;
        await next()
    } catch (err) {
        console.log('token', err);
        let error = '';
        if(err.name === 'TokenExpiredError') {
            error  = new Error(errorType.TOKEN_EXPIRED)
        }else {
            error  = new Error(errorType.UNAUTHORIZATION)
        }
        return ctx.app.emit('error',error,ctx)
    }
}

const verifyPermission = async (ctx, next) => {
    const {id: userId,role} = ctx.user;
    const {id} = ctx.request.body;

    if(role == 1000) { // admin
        await next();
    }else {

    }
}


module.exports = {
    verifyLogin,
    verifyAuth,
    verifyPermission
}

// table, api, 校验
