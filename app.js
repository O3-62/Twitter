import express from "express";
import morgan from "morgan";
import tweetsRouter from "./router/tweets.js";
import infoRouter from "./router/auth.js";
import { config } from "./config.js";
import { db } from "./db/database.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use('/tweets',tweetsRouter);
app.use('/auth',infoRouter);

app.use((req,res,next) => {
    res.sendStatus(config.port);
});


//DB 연결 테스트  :: db.getConnection().then(Connection => console.log(Connection));
app.listen(config.host.port);