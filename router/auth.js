import express from 'express';
import { body } from 'express-validator';
import * as authController from '../controller/auth.js';
import { validate } from '../middleware/validator';
const router = express.Router();

const validateInfo = [
    body('id').trim().isLength({min:3}).withMessage('유저 아이디는 3글자 이상이어야 합니다.'),
    body('username').trim().isLength({min:1}).withMessage('이름은 비울 수 없습니다.'),
    body('password').matches(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,15}$/).withMessage('비밀번호는 반드시 영문, 숫자, 특수문자 조합으로 이루어진 6~15자여야 합니다.'),
    body('email').isEmail().withMessage('형식에 맞는 이메일을 입력하세요.'),
    validate]

//가입하기
router.post('/',validateInfo,(req,res,next) => {
    const {id,username,password,name,email,url} = req.body;
    const user = {
        id,
        username,
        password,
        name,
        email,
        url
    };
    users = [user, ...users];
    res.status(201).json(users);
});

//정보 찾기 아이디로
router.get('/:id',authController.checkInfo);


export default router;