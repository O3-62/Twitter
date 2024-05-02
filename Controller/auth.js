/*import exp from "constants";
import * as authRespository from "../Data/auth.js";
import jwt from 'jsonwebtoken';
import * as bcrypt from "bcrypt";

const secretkey = 'abas213%@'
const jwtExpiresInDays = '2d';
const bcryptSaltRounds = 10;

function createJwtToken(id){
    const token = jwt.sign({id},secretkey,{exiresIn:jwtExpiresInDays});
}


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
    const found = await authRespository.findByUsername(username);
    if(found){
        return res.status(409).json({message:`${username}이 이미 존재합니다.`})
    };
    const hashed = await bcrypt.hash(password,bcryptSaltRounds);
    const userId = await authRespository.createUser({id,username,hashed,password,name,email,url});
    const token = createJwtToken(userId);
    res.status(201).json(token, username);
}

//로그인 함수
export async function login(req,res,next){
    const {username,password} = req.body;
    const user = await authRespository.login(username);
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
*/


import * as authRepository from '../Data/auth.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const secretKey = "abcd1234%^&*";
const jwtExpiresInDays = '2d';
const bcryptSaltRounds = 10;
function createJwtToken(id){
    return jwt.sign({id}, secretKey, {expiresIn: jwtExpiresInDays});
}
export async function signup(req, res, next){
    const {username, password, name, email, url} = req.body;
    const found = await authRepository.findByUsername(username);
    if(found){
        return res.status(409).json({message:`${username}이 이미 있습니다`});
    }
    const hashed = await bcrypt.hash(password, bcryptSaltRounds);
    const userId = await authRepository.createUser({username, hashed, name, email, url});
    const token = createJwtToken(userId);
    res.status(201).json({token, username});
}

export async function login(req, res, next){
    const {username, password} = req.body;
    //const user = await authRepository.login(username);
    const user = await authRepository.findByUsername(username)
    if(!user){
        return res.status(401).json({message: `아이디를 찾을 수 없음`});
    }
    const isValipassword = await bcrypt.compareSync(password,user.password);
    if(!isValipassword){
        return res.status(401).json({message: `비밀번호 오류`});
    }
    const token = createJwtToken(user.id);
    res.status(200).json({token,username});
}

/*
    if(user){
        if(bcrypt.compareSync(password, user.password)){
            res.status(201).header('Token', makeToken(username)).json(`${username} 로그인 완료`);
        }else{
            res.status(404).json({message: `${username}님 아이디 또는 비밀번호 확인하세요`})
        }
    }else{
        res.status(404).json({message: `${username}님 아이디 또는 비밀번호 확인하세요`})
    }
}


export async function verify(req, res, next){
    const token = req.header['Token'];
    if(token){
        res.status(200).json(token);
    }
}
*/


export async function me(req, res, next){
    const user = await authRepository.findById(req.userId);
    if(!user){
        return res.status(404).json({message:`일치하는 사용자가 없습니다.`});
    }
    res.status(200).json({token:req.token,username:user.username});
}