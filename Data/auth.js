import MongoDb from 'mongodb';
import { getUsers } from '../db/database.js';

const ObjectID = MongoDb.ObjectId; //객체 json 형태로 데이터를 저장

//const DataTypes = SQ.DataTypes;

// export const User = sequelize.define(
//     'user', //테이블 이름, 자동으로 뒤에 s를 붙임
//     {
//         id:{
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             allowNull: false,
//             primaryKey: true
//         },
//         username: {
//             type : DataTypes.STRING(50),
//             allowNull:false
//         },
//         password: {
//             type : DataTypes.STRING(150),
//             allowNull:false
//         },
//         name: {
//             type : DataTypes.STRING(50),
//             allowNull:false
//         },
//         email: {
//             type : DataTypes.STRING(50),
//             allowNull:false
//         },
//         url: DataTypes.STRING(1000)
//     },
//     {timestamps:false}
// );

// 아이디(username) 중복검사
export async function findByUsername(username){
    return getUsers().find({username}).next()
    .then(mapOptionalUser);
}

// id 중복검사
export async function findById(id){
    return getUsers().find({_id: new ObjectID(id)}).next()
    .then(mapOptionalUser);
}
export async function createUser(user){
    return getUsers().insertOne(user)
    .then((result) =>
        console.log(result.insertedId.toString()));
}
// // export async function login(username){
// //     const user = users.find((user) => user.username === username)
// //     return user;
// // }

function mapOptionalUser(user){
    return user? {...user,id:user._id.toString()}
 : user;}