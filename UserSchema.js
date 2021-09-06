const { gql } = require('apollo-server')

const UserSchema = gql`
    type User {
        name: String!
    }

    input UserInput {
        name: String!
    }

    type Query {
        users: [User!]
    }

    type Mutation {
        addUser(data: UserInput): User!
    }
`

module.exports = UserSchema
