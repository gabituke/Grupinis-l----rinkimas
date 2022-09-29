import { DataTypes } from 'sequelize'

const Stories = (sequelize) => {
    const Schema = {
        title: {
            type: DataTypes.STRING, 
            allowNull: false 
        },
        story: {
            type: DataTypes.STRING, 
            allowNull: false 
        },
        photo: {
            type: DataTypes.STRING, 
            allowNull: false 
        },
        amount: {
            type: DataTypes.INTEGER, 
            allowNull: false
        }
    }

    return sequelize.define('stories', Schema)
}

export default Stories