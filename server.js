const Koa = require('koa')
const Router = require('koa-router')
const mysql = require('mysql2')

const app = new Koa()
const router = new Router({prefix: '/db'})

const connections = mysql.createPool({
    host: '172.21.21.34',
    port: 3308,
    user: 'root',
    password: '123456',
    database: 'code_admin'
})

router.get('/',async (ctx,next) => {
    console.log('klklkl');
    ctx.response.body = 'success db~'
})

router.get('/user', async (ctx, next) => {
  const sql = `CREATE TABLE IF NOT EXISTS user(
    id INT PRIMARY KEY auto_increment,
    name VARCHAR(64) NOT NULL,
    age INT(8)
  )`
   connections.execute(sql,(err,res,fields) => {
     console.log(err,res);
   })
   ctx.response.body = "create table ~"
})


router.get('/info', async (ctx, next) => {
  const sql = `INSERT INTO user (name, age) VALUES (?,?)`
   connections.execute(sql, ['jh',18],(err,res,fields) => {
     console.log(err,res);
   })
   ctx.response.body = "create table ~"
})


app.use(router.routes())
app.use(router.allowedMethods())

let str = ''
app.use((ctx,next) => {
  console.log('jjm');
    str= 'hello hub'
    next()
}, (ctx, next) => {
  console.log('jkjkj');
    ctx.response.body = str + ' next'
})


app.listen(8081 , () => {
    console.log('server starting');
})