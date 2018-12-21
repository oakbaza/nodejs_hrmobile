
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 80
const mymodel = require('./models/my_model')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/get_all_person', (req, res) => {
    mymodel.M_hr_person.get_all_person(function(call){
        res.send(call)
    })
})

app.get('/user', (req, res) => {
    res.send('Got a GET user')
})

app.post('/', function (req, res) {
    res.send('Got a POST request')
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
