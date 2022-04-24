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
        adicionaUser: async (root, user, { dataSources }) => dataSources.usersAPI.adicionaUser(user),
        atualizaUser: async (root, novosDados, { dataSources }) => dataSources.usersAPI.atualizaUser(novosDados),
        deletaUser: async (root, { id }, { dataSources }) => dataSources.usersAPI.deletaUser(id)
    }
};

module.exports = userResolvers;