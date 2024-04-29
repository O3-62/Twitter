import express from "express";
import * as tweetController from '../Controller/tweet.js';

const router = express.Router();

//트윗 찾기, 유저이름
router.get('/',tweetConttroller.getTweets);

 //트윗 찾기
router.get('/:id',tweetConttroller.getTweets);

//트윗하기
router.post('/',(req,res,next) => {
    const {text, name, username} = req.body;
    const tweet = {
        id:'2',
        text: text,
        createdAt : Date.now().toString(),
        name: name,
        username: username,
    };
    tweets = [tweet, ...tweets];
    res.status(201).json(tweets);
});

router.put('/:id',(req,res,next) => {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweets.find((tweet) => tweet.id === id);
    if(tweet){
        tweet.text = text;
        res.status(201).json(tweet);
    }else{
        res.status(404).json({message: `${id}의 작성 트윗이 없습니다.`})
    };
});
router.delete('/:id',(req,res,next) => {
    const id = req.params.id;
    tweets = tweets.filter((tweet) => tweet.id !== id);
    res
    res.status(204).json(tweets);
});


export default router;
