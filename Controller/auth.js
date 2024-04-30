import exp from "constants";
import * as userInfoRespository from "../Data/auth.js";
import jwt from 'jsonwebtoken';
import * as bcrypt from "bcrypt";

const secret = 'abas213%@'

async function makeToken(id){
    const token = jwt.sign({
    id: 'id',
    isAdmin: false
    },secret,{expiresIn:"30m"})
    return token;
}

// 회원가입 함수!
export async function signUp(req,res,next){
    const {id,username,password,name,email,url} = req.body;
    const hashed = bcrypt.hashSync(password,10);
    const data = await userInfoRespository.userRegister(id,username,hashed,password,name,email,url);
    if(data){res.status(201).json(data);}
}

//로그인 함수
export async function login(req,res,next){
    const {username,password} = req.body;
    const user = await userInfoRespository.login(username);
    if(user){
        if(bcrypt.compareSync(password,user.password)){
            res.status(201).header('Token',makeToken())
        res.status(201).json(`${username} 로그인 완료`);
    }else{res.status(404).json({message : `${username} 아이디 및 비밀번호 확인`});
}}
};

export async function verify(req,res,next){
    const token = req.header['Token'];
    if(token){
        res.status(200).json(token);
    }
}