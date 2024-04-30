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
        id:'2',
        text: '월화만 존버하면 하루 쉰다.',
        createdAt : Date.now().toString(),
        name: '윤솔',
        username: 'YS',
        url: 'https://cdn.pixabay.com/photo/2016/06/08/09/20/dog-1443465_1280.jpg'
    },
    {
        id:'3',
        text: '집에가서자고싶다...',
        createdAt : Date.now().toString(),
        name: '바나나',
        username: 'banana',
        url: 'https://img.freepik.com/premium-vector/banana-cute-kawaii-style-fruit-character-vector-illustration_787461-1772.jpg'
    },
];

// 모든 트윗을 리턴
export async function getAll() {
    return tweets;
};

// 해당 아이디에 대한 트윗을 리턴
export async function getAllByUsername(username){
    return tweets.filter((tweets) => tweets.username == username);
};

// 글 번호에 대한 트윗을 리턴
export async function getById(userid){
    return tweets.filter((tweets) => tweets.id == userid);
};

// 트윗을 작성
export async function create(text,name,username){
    const tweet = {
        id:'4',
        text,
        createdAt : Date.now().toString(),
        name,
        username //key = value일 경우 하나만 적어도 가능!
    };
    tweets = [tweet, ...tweets];
    return tweet;
};

// 트윗을 변경
export async function update(id,text){
    const tweet = tweets.find((tweet) => tweet.id === id);
    if(tweet){
        tweet.text = text;
    }
    return tweet;
};

//트윗을 삭제
export async function remove(id){
    tweets = tweets.filter((tweet) => tweet.id !== id);
};