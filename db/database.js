import  { config } from "../config.js";
import SQ from 'sequelize';

const {host, database, user, password, port} = config.db;

export const sequelize = new SQ.Sequelize(database, user, password,{
    host,
    dialext:'mysql',
    logging:false // 데이터를 가져오거나 집어넣거나 등등 실행할 때
});
