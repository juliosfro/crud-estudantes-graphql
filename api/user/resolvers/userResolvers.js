/*
const arrayUsers = [
    {
        nome: "Ana",
        ativo: true
    },
    {
        nome: "Cristina",
        ativo: false
    }
];

*/
const userResolvers = {
    Query: {
        users: (root, args, { dataSources }, info) => dataSources.usersAPI.getUsers(),
        user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
        /* primeiroUser: () => arrayUsers.shift() */
    },
    Mutation: {
        adicionaUser: (root, user, { dataSources }) => dataSources.usersAPI.adicionaUser(user)
    }
};

module.exports = userResolvers;