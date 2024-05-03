import dotenv from 'dotenv';

dotenv.config();

function required(key,defaultvalue=undefined){
    const value = process.env[key] || defaultvalue;
    // or : 앞의 값이 참일 경우 앞의 값이 대입되고 값이 거짓일 경우 뒤의 값이 대입된다.
    if (value==null){
        throw new Error(`키 ${key}는 정의되지 않았다.,`);
    }
    return value;
};

export const config = {
    jwt : {
        secreatKey: required('JWT_SECRET'),
        expiresInSec: parseInt(required('JWT_EXPIRES_SEC',172800))
    },
    bcrypt:{
        saltRounds:parseInt(required('BCRYPT_SALT_ROUNDS',10))
    },
    host:{
        port:parseInt(required('HOST_PORT',8080))
    }
};
