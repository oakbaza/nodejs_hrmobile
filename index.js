const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 112
const mymodel = require('./models/my_model')


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/get_all_person', (req, res) => {
    mymodel.M_hr_person.get_all_person(function (call) {
        res.send(JSON.stringify(call))
    })
})

app.get('/', (req, res) => {
    res.send('Got a GET user')
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