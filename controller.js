var schema= require('./schema')
function data(req,res)
{
   var details= new schema({
    name:req.body.name,
    age:req.body.age,
    rollNo:req.body.rollNo
   })
 details.save()
}



module.exports= {data}