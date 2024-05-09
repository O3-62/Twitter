import { config } from 'dotenv';
import MongoDb from 'mongodb';

let db;

export async function connectDB(){
    config(); // dotenv에서 환경 변수 로드

    console.log(process.env.DB_HOST); // DB_HOST 환경 변수 출력

    return MongoDb.MongoClient.connect(process.env.DB_HOST)
        .then((client) => db = client.db());
}

export function getUsers(){
    return db.collection('users');
}

export function getTweets(){
    return db.collection('tweets');
}