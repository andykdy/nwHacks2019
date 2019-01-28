"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = require("path");
const app = express_1.default();
const port = 8080;
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("index");
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map