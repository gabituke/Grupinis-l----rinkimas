import { DataTypes } from 'sequelize'

const Donations = (sequelize) => {
    const Schema = {
        donator_name: {
            type: DataTypes.STRING, 
            allowNull: false 
        },
        donated_sum: {
            type: DataTypes.INTEGER, 
            allowNull: false 
        }
    }

    return sequelize.define('donations', Schema)
}

export default Donations