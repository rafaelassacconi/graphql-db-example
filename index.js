
const { ApolloServer } = require('apollo-server')
const path = require('path')
const UserSchema = require('./UserSchema')
const UserResolvers = require('./UserResolvers')
const UsersDB = require('./UsersDB')

// DB Config
const dbConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: path.resolve(__dirname, './database.db')
    }
}

// Apollo parameters
const typeDefs = UserSchema
const resolvers = UserResolvers

// Apollo server
const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            usersDB: new UsersDB(dbConfig),
        }
    }
})

server.listen().then(({url}) => {
    console.log(`Server running at port ${url}`)
})
