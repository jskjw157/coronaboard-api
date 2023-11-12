const { DataTypes } = require('sequelize');

module.exports =  (sequelize) => {
    return sequelize.define(
        // 모델 이름
        'GlobalStat',
        // 테이블 컬럼 정의
        {
            id: {
                autoIncrement: true,                // 값 자동증가
                type: DataTypes.INTEGER.UNSIGNED,   // 부호없는 정수
                allowNull: false,                   // 빈 값 허용 X
                primaryKey: true,                   // 기본키로 저장
            },
            cc: {
                type: DataTypes.CHAR(2),
                allowNull: false,
            },
            date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            confirmed: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
            deaths: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            released: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            tested: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            testing: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            negative: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
        },
        // 테이블 옵션
        {
            sequelize,
            tableName: 'GlobalStat',
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    fields: [{ name: 'id'}],
                },
                {
                    name: 'ccWithDate',
                    unique: true,
                    fields: [{ name: 'cc'}, { name: 'date'}],
                },
            ],
            timestamps: false,  // createAt, updateAt 컬럼을 사용하지 않음
        }
    );
}