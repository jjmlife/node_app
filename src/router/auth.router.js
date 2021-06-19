const Router = require('koa-router')
const {
    login
} = require('../controller/auth.controller')
const {
    verifyLogin,
    verifyAuth
} = require('../middleware/auth.middleware')


const authRouter = new Router({
    prefix: '/login'
})

// token 颁发
authRouter.post('/',  verifyLogin , login)

authRouter.post('/test', verifyAuth, (ctx, next) => {
    ctx.body = {
        error_code: 0,
        msg: 'token auth success~'
    }
})


module.exports = authRouter;
