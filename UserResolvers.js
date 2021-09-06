const UserResolvers = {
    Query : {
        users: (parent, args, ctx, info) => 
            ctx.dataSources.usersDB.getUsers(),
    },
    Mutation : {
        addUser: (parent, args, ctx, info) => 
            ctx.dataSources.usersDB.addUser(args.data),
    }
}

module.exports = UserResolvers
