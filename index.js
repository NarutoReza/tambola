const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const app = express()
const PORT = 8080

const Routes = require('./Routes/Routes')
app.use(bodyparser.json())
app.use('/tickets', Routes)

// const { generateTicket } = require('./Tambola')

// const tickets = generateTicket()
// console.log(tickets)

// app.get('/test', (req, res) => {
//     res.send(tickets)
// })

mongoose.connect("mongodb://localhost:27017/tambola").then(() => {
    console.log("Database is connected and live...")
});

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
})