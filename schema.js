var mongoose= require('mongoose')

var StudSchema= new mongoose.Schema({
    name:String,
    age:Number,
    rollNo:Number
})

module.exports= new mongoose.model('Student',StudSchema)