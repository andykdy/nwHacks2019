import express from "express";
import cors from "cors";

const app = express();

function setPort(port: string = "5000"): void {
    app.set("port", parseInt(port, 10));
}

function listen(): void {
    const port = app.get("port") || 5000;
    app.listen(port, () => {
        console.log(`The server is running and listening on port: ${port}`);
    });
}

app.use(cors({
    origin: "*",
    optionsSuccessStatus: 200,
}));

app.get("/status", (req: express.Request, res: express.Response) => {
    res.send({status: "ok"});
});

export default {
    getApp: () => app,
    setPort,
    listen,
};
