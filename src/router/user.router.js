const Router = require('koa-router')
const {
    create
} = require('../controller/user.controller')
const {
    verifyUser,
    handlePassword
} = require('../middleware/user.middleware')

const userRouter = new Router({
    prefix: '/users'
})

userRouter.get('/',async (ctx, next) => {

})

userRouter.post('/', verifyUser ,handlePassword, create)

module.exports = userRouter;