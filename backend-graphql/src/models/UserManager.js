import User from "./User";

class UserManager {
    constructor() {
        this.user_list = new Map();
    }

    getUsers() {
        return Array.from(this.user_list.values());
    }

    getUser(key) {
        if (this.user_list.has(key)) {
            console.log(this.user_list.get(key));
            return this.user_list.get(key);
        } else {
            throw new Error("User does not exist");
        }
    }

    addUser(userId) {
        if (!this.user_list.has(userId)) {
            const user = new User(userId);
            this.user_list.set(userId, user);

            return user;
        }

        throw new Error("User already exists");
    }

    deleteUser(userId) {
        if (this.user_list.has(userId)) {
            this.user_list.delete(userId);
            return true;
        }

        return false;
    }

    addPointsToUser(userId, points) {
        const user = this.user_list.get(userId);
        user.addPoints(points);

        return user;
    }
}

export default UserManager;