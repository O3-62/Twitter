import express from "express";

const router = express.Router();

let tweets = [
    {
        id:'1',
        text: '안녕하세요',
        createdAt : Date.now().toString(),
        name: '김사과',
        username: 'apple',
        url: 'https://www.nongsaro.go.kr/cms_contents/976/20151215141317605.gif'
    },
    {
        id:'3',
        text: '집에가서자고싶다...',
        createdAt : Date.now().toString(),
        name: '바나나',
        username: 'banana',
        url: 'https://img.freepik.com/premium-vector/banana-cute-kawaii-style-fruit-character-vector-illustration_787461-1772.jpg'
    },
]

router.get('/',(req,res) => {
    const username = req.query.username;
    const data = username ? tweets.filter((tweet) => tweet.username == username) : tweets;
    
    res
    .status(200)
    .json(data);


 });

router.get('/:id',(req,res,next) =>{
    const id = req.params.id;
    const tweet = tweets.find((tweet) => tweet.id === id);
    if(tweet){
        res.status(200).json(tweet);
    }else{
        res.status(404).json({message: `${id}의 작성 트윗이 없습니다.`})
    };
});

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
