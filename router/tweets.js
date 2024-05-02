import express from "express";
import { body} from 'express-validator';
import * as tweetController from '../Controller/tweet.js';
import { validate } from '../middleware/validator.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

const validateTweet = [
    body('text').trim().isLength({min:3}).withMessage('최소 3글자 이상 입력해야 합니다.'),validate];


//트윗 찾기, 유저이름
router.get('/',isAuth,tweetController.getTweets);

 //트윗 찾기
router.get('/:id',isAuth,tweetController.getTweets);

//트윗하기
router.post('/',validateTweet,isAuth,tweetController.createTweet);

router.put('/:id',validateTweet,isAuth,tweetController.updateTweet);

router.delete('/:id',isAuth,tweetController.deleteTweet);

export default router;
