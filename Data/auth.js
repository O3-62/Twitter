import express from "express";

const router = express.Router();

let users = [{
    id: '1',
    username:'apple',
    password:'1111',
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

// 로그인 완료, 아이디에 저장된 회원정보를 리턴
export async function getInfoByUserId(username){
    const user = users.find((user) => user.username == username)};
    return user;