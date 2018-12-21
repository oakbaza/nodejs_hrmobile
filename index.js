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

app.get('/get_all_currency',(req,res) => {
    mymodel.M_hr_currency.get_all_by_active(function (call){
        res.send(JSON.stringify(call))
    })
})

app.get('/get_all_revenue',(req,res) => {
    mymodel.M_hr_revenue.get_all_by_active(function (call){
        res.send(JSON.stringify(call))
    })
})

app.get('/get_all_expenditure',(req,res) => {
    mymodel.M_hr_expenditure.get_all_by_active(function (call){
        res.send(JSON.stringify(call))
    })
})

app.post('/insert_revenue', function (req, res) {
    var json = req.body
    console.log(json)
    mymodel.M_hr_revenue.insert(json)
})

app.post('/update_revenue',function(req,res){
    var json = req.body
    mymodel.M_hr_revenue.update(json)
})

app.post('/delete_revenue',function(req,res){
    var json = req.body
    mymodel.M_hr_revenue.delete_by_re_id(json)
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