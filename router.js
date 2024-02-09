var express= require('express')
var router= express.Router()
var controller= require('./controller')


router.post('/',controller.data )


module.exports= router