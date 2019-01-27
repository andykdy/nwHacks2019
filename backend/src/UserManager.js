"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../src/User");
class userManager {
    constructor() {
        this.user_list = new Map([]);
    }
    get_users() {
        return this.user_list;
    }
    add_points_to_user(userID, points) {
        let currUser = this.user_list.get(userID);
        currUser.add_points(points);
    }
    add_new_user(userID) {
        if (!this.user_list.has(userID)) {
            let new_user = new User_1.default(userID);
            this.user_list.set(userID, new_user);
            return new_user;
        }
        return null;
    }
    delete_user(userID) {
        if (this.user_list.has(userID)) {
            this.user_list.delete(userID);
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=UserManager.js.map