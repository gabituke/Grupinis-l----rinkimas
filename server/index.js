import express from 'express'
import cors from 'cors'
import session from 'express-session'

import { Donations, Stories } from './controller/index.js'


const app = express()

//CORS blokavimo nuėmimas 
app.use(cors())

//Duomenų priėmimui JSON formatu
app.use(express.json())

//Failu perdavimui is statinės direktorijos
app.use('/uploads', express.static('uploads'))

//Duomenų priėmimui POST metodu
app.use(express.urlencoded({extended: true}))

app.set('trust proxy', 1) 

app.use(session({
    secret: 'labai slapta fraze',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false,
        maxAge: 6000000
    }
}))


app.use('/api/stories/', Stories)
app.use('/api/donations/', Donations)


//Paleidžiame serverį
app.listen(3000)