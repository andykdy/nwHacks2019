import bodyParser from "body-parser";
// @ts-ignore
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import config from "../config";
import schema from "./schema";

export default (app: any) => {
    if (config.env === "development") {
        app.use("/api/graphql", graphiqlExpress({endpointURL: "/api"}));
    }
};
