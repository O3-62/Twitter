import exp from "constants";
import * as tweetRepository from "../Data/tweet.js";


//모든 트윗을 가져오는 함수
export async function getTweets(res,req){
    const username = req.query.username;
    const data = await(username ?tweetRepository.getAllByUsername(username):tweetRepository.getAll());
    res.status(200).json(data);
}

// 하나의 트윗을 가져오는 함수
export async function getTweet(req,res,next){
    const userid = req.params.id;
    const data = await tweetRepository.getById(userid);
    if(data){
        res.status(200).json(data)
    }else{
        res.status(404).json({message: `${id}의 작성 트윗이 없습니다.`});
    }
};

// 트윗을 생성하는 함수
export async function createTweet(req,res){
    const {text,name,username} = req.body;
    const data = await tweetRepository.create(text,name,username);
    res.status(201).json(text);
}

// 트윗을 변경하는 함수
export async function updateTweet(req,res,next){
    const id = req.params.id;
    const text = req.body.text;
    const data = await tweetRepository.update(id,text);
    if(data){
        res.status(201).json(data)
    }else{
        res.status(404).json({message: `${id}의 작성 트윗이 없습니다.`});
    }
}

// 트윗을 삭제하는 함수
export async function deleteTweet(req,res,next) {
    const id =  req.params.id;
    await tweetRepository.remove(id);
    res.sendStatus(204);
}