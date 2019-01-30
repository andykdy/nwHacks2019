export default {
    Query: {
        user: (parent, { id }, { models }) => {
            return models.userManager.getUser(id);
        },
        users: (parent, args, { models }) => {
            return models.userManager.getUsers();
        }
    },

    Mutation: {
        createUser: (parent, { id }, { models }) => {
            return models.userManager.addUser(id);
        },
        addPointsToUser: (parent, { id, points }, { models }) => {
            return models.userManager.addPointsToUser(id, points);
        }
    }
}