const { DataTypes } =require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('activity' , {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dificulty: {
            type: DataTypes.INTEGER,
            validate:{
                min: 1,
                max: 5
            },
            allowNull: false

        },
        duration:{
            type: DataTypes.INTEGER,
            allowNull: false

        },
        season :{
            type: DataTypes.ENUM('SUMMER', 'SPRING', 'WINTER', 'AUTUMN', 'VERANO', 'PRIMAVERA', 'INVIERNO', 'OTOÑO'),
            allowNull: false

        },
 
    })
}