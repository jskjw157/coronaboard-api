const Sequelize = require( "sequelize");

const config = {
    host: process.env.CORONABOARD_MYSQL_HOST || '127.0.0.1',
    port: 3306,
    database: 'coronaboard',
    user: 'root',
    password: process.env.CORONABOARD_MYSQL_PASSWORD || 'wldnjs12',
};

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    logging: false,
});

module.exports = {
    // 데이터베이스 연결이 완료된 객체 모델 생성
    sequelize,
    // 모델 정의
    GlobalStat: require('./global-stat.model')(sequelize),
}