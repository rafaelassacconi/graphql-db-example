const { SQLDataSource } = require('datasource-sql')

class UsersDB extends SQLDataSource {
    constructor(dbConfig) {
        super(dbConfig)
    }

    getUsers() {
        return this.db.select('*').from('users')
    }

    async addUser(data) {
        await this.db.insert(data).into('users')
        return data;
    }
}

module.exports = UsersDB
