const Router = require('koa-router')
const {
    login
} = require('../controller/auth.controller')

const authRouter = new Router({
    prefix: 'login'
})

// token 颁发
authRouter.post('/', login)


module.exports = authRouter;
