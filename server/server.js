const express = require('express')
const db = require('./db')
const app = express()
app.use(express.json())
app.get('/api/leaderboard', (req, res) => {
  db.getLeaderboard().then(data => res.json(data))
})
app.post('/api/score', (req, res) => {
  db.saveScore(req.body).then(data => res.json(data))
})
app.listen(3001)
