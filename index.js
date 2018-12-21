
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 80
const mymodel = require('./models/my_model')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    var rs_ps = mymodel.M_hr_person.get_all_person()
    res.send(rs_ps)
    console.log(rs_ps)
})

app.get('/user', (req, res) => {
    res.send('Got a GET user')
})

app.get('/user/:userID/book/:bookID', (req, res) => {
    console.log("UserID = "+req.param("userID"))
    res.send(req.params)
})

app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.post('/user', function (req, res) {
    res.send(req.body.name)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})
