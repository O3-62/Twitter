import express from 'express';
import { body } from 'express-validator';
import * as authController from '../Controller/auth.js';
import { validate } from '../middleware/validator.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

const validateLogin = [
    body('username').trim().notEmpty().withMessage(`username을 입력하세요.`),
    body('password').trim().isLength({min:4}).withMessage(`password는 최소 4자 이상입니다.`),validate
];

const validateSignup = [
    body('name').trim().notEmpty().withMessage('이름은 비울 수 없습니다.'),
    body('email').isEmail().withMessage('형식에 맞는 이메일을 입력하세요.'),
    body('url').isURL().withMessage(`url의 형식을 확인하세요.`),
    validate]

//가입하기
router.post('/signup',validateSignup,authController.signup);

//로그인
router.post('/login',validateLogin,authController.login);

router.get('/me', isAuth ,authController.me);

export default router;