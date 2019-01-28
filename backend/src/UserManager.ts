import User from "../src/User";

export default class userManager {
    private readonly user_list: Map<string, User>;

    constructor() {
        this.user_list = new Map<string, User>([]);
    }

    public get_user(key: string): User {
        if (this.user_list.has(key)) {
            return this.user_list.get(key);
        } else {
            throw new Error("User doesn't exist");
        }
    }

    // public get_users(): Map<string, User>{
    //     return this.user_list;
    // }

    public add_points_to_user(userID:string, points:number): void {
        let currUser = this.user_list.get(userID);
        currUser.add_points(points);
    }

    public add_new_user(userID:string): User {
        if (!this.user_list.has(userID)) {
            let new_user = new User(userID);
            this.user_list.set(userID,new_user);

            return new_user;
        }
        throw new Error("Duplicate username");
    }

    // public delete_user(userID:string): boolean {
    //     if (this.user_list.has(userID)){
    //         this.user_list.delete(userID);
    //         return true;
    //     }
    //     return false;
    // }
}