const express = require('express');
const app = express();
const port = 3500;

const cors = require('cors');
const db = require('./models')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.get('/getscores', async (req, res) => {
    let records = await db.highscores.findAll();
    res.json(records)
})

app.post('/savescore', async (req, res) => {
    let {username, souls, win} = req.body;
    await db.highscores.create({
        username,
        win,
        souls,
    })
    let records = await db.highscores.findAll();
    res.json(records)
})

app.get('/', async(req, res) =>{
    res.send('hello')
})

app.listen(process.env.PORT||port, () => {
    console.log(`listening on port ${port}`)
})
