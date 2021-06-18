const mysql = require('mysql2')
const config = require('./config')

const conns = mysql.createPool({
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    user: config.MYSQL_USER,
    database: config.MYSQL_DATABASE,
    password: config.MYSQL_PASSWORD
})    

conns.getConnection((err, conn) => {
    conn.connect((err) => {
        if(err) {
            console.log('mysql connecte error!~', err);
        }else {
            console.log('mysql connected!~');
        }
    })
})

module.exports = conns.promise();


