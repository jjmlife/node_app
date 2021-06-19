const app = require('./app/index')
const config = require('./app/config')
require('./app/response-handle')
require('./app/database')
require('./router')


app.listen(config.APP_PORT,config.APP_HOST, () => {
    console.log('server start');
})

