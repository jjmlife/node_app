
const conns = require('../app/database')

class UserService {
    async create(user) {
        const {name, password} = user
        console.log('jm', user);
        const sql = `INSERT INTO user (name, password) VALUES (?,?);`;

        const result = await conns.execute(sql,[name, password])
        return result[0];
    }

    async getUserByName(name) {
        const sql = `SELECT * FROM user where name=?;`;
        const result = await conns.execute(sql,[name])

        return result[0]
    }
}

module.exports = new UserService()

        // console.log(result);
        /**
         * [
  ResultSetHeader {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 5,
    info: '',
    serverStatus: 2,
    warningStatus: 0
  },
  undefined
]
         */