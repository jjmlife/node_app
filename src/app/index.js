const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const errorHandler = require('./error-handle')



const app = new Koa()
app.use(bodyParser());
app.on('error', errorHandler)

module.exports = app;
