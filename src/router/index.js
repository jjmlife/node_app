const app = require("../app");

const UserRouter = require('./user.router')
const authRouter = require('./auth.router')
const momentRouter = require('./moment.router')


app.use(UserRouter.routes())
app.use(UserRouter.allowedMethods())

app.use(authRouter.routes())
app.use(authRouter.allowedMethods())

app.use(momentRouter.routes())
app.use(momentRouter.allowedMethods())




