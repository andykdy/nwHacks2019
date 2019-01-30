class Hive {
    constructor(key, title, location, description, user) {
        this.key = key;
        this.title = title;
        this.location = location;
        this.description = description;
        this.created_by = user;
        this.attending_users = [];
        this.date_created = Date.now();
    }

    getAttendingUsers() { return this.attending_users };

    addAttendingUser(user) {
        this.attending_users.push(user);
    }
}

export default Hive;