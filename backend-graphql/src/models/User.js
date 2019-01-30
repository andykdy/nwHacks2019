class User {
    constructor(userId) {
        this.id = userId;
        this.points = 0;
        this.badges = [];
        this.rank = "larvae";
    }

    getPoints() { return this.points };

    addPoints(value) {
        this.points += value;

        if (this.points > 30) {
            this.rank = "queen";
            this.badges.push("badge");
        } else if (this.points > 20) {
            this.rank = "drone";
            this.badges.push("badge");
        } else if (this.points > 10) {
            this.rank = "worker";
            this.badges.push("badge");
        }

        return this.points;
    }

    getBadges() { return this.badges };

    addBadges(badge) {
        this.badges.push(badge);
        return this.badges;
    }
}

export default User;