import exp from "constants";
import * as userInfoRespository from "../Data/auth.js";

// 회원가입 함수!
export async function signUp(req,res,next){
    const {id,username,password,name,email,url} = req.body;
    const data = await userInfoRespository.userRegister(id,username,password,name,email,url);
    if(data){res.status(201).json(data);}
}

//로그인 함수
export async function login(req,res,next){
    const {username,password} = req.body;
    const user = await userInfoRespository.login(username);
    if(user){
        res.status(201).json(`${username} 로그인 완료`);
    }else{res.status(404).json({message : `${username} 아이디 및 비밀번호 확인`});
}};

//로그인 정보 확인 함수
export async function checkInfo(req,res,next){
    const userid = req.params.id;
    const data = await userInfoRespository.getInfoByUserId(userid);
    if(data){
        res.status(200).json(data)
    }else{
        res.status(404).json({message: `${id}의 회원가입 정보가 존재하지 않습니다.`});
    }
}