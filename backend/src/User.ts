export default class User{
    private readonly userID: string;
    private readonly badges: string[];
    private rank: string; // Should this also be another class?
    private points: number;

    constructor(userID: string ){
        this.userID = userID;
        this.points = 0;
        this.badges = [];
        this.rank = "larvae";
    }

    // public get_user_ID(): string{
    //     return this.userID;
    // }

    public get_points(): number{
        return this.points;
    }

    public get_badges(): string[] {
        return this.badges;
    }

    public add_badges(badge: string): string[] {
        this.badges.push(badge);
        return this.badges;
    }

    // public get_rank(): string{
    //     return this.rank;
    // }

    public add_points(value: number): number {
        this.points += value;

        if (this.points > 10) {
            this.rank = "worker";
            this.badges.push("something");
        } else if (this.points > 20) {
            this.rank = "drone";
            this.badges.push("something");
        } else if (this.points > 30) {
            this.rank = "queen";
            this.badges.push("something"); //todo: add url for badge
        }

        return this.points;
    }
}