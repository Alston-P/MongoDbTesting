var express= require('express')
var router= require('./router')
var app= express()
var bodyparser= require('body-parser')



app.use(bodyparser.json())
app.use('/',router)
app.listen(6060)