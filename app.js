import express from "express";
import morgan from "morgan";
import tweetsRouter from "./router/tweets.js"
import infoRouter from "./router/auth.js"
import { config } from "./config.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use('/tweets',tweetsRouter);
app.use('/auth',infoRouter);

app.use((req,res,next) => {
    res.sendStatus(config.port);
});

app.listen(config.port);