import uuidv4 from "uuid/v4";
import Hive from "./Hive";

const INIT_TIMEOUT = 10 * 60000;
const SESSION_TIMEOUT = 120 * 60000;

class HiveManager {
    constructor() {
        this.hive_list = new Map();
    }

    getHives() { return Array.from(this.hive_list.values()) };

    getHive(id) { return this.hive_list.get(id) };

    addHive(title, location, description, user) {
        const key = uuidv4();
        const hive = new Hive(key, title, location, description, user);
        this.hive_list.set(key, hive);

        setTimeout(() => {
            this.checkEmptyHive(key);
        }, INIT_TIMEOUT);

        setTimeout(() => {
            this.removeHive(key);
        }, SESSION_TIMEOUT);

        return hive;
    }

    removeHive(key) {
        if (this.hive_list.has(key)) {
            this.hive_list.delete(key);
            return true;
        }

        return false;
    }

    checkEmptyHive(key) {
        if (this.hive_list.get(key).getAttendingUsers().length === 0) {
            this.hive_list.delete(key);
        }
    }

    generateRandomHive(callback) {
        const key = uuidv4();
        const location = {
            lat: Math.floor(Math.random() * (49.266116 - 49.252300 + 1) + 49.252300),
            lon: Math.floor(Math.random() * (123.262362 - 123.236525 + 1) + 123.236525) * -1,
        };
        const hive = new Hive(key, "Random", location, "This is a random event.", null);
        this.hive_list.set(key, hive);

        callback();
    }
}

export default HiveManager;