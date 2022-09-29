import express from 'express'
import db from '../database/connect.js'


const Router = express.Router()

Router.post('/',  async (req, res) => {
    try {
        
        await db.Donations.create(req.body)
        res.send('Auka sekmingai priimta')
    } catch (error) {
        console.log(error)
        res.status(500).send('Įvyko serverio klaida')
    }
})

export default Router