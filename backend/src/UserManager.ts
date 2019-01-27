import User from "../src/User";

class userManager{
    private user_list: Map<string, User>;

    constructor(){
        this.user_list = new Map<string, User>([]);
    }

    public get_users(): Map<string, User>{
        return this.user_list;
    }

    public add_points_to_user(userID:string, points:number): void{
        let currUser = this.user_list.get(userID);
        currUser.add_points(points);
    }

    public add_new_user(userID:string): User{
        if (!this.user_list.has(userID)){
            let new_user = new User(userID);
            this.user_list.set(userID,new_user);
            return new_user;
        }
        return null;
    }

    public delete_user(userID:string): boolean{
        if (this.user_list.has(userID)){
            this.user_list.delete(userID)
            return true;
        }
        return false;
    }
}