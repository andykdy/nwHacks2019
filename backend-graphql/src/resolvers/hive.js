export default {
    Query: {
        hives: (parent, args, { models }) => {
            return models.hiveManager.getHives();
        },
        hive: (parent, { id }, { models }) => {
            return models.hiveManager.getHive(id);
        }
    },

    Mutation: {
        createHive: (parent, { title, location, description, user }, { models }) => {
            return models.hiveManager.addHive(title, location, description, user);
        },
    },

    Location: {
        lat: (location) => {
            return location.lat;
        },
        lon: (location) => {
            return location.lon;
        }
    }
}