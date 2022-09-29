import express from 'express'
import db from '../database/connect.js'
import upload from '../middleware/multer.js'

const Router = express.Router()



Router.get('/', async (req, res) => {
	try {
		const stories = await db.Stories.findAll();
		res.json(stories);
	} catch (error) {
		console.log(error);
		res.status(500).send('Įvyko klaida');
	}
});

Router.get('/:id', async (req, res) => {
    try {
        const post = await db.Stories.findByPk(req.params.id, {
            include: {
                model: db.Comments,
                include: db.Users
            }
        })
        res.json(post)
    } catch {
        res.status(500).send('Įvyko serverio klaida')
    }
})

Router.post('/new', upload.single('photo'), async (req, res) => {
    try {
        if(req.file)
            req.body.photo = '/uploads/' + req.file.filename

        await db.Stories.create(req.body)
        console.log(req.body)
        res.send('Darbuotojas sėkmingai išsaugotas')
    } catch(error) {
        console.log(error)
        res.status(500).send('Įvyko klaida išssaugant duomenis')
    }
})


export default Router