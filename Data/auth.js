import express from "express";
import * as bcrypt from "bcrypt";

const router = express.Router();

let users = [{
    id: '1',
    username:'apple',
    password:'$2b$10$5ObIFT5O3EfUBvFa1ChfrefgAngjvhvWimo9PDN1SRKipIAU1QNrq',
    name:'김사과',
    email:'apple@apple.com',
    url: ''
}
]


// 회원가입을 리턴
export async function userRegister(id,username,password,name,email,url){
    const userinfo = {
        id,
        username,
        password,
        name,
        email,
        url
    };
    users = [userinfo, ...users];
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
}
