const service = require('../service/user.service')
const errorType = require('../constants/error-type')
const md5 = require('../utils/md5')

const handlePassword = async (ctx, next) => {
    const {password} = ctx.request.body
    ctx.request.body.password = md5(password)

    await next()
    console.log('handlePassword');
}

const verifyUser = async (ctx, next) => {
    const {name,password} = ctx.request.body;
    // null
    if(!name || !password) {
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED);
        return ctx.app.emit('error',error,ctx)
    }
    // already eixsts
    const ret = await service.getUserByName(name)
    if(ret.length) {
        const error = new Error(errorType.USER_ALREADY_EXISTS);
        return ctx.app.emit('error',error,ctx)
    }

    await next()
    console.log('verifyUser');
}


module.exports = {
    handlePassword,
    verifyUser
}