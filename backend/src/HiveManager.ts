import Hive from "../src/Hive";
import User from "./User";
import { Guid } from "guid-typescript";
import {ILocation} from "./interfaces";

const INIT_TIMEOUT: number = 10 * 60000;
const SESSION_TIMEOUT: number = 120 * 60000;

export default class HiveManager {
    private readonly hive_list: Map<Guid, Hive>;

    constructor() {
        this.hive_list = new Map<Guid, Hive>([]);
    }

    public get_hive(id: Guid): Hive {
        return this.hive_list.get(id);
    }

    public get_hives(): Hive[] {
        return Array.from(this.hive_list.values());
    }

    public add_hive(name: string, location: ILocation, user: User, description: string): Hive[] {
        let key: Guid = Guid.create();
        let hive: Hive = new Hive(key, name, location, description, user);
        this.hive_list.set(key, hive);

        setInterval(() => {
            this.check_empty_hive(key);
        }, INIT_TIMEOUT);

        setInterval(() => {
            this.remove_hive(key);
        }, SESSION_TIMEOUT);

        return Array.from(this.hive_list.values());
    }

    public remove_hive(key: Guid) {
        if (this.hive_list.has(key)) {
            this.hive_list.delete(key);
        } else {
            // let curr_time: number = Date.now();
            // for (const hive of this.hive_list.values()) {
            //     if (hive.getAttending_users().length > 0) {
            //         if (hive.getDateCreated() + this.hr_cut_off >= curr_time) {
            //             this.hive_list.delete(hive.getKey());
            //         }
            //     } else if (hive.getDateCreated() + this.min_cut_off >= curr_time) {
            //         this.hive_list.delete(hive.getKey());
            //     }
            // }

            throw new Error("No user to delete");
        }
    }

    public generate_hives(): Map<Guid, Hive> {
        //use add_hive with random names, location, null
        return this.hive_list;
    }

    private check_empty_hive(key: Guid): void {
        if (this.hive_list.get(key).getAttending_users().length === 0) {
            this.hive_list.delete(key);
        }
    }
}