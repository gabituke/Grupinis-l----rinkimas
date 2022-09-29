import { Sequelize } from 'sequelize'
import mysql from 'mysql2/promise'
import { Stories, Donations } from '../model/index.js'

const database = {} 
const credentials = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'do_fund_me'
}

try {
    const connection = await mysql.createConnection({
        host: credentials.host,
        user: credentials.user,
        password: credentials.password
    })

    await connection.query('CREATE DATABASE IF NOT EXISTS ' + credentials.database)

    const sequelize = new Sequelize(credentials.database, credentials.user, credentials.password, { dialect: 'mysql'})

    // database.Users = Users(sequelize)
    database.Stories = Stories(sequelize)
    database.Donations = Donations(sequelize)


    // database.Stories.hasMany(database.Donations)
    // database.Donations.belongsTo(database.Stories)

   
    database.Stories.hasMany(database.Donations)



    await sequelize.sync({ alter: true })
} catch(error) {
    console.log(error)
    console.log('Nepavyko prisijungti prie duomenų bazės');
}

export default database