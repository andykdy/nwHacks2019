"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hive_1 = require("../src/Hive");
const guid_typescript_1 = require("guid-typescript");
class hiveManager {
    constructor() {
        this.min_cut_off = 10 * 60000;
        this.hr_cut_off = 120 * 60000;
        this.hive_list = new Map([]);
    }
    get_hives() {
        return this.hive_list;
    }
    add_hive(name, location, user) {
        let key = guid_typescript_1.Guid.create();
        let hive = new Hive_1.default(key, name, location, user);
        this.hive_list.set(key, hive);
        return this.hive_list;
    }
    remove_hive(key) {
        if (this.hive_list.has(key)) {
            this.hive_list.delete(key);
        }
        else {
            let curr_time = Date.now();
            for (const hive of this.hive_list.values()) {
                if (hive.getAttending_users().length > 0) {
                    if (hive.getDateCreated() + this.hr_cut_off >= curr_time) {
                        this.hive_list.delete(hive.getKey());
                    }
                }
                else if (hive.getDateCreated() + this.min_cut_off >= curr_time) {
                    this.hive_list.delete(hive.getKey());
                }
            }
        }
    }
    generate_hives() {
        return this.hive_list;
    }
}
//# sourceMappingURL=HiveManager.js.map