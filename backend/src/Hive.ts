import User from "../src/User";
import {Guid} from "guid-typescript";
import {ILocation} from "./interfaces";

export default class Hive {
    private key: Guid;
    private name: string;
    private location: ILocation;
    private attending_users: User[];
    private date_created: number;
    private created_by: User;

    constructor(key: Guid, name: string, location: ILocation, user: User){
        this.key = key;
        this.name = name;
        this.location = location;
        this.attending_users = [];
        this.date_created = Date.now();
        this.created_by = user;
    }

    public add_user(user: User){
        this.attending_users.push(user);
    }

    public getKey(): Guid {
        return this.key;
    }

    public getName(): string {
        return this.name;
    }

    public getLocation(): ILocation {
        return this.location;
    }

    public getAttending_users(): User[] {
        return this.attending_users;
    }

    public getDateCreated(): number {
        return this.date_created;
    }

    public getCreatedBy(): User {
        return this.created_by
    }
}