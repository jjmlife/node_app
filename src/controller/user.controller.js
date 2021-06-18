const userService = require('../service/user.service')


class UserController {
    async create(ctx, next) {
        // recv params
        const user = ctx.request.body;
        // service 逻辑处理
        const result = await userService.create(user)
        // reslut return
        let message = {
            error_code: 200,
            msg: 'register success~'
        }
        ctx.body = message
    }
}

module.exports = new UserController()
