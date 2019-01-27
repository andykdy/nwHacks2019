"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(userID) {
        this.userID = userID;
        this.points = 0;
        this.badges = [];
        this.rank = "larvae";
    }
    get_user_ID() {
        return this.userID;
    }
    get_points() {
        return this.points;
    }
    get_badges() {
        return this.badges;
    }
    get_rank() {
        return this.rank;
    }
    add_points(value) {
        this.points += value;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map