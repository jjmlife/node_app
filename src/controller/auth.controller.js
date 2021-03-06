const jwt = require('jsonwebtoken')
const {PRIVATE_KEY,PUBLIC_KEY} = require('../app/config')

class AuthController {
    async login(ctx, next) {
        // token generate
        const {id,name} = ctx.user;
        const token = jwt.sign({id, name}, PRIVATE_KEY, {
            expiresIn: 60 * 60 * 24,
            algorithm: 'RS256'
        })

        ctx.body = {id,name, token}
    }
}

module.exports = new AuthController()

