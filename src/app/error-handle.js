const errorType = require('../constants/error-type')


const errorHandler = (error,ctx) => {
    let  status , message = '';
    switch(error.message) {
        case errorType.NAME_OR_PASSWORD_IS_REQUIRED:
            status = 400;
            message = {
                error_code: 1000,
                msg: '用户名或者密码不能为空~'
            }
            break;
        case errorType.USER_ALREADY_EXISTS:
            status = 400;
            message = {
                error_code: 1001,
                msg: '用户已经存在~'
            }
            break;
        case errorType.PASSWORD_ERROR:
            status = 400;
            message = {
                error_code: 1002,
                msg: '密码错误~'
            }
            break;
        case errorType.UNAUTHORIZATION:
            status = 400;
            message = {
                error_code: 1003,
                msg: '没有授权~'
            }
            break;
        case errorType.TOKEN_EXPIRED:
            status = 400;
            message = {
                error_code: 1004,
                msg: 'token 已建过期~'
            }
            break;
        case errorType.MOMENT_CONTENT_IS_REQUIED:
            status = 400;
            message = {
                error_code: 1005,
                msg: '动态内容不能为空~'
            }
            break;
        

        default:
            status = 404
            message = {
                error_code: 404,
                msg: 'NOT FOUND~'
            }
    }
    
    ctx.status = status;
    ctx.body = message;
}

module.exports = errorHandler;
