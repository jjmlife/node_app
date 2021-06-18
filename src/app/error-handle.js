const errorType = require('../constants/error-type')


const errorHandler = (error,ctx) => {
    let  status , message = '';
    switch(error) {
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
