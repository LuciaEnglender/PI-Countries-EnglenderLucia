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
            type: DataTypes.STRING
        },
        dificulty: {
            type: DataTypes.INTEGER,
            validate:{
                min: 1,
                max: 5
            }
        },
        duration:{
            type: DataTypes.INTEGER
        },
        season :{
            type: DataTypes.ENUM('SUMMER', 'SPRING', 'WINTER', 'AUTUMN', 'VERANO', 'PRIMAVERA', 'INVIERNO', 'OTOÑO')
        },
        createdInDB:{
            type: DataTypes.BOOLEAN
        }
    })
}