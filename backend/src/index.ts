import express from "express";
import bodyParser from "body-parser";
import HiveManager from "./HiveManager";
import UserManager from "./UserManager";
import User from "./User";
import {ILocation} from "./interfaces";
import Hive from "./Hive";

const app = express();
const port = 8080; // default port to listen
app.use(bodyParser.json({type: "application/json"}));

const hiveManager = new HiveManager();
const userManager = new UserManager();

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.json({message: "Yay it works!"});
});

/**
 * /user/:username/points :
 *  get:
 *      description: Get points for selected user
 *      request:
 *          @param username: username of user
 *      responses:
 *          200:
 *              body: {points: <number of points>}
 *          400:
 *              body: {error: <error message>}
 *          500:
 *              body: {error: <error message>}
 */
app.get("/user/:username/points", (req, res) => {
    try {
        if (req.params.hasOwnProperty("username")) {
            let points: number = userManager.get_user(req.params.username).get_points();
            res.statusCode = 200;
            return res.json({points: points});
        } else {
            res.statusCode = 400;
            return res.json({error: "No username given"});
        }
    } catch (err) {
        res.statusCode = 400;
        return res.json({error: err.message});
    }
});

/**
 * /user/badges :
 *  get:
 *      description: Get badges for selected user
 *      request:
 *          body: {username: <username of user>}
 *      responses:
 *          200:
 *              body: {<badges[]>}
 *          400:
 *              body: {error: <error message>}
 *          500:
 *              body: {error: <error message>}
 */
app.get("/user/badges", (req, res) => {
    try {
        if (req.body.hasOwnProperty("username")) {
            let badges: string[] = userManager.get_user(req.body.username).get_badges();
            res.statusCode = 200;
            res.json(badges);
        } else {
            res.statusCode = 400;
            return res.json({error: "No username given"});
        }
    } catch (err) {
        res.statusCode = 400;
        return res.json({error: err.message});
    }
});

/**
 * /user/post :
 *  get:
 *      description: Add badges to a user
 *      request:
 *          body: {
 *              username: <username of user>,
 *              badges: [<list of badges>]
 *          }
 *      responses:
 *          200:
 *              body: {<user>}
 *          400:
 *              body: {error: <error message>}
 *          500:
 *              body: {error: <error message>}
 */
app.post("/user/badges", (req, res) => {
    try {
        if (req.body.hasOwnProperty("username") && req.body.hasOwnProperty("badges")) {
            for (let b of req.body.badges) {
                userManager.get_user(req.body.username).add_badges(b);
            }
            const user: User = userManager.get_user(req.body.username);
            res.statusCode = 200;
            res.json(user);
        } else {
            res.statusCode = 400;
            return res.json({error: "No username given"});
        }
    } catch (err) {
        res.statusCode = 400;
        return res.json({error: err.message});
    }
});

/**
 * /user :
 *  post:
 *      description: Add new user
 *      request:
 *          body: {username: <username of user>}
 *      responses:
 *          200:
 *              body: {<User object>}
 *          400:
 *              body: {error: <error message>}
 *          500:
 *              body: {error: <error message>}
 */
app.post("/user", (req, res) => {
    try {
        if (req.body.hasOwnProperty("username")) {
            let user: User = userManager.add_new_user(req.body.username);
            res.statusCode = 201;
            res.json(user);
        } else {
            res.statusCode = 400;
            return res.json({error: "No username given"});
        }
    } catch (err) {
        res.statusCode = 500;
        return res.json({error: err.message});
    }
});

/**
 * /user/:username/score/:score :
 *  post:
 *      description: Add points to a user
 *      request:
 *          @param username: username of user
 *          @param score: score to add to user profile
 *      responses:
 *          200:
 *              body: {<User object>}
 *          400:
 *              body: {error: <error message>}
 *          500:
 *              body: {error: <error message>}
 */
app.post("/user/:username/score/:score", (req, res) => {
    try {
        if (req.params.hasOwnProperty("username") && req.params.hasOwnProperty("score")) {
            userManager.add_points_to_user(req.params.username, req.params.score);
            const user = userManager.get_user(req.params.username);
            res.statusCode = 200;
            res.json(user);
        } else {
            res.statusCode = 400;
            return res.json({error: "No "});
        }
    } catch (err) {
        res.statusCode = 500;
        return res.json({error: err.message});
    }
});

/**
 * /hive :
 *  post:
 *      description: Get all the active hives
 *      responses:
 *          200:
 *              body: {<User object>}
 *          400:
 *              body: {error: <error message>}
 *          500:
 *              body: {error: <error message>}
 */
app.get("/hive", (req, res) => {
    res.statusCode = 200;
    return res.json(hiveManager.get_hives());
});

/**
 * /hive/:key :
 *  post:
 *      description: Get users at the selected event
 *      request:
 *          @param key: key for the event
 *      responses:
 *          200:
 *              body: {<User object>}
 *          400:
 *              body: {error: <error message>}
 *          500:
 *              body: {error: <error message>}
 */
app.get("/hive/:key", (req, res) => {
    try {
        if (req.params.hasOwnProperty("key")) {
            const users: User[] = hiveManager.get_hive(req.params.key).getAttending_users();
            res.statusCode = 200;
            return res.json(users);
        } else {
            res.statusCode = 400;
            return res.json({error: "No key given"});
        }
    } catch (err) {
        res.statusCode = 500;
        return res.json({error: err.message});
    }
});

/**
 * /user/:username/score/:score :
 *  post:
 *      description: Add points to a user
 *      request:
 *          body: {
 *              title: <title of event>,
 *              description: <description of event>,
 *              username: <username of user who created event>
 *              location: <location of event as ILocation>
 *          }
 *      responses:
 *          200:
 *              body: {<User object>}
 *          400:
 *              body: {error: <error message>}
 *          500:
 *              body: {error: <error message>}
 */
app.post("/hive", (req, res) => {
    try {
        if (
            req.body.hasOwnProperty("title") &&
            req.body.hasOwnProperty("description") &&
            req.body.hasOwnProperty("username") &&
            req.body.hasOwnProperty("location") &&
            req.body.location.hasOwnProperty("lat") &&
            req.body.location.hasOwnProperty("lon") &&
            req.body.location.hasOwnProperty("radius")
        ) {
            const location: ILocation = {
                lat: req.body.location.lat,
                lon: req.body.location.lon,
                radius: req.body.location.radius
            };
            let hiveList: Hive[] = hiveManager.add_hive(req.body.title, location, req.body.description, req.body.username);
            res.statusCode = 201;
            return res.json(hiveList);
        } else {
            res.statusCode = 400;
            return res.json({error: "Missing input variable"});
        }
    } catch (err) {
        res.statusCode = 500;
        return res.json({error: err.message});
    }
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
} );