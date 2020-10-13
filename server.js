const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const todotasks = []
const donetasks = []

app.get('/tasks', (req, res) => {
    res.send(todotasks)
})

app.get('/donetasks', (req, res) => {
    res.send(donetasks)
})

app.post('/tasks', (req, res) => {
    const task = req.body
    todotasks.push(task)
    res.send(todotasks)
})

app.post('/donetasks', (req, res) => {
    const index = todotasks.findIndex(task => task.id == req.body.id)
    todotasks.splice(index, 1)
    const task = req.body
    donetasks.push(task)
    res.send(donetasks)
})

app.post('/delete', (req, res) => {
    const index = donetasks.findIndex(task => task.id == req.body.id)
    donetasks.splice(index, 1)
    res.send(donetasks)
})

app.listen(3000, () => {
    console.log("Server running on ", 3000)
})
