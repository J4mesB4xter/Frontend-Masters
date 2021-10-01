import express from 'express'
import bp from 'body-parser'
import { parsnip } from './parsnip.mjs'
import morgan from 'morgan'
//express is generally much quicker than http.
//you will most likely default to this on average.
//almost all node server work is done in express at this point.

//body-parser is als par for the course at this point if you're going to use express.
//body parser parses the body into chunks; can disassemble json
const app = express()

// app.use(bp.urlencoded({extended:true}))
// app.use(bp.json())
app.use(morgan('dev'))
app.use(parsnip)

const db = []

app.post('/todo', async (req, res) => {
    const newToDo = {
        id: Date.now(),
        text: req.json()?.text
        // text: req.body.text
    }
    if (!newToDo.text) {
        return res.json({data : null, "errors" : {"INVALID INPUT ERROR": "user did not submit valid json body"}})
    }
    db.push(newToDo)
    res.json({data : newToDo, "errors" : {}})
})

app.get('/todo', (req, res) => {
    res.json(db)
})

app.get('/todo/:id', (req, res) => {
    const todo = db.find(t => {
        return t.id === +req.params.id
    })
    res.json({data: todo, "errors" : {}})
})

app.listen(8000, () => {
    console.log('Server on http://localhost:8000')
})