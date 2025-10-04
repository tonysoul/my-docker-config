const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('hello 777')
})

app.get('/todos', (req, res) => {
  res.json([
    {
      name: 'tony 666',
      done: false,
    },
    {
      name: 'jack',
      done: true,
    },
  ])
})

app.listen(3000, () => {
  console.log(`server is running at port 3000`)
})
