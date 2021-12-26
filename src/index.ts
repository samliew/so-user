import dotenv from "dotenv";
import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json({ strict: true }));
app.use(express.static(join(__dirname, "static")));
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.route("/").get((_req, res) => {
    res.sendStatus(200);
});

app.route("/compare").get((_req, res) => {
    res.sendStatus(200);
});

app.route("/*").get((_req, res) => {
    res.status(404).send("Not Found");
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});