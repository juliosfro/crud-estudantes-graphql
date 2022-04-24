const { ApolloServer, gql } = require('apollo-server');
const UsersAPI = require('./user/datasource/user');
const userResolvers = require('./user/resolvers/userResolvers');
/* userSchema eh um typedef */
const userSchema = require('./user/schema/user.graphql');

const typeDefs = [userSchema];
const resolvers = [userResolvers];
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            usersAPI: new UsersAPI()
        }
    }
});

/* A porta 4000 eh a padrao do GraphQl */
server.listen()
    .then(({ url }) => {
        console.log(`Servidor rodando na porta ${url}`);
    });