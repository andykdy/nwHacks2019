"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hive {
    constructor(key, name, location, user) {
        this.key = key;
        this.name = name;
        this.location = location;
        this.attending_users = [];
        this.date_created = Date.now();
        this.created_by = user;
    }
    add_user(user) {
        this.attending_users.push(user);
    }
    getKey() {
        return this.key;
    }
    getName() {
        return this.name;
    }
    getLocation() {
        return this.location;
    }
    getAttending_users() {
        return this.attending_users;
    }
    getDateCreated() {
        return this.date_created;
    }
    getCreatedBy() {
        return this.created_by;
    }
}
exports.default = Hive;
//# sourceMappingURL=Hive.js.map