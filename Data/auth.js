import express from "express";
import * as bcrypt from "bcrypt";

const router = express.Router();

/*
let users = [{
    id: '1',
    username:'apple',
    password:'$2b$10$5ObIFT5O3EfUBvFa1ChfrefgAngjvhvWimo9PDN1SRKipIAU1QNrq',
    name:'김사과',
    email:'apple@apple.com',
    url: ''
},
{
    id: '2',
    username:'banana',
    password:'$2b$10$5ObIFT5O3EfUBvFa1ChfrefgAngjvhvWimo9PDN1SRKipIAU1QNrq',
    name:'박나나',
    email:'banana@banana.com',
    url: ''
}
]

//유저네임 중복 검사
export async function findByUsername(username){
    return users.find((user) => {user.username === username});
}

//아이디 중복 검사
export async function findById(userid){
    return users.find((user) => {user.userid === id});
}

// 회원가입을 리턴
export async function userRegister(user){
    const created = {id: '10', ... user };
    users.push(created);
    return users;
};

export async function login(id,password){
    const user = users.filter((users) => users.id == id);
    const check = user.password == bcrypt.hashSync(password,10);
    if(check){
        return true;
    }else{
        return false;
    }
}*/

let users = [
    {
        id: '1',
        username: 'apple',
        password: '$2b$10$ERrMBARDprS1Ajt9snjS2uXaCuYv/enG3nWFldAQWsnUQ2G.XwKvu',
        name: '김사과',
        email: 'apple@apple.com',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSRyel4MCk8BAbI6gT_j4DBTEIcY0WW4WWfoklymsWA&s'
    },
    {
        id: '2',
        username: 'banana',
        password: '$2b$10$ERrMBARDprS1Ajt9snjS2uXaCuYv/enG3nWFldAQWsnUQ2G.XwKvu',
        name: '반하나',
        email: 'banana@banana.com',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSRyel4MCk8BAbI6gT_j4DBTEIcY0WW4WWfoklymsWA&s'
    }
];
// 아이디(username) 중복검사
export async function findByUsername(username){
    return users.find((user) => user.username === username);
}
// id 중복검사
export async function findById(id){
    return users.find((user) => user.id === id);
}
export async function createUser(user){
    const created = {id:'10', ...user }
    users.push(created);
    return created.username;
}
export async function login(username){
    const user = users.find((user) => user.username === username)
    return user;
}