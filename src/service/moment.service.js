const conns = require('../app/database')

class MomentService {
    async create(id, content) {
        let sql = `insert into moment (user_id, content) values(?,?);`;
        let result = await conns.execute(sql,[id, content])
        
        return result[0]
    }

    async query(user_id, size, page) {
        let sql = `select * from moment 
        where user_id=?  
        LIMIT ?, ?;`;
        const result = await conns.execute(sql,[user_id, page * size, size])
   
        return result[0]
    }

    async deleteById(momentId) {
        let sql = `delete from moment where id=?`
        const result = await conns.execute(sql, [momentId])
        
        return result[0]
    }

    async upate(id, content) {
        let sql = `update moment SET content=? WHERE id=?;`
        const result = await conns.execute(sql, [content, id])

        return result[0]
    }
}

module.exports = new MomentService()