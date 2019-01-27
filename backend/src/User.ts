export default class User{
    private userID: string;
    private points: number;
    private badges: string[];
    private rank: string; // Should this also be another class?

    constructor(userID: string ){
        this.userID = userID;
        this.points = 0;
        this.badges = [];
        this.rank = "larvae";
    }

    public get_user_ID(): string{
        return this.userID;
    }

    public get_points(): number{
        return this.points;
    }

    public get_badges(): string[]{
        return this.badges;
    }

    public get_rank(): string{
        return this.rank;
    }

    public add_points(value: number): void{
        this.points += value;
    }

}