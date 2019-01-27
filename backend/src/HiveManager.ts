import Hive from "../src/Hive";
import User from "./User";
import { Guid } from "guid-typescript";
import {ILocation} from "./interfaces";

class hiveManager{
    private hive_list: Map<Guid, Hive>;
    private min_cut_off: number = 10*60000;
    private hr_cut_off: number = 120*60000;

    constructor(){
        this.hive_list = new Map<Guid, Hive>([]);
    }

    public get_hives(): Map<Guid, Hive> {
        return this.hive_list;
    }

    public add_hive(name: string, location: ILocation, user: User): Map<Guid, Hive> {
        let key: Guid = Guid.create();
        let hive: Hive = new Hive(key, name, location, user);
        this.hive_list.set(key, hive);
        return this.hive_list;
    }

    public remove_hive(key: Guid) {
        if (this.hive_list.has(key)) {
            this.hive_list.delete(key);
        } else {
            let curr_time: number = Date.now();
            for (const hive of this.hive_list.values()) {
                if (hive.getAttending_users().length > 0) {
                    if (hive.getDateCreated() + this.hr_cut_off >= curr_time) {
                        this.hive_list.delete(hive.getKey());
                    }
                } else if (hive.getDateCreated() + this.min_cut_off >= curr_time) {
                    this.hive_list.delete(hive.getKey());
                }
            }
        }
    }

    public generate_hives(): Map<Guid, Hive> {
        //use add_hive with random names, location, null
        return this.hive_list;
    }
}